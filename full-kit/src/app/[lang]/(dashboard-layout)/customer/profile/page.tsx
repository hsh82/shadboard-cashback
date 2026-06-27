import type { Metadata } from "next"

import { ProfileSettings } from "./_components/profile-settings"

export const metadata: Metadata = {
  title: "Profile",
}

export default function CustomerProfilePage() {
  return (
    <section className="container grid gap-4 p-4">
      <ProfileSettings />
    </section>
  )
}
