"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

import { buttonVariants } from "@/components/ui/button"

export function ReadyToBuildCTA() {
  return (
    <section className="container">
      <div className="rounded-xl bg-primary/5 p-8 md:p-12 text-center space-y-4">
        <h2 className="text-3xl font-bold">Ready to Explore?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Sign in as a shop or customer to see the dashboards, or browse as
          admin to monitor the platform.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/sign-in" className={cn(buttonVariants({ size: "lg" }))}>
            Start Demo <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
