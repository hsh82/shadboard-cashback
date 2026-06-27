"use client"

import { useState } from "react"

import { formatRial } from "@/lib/utils"

import { useDictionary } from "@/contexts/dictionary-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ShopSettingsForm() {
  const dictionary = useDictionary()
  const d = dictionary.shop
  const cd = dictionary.cashback
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <Tabs defaultValue="merchant" className="w-full">
      <TabsList className="flex-wrap">
        <TabsTrigger value="merchant">{d.merchantInfo}</TabsTrigger>
        <TabsTrigger value="cashback">{cd.cashbackRate}</TabsTrigger>
        <TabsTrigger value="receipt">{d.receiptFooter}</TabsTrigger>
      </TabsList>

      <TabsContent value="merchant" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>{d.merchantInfo}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="shopName">{d.shopName}</Label>
              <Input id="shopName" defaultValue="Tech Store" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="logo">{d.logo}</Label>
              <Input id="logo" placeholder="https://example.com/logo.png" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">{d.phone}</Label>
              <Input id="phone" defaultValue="+98 912 345 6789" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">{d.address}</Label>
              <Input id="address" defaultValue="Tehran, Iran" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="openingHours">{d.openingHours}</Label>
              <Input id="openingHours" defaultValue="09:00 - 22:00" />
            </div>
            <Button onClick={handleSave}>{d.saveChanges}</Button>
            {saved && (
              <p className="text-sm text-green-600">
                Settings saved successfully
              </p>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="cashback" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>{cd.cashbackRate}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="defaultRate">{d.defaultCashbackRate} (%)</Label>
              <Input id="defaultRate" type="number" defaultValue="5" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="tax">{d.taxPercent} (%)</Label>
              <Input id="tax" type="number" defaultValue="0" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="currency">{d.currency}</Label>
              <Input
                id="currency"
                defaultValue={formatRial(1)}
                readOnly
                className="bg-muted"
              />
            </div>
            <Button onClick={handleSave}>{d.saveChanges}</Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="receipt" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>{d.receiptFooter}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="receiptFooter">{d.receiptFooter}</Label>
              <Input
                id="receiptFooter"
                defaultValue="Thank you for your purchase!"
              />
            </div>
            <Button onClick={handleSave}>{d.saveChanges}</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
