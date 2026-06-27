import type { Metadata } from "next"

import { OffersList } from "./_components/offers-list"

export const metadata: Metadata = {
  title: "Offers",
}

export default function CustomerOffersPage() {
  return (
    <section className="container grid gap-4 p-4">
      <OffersList />
    </section>
  )
}
