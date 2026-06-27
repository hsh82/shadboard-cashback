import type { Metadata } from "next"

import { CustomersTable } from "./_components/customers-table"

export const metadata: Metadata = {
  title: "Customers",
}

export default function AdminCustomersPage() {
  return (
    <section className="container grid gap-4 p-4">
      <CustomersTable />
    </section>
  )
}
