import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

import { Toaster as Sonner } from "@/components/ui/sonner"
import { Toaster } from "@/components/ui/toaster"

export default function DocumentationLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background text-foreground antialiased overscroll-none font-sans"
        )}
      >
        {children}
        <Toaster />
        <Sonner />
      </body>
    </html>
  )
}
