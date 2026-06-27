import Link from "next/link"
import { BookOpen, PenLine } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function DocumentationPage() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[60vh] gap-6 py-16">
      <div className="flex items-center justify-center rounded-full bg-muted p-4">
        <BookOpen className="h-10 w-10 text-primary" />
      </div>
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Documentation</h1>
        <p className="text-muted-foreground max-w-md">
          Project write-up and technical documentation will be published here.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 max-w-2xl w-full">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PenLine className="h-5 w-5" />
              Project Report
            </CardTitle>
            <CardDescription>
              Architecture decisions, tech stack, and implementation details.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary">Coming soon</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              API Reference
            </CardTitle>
            <CardDescription>
              Data models, mock data structures, and component contracts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary">Coming soon</Badge>
          </CardContent>
        </Card>
      </div>
      <Button variant="outline" asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  )
}
