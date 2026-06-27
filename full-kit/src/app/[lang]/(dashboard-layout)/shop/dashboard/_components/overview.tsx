"use client"

import { useDictionary } from "@/contexts/dictionary-context"
import { dailyMetrics } from "@/data/mock/admin-metrics"
import { orders, cashbackEntries, customers, products, shops } from "@/data/mock"
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts"
import { TrendingUp } from "lucide-react"

import { DashboardCard } from "@/components/dashboards/dashboard-card"
import { Badge } from "@/components/ui/badge"
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
import { PercentageChangeBadge } from "@/components/dashboards/percentage-change-badge"

const chartConfig = {
  sales: { label: "Sales", color: "hsl(var(--chart-1))" },
  orders: { label: "Orders", color: "hsl(var(--chart-2))" },
  cashback: { label: "Cashback", color: "hsl(var(--chart-3))" },
}

export function ShopDashboardOverview() {
  const dictionary = useDictionary()
  const d = dictionary.shop
  const cd = dictionary.cashback

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
  const topSellingProducts = [...shopProducts]
    .sort((a, b) => b.totalOrders - a.totalOrders)
    .slice(0, 5)

  return (
    <>
      <div className="col-span-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard title={d.todaySales} period="">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-semibold">${todaySales.toLocaleString()}</p>
            <PercentageChangeBadge value={12.5} />
          </div>
          <p className="text-xs text-muted-foreground">+$890 vs yesterday</p>
        </DashboardCard>
        <DashboardCard title={d.monthlyRevenue} period="">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-semibold">${monthlyRevenue.toLocaleString()}</p>
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
            <p className="text-2xl font-semibold">${pendingCashback.toFixed(2)}</p>
            <PercentageChangeBadge value={-2.4} />
          </div>
          <p className="text-xs text-muted-foreground">-5 pending reviews</p>
        </DashboardCard>
        <DashboardCard title={d.cashbackPaid} period="">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-semibold">${cashbackPaid.toFixed(2)}</p>
            <PercentageChangeBadge value={10.2} />
          </div>
          <p className="text-xs text-muted-foreground">+3.2% this week</p>
        </DashboardCard>
        <DashboardCard title={d.productsCount} period="">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-semibold">{activeProducts}</p>
            <PercentageChangeBadge value={0} />
          </div>
          <p className="text-xs text-muted-foreground">{lowStockProducts.length} low stock</p>
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
              <YAxis />
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
              <p className="text-2xl font-bold">${avgOrderValue.toFixed(2)}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{d.avgCashbackPercent}</p>
              <p className="text-2xl font-bold">{avgCashbackPercent.toFixed(1)}%</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{d.ordersToday}</p>
              <p className="text-2xl font-bold">{ordersToday}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{d.returningCustomers}</p>
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
                  <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
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
                  <TableCell colSpan={3} className="text-center text-muted-foreground">
                    All products are well stocked
                  </TableCell>
                </TableRow>
              )}
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
                  <TableCell>${product.price}</TableCell>
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
