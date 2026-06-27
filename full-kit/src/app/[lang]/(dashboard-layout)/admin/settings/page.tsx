import type { Metadata } from "next"

import { SettingsForm } from "./_components/settings-form"

export const metadata: Metadata = {
  title: "Settings",
}

export default function AdminSettingsPage() {
  return (
    <section className="container grid gap-4 p-4 md:grid-cols-1">
      <SettingsForm />
    </section>
  )
}
