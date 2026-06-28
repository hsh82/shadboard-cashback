import { CoreFeaturesList } from "./core-features-list"

export function CoreFeatures() {
  return (
    <section id="features" className="container space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">ویژگی‌های کامران</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          مجموعه‌ای کامل از امکانات برای مدیریت فروش، وفاداری مشتری و تحلیل
          کسب‌وکار.
        </p>
      </div>
      <CoreFeaturesList />
    </section>
  )
}
