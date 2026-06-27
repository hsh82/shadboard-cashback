import type { Metadata } from "next"

import { OffersList } from "./_components/offers-list"
import { OffersTable } from "./_components/offers-table"

export const metadata: Metadata = {
  title: "Offers",
}

export default function ShopOffersPage() {
  return (
    <section className="container grid gap-4 p-4">
      <OffersList />
      <OffersTable />
    </section>
  )
}
