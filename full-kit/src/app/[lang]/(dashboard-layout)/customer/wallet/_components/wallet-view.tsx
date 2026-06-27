"use client"

import { useState } from "react"
import { ArrowUpRight, Clock, TrendingUp, Wallet } from "lucide-react"

import { cashbackEntries } from "@/data/mock"

import { formatRial } from "@/lib/utils"

import { useDictionary } from "@/contexts/dictionary-context"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
  const d = dictionary.customer
  const cd = dictionary.cashback
  const [filter, setFilter] = useState<string>("all")

  const totalEarned = myEntries
    .filter((c) => c.status === "approved" || c.status === "paid")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)
  const pending = myEntries
    .filter((c) => c.status === "pending")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)
  const redeemed = myEntries
    .filter((c) => c.status === "paid")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)
  const expired = myEntries
    .filter((c) => c.status === "rejected")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)
  const lifetime = myEntries
    .filter((c) => c.status !== "rejected")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)

  const filteredEntries =
    filter === "all"
      ? myEntries
      : filter === "pending"
        ? myEntries.filter((c) => c.status === "pending")
        : filter === "paid"
          ? myEntries.filter((c) => c.status === "paid")
          : filter === "rejected"
            ? myEntries.filter((c) => c.status === "rejected")
            : myEntries

  return (
    <div className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {d.currentCashbackBalance || "Current Balance"}
            </CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatRial(totalEarned)}</div>
            <p className="text-xs text-muted-foreground">
              {formatRial(totalEarned - redeemed)} {cd.balance || "available"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{cd.pending}</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatRial(pending)}</div>
            <p className="text-xs text-muted-foreground">
              Awaiting shop approval
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {d.lifetimeCashbackEarned || "Lifetime Earned"}
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatRial(lifetime)}</div>
            <p className="text-xs text-muted-foreground">All time earned</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {cd.redeemed || "Redeemed"}
            </CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatRial(redeemed)}</div>
            <p className="text-xs text-muted-foreground">
              {expired > 0
                ? `${formatRial(expired)} expired`
                : "No expired cashback"}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{d.orderHistory || "Recent Transactions"}</CardTitle>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Shop</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Rate</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEntries.map((entry) => (
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
    </div>
  )
}
