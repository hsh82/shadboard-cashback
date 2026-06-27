export interface CashbackEntryType {
  id: string
  orderId: string
  customerId: string
  customerName: string
  shopId: string
  shopName: string
  orderAmount: number
  cashbackAmount: number
  rate: number
  status: "pending" | "approved" | "paid" | "rejected"
  createdAt: string
}

export const cashbackEntries: CashbackEntryType[] = [
  {
    id: "CB-001",
    orderId: "ORD-001",
    customerId: "1",
    customerName: "Niloofar Tabatabaei",
    shopId: "1",
    shopName: "Tech Store",
    orderAmount: 190,
    cashbackAmount: 9.5,
    rate: 5,
    status: "approved",
    createdAt: "2024-06-20",
  },
  {
    id: "CB-002",
    orderId: "ORD-002",
    customerId: "2",
    customerName: "Amirhossein Jalali",
    shopId: "2",
    shopName: "Fashion Hub",
    orderAmount: 85,
    cashbackAmount: 6.8,
    rate: 8,
    status: "pending",
    createdAt: "2024-06-21",
  },
  {
    id: "CB-003",
    orderId: "ORD-003",
    customerId: "5",
    customerName: "Mina Heydari",
    shopId: "1",
    shopName: "Tech Store",
    orderAmount: 275,
    cashbackAmount: 13.75,
    rate: 5,
    status: "approved",
    createdAt: "2024-06-22",
  },
  {
    id: "CB-004",
    orderId: "ORD-004",
    customerId: "3",
    customerName: "Zahra Sadeghi",
    shopId: "4",
    shopName: "Book Nook",
    orderAmount: 45,
    cashbackAmount: 1.8,
    rate: 4,
    status: "paid",
    createdAt: "2024-06-23",
  },
  {
    id: "CB-005",
    orderId: "ORD-005",
    customerId: "1",
    customerName: "Niloofar Tabatabaei",
    shopId: "2",
    shopName: "Fashion Hub",
    orderAmount: 50,
    cashbackAmount: 4,
    rate: 8,
    status: "rejected",
    createdAt: "2024-06-24",
  },
  {
    id: "CB-006",
    orderId: "ORD-006",
    customerId: "4",
    customerName: "Omid Pour",
    shopId: "1",
    shopName: "Tech Store",
    orderAmount: 35,
    cashbackAmount: 1.75,
    rate: 5,
    status: "pending",
    createdAt: "2024-06-25",
  },
]
