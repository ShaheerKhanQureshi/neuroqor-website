import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import PartnerStrip from "@/components/partner-strip"

export const metadata: Metadata = {
  title: "Contact NeuroQor - Talk to an Architect",
  description: "Get in touch with NeuroQor's architects and specialists. Submit your inquiry about AI infrastructure, sovereign deployments, observability or cybersecurity services.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0B1F33]">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contactGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1FB6C1" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contactGrid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight mb-6">
              Contact us
            </h1>
            <p className="text-lg md:text-xl text-[#9CA3AF] leading-relaxed">
              We're ready to explore your requirements and challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Partner Strip */}
      <PartnerStrip />
    </>
  )
}
