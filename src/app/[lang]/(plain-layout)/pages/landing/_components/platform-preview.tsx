"use client"

import Image from "next/image"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const previews = [
  {
    title: "داشبورد مدیر",
    description: "نظارت بر کل پلتفرم، گزارشات فروش و cashback",
    image: "/images/dashbords/admin-dashbord.png",
  },
  {
    title: "داشبورد فروشگاه",
    description: "مدیریت محصولات، سفارشات و کمپین‌ها",
    image: "/images/dashbords/shop-dashbord.png",
  },
  {
    title: "داشبورد مشتری",
    description: "مشاهده کیف پول، پیشنهادها و تاریخچه خرید",
    image: "/images/dashbords/client-dashbord.png",
  },
  {
    title: "POS سفارش",
    description: "ثبت سریع سفارش توسط کارکنان فروشگاه",
    image: "/images/dashbords/pos-dashbord.png",
  },
  {
    title: "پشتیبانی و چت",
    description: "ارتباط مستقیم با پشتیبانی و فروشگاه‌ها",
    image: "/images/dashbords/chat-dashbord.png",
  },
]

export function PlatformPreview() {
  return (
    <section className="container space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">نمایی از پلتفرم</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          سه پنل اصلی برای مدیر، فروشنده و مشتری با رابط کاربری مدرن و یکپارچه.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {previews.slice(0, 3).map((preview, idx) => (
          <Card
            key={idx}
            className="overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="aspect-video bg-muted relative overflow-hidden">
              <Image
                src={preview.image}
                alt={preview.title}
                width={640}
                height={360}
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{preview.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {preview.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {previews.slice(3).map((preview, idx) => (
          <Card
            key={idx}
            className="overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="aspect-video bg-muted relative overflow-hidden">
              <Image
                src={preview.image}
                alt={preview.title}
                width={640}
                height={360}
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{preview.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {preview.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
