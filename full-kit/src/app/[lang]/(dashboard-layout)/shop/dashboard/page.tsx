import type { Metadata } from "next"

import { ShopDashboardOverview } from "./_components/overview"

export const metadata: Metadata = {
  title: "Shop Dashboard",
}

export default function ShopDashboardPage() {
  return (
    <section className="container grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
      <ShopDashboardOverview />
    </section>
  )
}
