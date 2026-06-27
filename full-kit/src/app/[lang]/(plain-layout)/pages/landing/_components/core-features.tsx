import { ShoppingCart, Store, Ticket, Users } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Store,
    title: "Multi-Vendor Management",
    description:
      "Each shop has its own dashboard to manage products, categories, and inventory.",
  },
  {
    icon: Ticket,
    title: "Offers & Campaigns",
    description:
      "Create countdown campaigns, discounts, and limited-time offers to attract customers.",
  },
  {
    icon: ShoppingCart,
    title: "Order Processing",
    description:
      "Simple POS flow where employees enter a phone number and create orders fast.",
  },
  {
    icon: Users,
    title: "Customer Wallet",
    description:
      "Customers track earned cashback, pending payouts, and redeem offers from one place.",
  },
]

export function CoreFeatures() {
  return (
    <section id="features" className="container space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Everything You Need</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A fully functional demo for a university project. No backend, no
          database, just mock data and beautiful UI.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="h-full">
            <CardHeader>
              <feature.icon className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
