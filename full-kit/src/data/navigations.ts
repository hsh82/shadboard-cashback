import type { NavigationType } from "@/types"

export const navigationsData: NavigationType[] = [
  {
    title: "Cashback Admin",
    items: [
      {
        title: "Admin Dashboard",
        href: "/admin/dashboard",
        iconName: "LayoutDashboard",
      },
      {
        title: "Shops",
        href: "/admin/shops",
        iconName: "Store",
      },
      {
        title: "Customers",
        href: "/admin/customers",
        iconName: "Users",
      },
      {
        title: "Orders",
        href: "/admin/orders",
        iconName: "ShoppingCart",
      },
      {
        title: "Cashback",
        href: "/admin/cashback",
        iconName: "Wallet",
      },
      {
        title: "Reports",
        href: "/admin/reports",
        iconName: "ChartBar",
      },
      {
        title: "Settings",
        href: "/admin/settings",
        iconName: "Settings",
      },
    ],
  },
  {
    title: "Cashback Shop",
    items: [
      {
        title: "Shop Dashboard",
        href: "/shop/dashboard",
        iconName: "LayoutDashboard",
      },
      {
        title: "Sales",
        href: "/shop/sales",
        iconName: "TrendingUp",
      },
      {
        title: "Products",
        href: "/shop/products",
        iconName: "Package",
      },
      {
        title: "Orders",
        href: "/shop/orders",
        iconName: "ShoppingCart",
      },
      {
        title: "Offers",
        href: "/shop/offers",
        iconName: "Tag",
      },
      {
        title: "Reports",
        href: "/shop/reports",
        iconName: "ChartBar",
      },
      {
        title: "Messages",
        href: "/apps/chat",
        iconName: "MessageCircle",
      },
      {
        title: "Settings",
        href: "/shop/settings",
        iconName: "Settings",
      },
    ],
  },
  {
    title: "Cashback Customer",
    items: [
      {
        title: "My Dashboard",
        href: "/customer/dashboard",
        iconName: "LayoutDashboard",
      },
      {
        title: "Orders",
        href: "/customer/orders",
        iconName: "ShoppingBag",
      },
      {
        title: "Wallet",
        href: "/customer/wallet",
        iconName: "Wallet",
      },
      {
        title: "Offers",
        href: "/customer/offers",
        iconName: "Ticket",
      },
      {
        title: "Messages",
        href: "/apps/chat",
        iconName: "MessageCircle",
      },
      {
        title: "Profile",
        href: "/customer/profile",
        iconName: "User",
      },
      {
        title: "Settings",
        href: "/customer/settings",
        iconName: "Settings",
      },
    ],
  },
]
