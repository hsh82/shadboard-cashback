"use client"

import type { DictionaryType } from "@/lib/get-dictionary"
import type { ReactNode } from "react"

import { DictionaryProvider } from "@/contexts/dictionary-context"
import { LandingFooter } from "./landing-footer"
import { LandingHeader } from "./landing-header"

export function Layout({
  children,
  dictionary,
}: {
  children: ReactNode
  dictionary: DictionaryType
}) {
  return (
    <DictionaryProvider dictionary={dictionary}>
      <div className="grow">
        <LandingHeader dictionary={dictionary} />
        <main>{children}</main>
        <LandingFooter />
      </div>
    </DictionaryProvider>
  )
}
