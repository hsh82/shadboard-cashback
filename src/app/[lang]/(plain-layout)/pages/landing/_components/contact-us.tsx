import { Mail, MapPin, Phone } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactUs() {
  return (
    <section className="container max-w-4xl">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-3xl font-bold">تماس با ما</h2>
        <p className="text-muted-foreground">
          سوالی دارید؟ با تیم پشتیبانی ما در تماس باشید.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Mail className="h-6 w-6 text-primary" />
            <CardTitle className="text-base">ایمیل</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              sh.sheikhan.m@gmail.com
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Phone className="h-6 w-6 text-primary" />
            <CardTitle className="text-base">تلفن</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">+989934557974</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <MapPin className="h-6 w-6 text-primary" />
            <CardTitle className="text-base">آدرس</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">اصفهان، ایران</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
