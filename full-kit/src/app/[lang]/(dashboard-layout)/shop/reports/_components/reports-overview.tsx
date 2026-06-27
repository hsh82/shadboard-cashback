"use client"

import {
  cashbackEntries,
  customers,
  offers,
  orders,
  products,
} from "@/data/mock"

import { formatRial } from "@/lib/utils"

import { useDictionary } from "@/contexts/dictionary-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ShopReportsOverview() {
  const dictionary = useDictionary()
  const d = dictionary.shop
  const cd = dictionary.cashback
  const myShopId = "1"

  const shopOrders = orders.filter((o) => o.shopId === myShopId)
  const shopCashback = cashbackEntries.filter((c) => c.shopId === myShopId)
  const shopOffers = offers.filter((o) => o.shopId === myShopId)
  const shopProducts = products.filter((p) => p.shopId === myShopId)

  const totalSales = shopOrders.reduce((sum, o) => sum + o.totalAmount, 0)
  const totalOrders = shopOrders.length
  const totalCashback = shopCashback.reduce(
    (sum, c) => sum + c.cashbackAmount,
    0
  )
  const avgOrderValue = totalOrders > 0 ? totalSales / totalOrders : 0

  const issued = shopCashback
    .filter((c) => c.status === "approved" || c.status === "paid")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)
  const redeemed = shopCashback
    .filter((c) => c.status === "paid")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)
  const pending = shopCashback
    .filter((c) => c.status === "pending")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)
  const avgCashback = totalSales > 0 ? (totalCashback / totalSales) * 100 : 0

  const topProducts = shopProducts.slice(0, 5)

  const topCustomers = [...customers]
    .sort((a, b) => b.totalSpent - a.totalSpent)
    .slice(0, 5)

  const bestSellers = shopProducts.slice(0, 5)

  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="flex-wrap">
        <TabsTrigger value="overview">{d.overview}</TabsTrigger>
        <TabsTrigger value="sales">{d.sales}</TabsTrigger>
        <TabsTrigger value="products">{d.products}</TabsTrigger>
        <TabsTrigger value="customers">{d.customers}</TabsTrigger>
        <TabsTrigger value="cashback">{d.cashback}</TabsTrigger>
        <TabsTrigger value="offers">{d.offers}</TabsTrigger>
        <TabsTrigger value="exports">{d.exports}</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="mt-4 space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>{d.totalSales}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{formatRial(totalSales)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{d.totalOrders}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{totalOrders}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{d.cashbackOwed}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{formatRial(totalCashback)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{d.avgOrderValue}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{formatRial(avgOrderValue)}</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{d.recentOrders}</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>{d.total}</TableHead>
                  <TableHead>{d.status}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {shopOrders.slice(0, 10).map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customerName}</TableCell>
                    <TableCell>
                      {order.items.map((i) => `${i.name} x${i.qty}`).join(", ")}
                    </TableCell>
                    <TableCell>{formatRial(order.totalAmount)}</TableCell>
                    <TableCell>
                      <span className="capitalize">{order.status}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="sales" className="mt-4 space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>{d.totalSales}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{formatRial(totalSales)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{d.totalOrders}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{totalOrders}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{d.avgOrderValue}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{formatRial(avgOrderValue)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{cd.cashbackRate}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{avgCashback.toFixed(1)}%</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{d.bestSellingProducts}</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>{d.category}</TableHead>
                  <TableHead>{d.price}</TableHead>
                  <TableHead>{d.stock}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bestSellers.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{formatRial(product.price)}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="products" className="mt-4 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>{d.bestSellingProducts}</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>{d.category}</TableHead>
                  <TableHead>{d.price}</TableHead>
                  <TableHead>{d.stock}</TableHead>
                  <TableHead>{d.status}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{formatRial(product.price)}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <span className="capitalize">{product.status}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="customers" className="mt-4 space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>{d.newCustomers}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {customers.filter((c) => c.status === "active").length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{dictionary.admin.returning}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {Math.floor(customers.length * 0.6)}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{d.avgOrderValue}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{formatRial(avgOrderValue)}</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{dictionary.admin.topPerformingShops}</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Total Spent</TableHead>
                  <TableHead>Cashback</TableHead>
                  <TableHead>Orders</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">
                      {customer.name}
                    </TableCell>
                    <TableCell>{formatRial(customer.totalSpent)}</TableCell>
                    <TableCell>{formatRial(customer.totalCashback)}</TableCell>
                    <TableCell>{customer.ordersCount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="cashback" className="mt-4 space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>{dictionary.admin.issued}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{formatRial(issued)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                {dictionary.admin.totalRedeemed || "Redeemed"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{formatRial(redeemed)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{cd.pending}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{formatRial(pending)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Avg Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{avgCashback.toFixed(1)}%</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Cashback Entries</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Order</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>{cd.cashbackAmount}</TableHead>
                  <TableHead>{d.status}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {shopCashback.map((cb) => (
                  <TableRow key={cb.id}>
                    <TableCell>{cb.id}</TableCell>
                    <TableCell>{cb.orderId}</TableCell>
                    <TableCell>{cb.customerName}</TableCell>
                    <TableCell>{formatRial(cb.cashbackAmount)}</TableCell>
                    <TableCell>
                      <span className="capitalize">{cb.status}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="offers" className="mt-4 space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Offers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {shopOffers.filter((o) => o.status === "active").length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Discount</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {formatRial(shopOffers.reduce((sum, o) => sum + o.discount, 0))}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{d.revenueGenerated}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {formatRial(totalSales * 0.8)}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>ROI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">12.5%</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{d.campaignPerformance}</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Offer</TableHead>
                  <TableHead>Discount</TableHead>
                  <TableHead>Ends At</TableHead>
                  <TableHead>{d.status}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {shopOffers.map((offer) => (
                  <TableRow key={offer.id}>
                    <TableCell className="font-medium">{offer.title}</TableCell>
                    <TableCell>
                      {offer.type === "percentage"
                        ? `${offer.discount}%`
                        : formatRial(offer.discount)}
                    </TableCell>
                    <TableCell>{offer.endsAt}</TableCell>
                    <TableCell>
                      <span className="capitalize">{offer.status}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="exports" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>{d.exports}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button variant="outline">{d.exportCSV}</Button>
            <Button variant="outline">{d.exportExcel || "Export Excel"}</Button>
            <Button variant="outline">{d.exportPDF}</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
