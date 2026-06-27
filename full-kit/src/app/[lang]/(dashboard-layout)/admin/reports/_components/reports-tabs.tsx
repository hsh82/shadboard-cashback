"use client"

import {
  cashbackEntries,
  customers,
  orders,
  shops,
  transactions,
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

export function ReportsTabs() {
  const dictionary = useDictionary()
  const d = dictionary.admin

  const totalRevenue = transactions
    .filter((t) => t.type === "sale")
    .reduce((sum, t) => sum + t.amount, 0)
  const totalPaid = cashbackEntries
    .filter((c) => c.status === "approved" || c.status === "paid")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)
  const totalRedeemed = cashbackEntries
    .filter((c) => c.status === "paid")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)
  const avgOrderValue = totalRevenue / orders.length
  const commissionRevenue = transactions
    .filter((t) => t.type === "commission")
    .reduce((sum, t) => sum + t.amount, 0)
  const pendingCashback = cashbackEntries
    .filter((c) => c.status === "pending")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)

  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="flex-wrap">
        <TabsTrigger value="overview">{d.reportsOverview}</TabsTrigger>
        <TabsTrigger value="financial">{d.financial}</TabsTrigger>
        <TabsTrigger value="cashback">{d.cashback}</TabsTrigger>
        <TabsTrigger value="shops">{d.shops}</TabsTrigger>
        <TabsTrigger value="customers">{d.customers}</TabsTrigger>
        <TabsTrigger value="campaigns">{d.campaigns}</TabsTrigger>
        <TabsTrigger value="exports">{d.exports}</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="mt-4 space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>{d.grossRevenue}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{formatRial(totalRevenue)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{d.netProfit}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {formatRial(totalRevenue - totalPaid)}
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
          <Card>
            <CardHeader>
              <CardTitle>{d.roi}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {(commissionRevenue / 1000).toFixed(1)}%
              </p>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Platform Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Total Shops</TableCell>
                  <TableCell>
                    {shops.filter((s) => s.status === "active").length}
                  </TableCell>
                  <TableCell>+2 this month</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Active Customers</TableCell>
                  <TableCell>
                    {customers.filter((c) => c.status === "active").length}
                  </TableCell>
                  <TableCell>+15%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Total Orders</TableCell>
                  <TableCell>{orders.length}</TableCell>
                  <TableCell>+8%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cashback Paid</TableCell>
                  <TableCell>{formatRial(totalRedeemed)}</TableCell>
                  <TableCell>+5%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="financial" className="mt-4 space-y-4">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>{d.grossRevenue}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{formatRial(totalRevenue)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{d.netProfit}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {formatRial(totalRevenue - totalPaid)}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{d.platformCommission}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {formatRial(commissionRevenue)}
              </p>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((txn) => (
                  <TableRow key={txn.id}>
                    <TableCell>{txn.id}</TableCell>
                    <TableCell className="capitalize">{txn.type}</TableCell>
                    <TableCell>{formatRial(txn.amount)}</TableCell>
                    <TableCell>
                      {new Date(txn.createdAt).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="cashback" className="mt-4 space-y-4">
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>{d.issued}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{formatRial(totalPaid)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{d.totalRedeemed || "Redeemed"}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{formatRial(totalRedeemed)}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{d.pendingCashback}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {formatRial(pendingCashback)}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{d.expired}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {formatRial(
                  cashbackEntries
                    .filter((c) => c.status === "rejected")
                    .reduce((sum, c) => sum + c.cashbackAmount, 0)
                )}
              </p>
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
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cashbackEntries.map((cb) => (
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

      <TabsContent value="shops" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Shop Performance Ranking</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rank</TableHead>
                  <TableHead>Shop</TableHead>
                  <TableHead>Sales</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Customers</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[...shops]
                  .sort((a, b) => b.totalSales - a.totalSales)
                  .map((shop, idx) => (
                    <TableRow key={shop.id}>
                      <TableCell>#{idx + 1}</TableCell>
                      <TableCell className="font-medium">{shop.name}</TableCell>
                      <TableCell>{formatRial(shop.totalSales)}</TableCell>
                      <TableCell>{shop.totalOrders}</TableCell>
                      <TableCell>{shop.customersCount}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="customers" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Customer Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Total Spent</TableHead>
                  <TableHead>Cashback</TableHead>
                  <TableHead>Orders</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[...customers]
                  .sort((a, b) => b.totalSpent - a.totalSpent)
                  .map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>{customer.id}</TableCell>
                      <TableCell className="font-medium">
                        {customer.name}
                      </TableCell>
                      <TableCell>{formatRial(customer.totalSpent)}</TableCell>
                      <TableCell>
                        {formatRial(customer.totalCashback)}
                      </TableCell>
                      <TableCell>{customer.ordersCount}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="campaigns" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Active Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign</TableHead>
                  <TableHead>Shop</TableHead>
                  <TableHead>Discount</TableHead>
                  <TableHead>Ends At</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Summer Sale</TableCell>
                  <TableCell>Fashion Hub</TableCell>
                  <TableCell>20%</TableCell>
                  <TableCell>2024-07-31</TableCell>
                  <TableCell>
                    <span className="text-green-600">Active</span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Tech Week</TableCell>
                  <TableCell>Tech Store</TableCell>
                  <TableCell>15%</TableCell>
                  <TableCell>2024-06-30</TableCell>
                  <TableCell>
                    <span className="text-green-600">Active</span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Book Fest</TableCell>
                  <TableCell>Book Nook</TableCell>
                  <TableCell>{formatRial(10)}</TableCell>
                  <TableCell>2024-07-15</TableCell>
                  <TableCell>
                    <span className="text-blue-600">Upcoming</span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="exports" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Export Data</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button variant="outline">{d.exportCSV}</Button>
            <Button variant="outline">{d.exportPDF}</Button>
            <Button variant="outline">Export Shops</Button>
            <Button variant="outline">Export Customers</Button>
            <Button variant="outline">Export Orders</Button>
            <Button variant="outline">Export Cashback</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
