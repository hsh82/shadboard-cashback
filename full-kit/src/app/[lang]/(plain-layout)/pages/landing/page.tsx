import { ContactUs } from "./_components/contact-us"
import { CoreFeatures } from "./_components/core-features"
import { Faqs } from "./_components/faqs"
import { Hero } from "./_components/hero"
import { ReadyToBuildCTA } from "./_components/ready-to-build-cta"
import { TrustedBy } from "./_components/trusted-by"

export default function LandingPage() {
  return (
    <div className="py-16 space-y-16 bg-muted/40">
      <Hero />
      <TrustedBy />
      <CoreFeatures />
      <ReadyToBuildCTA />
      <Faqs />
      <ContactUs />
    </div>
  )
}
