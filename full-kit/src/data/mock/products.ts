export interface ProductType {
  id: string
  name: string
  sku: string
  category: string
  price: number
  stock: number
  status: "active" | "draft" | "archived"
  createdAt: string
  shopId: string
  totalOrders?: number
  description?: string
}

export const products: ProductType[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    sku: "WH-1000",
    category: "Electronics",
    price: 120,
    stock: 45,
    status: "active",
    createdAt: "2024-01-20",
    shopId: "1",
    totalOrders: 340,
  },
  {
    id: "2",
    name: "Laptop Stand",
    sku: "LS-200",
    category: "Accessories",
    price: 35,
    stock: 120,
    status: "active",
    createdAt: "2024-02-05",
    shopId: "1",
    totalOrders: 210,
  },
  {
    id: "3",
    name: "Summer T-Shirt",
    sku: "ST-300",
    category: "Clothing",
    price: 25,
    stock: 200,
    status: "active",
    createdAt: "2024-02-18",
    shopId: "2",
    totalOrders: 180,
  },
  {
    id: "4",
    name: "Denim Jacket",
    sku: "DJ-400",
    category: "Clothing",
    price: 85,
    stock: 30,
    status: "active",
    createdAt: "2024-03-01",
    shopId: "2",
    totalOrders: 95,
  },
  {
    id: "5",
    name: "Garden Hose",
    sku: "GH-500",
    category: "Garden",
    price: 18,
    stock: 0,
    status: "draft",
    createdAt: "2024-05-10",
    shopId: "3",
    totalOrders: 0,
  },
  {
    id: "6",
    name: "Sci-Fi Novel",
    sku: "SN-600",
    category: "Books",
    price: 15,
    stock: 60,
    status: "active",
    createdAt: "2024-03-15",
    shopId: "4",
    totalOrders: 150,
  },
]
