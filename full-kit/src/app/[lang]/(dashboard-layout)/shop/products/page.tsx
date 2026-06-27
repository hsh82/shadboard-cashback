import type { Metadata } from "next"

import { ProductsTable } from "./_components/products-table"

export const metadata: Metadata = {
  title: "Products",
}

export default function ShopProductsPage() {
  return (
    <section className="container grid gap-4 p-4">
      <ProductsTable />
    </section>
  )
}
