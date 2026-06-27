"use client"

import { Banknote, ShoppingBag, Wallet } from "lucide-react"

import { cashbackEntries, orders } from "@/data/mock"

import { formatRial } from "@/lib/utils"

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

export function CustomerOverview() {
  const dictionary = useDictionary()
  const d = dictionary.customer
  const cd = dictionary.cashback
  const customerId = "1"
  const myOrders = orders.filter((o) => o.customerId === customerId)
  const myCashback = cashbackEntries.filter((c) => c.customerId === customerId)
  const totalSpent = myOrders.reduce((sum, o) => sum + o.totalAmount, 0)
  const totalCashback = myCashback
    .filter((c) => c.status === "approved" || c.status === "paid")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)
  const pendingCashback = myCashback
    .filter((c) => c.status === "pending")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)

  return (
    <>
      <div className="col-span-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardOverviewCardV2
          data={{ value: totalSpent, percentageChange: 8.5 }}
          title={d.totalSpent}
          period="All time"
          icon={Banknote}
          iconColor="hsl(var(--primary))"
          formatStyle="currency"
        />
        <DashboardOverviewCardV2
          data={{ value: totalCashback, percentageChange: 10.2 }}
          title={d.totalCashback}
          period="Lifetime"
          icon={Wallet}
          iconColor="hsl(142 76% 36%)"
          formatStyle="currency"
        />
        <DashboardOverviewCardV2
          data={{ value: myOrders.length, percentageChange: 5.1 }}
          title={d.orders}
          period="All time"
          icon={ShoppingBag}
          iconColor="hsl(221 83% 53%)"
        />
        <DashboardOverviewCardV2
          data={{ value: pendingCashback, percentageChange: 0 }}
          title={cd.pending}
          period="Waiting approval"
          icon={Wallet}
          iconColor="hsl(280 65% 60%)"
          formatStyle="currency"
        />
      </div>

      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>{d.orderHistory}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Shop</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {myOrders.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center text-muted-foreground"
                  >
                    No orders yet
                  </TableCell>
                </TableRow>
              ) : (
                myOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.shopName}</TableCell>
                    <TableCell>{order.createdAt}</TableCell>
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
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  )
}
