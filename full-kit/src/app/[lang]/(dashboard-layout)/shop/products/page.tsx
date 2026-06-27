import type { Metadata } from "next"

import { ProductsGrid } from "./_components/products-grid"

export const metadata: Metadata = {
  title: "Products",
}

export default function ShopProductsPage() {
  return (
    <section className="container grid gap-4 p-4">
      <ProductsGrid />
    </section>
  )
}
