import Image from "next/image"
import Link from "next/link"

import { footerNavigationData } from "../../_data/footer-navigation"

import { cn } from "@/lib/utils"

import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function LandingFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t-[1px] border-sidebar-border">
      <div className="container flex flex-wrap justify-between gap-6 py-6 md:px-6">
        <section className="max-w-prose w-full mb-3 space-y-1.5 md:w-auto">
          <Link href="/" className="w-fit flex text-foreground font-black mb-6">
            <Image
              src="/images/icons/shadboard.svg"
              alt=""
              height={24}
              width={24}
              className="dark:invert"
            />
            <span>پلتفرم کش‌بک</span>
          </Link>
          <h3 className="font-semibold leading-none tracking-tight">
            عضویت در خبرنامه
          </h3>
          <p className="text-sm text-muted-foreground">
            دریافت آخرین اخبار، راهنماهای فنی و بهترین نمونه‌ها.
          </p>
          <div className="flex items-center gap-x-2 mt-2">
            <Input type="email" placeholder="name@example.com" />
            <Link href="/" className={buttonVariants()}>
              عضویت
            </Link>
          </div>
        </section>
        {footerNavigationData.map((nav) => (
          <nav key={nav.title}>
            <ul className="w-28 grid gap-2">
              <h3 className="font-semibold leading-none tracking-tight mb-1">
                {nav.title}
              </h3>
              {nav.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "inline h-fit p-0 text-sm text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t-[1px] border-sidebar-border">
        <div className="container flex justify-between items-center p-4 md:px-6">
          <p className="text-xs text-muted-foreground md:text-sm">
            © {currentYear}{" "}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "link" }), "inline p-0")}
            >
              پلتفرم کش‌بک
            </a>
            .
          </p>
          <p className="text-xs text-muted-foreground md:text-sm">
            طراحی و توسعه توسط{" "}
            <a
              href="https://github.com/hsh82"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "link" }), "inline p-0")}
            >
              HSH
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
