import type { Metadata } from "next"

import { POSPage } from "./_components/pos-page"

export const metadata: Metadata = {
  title: "Orders / POS",
}

export default function ShopOrdersPage() {
  return (
    <section className="container grid gap-4 p-4">
      <POSPage />
    </section>
  )
}
