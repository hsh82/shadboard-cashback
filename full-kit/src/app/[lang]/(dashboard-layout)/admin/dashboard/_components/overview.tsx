"use client"

import { Banknote, Users, Wallet } from "lucide-react"

import {
  cashbackEntries,
  customers,
  orders,
  shops,
  transactions,
} from "@/data/mock"

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

export function AdminOverview() {
  const dictionary = useDictionary()
  const d = dictionary.admin
  const totalRevenue = transactions
    .filter((t) => t.type === "sale")
    .reduce((sum, t) => sum + t.amount, 0)
  const totalCashbackPaid = cashbackEntries
    .filter((c) => c.status === "paid")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)
  const activeVendors = shops.filter((s) => s.status === "active").length
  const activeCustomers = customers.filter((c) => c.status === "active").length

  const recentOrders = orders.slice(0, 5)
  const recentActivity = transactions.slice(0, 6)

  return (
    <>
      <div className="col-span-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardOverviewCardV2
          data={{ value: totalRevenue, percentageChange: 12.5 }}
          title={d.platformRevenue}
          period="This month"
          icon={Banknote}
          iconColor="hsl(var(--primary))"
          formatStyle="currency"
        />
        <DashboardOverviewCardV2
          data={{ value: activeVendors, percentageChange: 8.2 }}
          title={d.activeVendors}
          period="Total"
          icon={Users}
          iconColor="hsl(142 76% 36%)"
        />
        <DashboardOverviewCardV2
          data={{ value: activeCustomers, percentageChange: 15.3 }}
          title={d.totalCustomers}
          period="Total"
          icon={Users}
          iconColor="hsl(221 83% 53%)"
        />
        <DashboardOverviewCardV2
          data={{ value: totalCashbackPaid, percentageChange: 5.1 }}
          title={d.totalCashbackPaid}
          period="Total"
          icon={Wallet}
          iconColor="hsl(280 65% 60%)"
          formatStyle="currency"
        />
      </div>

      <Card className="col-span-full lg:col-span-2">
        <CardHeader>
          <CardTitle>{d.recentActivity}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customerName}</TableCell>
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
          <CardTitle>{d.recentActivity}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivity.map((txn) => (
                <TableRow key={txn.id}>
                  <TableCell className="font-medium">{txn.id}</TableCell>
                  <TableCell className="capitalize">
                    {txn.type.replace(/_/g, " ")}
                  </TableCell>
                  <TableCell>${txn.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    {new Date(txn.createdAt).toLocaleDateString()}
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
