export interface CustomerType {
  id: string
  name: string
  phone: string
  email: string
  address: string
  joinedAt: string
  totalSpent: number
  totalCashback: number
  pendingCashback: number
  ordersCount: number
  status: "active" | "inactive"
  avatar?: string
}

export const customers: CustomerType[] = [
  {
    id: "1",
    name: "Niloofar Tabatabaei",
    phone: "+98 912 345 6789",
    email: "niloofar@example.demo",
    address: "Tehran, Iran",
    joinedAt: "2024-01-20",
    totalSpent: 2450000,
    totalCashback: 122500,
    pendingCashback: 15000,
    ordersCount: 45,
    status: "active",
  },
  {
    id: "2",
    name: "Amirhossein Jalali",
    phone: "+98 921 987 6543",
    email: "amir@example.demo",
    address: "Mashhad, Iran",
    joinedAt: "2024-02-14",
    totalSpent: 1890000,
    totalCashback: 94500,
    pendingCashback: 8000,
    ordersCount: 32,
    status: "active",
  },
  {
    id: "3",
    name: "Zahra Sadeghi",
    phone: "+98 910 222 3344",
    email: "zahra@example.demo",
    address: "Isfahan, Iran",
    joinedAt: "2024-03-01",
    totalSpent: 980000,
    totalCashback: 49000,
    pendingCashback: 5200,
    ordersCount: 18,
    status: "active",
  },
  {
    id: "4",
    name: "Omid Pour",
    phone: "+98 915 555 6677",
    email: "omid@example.demo",
    address: "Shiraz, Iran",
    joinedAt: "2024-04-10",
    totalSpent: 560000,
    totalCashback: 28000,
    pendingCashback: 0,
    ordersCount: 12,
    status: "inactive",
  },
  {
    id: "5",
    name: "Mina Heydari",
    phone: "+98 918 888 9900",
    email: "mina@example.demo",
    address: "Tabriz, Iran",
    joinedAt: "2024-05-05",
    totalSpent: 3200000,
    totalCashback: 160000,
    pendingCashback: 22000,
    ordersCount: 67,
    status: "active",
  },
]
