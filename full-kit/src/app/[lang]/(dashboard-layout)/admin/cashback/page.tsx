import type { Metadata } from "next"

import { CashbackTable } from "./_components/cashback-table"

export const metadata: Metadata = {
  title: "Cashback",
}

export default function AdminCashbackPage() {
  return (
    <section className="container grid gap-4 p-4">
      <CashbackTable />
    </section>
  )
}
