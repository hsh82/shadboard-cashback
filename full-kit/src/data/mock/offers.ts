export interface OfferType {
  id: string
  title: string
  shopId: string
  shopName: string
  discount: number
  type: "percentage" | "fixed"
  startsAt: string
  endsAt: string
  status: "active" | "upcoming" | "expired"
  description: string
}

export const offers: OfferType[] = [
  {
    id: "1",
    title: "Summer Sale",
    shopId: "2",
    shopName: "Fashion Hub",
    discount: 20,
    type: "percentage",
    startsAt: "2024-06-01",
    endsAt: "2024-07-31",
    status: "active",
    description: "Up to 20% off on all summer clothing",
  },
  {
    id: "2",
    title: "Tech Week",
    shopId: "1",
    shopName: "Tech Store",
    discount: 15,
    type: "percentage",
    startsAt: "2024-06-15",
    endsAt: "2024-06-30",
    status: "active",
    description: "Flat 15% off on electronics",
  },
  {
    id: "3",
    title: "Book Fest",
    shopId: "4",
    shopName: "Book Nook",
    discount: 10,
    type: "fixed",
    startsAt: "2024-07-01",
    endsAt: "2024-07-15",
    status: "upcoming",
    description: "Save 10 USD on orders above 50 USD",
  },
  {
    id: "4",
    title: "Spring Clearance",
    shopId: "2",
    shopName: "Fashion Hub",
    discount: 30,
    type: "percentage",
    startsAt: "2024-03-01",
    endsAt: "2024-04-30",
    status: "expired",
    description: "End of season clearance up to 30% off",
  },
]
