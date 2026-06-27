import type { ChatType } from "../types"

export const chatsData: ChatType[] = [
  {
    id: "chat_1",
    lastMessage: {
      content: "Your cashback of 9,500 ﷼ has been approved!",
      createdAt: new Date("2024-06-20T10:37:00Z"),
    },
    name: "Tech Store Support",
    avatar: "/images/avatars/male-01.svg",
    status: "ONLINE",
    messages: [
      {
        id: "msg_24",
        senderId: "shop_1",
        text: "Your cashback of 9,500 ﷼ has been approved!",
        createdAt: new Date("2024-06-20T10:37:00Z"),
        status: "DELIVERED",
      },
      {
        id: "msg_23",
        senderId: "1",
        text: "Thank you! When will it be available in my wallet?",
        createdAt: new Date("2024-06-20T10:34:00Z"),
        status: "READ",
      },
      {
        id: "msg_22",
        senderId: "shop_1",
        text: "It will be transferred to your wallet within 24 hours.",
        createdAt: new Date("2024-06-20T10:33:00Z"),
        status: "READ",
      },
    ],
    users: [
      {
        id: "1",
        name: "Niloofar Tabatabaei",
        avatar: "/images/avatars/female-02.svg",
        status: "ONLINE",
      },
      {
        id: "shop_1",
        name: "Tech Store Support",
        avatar: "/images/avatars/male-01.svg",
        status: "ONLINE",
      },
    ],
    typingUsers: [],
  },
  {
    id: "chat_2",
    lastMessage: {
      content: "Your order #ORD-078 has been shipped!",
      createdAt: new Date("2024-06-21T10:03:00Z"),
    },
    name: "Fashion Hub",
    avatar: "/images/avatars/male-02.svg",
    status: "ONLINE",
    messages: [
      {
        id: "msg_12",
        senderId: "shop_2",
        text: "Your order #ORD-078 has been shipped!",
        createdAt: new Date("2024-06-21T10:03:00Z"),
        status: "DELIVERED",
      },
      {
        id: "msg_11",
        senderId: "1",
        text: "Great, thanks! Can I track the delivery?",
        createdAt: new Date("2024-06-21T10:02:00Z"),
        status: "READ",
      },
      {
        id: "msg_10",
        senderId: "shop_2",
        text: "Yes, you can track it using the tracking link sent to your phone.",
        createdAt: new Date("2024-06-21T10:01:00Z"),
        status: "READ",
      },
    ],
    users: [
      {
        id: "1",
        name: "Niloofar Tabatabaei",
        avatar: "/images/avatars/female-02.svg",
        status: "ONLINE",
      },
      {
        id: "shop_2",
        name: "Fashion Hub",
        avatar: "/images/avatars/male-02.svg",
        status: "ONLINE",
      },
    ],
    typingUsers: [],
    unreadCount: 1,
  },
  {
    id: "chat_3",
    lastMessage: {
      content: "How can I help you with your cashback query?",
      createdAt: new Date("2024-06-22T10:08:00Z"),
    },
    name: "Cashback Support",
    avatar: "/images/avatars/female-01.svg",
    status: "ONLINE",
    messages: [
      {
        id: "msg_14",
        senderId: "support_1",
        text: "How can I help you with your cashback query?",
        createdAt: new Date("2024-06-22T10:08:00Z"),
        status: "READ",
      },
      {
        id: "msg_13",
        senderId: "1",
        text: "I have a question about my pending cashback from last week.",
        createdAt: new Date("2024-06-22T10:07:00Z"),
        status: "READ",
      },
      {
        id: "msg_12",
        senderId: "support_1",
        text: "Sure, please provide your order ID and I'll check it for you.",
        createdAt: new Date("2024-06-22T10:06:00Z"),
        status: "READ",
      },
    ],
    users: [
      {
        id: "1",
        name: "Niloofar Tabatabaei",
        avatar: "/images/avatars/female-02.svg",
        status: "ONLINE",
      },
      {
        id: "support_1",
        name: "Cashback Support",
        avatar: "/images/avatars/female-01.svg",
        status: "ONLINE",
      },
    ],
    typingUsers: [],
  },
  {
    id: "chat_4",
    lastMessage: {
      content: "Your coupon code SUMMER20 is valid until July 31.",
      createdAt: new Date("2024-06-23T10:13:00Z"),
    },
    name: "Home Market",
    avatar: "/images/avatars/male-03.svg",
    status: "IDLE",
    messages: [
      {
        id: "msg_16",
        senderId: "shop_3",
        text: "Your coupon code SUMMER20 is valid until July 31.",
        createdAt: new Date("2024-06-23T10:13:00Z"),
        status: "READ",
      },
      {
        id: "msg_15",
        senderId: "1",
        text: "Does it apply to all home products?",
        createdAt: new Date("2024-06-23T10:12:00Z"),
        status: "READ",
      },
      {
        id: "msg_14",
        senderId: "shop_3",
        text: "Yes, it applies to all items in our Home & Garden category.",
        createdAt: new Date("2024-06-23T10:11:00Z"),
        status: "READ",
      },
    ],
    users: [
      {
        id: "1",
        name: "Niloofar Tabatabaei",
        avatar: "/images/avatars/female-02.svg",
        status: "ONLINE",
      },
      {
        id: "shop_3",
        name: "Home Market",
        avatar: "/images/avatars/male-03.svg",
        status: "IDLE",
      },
    ],
    typingUsers: [],
  },
]
