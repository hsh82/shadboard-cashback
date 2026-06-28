import {
  BookOpen,
  Coffee,
  Pill,
  Shirt,
  ShoppingBag,
  Store,
  Utensils,
} from "lucide-react"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"

export function TrustedBy() {
  const industries = [
    { name: "فروشگاه", icon: Store },
    { name: "رستوران", icon: Utensils },
    { name: "کافه", icon: Coffee },
    { name: "کتابفروشی", icon: BookOpen },
    { name: "پوشاک", icon: Shirt },
    { name: "داروخانه", icon: Pill },
    { name: "سوپرمارکت", icon: ShoppingBag },
  ]

  return (
    <section className="container">
      <div className="text-center mb-8">
        <p className="text-sm text-muted-foreground uppercase tracking-wider">
          همکاران و مشتریان ما
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-7">
        {industries.map(({ name, icon: Icon }) => (
          <Card
            key={name}
            className="text-center p-4 hover:shadow-lg transition-shadow"
          >
            <CardHeader className="p-0 space-y-2">
              <Icon className="mx-auto h-6 w-6 text-primary" />
              <CardTitle className="text-xs">{name}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
