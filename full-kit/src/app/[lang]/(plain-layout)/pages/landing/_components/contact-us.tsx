import { Mail, MapPin, Phone } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactUs() {
  return (
    <section className="container max-w-4xl">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-muted-foreground">
          Questions about this demo? Reach out.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Mail className="h-6 w-6 text-primary" />
            <CardTitle className="text-base">Email</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              demo@shadboard-cashback.demo
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Phone className="h-6 w-6 text-primary" />
            <CardTitle className="text-base">Phone</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">+98 21 1234 5678</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <MapPin className="h-6 w-6 text-primary" />
            <CardTitle className="text-base">Address</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Tehran, Iran</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
