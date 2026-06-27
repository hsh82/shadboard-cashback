"use client"

import Link from "next/link"
import { ArrowUpRight, Clock, ShoppingBag, Wallet } from "lucide-react"

import { cashbackEntries, offers, orders, shops } from "@/data/mock"

import { formatRial } from "@/lib/utils"

import { useDictionary } from "@/contexts/dictionary-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DashboardOverviewCardV2 } from "@/components/dashboards/dashboard-card"

export function CustomerOverview() {
  const dictionary = useDictionary()
  const d = dictionary.customer
  const cd = dictionary.cashback
  const customerId = "1"
  const myOrders = orders.filter((o) => o.customerId === customerId)
  const myCashback = cashbackEntries.filter((c) => c.customerId === customerId)
  const myFavoriteShops = shops.filter((s) =>
    myOrders.some((o) => o.shopId === s.id)
  )
  const activeOffers = offers.filter((o) => o.status === "active").slice(0, 3)

  const totalSpent = myOrders.reduce((sum, o) => sum + o.totalAmount, 0)
  const totalCashback = myCashback
    .filter((c) => c.status === "approved" || c.status === "paid")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)
  const pendingCashback = myCashback
    .filter((c) => c.status === "pending")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)
  const redeemedCashback = myCashback
    .filter((c) => c.status === "paid")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)
  const availableToRedeem = totalCashback - redeemedCashback

  const recentOrders = myOrders.slice(0, 5)
  const lifetimeCashback = myCashback
    .filter((c) => c.status !== "rejected")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)

  return (
    <>
      <div className="col-span-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardOverviewCardV2
          data={{ value: totalCashback, percentageChange: 12.5 }}
          title={d.currentCashbackBalance || "Current Balance"}
          period={cd.balance}
          icon={Wallet}
          iconColor="hsl(142 76% 36%)"
          formatStyle="currency"
        />
        <DashboardOverviewCardV2
          data={{ value: lifetimeCashback, percentageChange: 8.3 }}
          title={d.lifetimeCashbackEarned || "Lifetime Earned"}
          period="All time"
          icon={ArrowUpRight}
          iconColor="hsl(221 83% 53%)"
          formatStyle="currency"
        />
        <DashboardOverviewCardV2
          data={{ value: totalSpent, percentageChange: 5.1 }}
          title={d.totalPurchases || "Total Purchases"}
          period="All time"
          icon={ShoppingBag}
          iconColor="hsl(280 65% 60%)"
          formatStyle="currency"
        />
        <DashboardOverviewCardV2
          data={{ value: activeOffers.length, percentageChange: 0 }}
          title={d.availableCoupons || "Available Coupons"}
          period="Active"
          icon={Clock}
          iconColor="hsl(38 92% 50%)"
        />
      </div>

      <Card className="col-span-full lg:col-span-2">
        <CardHeader>
          <CardTitle>{d.cashbackOverview || "Cashback Overview"}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">{cd.pending}</p>
              <p className="text-xl font-bold">{formatRial(pendingCashback)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                {cd.redeemed || "Redeemed"}
              </p>
              <p className="text-xl font-bold">
                {formatRial(redeemedCashback)}
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between text-sm">
              <span>{cd.earned}</span>
              <span className="font-medium">{formatRial(totalCashback)}</span>
            </div>
            <Progress
              value={
                totalCashback > 0
                  ? (availableToRedeem / totalCashback) * 100
                  : 0
              }
              className="mt-2"
            />
            <p className="text-xs text-muted-foreground mt-1">
              {formatRial(availableToRedeem)}{" "}
              {cd.balance || "available to redeem"}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>{d.orderHistory}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{d.orderId || "Order ID"}</TableHead>
                <TableHead>{d.shop || "Shop"}</TableHead>
                <TableHead>{d.date || "Date"}</TableHead>
                <TableHead>{d.total || "Total"}</TableHead>
                <TableHead>{cd.cashback || "Cashback"}</TableHead>
                <TableHead>{d.status || "Status"}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.shopName}</TableCell>
                  <TableCell>{order.createdAt}</TableCell>
                  <TableCell>{formatRial(order.totalAmount)}</TableCell>
                  <TableCell>{formatRial(order.cashbackAmount)}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        order.status === "approved"
                          ? "default"
                          : order.status === "pending"
                            ? "secondary"
                            : order.status === "processing"
                              ? "outline"
                              : "destructive"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>{d.quickActions || "Quick Actions"}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto py-4" asChild>
              <Link href="/customer/wallet">
                <Wallet className="mr-2 h-4 w-4" />
                {d.viewWallet || "View Wallet"}
              </Link>
            </Button>
            <Button variant="outline" className="h-auto py-4" asChild>
              <Link href="/customer/offers">
                <ShoppingBag className="mr-2 h-4 w-4" />
                {d.browseOffers || "Browse Offers"}
              </Link>
            </Button>
            <Button variant="outline" className="h-auto py-4" asChild>
              <Link href="/customer/orders">
                <ArrowUpRight className="mr-2 h-4 w-4" />
                {d.orderHistory}
              </Link>
            </Button>
            <Button variant="outline" className="h-auto py-4" asChild>
              <Link href="/apps/chat">
                <Clock className="mr-2 h-4 w-4" />
                {d.messages || "Messages"}
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {activeOffers.length > 0 && (
        <>
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>{d.availableOffers}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {activeOffers.map((offer) => (
                  <Card key={offer.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">
                          {offer.title}
                        </CardTitle>
                        <Badge variant="default">Active</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="grid gap-2">
                      <p className="text-sm text-muted-foreground">
                        {offer.description}
                      </p>
                      <span className="text-xl font-bold text-primary">
                        {offer.type === "percentage"
                          ? `${offer.discount}% OFF`
                          : `${formatRial(offer.discount, "en")} OFF`}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Ends {offer.endsAt}
                      </span>
                      <Button className="w-full">Claim Offer</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>
                {dictionary.shop.favoriteShops || "Favorite Shops"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {myFavoriteShops.map((shop) => (
                  <Card key={shop.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-xl font-bold text-muted-foreground">
                          {shop.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold">{shop.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {shop.category}
                          </p>
                          <p className="text-sm font-medium">
                            {shop.cashbackRate}% {cd.cashbackRate.toLowerCase()}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        Visit Shop
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </>
  )
}
