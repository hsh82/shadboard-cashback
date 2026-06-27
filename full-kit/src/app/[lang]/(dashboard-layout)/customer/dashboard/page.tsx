import type { Metadata } from "next"

import { CustomerOverview } from "./_components/overview"

export const metadata: Metadata = {
  title: "My Dashboard",
}

export default function CustomerDashboardPage() {
  return (
    <section className="container grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
      <CustomerOverview />
    </section>
  )
}
