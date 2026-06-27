"use client"

import { ArrowUpRight, Clock, Wallet } from "lucide-react"

import { cashbackEntries } from "@/data/mock"

import { formatRial } from "@/lib/utils"

import { useDictionary } from "@/contexts/dictionary-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const customerId = "1"
const myEntries = cashbackEntries.filter((c) => c.customerId === customerId)

export function WalletView() {
  const dictionary = useDictionary()
  const d = dictionary.cashback
  const totalEarned = myEntries
    .filter((c) => c.status === "approved" || c.status === "paid")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)
  const pending = myEntries
    .filter((c) => c.status === "pending")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)

  return (
    <>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{d.earned}</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatRial(totalEarned)}</div>
            <p className="text-xs text-muted-foreground">
              {d.approved} + {d.paid} {d.cashback}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{d.pending}</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatRial(pending)}</div>
            <p className="text-xs text-muted-foreground">
              {d.shopName ? "Awaiting shop approval" : "Awaiting approval"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {dictionary.customer.wallet}
            </CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatRial(totalEarned)}</div>
            <Button className="mt-4 w-full">{d.withdraw}</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{d.cashback} History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Shop</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Rate</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {myEntries.map((entry) => (
                <TableRow key={entry.id}>
                  <TableCell className="font-medium">{entry.orderId}</TableCell>
                  <TableCell>{entry.shopName}</TableCell>
                  <TableCell>{formatRial(entry.cashbackAmount)}</TableCell>
                  <TableCell>{entry.rate}%</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        entry.status === "paid"
                          ? "default"
                          : entry.status === "approved"
                            ? "secondary"
                            : entry.status === "pending"
                              ? "outline"
                              : "destructive"
                      }
                    >
                      {entry.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{entry.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  )
}
