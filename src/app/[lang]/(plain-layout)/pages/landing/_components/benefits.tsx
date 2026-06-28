import { CoreBenefitsList } from "./core-benefits-list"

export function Benefits() {
  return (
    <section id="benefits" className="container grid gap-8">
      <div className="text-center mx-auto space-y-1.5">
        <h2 className="text-4xl font-semibold">مزایای پلتفرم</h2>
        <p className="max-w-prose text-sm text-muted-foreground mx-auto">
          مزایای استفاده از پلتفرم کش‌بک برای مشتریان، فروشندگان و مدیران سیستم.
        </p>
      </div>
      <CoreBenefitsList />
    </section>
  )
}
