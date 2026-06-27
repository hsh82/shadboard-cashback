import type { Metadata } from "next"

import { POS } from "./_components/pos"

export const metadata: Metadata = {
  title: "Orders",
}

export default function ShopOrdersPage() {
  return (
    <section className="container grid gap-4 p-4">
      <POS />
    </section>
  )
}
