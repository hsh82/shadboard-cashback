"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "بازار وفاداری چیست؟",
    answer:
      "بازار وفاداری یک پلتفرم کش‌بک چندفروشگاهی است که مشتریان پس از هر خرید، بخشی از مبلغ پرداختی را به صورت اعتبار دریافت می‌کنند و می‌توانند آن را در سایر فروشگاه‌های عضو نیز استفاده کنند.",
  },
  {
    question: "چه فروشگاه‌هایی می‌توانند عضو شوند؟",
    answer:
      "تمام کسب‌وکارهای حضوری و آنلاین مانند رستوران‌ها، کافه‌ها، فروشگاه‌های پوشاک، کتاب‌فروشی‌ها، سوپرمارکت‌ها و سایر فروشگاه‌ها می‌توانند به شبکه بازار وفاداری بپیوندند.",
  },
  {
    question: "کش‌بک چگونه محاسبه و پرداخت می‌شود؟",
    answer:
      "درصد کش‌بک توسط هر فروشگاه تعیین می‌شود. پس از ثبت و تأیید خرید، اعتبار به کیف پول مشتری اضافه شده و در خریدهای بعدی قابل استفاده خواهد بود.",
  },
  {
    question: "آیا مشتری می‌تواند کش‌بک را در فروشگاه دیگری استفاده کند؟",
    answer:
      "بله. مهم‌ترین مزیت بازار وفاداری این است که اعتبار کسب‌شده محدود به یک فروشگاه نیست و در تمام فروشگاه‌های عضو شبکه قابل استفاده است.",
  },
  {
    question: "مزیت این سیستم نسبت به تخفیف‌های معمول چیست؟",
    answer:
      "به جای کاهش مستقیم قیمت کالا، مشتری برای خریدهای بعدی انگیزه پیدا می‌کند و فروشگاه نیز بدون کاهش مداوم حاشیه سود، مشتریان وفادار بیشتری جذب می‌کند.",
  },
  {
    question: "آیا استفاده از پلتفرم آسان است؟",
    answer:
      "بله. پنل‌های اختصاصی مدیر، فروشگاه و مشتری با رابط کاربری ساده طراحی شده‌اند و تمامی امکانات از طریق داشبوردهای فارسی و واکنش‌گرا در دسترس هستند.",
  },
]

export function Faqs() {
  return (
    <section className="container max-w-4xl">
      <div className="mb-10 space-y-3 text-center">
        <div className="inline-flex rounded-full border bg-primary/5 px-4 py-1 text-sm font-medium text-primary">
          سوالات متداول
        </div>

        <h2 className="text-3xl font-bold md:text-4xl">پاسخ به سوالات رایج</h2>

        <p className="mx-auto max-w-2xl text-muted-foreground">
          اگر درباره نحوه عملکرد بازار وفاداری یا سیستم کش‌بک سوالی دارید، پاسخ
          رایج‌ترین پرسش‌ها را در این بخش مشاهده کنید.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="rounded-xl border bg-background px-6"
      >
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="text-right text-base font-semibold">
              {faq.question}
            </AccordionTrigger>

            <AccordionContent className="leading-8 text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
