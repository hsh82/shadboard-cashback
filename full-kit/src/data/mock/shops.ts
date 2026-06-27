export interface ShopType {
  id: string
  name: string
  email: string
  owner: string
  category: string
  status: "active" | "pending" | "suspended"
  verified: boolean
  joinedAt: string
  balance: number
  cashbackRate: number
  totalSales: number
  totalOrders: number
  customersCount: number
}

export const shops: ShopType[] = [
  {
    id: "1",
    name: "Tech Store",
    email: "contact@techstore.demo",
    owner: "Ali Rezaei",
    category: "Electronics",
    status: "active",
    verified: true,
    joinedAt: "2024-01-15",
    balance: 12400,
    cashbackRate: 5,
    totalSales: 248000,
    totalOrders: 1240,
    customersCount: 890,
  },
  {
    id: "2",
    name: "Fashion Hub",
    email: "info@fashionhub.demo",
    owner: "Sara Mohammadi",
    category: "Clothing",
    status: "active",
    verified: true,
    joinedAt: "2024-02-10",
    balance: 8900,
    cashbackRate: 8,
    totalSales: 111250,
    totalOrders: 890,
    customersCount: 620,
  },
  {
    id: "3",
    name: "Home Market",
    email: "support@homemarket.demo",
    owner: "Mohammad Karimi",
    category: "Home & Garden",
    status: "pending",
    verified: false,
    joinedAt: "2024-06-01",
    balance: 0,
    cashbackRate: 3,
    totalSales: 0,
    totalOrders: 0,
    customersCount: 0,
  },
  {
    id: "4",
    name: "Book Nook",
    email: "hello@booknook.demo",
    owner: "Fatemeh Ahmadi",
    category: "Books",
    status: "active",
    verified: true,
    joinedAt: "2024-03-22",
    balance: 3200,
    cashbackRate: 4,
    totalSales: 64000,
    totalOrders: 420,
    customersCount: 310,
  },
  {
    id: "5",
    name: "Sport Zone",
    email: "team@sportzone.demo",
    owner: "Reza Hosseini",
    category: "Sports",
    status: "suspended",
    verified: true,
    joinedAt: "2024-01-05",
    balance: 1500,
    cashbackRate: 6,
    totalSales: 30000,
    totalOrders: 180,
    customersCount: 120,
  },
]
