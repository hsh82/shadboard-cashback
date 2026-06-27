"use client"

import { cashbackEntries, orders } from "@/data/mock"

import { DashboardCard } from "@/components/dashboards/dashboard-card"

export function ShopReportsOverview() {
  const myShopId = "1"
  const shopOrders = orders.filter(
    (o: { shopId: string; customerId: string; totalAmount: number }) =>
      o.shopId === myShopId
  )
  const shopCashback = cashbackEntries.filter(
    (c: { shopId: string; cashbackAmount: number }) => c.shopId === myShopId
  )
  const totalSales = shopOrders.reduce(
    (sum: number, o: { totalAmount: number }) => sum + o.totalAmount,
    0
  )
  const totalCashback = shopCashback.reduce(
    (sum: number, c: { cashbackAmount: number }) => sum + c.cashbackAmount,
    0
  )
  const uniqueCustomers = new Set(
    shopOrders.map((o: { customerId: string }) => o.customerId)
  ).size

  return (
    <>
      <div className="col-span-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard title="My Sales" period="All time">
          <p className="text-2xl font-semibold">
            ${totalSales.toLocaleString()}
          </p>
        </DashboardCard>
        <DashboardCard title="Total Orders" period="All time">
          <p className="text-2xl font-semibold">{shopOrders.length}</p>
        </DashboardCard>
        <DashboardCard title="Unique Customers" period="All time">
          <p className="text-2xl font-semibold">{uniqueCustomers}</p>
        </DashboardCard>
        <DashboardCard title="Cashback Owed" period="Pending">
          <p className="text-2xl font-semibold">${totalCashback.toFixed(2)}</p>
        </DashboardCard>
      </div>
    </>
  )
}
