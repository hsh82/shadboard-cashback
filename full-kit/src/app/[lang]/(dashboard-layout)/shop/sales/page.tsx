import type { Metadata } from "next"

import { SalesChart } from "./_components/sales-chart"

export const metadata: Metadata = {
  title: "Sales",
}

export default function ShopSalesPage() {
  return (
    <section className="container grid gap-4 p-4">
      <SalesChart />
    </section>
  )
}
