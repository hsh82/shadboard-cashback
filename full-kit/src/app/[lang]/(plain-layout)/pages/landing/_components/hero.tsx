"use client"

import Link from "next/link"
import { ArrowRight, Store, User, Wallet } from "lucide-react"

import { cn } from "@/lib/utils"

import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function Hero() {
  return (
    <section className="container space-y-10">
      <div className="grid place-items-center text-center gap-y-6">
        <div className="inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-sm font-medium">
          <Wallet className="mr-2 h-4 w-4" />
          Cashback Multi-Vendor Platform Demo
        </div>
        <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
          Earn Cashback on Every Purchase
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          A complete demo platform connecting shops, customers, and admins.
          Vendors manage products and offers, customers earn cashback, and
          admins monitor everything.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/sign-in" className={cn(buttonVariants({ size: "lg" }))}>
            Get Started
          </Link>
          <Link
            href="#features"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
          >
            Explore Features <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-6 text-center">
          <Store className="mx-auto h-10 w-10 text-primary mb-3" />
          <h3 className="text-lg font-semibold">For Shops</h3>
          <p className="text-sm text-muted-foreground">
            Manage products, create offers, track sales, and pay cashback
            obligations.
          </p>
        </Card>
        <Card className="p-6 text-center">
          <User className="mx-auto h-10 w-10 text-primary mb-3" />
          <h3 className="text-lg font-semibold">For Customers</h3>
          <p className="text-sm text-muted-foreground">
            Browse offers, place orders, and earn cashback on every purchase.
          </p>
        </Card>
        <Card className="p-6 text-center">
          <Wallet className="mx-auto h-10 w-10 text-primary mb-3" />
          <h3 className="text-lg font-semibold">For Admins</h3>
          <p className="text-sm text-muted-foreground">
            Monitor platform KPIs, vendors, customers, and transactions.
          </p>
        </Card>
      </div>
    </section>
  )
}
