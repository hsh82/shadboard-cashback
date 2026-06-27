"use client"

import { useState } from "react"
import { MoreHorizontal } from "lucide-react"

import { orders } from "@/data/mock"

import { formatRial } from "@/lib/utils"

import { useDictionary } from "@/contexts/dictionary-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const customerId = "1"
const myOrders = orders.filter((o) => o.customerId === customerId)

export function OrdersTable() {
  const dictionary = useDictionary()
  const d = dictionary.customer
  const cd = dictionary.cashback
  const [selectedOrder, setSelectedOrder] = useState<(typeof orders)[0] | null>(
    null
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>{d.orderHistory}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{d.orderId || "Order ID"}</TableHead>
              <TableHead>{d.shop || "Shop"}</TableHead>
              <TableHead>{d.items || "Items"}</TableHead>
              <TableHead>{d.total || "Total"}</TableHead>
              <TableHead>{d.date || "Date"}</TableHead>
              <TableHead>{d.status || "Status"}</TableHead>
              <TableHead>{dictionary.admin.actions || "Actions"}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {myOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.shopName}</TableCell>
                <TableCell>
                  {order.items.map((i) => `${i.name} x${i.qty}`).join(", ")}
                </TableCell>
                <TableCell>{formatRial(order.totalAmount)}</TableCell>
                <TableCell>{order.createdAt}</TableCell>
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
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>
                        {dictionary.admin.actions || "Actions"}
                      </DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => setSelectedOrder(order)}>
                        {d.viewDetails || "View Details"}
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        {d.downloadInvoice || "Download Invoice"}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      <Drawer
        open={!!selectedOrder}
        onOpenChange={(open) => !open && setSelectedOrder(null)}
      >
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{d.viewDetails || "Order Details"}</DrawerTitle>
            <DrawerDescription>
              {selectedOrder?.id} - {selectedOrder?.shopName}
            </DrawerDescription>
          </DrawerHeader>
          {selectedOrder && (
            <div className="grid gap-4 p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {d.date || "Date"}
                  </p>
                  <p className="font-medium">{selectedOrder.createdAt}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {d.status || "Status"}
                  </p>
                  <Badge
                    variant={
                      selectedOrder.status === "approved"
                        ? "default"
                        : selectedOrder.status === "pending"
                          ? "secondary"
                          : selectedOrder.status === "processing"
                            ? "outline"
                            : "destructive"
                    }
                  >
                    {selectedOrder.status}
                  </Badge>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  {d.items || "Items"}
                </p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Qty</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedOrder.items.map((item, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.qty}</TableCell>
                        <TableCell>{formatRial(item.price)}</TableCell>
                        <TableCell>
                          {formatRial(item.price * item.qty)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="grid gap-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    {d.subtotal || "Subtotal"}
                  </span>
                  <span className="font-medium">
                    {formatRial(selectedOrder.totalAmount)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    {cd.cashback || "Cashback"}
                  </span>
                  <span className="font-medium text-green-600">
                    +{formatRial(selectedOrder.cashbackAmount)}
                  </span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-bold">{d.total || "Total"}</span>
                  <span className="font-bold">
                    {formatRial(selectedOrder.totalAmount)}
                  </span>
                </div>
              </div>
            </div>
          )}
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">
                {dictionary.admin.view || "Close"}
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Card>
  )
}
