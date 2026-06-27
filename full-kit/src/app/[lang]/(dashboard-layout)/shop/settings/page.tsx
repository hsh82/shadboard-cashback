import type { Metadata } from "next"

import { ShopSettingsForm } from "./_components/settings-form"

export const metadata: Metadata = {
  title: "Settings",
}

export default function ShopSettingsPage() {
  return (
    <section className="container grid gap-4 p-4 md:grid-cols-2">
      <ShopSettingsForm />
    </section>
  )
}
