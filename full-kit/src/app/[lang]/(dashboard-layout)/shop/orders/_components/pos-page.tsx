"use client"

import { useState, useMemo } from "react"
import { Plus, Minus, Search, UserPlus, Trash2, CheckCircle2, Receipt } from "lucide-react"
import { useDictionary } from "@/contexts/dictionary-context"
import { customers as initialCustomers, products, orders } from "@/data/mock"
import type { CustomerType, ProductType } from "@/data/mock"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/components/ui/sonner"

interface CartItem extends ProductType {
  quantity: number
}

export function POSPage() {
  const dictionary = useDictionary()
  const d = dictionary.shop
  const cd = dictionary.cashback
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerType | null>(null)
  const [showNewCustomer, setShowNewCustomer] = useState(false)
  const [newCustomerName, setNewCustomerName] = useState("")
  const [newCustomerPhone, setNewCustomerPhone] = useState("")
  const [cart, setCart] = useState<CartItem[]>([])
  const [discount, setDiscount] = useState(0)
  const [orderComplete, setOrderComplete] = useState(false)

  const shopProducts = products.filter((p) => p.status === "active" && p.shopId === "1")

  const filteredCustomers = useMemo(() => {
    if (!searchQuery) return []
    return initialCustomers.filter(
      (c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.phone.includes(searchQuery)
    )
  }, [searchQuery])

  const addToCart = (product: ProductType) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cashbackEarned = cart.reduce(
    (sum, item) => sum + item.price * item.quantity * 0.05,
    0
  )
  const discountAmount = subtotal * (discount / 100)
  const finalTotal = subtotal - discountAmount

  const handleCompleteOrder = () => {
    if (!selectedCustomer) {
      toast.error("Please select a customer first")
      return
    }
    if (cart.length === 0) {
      toast.error("Cart is empty")
      return
    }
    setOrderComplete(true)
    toast.success("Order completed successfully!", {
      description: `Receipt generated for ${selectedCustomer.name}`,
    })
    setTimeout(() => {
      setCart([])
      setDiscount(0)
      setOrderComplete(false)
      setSelectedCustomer(null)
      setSearchQuery("")
    }, 2000)
  }

  const handleCreateCustomer = () => {
    if (!newCustomerName || !newCustomerPhone) return
    const newCustomer: CustomerType = {
      id: `${Date.now()}`,
      name: newCustomerName,
      phone: newCustomerPhone,
      email: `${newCustomerName.toLowerCase().replace(" ", ".")}@example.demo`,
      address: "Iran",
      joinedAt: new Date().toISOString().split("T")[0],
      totalSpent: 0,
      totalCashback: 0,
      pendingCashback: 0,
      ordersCount: 0,
      status: "active",
      referralCode: `${newCustomerName.toUpperCase().slice(0, 5)}-NEW`,
    }
    initialCustomers.push(newCustomer)
    setSelectedCustomer(newCustomer)
    setShowNewCustomer(false)
    setNewCustomerName("")
    setNewCustomerPhone("")
    toast.success("Customer created successfully!")
  }

  return (
    <div className="grid h-[calc(100vh-8rem)] grid-cols-[320px_1fr_380px] gap-4">
      {/* LEFT PANEL - Customer Search */}
      <Card className="flex flex-col">
        <CardContent className="flex-1 space-y-4 p-4">
          <div>
            <Label className="text-sm font-medium">{d.searchCustomer}</Label>
            <div className="relative mt-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Phone or name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>

          {filteredCustomers.length > 0 && !selectedCustomer && (
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">Customers</Label>
              <div className="max-h-40 space-y-1 overflow-y-auto">
                {filteredCustomers.map((customer) => (
                  <div
                    key={customer.id}
                    className="flex cursor-pointer items-center justify-between rounded-lg border p-2 hover:bg-muted"
                    onClick={() => {
                      setSelectedCustomer(customer)
                      setSearchQuery("")
                    }}
                  >
                    <div>
                      <p className="text-sm font-medium">{customer.name}</p>
                      <p className="text-xs text-muted-foreground">{customer.phone}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {customer.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedCustomer ? (
            <div className="space-y-3 rounded-lg border p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{d.customerName}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedCustomer(null)}
                >
                  Change
                </Button>
              </div>
              <p className="text-lg font-semibold">{selectedCustomer.name}</p>
              <p className="text-sm text-muted-foreground">{selectedCustomer.phone}</p>
              <Separator />
              <div className="space-y-1">
                <span className="text-sm text-muted-foreground">{cd.wallet}</span>
                <p className="text-xl font-bold text-green-600">
                  ${selectedCustomer.totalCashback.toLocaleString()}
                </p>
                <p className="text-xs text-muted-foreground">
                  {cd.pending}: ${selectedCustomer.pendingCashback}
                </p>
              </div>
            </div>
          ) : !showNewCustomer ? (
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setShowNewCustomer(true)}
            >
              <UserPlus className="mr-2 h-4 w-4" />
              Create New Customer
            </Button>
          ) : (
            <div className="space-y-2 rounded-lg border p-3">
              <Label className="text-sm font-medium">New Customer</Label>
              <Input
                placeholder="Name"
                value={newCustomerName}
                onChange={(e) => setNewCustomerName(e.target.value)}
              />
              <Input
                placeholder="Phone"
                value={newCustomerPhone}
                onChange={(e) => setNewCustomerPhone(e.target.value)}
              />
              <div className="flex gap-2">
                <Button size="sm" onClick={handleCreateCustomer}>
                  Create
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setShowNewCustomer(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label className="text-sm font-medium">{d.quickActions}</Label>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" className="justify-start">
                <Plus className="mr-2 h-4 w-4" />
                {d.quickAddProduct}
              </Button>
              <Button variant="outline" size="sm" className="justify-start">
                <Plus className="mr-2 h-4 w-4" />
                {d.quickCreateOffer}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CENTER PANEL - Product Grid */}
      <Card className="flex flex-col">
        <CardContent className="flex-1 overflow-y-auto p-4">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">{d.productGrid}</h3>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {shopProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => addToCart(product)}
                className="flex aspect-square flex-col items-center justify-center rounded-xl border-2 bg-background p-3 transition-all hover:border-primary hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-xl font-bold text-muted-foreground">
                  {product.name.charAt(0)}
                </div>
                <span className="mt-2 text-center text-sm font-medium leading-tight">
                  {product.name}
                </span>
                <span className="mt-1 text-lg font-bold text-primary">
                  ${product.price}
                </span>
                <span className="text-xs text-muted-foreground">
                  Cashback: {Math.floor(Math.random() * 10 + 2)}%
                </span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* RIGHT PANEL - Shopping Cart */}
      <Card className="flex flex-col">
        <CardContent className="flex flex-1 flex-col p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">{d.shoppingCart}</h3>
            <Badge variant="secondary">{cart.length} {d.items}</Badge>
          </div>

          {cart.length === 0 ? (
            <div className="flex flex-1 items-center justify-center">
              <p className="text-sm text-muted-foreground">{d.cartEmpty}</p>
            </div>
          ) : (
            <>
              <div className="flex-1 space-y-2 overflow-y-auto">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-lg border p-2"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        ${item.price} each
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-6 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="ml-2 text-right">
                      <p className="text-sm font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{d.subtotal}</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{d.discount} (%)</span>
                  <span className="font-medium">-${discountAmount.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Label className="text-sm text-muted-foreground">Discount %</Label>
                  <Input
                    type="number"
                    value={discount}
                    onChange={(e) => setDiscount(Number(e.target.value))}
                    className="h-8 w-20"
                    min={0}
                    max={100}
                  />
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>{d.finalTotal}</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-green-600">
                  <span>{cd.earned}</span>
                  <span className="font-medium">+${cashbackEarned.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setCart([])
                    setDiscount(0)
                  }}
                >
                  {d.cancelOrder}
                </Button>
                <Button
                  onClick={handleCompleteOrder}
                  disabled={!selectedCustomer || cart.length === 0}
                >
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  {d.completeOrder}
                </Button>
              </div>
              <Button variant="ghost" className="mt-2 w-full">
                <Receipt className="mr-2 h-4 w-4" />
                {d.createDraft}
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
