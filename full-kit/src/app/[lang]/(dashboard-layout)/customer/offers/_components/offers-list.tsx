"use client"

import { offers } from "@/data/mock"

import { formatRial } from "@/lib/utils"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function OffersList() {
  const activeOffers = offers.filter((o) => o.status === "active")
  const upcomingOffers = offers.filter((o) => o.status === "upcoming")

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="grid gap-4">
        <h3 className="text-lg font-semibold">Available Offers</h3>
        {activeOffers.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center text-muted-foreground">
              No active offers right now
            </CardContent>
          </Card>
        ) : (
          activeOffers.map((offer) => (
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
                <Button className="w-full">Redeem Offer</Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <div className="grid gap-4">
        <h3 className="text-lg font-semibold">Upcoming</h3>
        {upcomingOffers.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center text-muted-foreground">
              No upcoming offers
            </CardContent>
          </Card>
        ) : (
          upcomingOffers.map((offer) => (
            <Card key={offer.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{offer.title}</CardTitle>
                  <Badge variant="secondary">Upcoming</Badge>
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
                    Starts {offer.startsAt}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
