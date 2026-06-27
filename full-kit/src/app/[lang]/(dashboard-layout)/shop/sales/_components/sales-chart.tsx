"use client"

import { orders } from "@/data/mock"

import { DashboardCard } from "@/components/dashboards/dashboard-card"

export function SalesChart() {
  const dailySales = orders.reduce(
    (acc, order) => {
      const day = order.createdAt.split("-")[2]
      acc[day] = (acc[day] || 0) + order.totalAmount
      return acc
    },
    {} as Record<string, number>
  )

  const days = Object.keys(dailySales).sort()
  const maxSale = Math.max(...Object.values(dailySales))

  return (
    <DashboardCard title="Daily Sales" period="Last 6 days">
      <div className="flex h-full items-end gap-2 px-4 pb-4">
        {days.map((day) => {
          const dailySale = dailySales[day] ?? 0
          const height = (dailySale / Math.max(maxSale, 1)) * 100
          return (
            <div key={day} className="flex flex-1 flex-col items-center gap-1">
              <div
                className="w-full rounded-md bg-primary/80"
                style={{ height: `${height}%` }}
              />
              <span className="text-xs text-muted-foreground">Jun {day}</span>
            </div>
          )
        })}
      </div>
    </DashboardCard>
  )
}
