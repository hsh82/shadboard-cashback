import { Benefits } from "./_components/benefits"
import { ContactUs } from "./_components/contact-us"
import { CoreFeatures } from "./_components/core-features"
import { Faqs } from "./_components/faqs"
import { Hero } from "./_components/hero"
import { HowItWorks } from "./_components/how-it-works"
import { Numbers } from "./_components/numbers"
import { PlatformPreview } from "./_components/platform-preview"
import { ProblemSolution } from "./_components/problem-solution"
import { ReadyToBuildCTA } from "./_components/ready-to-build-cta"
import { Testimonials } from "./_components/testimonials"
import { TrustedBy } from "./_components/trusted-by"
import { WhyUs } from "./_components/why-us"

export default function LandingPage() {
  return (
    <div className="py-16 space-y-24 bg-muted/40">
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <CoreFeatures />
      <TrustedBy />
      <Benefits />
      <PlatformPreview />
      <WhyUs />
      <Numbers />
      <Testimonials />
      <ReadyToBuildCTA />
      <Faqs />
      <ContactUs />
    </div>
  )
}
