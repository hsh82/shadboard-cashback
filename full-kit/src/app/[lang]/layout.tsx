import { Cairo, Lato, Vazirmatn } from "next/font/google"
import { getServerSession } from "next-auth"

import { i18n } from "@/configs/i18n"
import { authOptions } from "@/configs/next-auth"
import { cn } from "@/lib/utils"

import "../globals.css"

import { Providers } from "@/providers"

import type { LocaleType } from "@/types"
import type { Metadata } from "next"
import type { ReactNode } from "react"

import { Toaster as Sonner } from "@/components/ui/sonner"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: {
    template: "%s | Shadboard",
    default: "Shadboard",
  },
  description: "",
  metadataBase: new URL(process.env.BASE_URL as string),
}

const latoFont = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato",
})
const cairoFont = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--font-cairo",
})
const vazirFont = Vazirmatn({
  subsets: ["arabic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal"],
  variable: "--font-vazir",
})

export default async function RootLayout(props: {
  children: ReactNode
  params: Promise<{ lang: LocaleType }>
}) {
  const params = await props.params

  const { children } = props

  const session = await getServerSession(authOptions)
  const direction = i18n.localeDirection[params.lang]

  return (
    <html lang={params.lang} dir={direction} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          "[&:lang(en)]:font-lato [&:lang(ar)]:font-cairo [&:lang(fa)]:font-vazir",
          "bg-background text-foreground antialiased overscroll-none",
          latoFont.variable,
          cairoFont.variable,
          vazirFont.variable
        )}
      >
        <Providers locale={params.lang} direction={direction} session={session}>
          {children}
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  )
}
