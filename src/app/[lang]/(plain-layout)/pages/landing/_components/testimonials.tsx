"use client"

import { useRef } from "react"
import { Star } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    name: "علی محمدی",
    role: "صاحب کافه",
    avatar: "/images/avatars/male-01.svg",
    rating: 4.9,
    quote:
      "بعد از اجرای کمپین کش‌بک، مشتریان قدیمی بیشتر برای خرید دوباره مراجعه می‌کنند. مهم‌تر از همه این است که دیگر لازم نیست همیشه تخفیف مستقیم ارائه کنیم.",
  },
  {
    name: "سارا احمدی",
    role: "مدیر فروشگاه پوشاک",
    avatar: "/images/avatars/female-01.svg",
    rating: 4.8,
    quote:
      "مدیریت محصولات و کمپین‌های کش‌بک بسیار ساده است. مشتریان از اینکه اعتبار خریدشان را در فروشگاه‌های دیگر هم می‌توانند استفاده کنند استقبال کردند.",
  },
  {
    name: "رضا کریمی",
    role: "صاحب رستوران",
    avatar: "/images/avatars/male-02.svg",
    rating: 4.7,
    quote:
      "ثبت سفارش برای صندوق‌دار سریع انجام می‌شود و گزارش‌های فروش به ما کمک می‌کند تصمیم‌های بهتری برای کمپین‌های بعدی بگیریم.",
  },
  {
    name: "مریم نجفی",
    role: "مشتری",
    avatar: "/images/avatars/female-02.svg",
    rating: 5.0,
    quote:
      "حس خوبی دارد که بخشی از مبلغ خرید به کیف پولم برمی‌گردد و می‌توانم آن را در فروشگاه‌های مختلف خرج کنم، نه فقط همان فروشگاه.",
  },
  {
    name: "حسین رضایی",
    role: "صاحب کتاب‌فروشی",
    avatar: "/images/avatars/male-03.svg",
    rating: 4.6,
    quote:
      "راه‌اندازی سیستم زمان زیادی از ما نگرفت و حالا بهتر می‌توانیم مشتریان وفادار را شناسایی و برایشان پیشنهادهای مناسب ارسال کنیم.",
  },
  {
    name: "الهام کریمی",
    role: "مدیر فروشگاه آرایشی",
    avatar: "/images/avatars/female-03.svg",
    rating: 4.8,
    quote:
      "رابط کاربری ساده و روان است. کارکنان فروشگاه بدون آموزش خاصی با سیستم کار کردند و مشتریان هم از دریافت کش‌بک رضایت داشتند.",
  },
]

export function Testimonials() {
  const carouselRef = useRef(null)

  return (
    <section className="container space-y-10">
      <div className="space-y-3 text-center">
        <div className="inline-flex rounded-full border bg-primary/5 px-4 py-1 text-sm font-medium text-primary">
          نظرات کاربران
        </div>

        <h2 className="text-3xl font-bold md:text-4xl">
          تجربه فروشگاه‌ها و مشتریان
        </h2>

        <p className="mx-auto max-w-2xl text-muted-foreground">
          تجربه افرادی که از بازار وفاداری برای افزایش فروش و دریافت کش‌بک
          استفاده کرده‌اند.
        </p>
      </div>

      <Carousel
        ref={carouselRef}
        className="mx-auto w-full"
        opts={{
          align: "start",
          loop: true,
          direction: "rtl",
        }}
      >
        <CarouselContent className="-mr-4">
          {testimonials.map((item, index) => (
            <CarouselItem
              key={index}
              className="pr-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="flex h-full flex-col justify-between p-5">
                  {/* Rating */}
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex text-amber-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.round(item.rating)
                              ? "fill-current"
                              : "fill-current opacity-20"
                          }`}
                        />
                      ))}
                    </div>

                    <span className="text-sm font-semibold text-foreground">
                      {item.rating.toFixed(1)}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="min-h-[90px] text-sm leading-7 text-muted-foreground">
                    «{item.quote}»
                  </p>

                  {/* User */}
                  <div className="mt-5 flex items-center gap-3 border-t pt-4">
                    <Avatar className="h-11 w-11">
                      <AvatarImage src={item.avatar} />
                      <AvatarFallback>{item.name[0]}</AvatarFallback>
                    </Avatar>

                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="right-0 left-auto" />
        <CarouselNext className="left-0 right-auto" />
      </Carousel>
    </section>
  )
}
