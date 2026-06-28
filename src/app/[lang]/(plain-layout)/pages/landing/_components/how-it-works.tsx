"use client"

import {
  BadgeCheck,
  CreditCard,
  Receipt,
  Repeat2,
  UserPlus,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    icon: UserPlus,
    title: "عضویت",
    description: "مشتری یا فروشگاه در کمتر از یک دقیقه عضو شبکه می‌شود.",
  },
  {
    icon: Receipt,
    title: "خرید",
    description: "مشتری از یکی از فروشگاه‌های عضو خرید خود را انجام می‌دهد.",
  },
  {
    icon: CreditCard,
    title: "دریافت کش‌بک",
    description: "درصد مشخصی از مبلغ خرید، به کیف پول مشتری بازمی‌گردد.",
  },
  {
    icon: Repeat2,
    title: "استفاده از اعتبار",
    description: "اعتبار کش‌بک در تمام فروشگاه‌های عضو شبکه قابل استفاده است.",
  },
  {
    icon: BadgeCheck,
    title: "خرید دوباره",
    description: "مشتری دوباره خرید می‌کند و چرخه وفاداری ادامه پیدا می‌کند.",
  },
]

export function HowItWorks() {
  return (
    <section className="container space-y-14">
      <div className="mx-auto max-w-3xl text-center space-y-4">
        <span className="inline-flex rounded-full border bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          نحوه عملکرد بازار وفاداری
        </span>

        <h2 className="text-3xl font-bold md:text-5xl">
          فقط چند قدم تا ساخت یک مشتری وفادار
        </h2>

        <p className="text-lg text-muted-foreground">
          مشتری تنها یک خرید انجام نمی‌دهد؛ با هر خرید، اعتبار دریافت می‌کند،
          دوباره به شبکه بازمی‌گردد و این چرخه برای مشتری و فروشگاه ارزش بیشتری
          ایجاد می‌کند.
        </p>
      </div>

      <div className="relative">
        {/* Line between cards */}
        <div className="absolute left-0 right-0 top-10 hidden md:block"></div>

        <div className="grid gap-6 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <Card className="group h-full border transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl">
                <CardContent className="flex h-full flex-col items-center p-6 text-center">
                  <div className="relative z-10 mb-5 flex h-20 w-20 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <step.icon className="h-9 w-9" />
                  </div>

                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {index + 1}
                  </div>

                  <h3 className="mb-3 text-lg font-bold">{step.title}</h3>

                  <p className="text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="mx-auto max-w-5xl rounded-2xl border bg-muted/40 p-8">
        <div className="flex flex-wrap items-center justify-center gap-4 text-center md:gap-6">
          <span className="rounded-full bg-primary px-5 py-2 font-semibold text-primary-foreground">
            خرید
          </span>

          <ArrowLeft className="h-5 w-5 text-primary" />

          <span className="rounded-full bg-primary/10 px-5 py-2 font-semibold text-primary">
            دریافت کش‌بک
          </span>

          <ArrowLeft className="h-5 w-5 text-primary" />

          <span className="rounded-full bg-primary/10 px-5 py-2 font-semibold text-primary">
            ذخیره در کیف پول
          </span>

          <ArrowLeft className="h-5 w-5 text-primary" />

          <span className="rounded-full bg-primary/10 px-5 py-2 font-semibold text-primary">
            خرید از هر فروشگاه عضو
          </span>

          <ArrowLeft className="h-5 w-5 text-primary" />

          <span className="rounded-full bg-green-600 px-5 py-2 font-semibold text-white">
            مشتری وفادار ↺
          </span>
        </div>
      </div> */}
    </section>
  )
}
