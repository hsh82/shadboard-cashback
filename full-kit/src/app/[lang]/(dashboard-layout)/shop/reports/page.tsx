import type { Metadata } from "next"

import { ShopReportsOverview } from "./_components/reports-overview"

export const metadata: Metadata = {
  title: "Reports",
}

export default function ShopReportsPage() {
  return (
    <section className="container grid gap-4 p-4 md:grid-cols-2">
      <ShopReportsOverview />
    </section>
  )
}
