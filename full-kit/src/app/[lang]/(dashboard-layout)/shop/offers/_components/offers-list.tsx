"use client"

import { offers } from "@/data/mock"

import { formatRial } from "@/lib/utils"

import { useDictionary } from "@/contexts/dictionary-context"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function OffersList() {
  const dictionary = useDictionary()
  const cd = dictionary.cashback
  const activeOffers = offers.filter((o) => o.status === "active")

  const getDaysRemaining = (endsAt: string) => {
    const end = new Date(endsAt)
    const now = new Date()
    const diff = end.getTime() - now.getTime()
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {activeOffers.map((offer) => {
        const daysRemaining = getDaysRemaining(offer.endsAt)
        return (
          <Card key={offer.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{offer.title}</CardTitle>
                <Badge variant="default">Active</Badge>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <p className="text-sm text-muted-foreground">
                {offer.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-primary">
                  {offer.type === "percentage"
                    ? `${offer.discount}% OFF`
                    : `${formatRial(offer.discount, "en")} OFF`}
                </span>
                <span className="text-xs text-muted-foreground">
                  Ends {offer.endsAt}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {cd.countdown}: {daysRemaining} days
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
