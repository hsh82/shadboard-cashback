"use client"

import { CheckCircle2, XCircle } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const comparisonRows = [
  { feature: "استفاده بین فروشگاه‌ها", traditional: false, cashback: true },
  { feature: "کش‌بک شبکه‌ای", traditional: false, cashback: true },
  { feature: "باشگاه مشتریان", traditional: false, cashback: true },
  { feature: "پنل مدیریتی", traditional: false, cashback: true },
  { feature: "گزارش‌های تحلیلی", traditional: false, cashback: true },
  { feature: "مدیریت کمپین", traditional: false, cashback: true },
  { feature: "تسویه خودکار", traditional: false, cashback: true },
  { feature: "چندزبانه و RTL", traditional: false, cashback: true },
]

export function WhyUs() {
  return (
    <section className="container space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">چرا پلتفرم ما؟</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          مقایسه سیستم سنتی وفاداری با پلتفرم کش‌بک چندفروشگاهی.
        </p>
      </div>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="grid grid-cols-3">
            <div className="p-4 font-semibold border-b">ویژگی</div>
            <div className="p-4 font-semibold border-b border-l text-center text-muted-foreground">
              سیستم سنتی
            </div>
            <div className="p-4 font-semibold border-b border-l text-center text-primary">
              پلتفرم کش‌بک
            </div>
            {comparisonRows.map((row, idx) => (
              <>
                <div
                  key={`label-${idx}`}
                  className="p-4 border-b border-l text-sm"
                >
                  {row.feature}
                </div>
                <div
                  key={`old-${idx}`}
                  className="p-4 border-b border-l flex justify-center"
                >
                  <XCircle className="h-5 w-5 text-red-500" />
                </div>
                <div
                  key={`new-${idx}`}
                  className="p-4 border-b border-l flex justify-center"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </div>
              </>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
