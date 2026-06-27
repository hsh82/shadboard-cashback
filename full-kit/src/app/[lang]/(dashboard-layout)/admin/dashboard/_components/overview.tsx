"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  TrendingDown,
  TrendingUp,
  XCircle,
} from "lucide-react"

import {
  cashbackEntries,
  customers,
  orders,
  shops,
  transactions,
} from "@/data/mock"
import {
  alerts,
  cashbackFunnel,
  customerInsights,
  dailyMetrics,
} from "@/data/mock/admin-metrics"

import { formatRial } from "@/lib/utils"

import { useSettings } from "@/hooks/use-settings"
import { useDictionary } from "@/contexts/dictionary-context"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Progress } from "@/components/ui/progress"
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
import {
  Timeline,
  TimelineContent,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/components/ui/timeline"
import { DashboardCard } from "@/components/dashboards/dashboard-card"
import { PercentageChangeBadge } from "@/components/dashboards/percentage-change-badge"

const chartConfig = {
  revenue: { label: "Revenue", color: "hsl(var(--chart-1))" },
  orders: { label: "Orders", color: "hsl(var(--chart-2))" },
  cashback: { label: "Cashback", color: "hsl(var(--chart-3))" },
  commission: { label: "Commission", color: "hsl(var(--chart-4))" },
}

const funnelStages = [
  { key: "generated", label: "Generated", color: "bg-blue-500" },
  { key: "pending", label: "Pending Review", color: "bg-yellow-500" },
  { key: "approved", label: "Approved", color: "bg-green-500" },
  { key: "redeemed", label: "Redeemed", color: "bg-purple-500" },
  { key: "expired", label: "Expired", color: "bg-red-500" },
] as const

export function AdminDashboardOverview() {
  const dictionary = useDictionary()
  const d = dictionary.admin
  const { settings } = useSettings()
  const isRTL = settings.locale === "ar" || settings.locale === "fa"

  const totalShops = shops.filter((s) => s.status === "active").length
  const activeCustomers = customers.filter((c) => c.status === "active").length
  const ordersToday =
    orders.filter((o) => o.createdAt === "2024-06-27").length || 28
  const revenueToday = dailyMetrics[dailyMetrics.length - 1]?.revenue || 6200
  const cashbackIssued = dailyMetrics.reduce(
    (sum, m) => sum + m.cashbackIssued,
    0
  )
  const pendingCashback = cashbackEntries
    .filter((c) => c.status === "pending")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)
  const platformCommission = transactions
    .filter((t) => t.type === "commission")
    .reduce((sum, t) => sum + t.amount, 0)
  const activeCampaigns = 3

  const totalFunnel = cashbackFunnel.generated

  const topShops = [...shops]
    .sort((a, b) => b.totalSales - a.totalSales)
    .slice(0, 5)

  const recentActivity = [
    {
      id: "1",
      title: "New shop approved",
      description: "Fresh Grocery passed verification",
      time: "2h ago",
      status: "done" as const,
    },
    {
      id: "2",
      title: "Cashback redeemed",
      description: "{formatRial(45.2)} redeemed by Niloofar T.",
      time: "4h ago",
      status: "done" as const,
    },
    {
      id: "3",
      title: "Campaign created",
      description: "Summer Sale launched by Fashion Hub",
      time: "6h ago",
      status: "default" as const,
    },
    {
      id: "4",
      title: "Large refund",
      description: "Order ORD-005 refunded ({formatRial(50)})",
      time: "8h ago",
      status: "done" as const,
    },
    {
      id: "5",
      title: "Cashback rule updated",
      description: "Default rate changed to 5%",
      time: "1d ago",
      status: "done" as const,
    },
  ]

  return (
    <>
      <div className="col-span-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard title={d.totalShops} period="">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-semibold">{totalShops}</p>
            <PercentageChangeBadge value={8.2} />
          </div>
          <p className="text-xs text-muted-foreground">+2 this month</p>
        </DashboardCard>
        <DashboardCard title={d.activeCustomers} period="">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-semibold">{activeCustomers}</p>
            <PercentageChangeBadge value={15.3} />
          </div>
          <p className="text-xs text-muted-foreground">+12% vs last month</p>
        </DashboardCard>
        <DashboardCard title={d.ordersToday} period="">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-semibold">{ordersToday}</p>
            <PercentageChangeBadge value={5.1} />
          </div>
          <p className="text-xs text-muted-foreground">+4% vs yesterday</p>
        </DashboardCard>
        <DashboardCard title={d.revenueToday} period="">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-semibold">{formatRial(revenueToday)}</p>
            <PercentageChangeBadge value={12.5} />
          </div>
          <p className="text-xs text-muted-foreground">
            +{formatRial(890)} vs yesterday
          </p>
        </DashboardCard>
      </div>

      <div className="col-span-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard title={d.cashbackIssued} period="">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-semibold">
              {formatRial(cashbackIssued)}
            </p>
            <PercentageChangeBadge value={10.2} />
          </div>
          <p className="text-xs text-muted-foreground">+3.2% this week</p>
        </DashboardCard>
        <DashboardCard title={d.pendingCashback} period="">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-semibold">
              {formatRial(pendingCashback)}
            </p>
            <PercentageChangeBadge value={-2.4} />
          </div>
          <p className="text-xs text-muted-foreground">-5 pending reviews</p>
        </DashboardCard>
        <DashboardCard title={d.platformCommission} period="">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-semibold">
              {formatRial(platformCommission)}
            </p>
            <PercentageChangeBadge value={18.7} />
          </div>
          <p className="text-xs text-muted-foreground">
            +{formatRial(120)} vs last week
          </p>
        </DashboardCard>
        <DashboardCard title={d.activeCampaigns} period="">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-semibold">{activeCampaigns}</p>
            <PercentageChangeBadge value={0} />
          </div>
          <p className="text-xs text-muted-foreground">1 ending soon</p>
        </DashboardCard>
      </div>

      <Card className="col-span-full lg:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{d.revenueTrend}</CardTitle>
          <Select defaultValue="7d">
            <SelectTrigger className="w-24">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">{d.days7}</SelectItem>
              <SelectItem value="30d">{d.days30}</SelectItem>
              <SelectItem value="90d">{d.days90}</SelectItem>
              <SelectItem value="1y">{d.year1}</SelectItem>
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
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{d.cashbackFunnel}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {funnelStages.map((stage) => {
              const value = cashbackFunnel[stage.key]
              const pct = totalFunnel > 0 ? (value / totalFunnel) * 100 : 0
              return (
                <div key={stage.key}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{stage.label}</span>
                    <span className="text-sm text-muted-foreground">
                      {formatRial(value)} ({pct.toFixed(1)}%)
                    </span>
                  </div>
                  <Progress value={pct} className="h-2" />
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>{d.topPerformingShops}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Shop</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Customers</TableHead>
                <TableHead>Cashback</TableHead>
                <TableHead>Growth</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topShops.map((shop) => (
                <TableRow key={shop.id}>
                  <TableCell className="font-medium">{shop.name}</TableCell>
                  <TableCell>{shop.category}</TableCell>
                  <TableCell>{formatRial(shop.totalSales)}</TableCell>
                  <TableCell>{shop.totalOrders}</TableCell>
                  <TableCell>{shop.customersCount}</TableCell>
                  <TableCell>
                    {formatRial(shop.totalSales * (shop.cashbackRate / 100))}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">
                        +{Math.floor(Math.random() * 20 + 5)}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        shop.status === "active"
                          ? "default"
                          : shop.status === "pending"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {shop.status}
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
          <CardTitle>{d.customerInsights}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {d.newCustomers}
                    </p>
                    <p className="text-2xl font-bold">{customerInsights.new}</p>
                  </div>
                  <Badge variant="outline" className="text-blue-600">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +12%
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {d.returning}
                    </p>
                    <p className="text-2xl font-bold">
                      {customerInsights.returning}
                    </p>
                  </div>
                  <Badge variant="outline" className="text-green-600">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +8%
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{d.vip}</p>
                    <p className="text-2xl font-bold">{customerInsights.vip}</p>
                  </div>
                  <Badge variant="outline" className="text-purple-600">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +3
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{d.dormant}</p>
                    <p className="text-2xl font-bold">
                      {customerInsights.dormant}
                    </p>
                  </div>
                  <Badge variant="outline" className="text-red-600">
                    <TrendingDown className="mr-1 h-3 w-3" />
                    -2
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-full lg:col-span-2">
        <CardHeader>
          <CardTitle>Recent Platform Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <Timeline>
            {recentActivity.map((activity, idx) => (
              <TimelineItem key={activity.id} status={activity.status}>
                <TimelineLine done={idx < recentActivity.length - 1} />
                <TimelineContent>
                  <TimelineHeading>{activity.title}</TimelineHeading>
                  <TimelineHeading
                    variant="secondary"
                    side={isRTL ? "start" : "end"}
                  >
                    {activity.description} • {activity.time}
                  </TimelineHeading>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </CardContent>
      </Card>

      <Card className="col-span-full lg:col-span-2">
        <CardHeader>
          <CardTitle>{d.operationalAlerts}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alerts.length === 0 ? (
              <p className="text-sm text-muted-foreground">{d.noAlerts}</p>
            ) : (
              alerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-start gap-3 rounded-lg border p-3"
                >
                  {alert.type === "warning" && (
                    <AlertTriangle className="mt-0.5 h-5 w-5 text-yellow-500" />
                  )}
                  {alert.type === "error" && (
                    <XCircle className="mt-0.5 h-5 w-5 text-red-500" />
                  )}
                  {alert.type === "info" && (
                    <Info className="mt-0.5 h-5 w-5 text-blue-500" />
                  )}
                  {alert.type === "success" && (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-500" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm font-medium">{alert.message}</p>
                    <p className="text-xs text-muted-foreground">
                      {alert.time}
                    </p>
                  </div>
                  <Badge
                    variant={
                      alert.type === "warning"
                        ? "secondary"
                        : alert.type === "error"
                          ? "destructive"
                          : alert.type === "success"
                            ? "default"
                            : "outline"
                    }
                  >
                    {alert.type}
                  </Badge>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </>
  )
}
