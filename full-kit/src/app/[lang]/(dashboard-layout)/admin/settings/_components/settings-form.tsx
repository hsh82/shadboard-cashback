"use client"

import { useState } from "react"

import { useDictionary } from "@/contexts/dictionary-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SettingsForm() {
  const dictionary = useDictionary()
  const d = dictionary.admin
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <Tabs defaultValue="platform" className="w-full">
      <TabsList className="flex-wrap">
        <TabsTrigger value="platform">{d.platformSettings}</TabsTrigger>
        <TabsTrigger value="cashback">{d.cashbackRules}</TabsTrigger>
        <TabsTrigger value="shop">{d.shopRules}</TabsTrigger>
        <TabsTrigger value="customer">{d.customerRules}</TabsTrigger>
        <TabsTrigger value="offer">{d.offerRules}</TabsTrigger>
        <TabsTrigger value="notifications">
          {d.notificationSettings}
        </TabsTrigger>
      </TabsList>

      <TabsContent value="platform" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>{d.platformSettings}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="platformName">{d.platformName}</Label>
              <Input id="platformName" defaultValue="Cashback Platform" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="supportEmail">{d.supportEmail}</Label>
              <Input
                id="supportEmail"
                type="email"
                defaultValue="support@demo.platform"
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="maintenance">{d.maintenanceMode}</Label>
              <Switch id="maintenance" />
            </div>
            <Button onClick={handleSave}>{d.saveSettings}</Button>
            {saved && (
              <p className="text-sm text-green-600">{d.settingsSaved}</p>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="cashback" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>{d.cashbackRules}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="defaultRate">{d.defaultCashbackRate} (%)</Label>
              <Input id="defaultRate" type="number" defaultValue="5" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="minWithdrawal">{d.minWithdrawal} (ریال)</Label>
              <Input id="minWithdrawal" type="number" defaultValue="10" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="maxPerOrder">
                {d.maxCashbackPerOrder} (ریال)
              </Label>
              <Input id="maxPerOrder" type="number" defaultValue="100" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="expiryDays">{d.cashbackExpiryDays}</Label>
              <Input id="expiryDays" type="number" defaultValue="90" />
            </div>
            <Button onClick={handleSave}>{d.saveSettings}</Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="shop" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>{d.shopRules}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="commission">{d.commissionRate} (%)</Label>
              <Input id="commission" type="number" defaultValue="5" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="verifyRequired">
                {d.shopVerificationRequired}
              </Label>
              <Switch id="verifyRequired" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="autoApprove">{d.autoApproveShops}</Label>
              <Switch id="autoApprove" />
            </div>
            <Button onClick={handleSave}>{d.saveSettings}</Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="customer" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>{d.customerRules}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="kyc">{d.customerKycRequired}</Label>
              <Switch id="kyc" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="maxOrders">{d.maxOrdersPerDay}</Label>
              <Input id="maxOrders" type="number" defaultValue="10" />
            </div>
            <Button onClick={handleSave}>{d.saveSettings}</Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="offer" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>{d.offerRules}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="duration">{d.offerDurationDays}</Label>
              <Input id="duration" type="number" defaultValue="30" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="maxDiscount">Max Discount (%)</Label>
              <Input id="maxDiscount" type="number" defaultValue="50" />
            </div>
            <Button onClick={handleSave}>{d.saveSettings}</Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="notifications" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>{d.notificationSettings}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email">{d.emailNotifications}</Label>
              <Switch id="email" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sms">{d.smsNotifications}</Label>
              <Switch id="sms" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="push">{d.pushNotifications}</Label>
              <Switch id="push" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="notifyOrder">{d.notifyOnNewOrder}</Label>
              <Switch id="notifyOrder" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="notifyCashback">{d.notifyOnCashback}</Label>
              <Switch id="notifyCashback" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="notifyShop">{d.notifyOnShopSignup}</Label>
              <Switch id="notifyShop" />
            </div>
            <Button onClick={handleSave}>{d.saveSettings}</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
