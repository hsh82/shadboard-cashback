import type { Metadata } from "next"

import { OrdersTable } from "./_components/orders-table"

export const metadata: Metadata = {
  title: "Orders",
}

export default function AdminOrdersPage() {
  return (
    <section className="container grid gap-4 p-4">
      <OrdersTable />
    </section>
  )
}
