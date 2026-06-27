export interface TransactionType {
  id: string
  type: "sale" | "cashback_paid" | "cashback_earned" | "refund" | "withdrawal"
  amount: number
  currency: string
  shopId?: string
  shopName?: string
  customerId?: string
  customerName?: string
  orderId?: string
  description: string
  createdAt: string
}

export const transactions: TransactionType[] = [
  {
    id: "TXN-001",
    type: "sale",
    amount: 190,
    currency: "USD",
    shopId: "1",
    shopName: "Tech Store",
    customerId: "1",
    customerName: "Niloofar Tabatabaei",
    orderId: "ORD-001",
    description: "Order payment received",
    createdAt: "2024-06-20T10:30:00Z",
  },
  {
    id: "TXN-002",
    type: "sale",
    amount: 85,
    currency: "USD",
    shopId: "2",
    shopName: "Fashion Hub",
    customerId: "2",
    customerName: "Amirhossein Jalali",
    orderId: "ORD-002",
    description: "Order payment received",
    createdAt: "2024-06-21T14:15:00Z",
  },
  {
    id: "TXN-003",
    type: "cashback_earned",
    amount: 9.5,
    currency: "USD",
    customerId: "1",
    customerName: "Niloofar Tabatabaei",
    orderId: "ORD-001",
    description: "Cashback earned on purchase",
    createdAt: "2024-06-20T10:30:00Z",
  },
  {
    id: "TXN-004",
    type: "cashback_paid",
    amount: 1.8,
    currency: "USD",
    shopId: "4",
    shopName: "Book Nook",
    customerId: "3",
    customerName: "Zahra Sadeghi",
    orderId: "ORD-004",
    description: "Cashback paid to shop",
    createdAt: "2024-06-23T09:00:00Z",
  },
  {
    id: "TXN-005",
    type: "refund",
    amount: 50,
    currency: "USD",
    shopId: "2",
    shopName: "Fashion Hub",
    customerId: "1",
    customerName: "Niloofar Tabatabaei",
    orderId: "ORD-005",
    description: "Order refund processed",
    createdAt: "2024-06-24T16:45:00Z",
  },
  {
    id: "TXN-006",
    type: "withdrawal",
    amount: 500,
    currency: "USD",
    shopId: "1",
    shopName: "Tech Store",
    description: "Shop balance withdrawal",
    createdAt: "2024-06-25T11:20:00Z",
  },
]
