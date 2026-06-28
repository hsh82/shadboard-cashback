"use client"

import Link from "next/link"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Package, PlusCircle, ShoppingCart, UserPlus } from "lucide-react"

import { cashbackEntries, customers, orders, products } from "@/data/mock"
import { dailyMetrics } from "@/data/mock/admin-metrics"

import { formatRial } from "@/lib/utils"

import { useSettings } from "@/hooks/use-settings"
import { useDictionary } from "@/contexts/dictionary-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DashboardCard } from "@/components/dashboards/dashboard-card"
import { PercentageChangeBadge } from "@/components/dashboards/percentage-change-badge"

const chartConfig = {
  sales: { label: "Sales", color: "hsl(var(--chart-1))" },
  orders: { label: "Orders", color: "hsl(var(--chart-2))" },
  cashback: { label: "Cashback", color: "hsl(var(--chart-3))" },
}

export function ShopDashboardOverview() {
  const dictionary = useDictionary()
  const d = dictionary.shop
  const { settings } = useSettings()
  const isRTL = settings.locale === "ar" || settings.locale === "fa"

  const shopId = "1"
  const shopOrders = orders.filter((o) => o.shopId === shopId)
  const shopCashback = cashbackEntries.filter((c) => c.shopId === shopId)
  const shopProducts = products.filter((p) => p.shopId === shopId)
  const shopCustomers = customers.filter((c) => c.status === "active").length

  const todaySales = shopOrders.reduce((sum, o) => sum + o.totalAmount, 0)
  const monthlyRevenue = dailyMetrics.reduce((sum, m) => sum + m.revenue, 0)
  const ordersToday = shopOrders.length
  const totalCustomers = shopCustomers
  const pendingCashback = shopCashback
    .filter((c) => c.status === "pending")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)
  const cashbackPaid = shopCashback
    .filter((c) => c.status === "paid" || c.status === "approved")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)
  const activeProducts = shopProducts.length
  const activeOffers = 2

  const avgOrderValue = ordersToday > 0 ? todaySales / ordersToday : 0
  const avgCashbackPercent =
    todaySales > 0 ? (pendingCashback / todaySales) * 100 : 0

  const recentOrders = shopOrders.slice(0, 5)
  const lowStockProducts = shopProducts.filter((p) => p.stock < 10)
  const topSellingProducts = shopProducts.slice(0, 5)
  const recentCustomers = customers.slice(0, 5)
  const recentCashback = shopCashback
    .slice(0)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 5)

  return (
    <>
      <div className="col-span-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard title={d.todaySales} period="">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-semibold">{formatRial(todaySales)}</p>
            <PercentageChangeBadge value={12.5} />
          </div>
          <p className="text-xs text-muted-foreground">
            +{formatRial(890)} vs yesterday
          </p>
        </DashboardCard>
        <DashboardCard title={d.monthlyRevenue} period="">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-semibold">
              {formatRial(monthlyRevenue)}
            </p>
            <PercentageChangeBadge value={8.3} />
          </div>
          <p className="text-xs text-muted-foreground">+5% vs last month</p>
        </DashboardCard>
        <DashboardCard title={d.ordersToday} period="">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-semibold">{ordersToday}</p>
            <PercentageChangeBadge value={5.1} />
          </div>
          <p className="text-xs text-muted-foreground">+4% vs yesterday</p>
        </DashboardCard>
        <DashboardCard title={d.customers} period="">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-semibold">{totalCustomers}</p>
            <PercentageChangeBadge value={15.3} />
          </div>
          <p className="text-xs text-muted-foreground">+12% vs last month</p>
        </DashboardCard>
      </div>

      <div className="col-span-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard title={d.pendingCashback} period="">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-semibold">
              {formatRial(pendingCashback)}
            </p>
            <PercentageChangeBadge value={-2.4} />
          </div>
          <p className="text-xs text-muted-foreground">-5 pending reviews</p>
        </DashboardCard>
        <DashboardCard title={d.cashbackPaid} period="">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-semibold">{formatRial(cashbackPaid)}</p>
            <PercentageChangeBadge value={10.2} />
          </div>
          <p className="text-xs text-muted-foreground">+3.2% this week</p>
        </DashboardCard>
        <DashboardCard title={d.productsCount} period="">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-semibold">{activeProducts}</p>
            <PercentageChangeBadge value={0} />
          </div>
          <p className="text-xs text-muted-foreground">
            {lowStockProducts.length} low stock
          </p>
        </DashboardCard>
        <DashboardCard title={d.activeOffers} period="">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-semibold">{activeOffers}</p>
            <PercentageChangeBadge value={0} />
          </div>
          <p className="text-xs text-muted-foreground">1 ending soon</p>
        </DashboardCard>
      </div>

      <Card className="col-span-full lg:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{d.salesTrend}</CardTitle>
          <Select defaultValue="7d">
            <SelectTrigger className="w-24">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">7D</SelectItem>
              <SelectItem value="30d">30D</SelectItem>
              <SelectItem value="90d">90D</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-64 w-full">
            <AreaChart data={dailyMetrics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              {isRTL ? <YAxis tick={{ textAnchor: "start" }} /> : <YAxis />}
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--chart-1))"
                fill="hsl(var(--chart-1))"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="col-span-full lg:col-span-2">
        <CardHeader>
          <CardTitle>{d.todayPerformance}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{d.avgOrderValue}</p>
              <p className="text-2xl font-bold">{formatRial(avgOrderValue)}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">
                {d.avgCashbackPercent}
              </p>
              <p className="text-2xl font-bold">
                {avgCashbackPercent.toFixed(1)}%
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{d.ordersToday}</p>
              <p className="text-2xl font-bold">{ordersToday}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">
                {d.returningCustomers}
              </p>
              <p className="text-2xl font-bold">
                {Math.floor(shopCustomers * 0.6)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-full">
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
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>
                    {order.items.map((i) => `${i.name} x${i.qty}`).join(", ")}
                  </TableCell>
                  <TableCell>{formatRial(order.totalAmount)}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        order.status === "approved"
                          ? "default"
                          : order.status === "pending"
                            ? "secondary"
                            : order.status === "processing"
                              ? "outline"
                              : "destructive"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="col-span-full lg:col-span-2">
        <CardHeader>
          <CardTitle>{d.lowStockProducts}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lowStockProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Badge variant="destructive">Low Stock</Badge>
                  </TableCell>
                </TableRow>
              ))}
              {lowStockProducts.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="text-center text-muted-foreground"
                  >
                    All products are well stocked
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>{d.quickActions}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto py-4" asChild>
              <Link href="/shop/products">
                <PlusCircle className="mr-2 h-4 w-4" />
                {d.quickAddProduct}
              </Link>
            </Button>
            <Button variant="outline" className="h-auto py-4" asChild>
              <Link href="/shop/orders">
                <ShoppingCart className="mr-2 h-4 w-4" />
                {d.quickCreateOrder}
              </Link>
            </Button>
            <Button variant="outline" className="h-auto py-4" asChild>
              <Link href="/shop/customers">
                <UserPlus className="mr-2 h-4 w-4" />
                {d.quickAddCustomer}
              </Link>
            </Button>
            <Button variant="outline" className="h-auto py-4" asChild>
              <Link href="/shop/offers">
                <Package className="mr-2 h-4 w-4" />
                {d.quickCreateOffer}
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-full lg:col-span-2">
        <CardHeader>
          <CardTitle>{d.recentCustomers}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{formatRial(customer.totalSpent)}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        customer.status === "vip"
                          ? "default"
                          : customer.status === "active"
                            ? "secondary"
                            : customer.status === "inactive"
                              ? "outline"
                              : "destructive"
                      }
                    >
                      {customer.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="col-span-full lg:col-span-2">
        <CardHeader>
          <CardTitle>{d.recentCashbackActivity}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Order</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentCashback.map((entry) => (
                <TableRow key={entry.id}>
                  <TableCell className="font-medium">
                    {entry.customerName}
                  </TableCell>
                  <TableCell>{entry.orderId}</TableCell>
                  <TableCell>{formatRial(entry.cashbackAmount)}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        entry.status === "paid"
                          ? "default"
                          : entry.status === "approved"
                            ? "secondary"
                            : entry.status === "pending"
                              ? "outline"
                              : "destructive"
                      }
                    >
                      {entry.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="col-span-full lg:col-span-2">
        <CardHeader>
          <CardTitle>{d.topSellingProducts}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topSellingProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{formatRial(product.price)}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  )
}
