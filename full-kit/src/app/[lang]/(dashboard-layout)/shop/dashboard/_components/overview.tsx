"use client"

import { Banknote, ShoppingCart, Users, Wallet } from "lucide-react"

import { cashbackEntries, orders } from "@/data/mock"

import { useDictionary } from "@/contexts/dictionary-context"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DashboardOverviewCardV2 } from "@/components/dashboards/dashboard-card"

export function ShopOverview() {
  const dictionary = useDictionary()
  const d = dictionary.shop
  const totalSales = orders.reduce((sum, o) => sum + o.totalAmount, 0)
  const cashbackOwed = cashbackEntries
    .filter((c) => c.status !== "rejected" && c.status !== "paid")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)
  const uniqueCustomers = new Set(orders.map((o) => o.customerId)).size

  const recentOrders = orders.slice(0, 5)

  return (
    <>
      <div className="col-span-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardOverviewCardV2
          data={{ value: totalSales, percentageChange: 10.2 }}
          title={d.totalSales}
          period="This month"
          icon={Banknote}
          iconColor="hsl(var(--primary))"
          formatStyle="currency"
        />
        <DashboardOverviewCardV2
          data={{ value: uniqueCustomers, percentageChange: 5.4 }}
          title={d.customersCount}
          period="Total"
          icon={Users}
          iconColor="hsl(142 76% 36%)"
        />
        <DashboardOverviewCardV2
          data={{ value: orders.length, percentageChange: 12.1 }}
          title={d.totalOrders}
          period="All time"
          icon={ShoppingCart}
          iconColor="hsl(221 83% 53%)"
        />
        <DashboardOverviewCardV2
          data={{ value: cashbackOwed, percentageChange: 3.2 }}
          title={d.cashbackOwed}
          period="Pending payout"
          icon={Wallet}
          iconColor="hsl(280 65% 60%)"
          formatStyle="currency"
        />
      </div>

      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
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
    </>
  )
}
