export interface OrderType {
  id: string
  customerId: string
  customerName: string
  shopId: string
  shopName: string
  items: { name: string; qty: number; price: number }[]
  totalAmount: number
  cashbackAmount: number
  status: "pending" | "approved" | "rejected" | "processing"
  createdAt: string
}

export const orders: OrderType[] = [
  {
    id: "ORD-001",
    customerId: "1",
    customerName: "Niloofar Tabatabaei",
    shopId: "1",
    shopName: "Tech Store",
    items: [
      { name: "Wireless Headphones", qty: 1, price: 120 },
      { name: "Laptop Stand", qty: 2, price: 35 },
    ],
    totalAmount: 190,
    cashbackAmount: 9.5,
    status: "approved",
    createdAt: "2024-06-20",
  },
  {
    id: "ORD-002",
    customerId: "2",
    customerName: "Amirhossein Jalali",
    shopId: "2",
    shopName: "Fashion Hub",
    items: [{ name: "Denim Jacket", qty: 1, price: 85 }],
    totalAmount: 85,
    cashbackAmount: 6.8,
    status: "pending",
    createdAt: "2024-06-21",
  },
  {
    id: "ORD-003",
    customerId: "5",
    customerName: "Mina Heydari",
    shopId: "1",
    shopName: "Tech Store",
    items: [
      { name: "Wireless Headphones", qty: 2, price: 120 },
      { name: "Laptop Stand", qty: 1, price: 35 },
    ],
    totalAmount: 275,
    cashbackAmount: 13.75,
    status: "processing",
    createdAt: "2024-06-22",
  },
  {
    id: "ORD-004",
    customerId: "3",
    customerName: "Zahra Sadeghi",
    shopId: "4",
    shopName: "Book Nook",
    items: [{ name: "Sci-Fi Novel", qty: 3, price: 15 }],
    totalAmount: 45,
    cashbackAmount: 1.8,
    status: "approved",
    createdAt: "2024-06-23",
  },
  {
    id: "ORD-005",
    customerId: "1",
    customerName: "Niloofar Tabatabaei",
    shopId: "2",
    shopName: "Fashion Hub",
    items: [{ name: "Summer T-Shirt", qty: 2, price: 25 }],
    totalAmount: 50,
    cashbackAmount: 4,
    status: "rejected",
    createdAt: "2024-06-24",
  },
  {
    id: "ORD-006",
    customerId: "4",
    customerName: "Omid Pour",
    shopId: "1",
    shopName: "Tech Store",
    items: [{ name: "Laptop Stand", qty: 1, price: 35 }],
    totalAmount: 35,
    cashbackAmount: 1.75,
    status: "pending",
    createdAt: "2024-06-25",
  },
]
