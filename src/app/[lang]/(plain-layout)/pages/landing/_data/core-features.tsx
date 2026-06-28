import Image from "next/image"
import {
  BarChart3,
  CreditCard,
  Globe,
  Languages,
  LayoutDashboard,
  ShieldCheck,
  Store,
  Wallet,
  Zap,
} from "lucide-react"

import type { CoreFeatureType } from "../types"

import { BentoHeader } from "@/components/ui/bento-grid"
import { Card } from "@/components/ui/card"
import { Iphone15Pro } from "@/components/ui/iphone-15-pro"

export const coreFeaturesData: CoreFeatureType[] = [
  {
    title: "مدیریت شبکه فروشگاه‌ها",
    description:
      "تمام فروشگاه‌ها، محصولات، دسته‌بندی‌ها و قوانین کش‌بک را از یک پنل یکپارچه مدیریت کنید.",
    icon: Store,
    className: "md:[&>div]:first:basis-1/3 md:col-span-2 md:flex-row",
    header: (
      <BentoHeader className="hidden md:block">
        <Card>
          <Image
            src="/images/dashbords/shop-dashbord.png"
            alt=""
            width={1080}
            height={1080}
            className="h-56 w-full overflow-hidden bg-white object-cover dark:invert"
          />
        </Card>
      </BentoHeader>
    ),
  },

  {
    title: "کیف پول هوشمند کش‌بک",
    description:
      "اعتبار مشتری به‌صورت خودکار در کیف پول ذخیره شده و در تمام فروشگاه‌های عضو شبکه قابل استفاده است.",
    icon: Wallet,
    className: "md:row-span-3 md:pb-0",
    header: (
      <BentoHeader className="hidden max-h-114 overflow-hidden md:block">
        <Iphone15Pro
          imageSrc="/images/misc/mobile.jpg"
          className="h-auto w-full dark:hidden"
          id="iphone-15-pro-1"
        />

        <Iphone15Pro
          imageSrc="/images/misc/mobile-dark.jpg"
          className="hidden h-auto w-full dark:md:block"
          id="iphone-15-pro-2"
        />
      </BentoHeader>
    ),
  },

  {
    title: "کمپین و پیشنهاد ویژه",
    description:
      "برای مناسبت‌ها، جشنواره‌ها و مشتریان وفادار کمپین‌های کش‌بک و پیشنهادهای محدود زمانی ایجاد کنید.",
    icon: CreditCard,
    className: "",
  },

  {
    title: "تسویه خودکار کش‌بک",
    description:
      "سیستم به‌صورت هوشمند مبلغ کش‌بک و سهم هر فروشگاه را محاسبه و مدیریت می‌کند.",
    icon: Zap,
    className: "",
  },

  {
    title: "گزارش‌ها و تحلیل هوشمند",
    description:
      "فروش، کش‌بک، مشتریان، سفارش‌ها و عملکرد فروشگاه‌ها را با نمودارهای تحلیلی مشاهده کنید.",
    icon: BarChart3,
    className: "",
  },

  {
    title: "پنل‌های اختصاصی",
    description:
      "داشبوردهای مجزا برای مدیر، فروشگاه و مشتری با امکانات متناسب با هر نقش.",
    icon: LayoutDashboard,
    className: "",
  },

  {
    title: "چندزبانه و راست‌به‌چپ",
    description:
      "پشتیبانی کامل از زبان فارسی، انگلیسی و عربی با تغییر خودکار جهت نمایش.",
    icon: Languages,
    className: "",
  },

  {
    title: "امن، پایدار و مقیاس‌پذیر",
    description:
      "معماری مدرن برای توسعه آینده، امنیت اطلاعات و مدیریت تعداد زیاد کاربران و فروشگاه‌ها.",
    icon: ShieldCheck,
    className: "",
  },

  {
    title: "آماده توسعه و یکپارچه‌سازی",
    description:
      "طراحی ماژولار برای اتصال به درگاه پرداخت، سیستم‌های حسابداری و سرویس‌های شخص ثالث.",
    icon: Globe,
    className: "",
  },
]
