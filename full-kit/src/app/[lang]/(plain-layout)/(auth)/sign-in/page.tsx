import type { LocaleType } from "@/types"
import type { Metadata } from "next"

import { getDictionary } from "@/lib/get-dictionary"

import { RoleSelect } from "@/components/auth/role-select"

export const metadata: Metadata = {
  title: "Sign In",
}

export default async function SignInPage(props: {
  params: Promise<{ lang: LocaleType }>
}) {
  const params = await props.params
  const dictionary = await getDictionary(params.lang)

  return <RoleSelect dictionary={dictionary} mode="sign-in" />
}
