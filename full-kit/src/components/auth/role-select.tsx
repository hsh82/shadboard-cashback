"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { Store, User } from "lucide-react"

import type { DictionaryType } from "@/lib/get-dictionary"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function RoleSelect({
  dictionary,
  mode,
}: {
  dictionary: DictionaryType
  mode: "sign-in" | "register"
}) {
  const params = useParams()
  const locale = params.lang as string
  const d = dictionary.navigation
  const title = mode === "sign-in" ? d.signIn : d.register
  const subtitle =
    mode === "sign-in"
      ? "Choose your role to continue to the dashboard"
      : "Choose your role to create an account"

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3">
          <Button
            variant="outline"
            className="h-auto py-4 justify-start"
            asChild
          >
            <Link href={`/${locale}/admin/dashboard`}>
              <Store className="mr-3 h-5 w-5" />
              <div className="text-start">
                <div className="font-semibold">Shop / Vendor</div>
                <div className="text-xs text-muted-foreground">
                  Manage products, orders, and cashback
                </div>
              </div>
            </Link>
          </Button>
          <Button
            variant="outline"
            className="h-auto py-4 justify-start"
            asChild
          >
            <Link href={`/${locale}/customer/dashboard`}>
              <User className="mr-3 h-5 w-5" />
              <div className="text-start">
                <div className="font-semibold">Customer</div>
                <div className="text-xs text-muted-foreground">
                  View orders, wallet, and offers
                </div>
              </div>
            </Link>
          </Button>
          <Button
            variant="outline"
            className="h-auto py-4 justify-start"
            asChild
          >
            <Link href={`/${locale}/admin/dashboard`}>
              <Store className="mr-3 h-5 w-5" />
              <div className="text-start">
                <div className="font-semibold">Platform Admin</div>
                <div className="text-xs text-muted-foreground">
                  Monitor all vendors and transactions
                </div>
              </div>
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
