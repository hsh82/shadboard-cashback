"use client"

import { cashbackEntries, orders, shops } from "@/data/mock"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DashboardCard } from "@/components/dashboards/dashboard-card"

export function ReportsOverview() {
  const totalSales = orders.reduce((sum, o) => sum + o.totalAmount, 0)
  const avgOrderValue = totalSales / orders.length
  const totalCashback = cashbackEntries.reduce(
    (sum, c) => sum + c.cashbackAmount,
    0
  )
  const verifiedShops = shops.filter((s) => s.verified).length

  const topShops = [...shops]
    .sort((a, b) => b.totalSales - a.totalSales)
    .slice(0, 5)

  return (
    <>
      <div className="col-span-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard title="Total Sales" period="All time">
          <p className="text-2xl font-semibold">
            ${totalSales.toLocaleString()}
          </p>
        </DashboardCard>
        <DashboardCard title="Avg Order Value" period="Per order">
          <p className="text-2xl font-semibold">${avgOrderValue.toFixed(2)}</p>
        </DashboardCard>
        <DashboardCard title="Total Cashback" period="Obligated">
          <p className="text-2xl font-semibold">${totalCashback.toFixed(2)}</p>
        </DashboardCard>
        <DashboardCard title="Verified Shops" period="Of total">
          <p className="text-2xl font-semibold">
            {verifiedShops} / {shops.length}
          </p>
        </DashboardCard>
      </div>

      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Top Performing Shops</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Shop Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Total Sales</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Customers</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topShops.map((shop) => (
                <TableRow key={shop.id}>
                  <TableCell className="font-medium">{shop.name}</TableCell>
                  <TableCell>{shop.category}</TableCell>
                  <TableCell>${shop.totalSales.toLocaleString()}</TableCell>
                  <TableCell>{shop.totalOrders}</TableCell>
                  <TableCell>{shop.customersCount}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        shop.status === "active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : shop.status === "pending"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      }`}
                    >
                      {shop.status}
                    </span>
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
