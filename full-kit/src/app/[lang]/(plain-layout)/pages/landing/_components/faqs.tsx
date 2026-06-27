"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is this platform?",
    answer:
      "This is a demo cashback multi-vendor platform built with Next.js and shadcn/ui. It simulates how shops, customers, and admins interact in a cashback ecosystem.",
  },
  {
    question: "Is there a real backend?",
    answer:
      "No. Everything uses local mock data and client-side state. No database, no API, and no authentication service are connected.",
  },
  {
    question: "How do I navigate between portals?",
    answer:
      "Use the sidebar to switch between Admin, Shop, and Customer dashboards. Each portal has its own set of pages and data views.",
  },
  {
    question: "Which languages are supported?",
    answer:
      "English (LTR), Arabic (RTL), and Persian (RTL). Use the language dropdown in the top bar to switch locales.",
  },
  {
    question: "Can I add real data later?",
    answer:
      "Yes. The codebase is structured with typed interfaces and separate data folders, making it easy to replace mock data with real APIs.",
  },
]

export function Faqs() {
  return (
    <section className="container max-w-3xl">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="text-muted-foreground">
          Quick answers about this demo platform.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
