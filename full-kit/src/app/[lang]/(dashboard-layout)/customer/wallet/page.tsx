import type { Metadata } from "next"

import { WalletView } from "./_components/wallet-view"

export const metadata: Metadata = {
  title: "Wallet",
}

export default function CustomerWalletPage() {
  return (
    <section className="container grid gap-4 p-4">
      <WalletView />
    </section>
  )
}
