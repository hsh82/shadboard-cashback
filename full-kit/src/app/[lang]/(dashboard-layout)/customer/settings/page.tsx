import type { Metadata } from "next"

import { CustomerSettingsForm } from "./_components/settings-form"

export const metadata: Metadata = {
  title: "Settings",
}

export default function CustomerSettingsPage() {
  return (
    <section className="container grid gap-4 p-4 md:grid-cols-1">
      <CustomerSettingsForm />
    </section>
  )
}
