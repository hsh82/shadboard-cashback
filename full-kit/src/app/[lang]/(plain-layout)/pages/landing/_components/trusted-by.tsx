import { CheckCircle2, ShieldCheck, Zap } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TrustedBy() {
  return (
    <section className="container">
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="text-center">
          <CardHeader>
            <Zap className="mx-auto h-8 w-8 text-primary" />
            <CardTitle className="text-lg">Instant Demo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              No setup required. All data is pre-loaded and interactive.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <ShieldCheck className="mx-auto h-8 w-8 text-primary" />
            <CardTitle className="text-lg">University Project</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Built for academic presentation with clean architecture and
              scalable code.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <CheckCircle2 className="mx-auto h-8 w-8 text-primary" />
            <CardTitle className="text-lg">Production Ready Design</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Modern UI with shadcn/ui, dark mode, RTL support, and responsive
              layouts.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
