"use client"

import { useState } from "react"
import { MoreHorizontal, PlusCircle, Search } from "lucide-react"
import type { ProductType } from "@/data/mock"

import { products as initialProducts, shops } from "@/data/mock"
import { useDictionary } from "@/contexts/dictionary-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

const categories = ["Electronics", "Clothing", "Books", "Home & Garden", "Sports", "Food & Beverage", "Toys", "Pets", "Accessories"]

export function ProductsGrid() {
  const dictionary = useDictionary()
  const d = dictionary.shop
  const [productsList, setProductsList] = useState<ProductType[]>(initialProducts)
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<ProductType | null>(null)
  const [search, setSearch] = useState("")
  const [form, setForm] = useState<Partial<ProductType>>({
    name: "",
    sku: "",
    category: "",
    price: 0,
    stock: 0,
    status: "active",
    description: "",
  })

  const resetForm = () => {
    setForm({
      name: "",
      sku: "",
      category: "",
      price: 0,
      stock: 0,
      status: "active",
      description: "",
    })
    setEditing(null)
  }

  const handleOpenChange = (v: boolean) => {
    setOpen(v)
    if (!v) resetForm()
  }

  const handleChange = (field: keyof ProductType, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    if (!form.name) return
    if (editing) {
      setProductsList((prev) =>
        prev.map((p) =>
          p.id === editing.id ? { ...p, ...form, id: p.id } as ProductType : p
        )
      )
    } else {
      const newProduct: ProductType = {
        id: `${Date.now()}`,
        name: form.name,
        sku: form.sku || `SKU-${Date.now()}`,
        category: form.category || "General",
        price: form.price || 0,
        stock: form.stock || 0,
        status: (form.status as ProductType["status"]) || "active",
        createdAt: new Date().toISOString().split("T")[0],
        shopId: "1",
      }
      setProductsList((prev) => [...prev, newProduct])
    }
    handleOpenChange(false)
  }

  const handleEdit = (product: ProductType) => {
    setEditing(product)
    setForm({
      name: product.name,
      sku: product.sku,
      category: product.category,
      price: product.price,
      stock: product.stock,
      status: product.status,
      description: "",
    })
    setOpen(true)
  }

  const handleDelete = (id: string) => {
    setProductsList((prev) => prev.filter((p) => p.id !== id))
  }

  const filtered = productsList.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{d.products}</h2>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={d.search}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 w-64"
            />
          </div>
          <Select value="all" onValueChange={() => {}}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder={d.allCategories} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{d.allCategories}</SelectItem>
              {categories.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                {d.addProduct}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>{editing ? d.editProduct : d.addProduct}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">{d.productName}</Label>
                  <Input id="name" value={form.name} onChange={(e) => handleChange("name", e.target.value)} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">{d.description}</Label>
                  <Input id="description" value={form.description} onChange={(e) => handleChange("description", e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="price">{d.price} (($))</Label>
                    <Input id="price" type="number" value={form.price} onChange={(e) => handleChange("price", Number(e.target.value))} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="stock">{d.stock}</Label>
                    <Input id="stock" type="number" value={form.stock} onChange={(e) => handleChange("stock", Number(e.target.value))} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="category">{d.category}</Label>
                    <Select onValueChange={(v) => handleChange("category", v)}>
                      <SelectTrigger><SelectValue placeholder={d.filterByCategory} /></SelectTrigger>
                      <SelectContent>
                        {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="status">{d.status}</Label>
                    <Select onValueChange={(v) => handleChange("status", v)} defaultValue="active">
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">{d.active}</SelectItem>
                        <SelectItem value="draft">{d.draft}</SelectItem>
                        <SelectItem value="archived">{d.archived}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button onClick={handleSave} className="w-full">{d.save}</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-square bg-muted flex items-center justify-center">
                <div className="text-4xl font-bold text-muted-foreground/30">
                  {product.name.charAt(0)}
                </div>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold truncate">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleEdit(product)}>{d.edit}</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDelete(product.id)} className="text-destructive">{d.delete}</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">${product.price}</span>
                  <Badge variant={product.status === "active" ? "default" : "secondary"}>
                    {product.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{cd.cashbackRate}: {Math.floor(Math.random() * 10 + 2)}%</span>
                  <span>{d.stock}: {product.stock}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
