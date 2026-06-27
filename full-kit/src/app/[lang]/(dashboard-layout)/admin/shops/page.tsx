import type { Metadata } from "next"

import { ShopsTable } from "./_components/shops-table"

export const metadata: Metadata = {
  title: "Shops",
}

export default function AdminShopsPage() {
  return (
    <section className="container grid gap-4 p-4">
      <ShopsTable />
    </section>
  )
}
