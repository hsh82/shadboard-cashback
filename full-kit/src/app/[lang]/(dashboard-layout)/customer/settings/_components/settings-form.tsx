"use client"

import { useState } from "react"

import { formatRial } from "@/lib/utils"

import { useDictionary } from "@/contexts/dictionary-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CustomerSettingsForm() {
  const dictionary = useDictionary()
  const d = dictionary.customer
  const cd = dictionary.cashback
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="flex-wrap">
        <TabsTrigger value="profile">{d.profile}</TabsTrigger>
        <TabsTrigger value="cashback">{cd.cashback}</TabsTrigger>
        <TabsTrigger value="notifications">
          {dictionary.admin.notificationSettings}
        </TabsTrigger>
      </TabsList>

      <TabsContent value="profile" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>{d.profile}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="fullName">{d.fullName}</Label>
              <Input id="fullName" defaultValue="Niloofar Tabatabaei" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">{d.phone}</Label>
              <Input id="phone" defaultValue="+98 912 345 6789" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue="niloofar@example.demo"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">{d.address}</Label>
              <Input id="address" defaultValue="Tehran, Iran" />
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
            <CardTitle>{cd.cashback}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="minWithdrawal">
                {dictionary.admin.minWithdrawal} (ریال)
              </Label>
              <Input id="minWithdrawal" type="number" defaultValue="10" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="currency">{dictionary.shop.currency}</Label>
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

      <TabsContent value="notifications" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>{dictionary.admin.notificationSettings}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email">
                {dictionary.admin.emailNotifications}
              </Label>
              <Input id="email" type="checkbox" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sms">{dictionary.admin.smsNotifications}</Label>
              <Input id="sms" type="checkbox" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="push">{dictionary.admin.pushNotifications}</Label>
              <Input id="push" type="checkbox" defaultChecked />
            </div>
            <Button onClick={handleSave}>{d.saveChanges}</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
