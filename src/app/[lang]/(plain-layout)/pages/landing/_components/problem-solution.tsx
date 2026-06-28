"use client"

import {
  ArrowLeft,
  Gift,
  Handshake,
  Repeat,
  ShieldCheck,
  ShoppingBag,
  Store,
  TrendingDown,
  Users,
  Wallet,
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    icon: ShoppingBag,
    title: "خرید",
    subtitle: "از فروشگاه عضو",
  },
  {
    icon: Gift,
    title: "کش‌بک",
    subtitle: "دریافت پاداش",
  },
  {
    icon: Wallet,
    title: "کیف پول",
    subtitle: "ذخیره اعتبار",
  },
  {
    icon: Repeat,
    title: "خرید مجدد",
    subtitle: "در کل شبکه",
  },
]

const customerProblems = [
  {
    icon: TrendingDown,
    title: "بازگشت پایین مشتریان",
    description:
      "بسیاری از مشتریان پس از اولین خرید، دیگر به فروشگاه بازنمی‌گردند.",
  },
  {
    icon: Store,
    title: "وابستگی به واسطه‌ها",
    description:
      "وابستگی به پلتفرم‌های واسط، هزینه‌ها را افزایش داده و ارتباط مستقیم با مشتری را محدود می‌کند.",
  },
  {
    icon: ShieldCheck,
    title: "تخفیف‌های کم‌اثر",
    description:
      "تخفیف‌های مداوم سود فروشگاه را کاهش می‌دهند، اما وفاداری ایجاد نمی‌کنند.",
  },
  {
    icon: Handshake,
    title: "هزینه بالای جذب مشتری",
    description:
      "جذب هر مشتری جدید، نیازمند صرف هزینه برای تبلیغات و بازاریابی است.",
  },
]

const shopSolutions = [
  {
    icon: Users,
    title: "افزایش وفاداری",
    description:
      "کش‌بک، مشتری را به خریدهای بعدی و بازگشت دوباره به فروشگاه تشویق می‌کند.",
  },
  {
    icon: Store,
    title: "شبکه فروشگاه‌ها",
    description: "اعتبار کش‌بک در تمامی فروشگاه‌های عضو شبکه قابل استفاده است.",
  },
  {
    icon: TrendingDown,
    title: "کاهش هزینه بازاریابی",
    description:
      "به‌جای تخفیف‌های سنگین، مشتریان با دریافت پاداش به خرید دوباره ترغیب می‌شوند.",
  },
  {
    icon: ShieldCheck,
    title: "گزارش و تحلیل",
    description:
      "گزارش‌های دقیق از فروش، کش‌بک و رفتار مشتریان برای تصمیم‌گیری بهتر.",
  },
]

export function ProblemSolution() {
  return (
    <section className="container space-y-16">
      {/* Problem Section */}
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-sm font-medium text-red-600 dark:text-red-400">
            چالش‌های کسب‌وکار
          </div>

          <h2 className="text-3xl font-bold md:text-4xl">
            حفظ مشتری، مهم‌ترین چالش فروشگاه‌ها
          </h2>

          <p className="text-lg text-muted-foreground">
            در بازار رقابتی امروز، جذب مشتری تنها آغاز مسیر است. موفقیت زمانی
            رقم می‌خورد که مشتری دوباره برای خرید بازگردد و به مشتری وفادار
            تبدیل شود.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {customerProblems.map((problem, idx) => (
            <Card key={idx} className="p-6 transition-shadow hover:shadow-lg">
              <CardHeader className="space-y-3 p-0">
                <problem.icon className="h-8 w-8 text-red-500" />
                <CardTitle className="text-lg">{problem.title}</CardTitle>
              </CardHeader>

              <CardContent className="mt-2 p-0">
                <p className="text-sm text-muted-foreground">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Solution Section */}
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 grid gap-4 md:grid-cols-2 lg:order-1">
          {shopSolutions.map((solution, idx) => (
            <Card
              key={idx}
              className="border-primary/20 p-6 transition-shadow hover:shadow-lg"
            >
              <CardHeader className="space-y-3 p-0">
                <solution.icon className="h-8 w-8 text-green-500" />
                <CardTitle className="text-lg">{solution.title}</CardTitle>
              </CardHeader>

              <CardContent className="mt-2 p-0">
                <p className="text-sm text-muted-foreground">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="order-1 space-y-6 lg:order-2">
          <div className="inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-sm font-medium text-green-600 dark:text-green-400">
            راه‌حل ما
          </div>

          <h2 className="text-3xl font-bold md:text-4xl">
            شبکه‌ای برای بازگشت دوباره مشتریان
          </h2>

          <p className="text-lg text-muted-foreground">
            بازار وفاداری با ایجاد یک شبکه مشترک میان فروشگاه‌ها، امکان دریافت و
            استفاده از کش‌بک را در کل شبکه فراهم می‌کند. این چرخه باعث افزایش
            رضایت مشتری، خریدهای تکراری و رشد فروش کسب‌وکارها می‌شود.
          </p>

          <div className="mt-8">
            <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4">
              {steps.map((step, index) => (
                <div key={step.title} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/20 bg-primary/10 transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                      <step.icon className="h-7 w-7" />
                    </div>

                    <span className="mt-3 text-sm font-semibold">
                      {step.title}
                    </span>

                    <span className="text-xs text-muted-foreground">
                      {step.subtitle}
                    </span>
                  </div>

                  {index !== steps.length - 1 && (
                    <ArrowLeft className="mx-3 h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
