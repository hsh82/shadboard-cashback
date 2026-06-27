import type { Metadata } from "next"

import { ReportsOverview } from "./_components/reports-overview"

export const metadata: Metadata = {
  title: "Reports",
}

export default function AdminReportsPage() {
  return (
    <section className="container grid gap-4 p-4 md:grid-cols-2">
      <ReportsOverview />
    </section>
  )
}
