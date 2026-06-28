"use client"

import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { value: 500, suffix: "+", label: "تعداد فروشگاه‌های عضو" },
  { value: 50000, suffix: "+", label: "مشتری فعال" },
  { value: 120000, suffix: "+", label: "سفارش پردازش شده" },
  { value: 2500, suffix: "M", label: "مبلغ کش‌بک پرداخت شده (ریال)" },
  { value: 98, suffix: "%", label: "درصد رضایت مشتریان" },
]

export function Numbers() {
  return (
    <section className="container">
      <div className="text-center space-y-2 mb-10">
        <h2 className="text-3xl font-bold">اعداد و ارقام</h2>
        <p className="text-muted-foreground">
          شواهد عددی از اعتماد کسب‌وکارها به پلتفرم ما.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-5">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className="text-center p-6 hover:shadow-lg transition-shadow"
          >
            <CardContent className="p-0 space-y-2">
              <span className="text-4xl font-black text-primary">
                {stat.value.toLocaleString()}
                {stat.suffix}
              </span>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
