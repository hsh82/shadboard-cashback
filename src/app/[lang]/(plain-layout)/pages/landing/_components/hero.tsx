"use client"

import Link from "next/link"
import { ArrowRight, HeadphonesIcon, Store, User, Wallet } from "lucide-react"

import { cn } from "@/lib/utils"

import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function Hero() {
  return (
    <section className="container space-y-12">
      <div className="grid place-items-center text-center gap-y-8">
        <div className="inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-sm font-medium">
          <Wallet className="ml-2 h-4 w-4" />
          پلتفرم پیشرفته کش‌بک چندفروشگاهی
        </div>
        <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
          با هر خرید،
          <br />
          <span className="text-primary">بیشتر سود</span> کنید!
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          بازار وفاداری؛ کش‌بک هوشمند برای مشتریان و فروشگاه‌ها خرید آنلاین.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/sign-in" className={cn(buttonVariants({ size: "lg" }))}>
            ثبت‌نام فروشگاه
          </Link>
          <Link
            href="/sign-in"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
          >
            ثبت‌نام مشتری <ArrowRight className="mr-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-6 text-center hover:shadow-lg transition-shadow">
          <Store className="mx-auto h-10 w-10 text-primary mb-3" />
          <h3 className="text-lg font-semibold">برای فروشندگان</h3>
          <p className="text-sm text-muted-foreground">
            افزایش مشتریان وفادار و افزایش خرید
          </p>
        </Card>
        <Card className="p-6 text-center hover:shadow-lg transition-shadow">
          <User className="mx-auto h-10 w-10 text-primary mb-3" />
          <h3 className="text-lg font-semibold">برای مشتریان</h3>
          <p className="text-sm text-muted-foreground">
            از فروشگاه همشگیت خرید کن، اما با هزینه کمتر و خرید بیشتر !
          </p>
        </Card>
        <Card className="p-6 text-center hover:shadow-lg transition-shadow">
          <HeadphonesIcon className="mx-auto h-10 w-10 text-primary mb-3" />
          <h3 className="text-lg font-semibold">برای مدیران</h3>
          <p className="text-sm text-muted-foreground">
            پنل مدیریتی جامع، گزارشات لحظه‌ای و نظارت بر کل پلتفرم.
          </p>
        </Card>
      </div>
    </section>
  )
}
