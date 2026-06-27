import type { Metadata } from "next"

import { AdminOverview } from "./_components/overview"

export const metadata: Metadata = {
  title: "Admin Dashboard",
}

export default function AdminDashboardPage() {
  return (
    <section className="container grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
      <AdminOverview />
    </section>
  )
}
