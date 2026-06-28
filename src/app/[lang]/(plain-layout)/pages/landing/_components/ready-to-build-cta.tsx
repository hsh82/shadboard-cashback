"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

import { buttonVariants } from "@/components/ui/button"

export function ReadyToBuildCTA() {
  return (
    <section className="container">
      <div className="rounded-xl bg-primary/5 p-8 md:p-12 text-center space-y-4">
        <h2 className="text-3xl font-bold">آماده شروع هستید؟</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          همین حالا ثبت‌نام کنید و از مزایای پلتفرم کش‌بک چندفروشگاهی بهره‌مند
          شوید.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/sign-in" className={cn(buttonVariants({ size: "lg" }))}>
            ثبت‌نام <ArrowRight className="mr-2 h-4 w-4" />
          </Link>
          <Link
            href="#features"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            مشاهده نسخه نمایشی
          </Link>
        </div>
      </div>
    </section>
  )
}
