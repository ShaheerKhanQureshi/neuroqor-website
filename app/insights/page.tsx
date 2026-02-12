import type { Metadata } from "next"
import Link from "next/link"
import InsightsContent from "@/components/insights-content"


export const metadata: Metadata = {
  title: "NeuroQor Insights - Thought Leadership on AI, Quantum and Security",
  description: "Read NeuroQor's latest insights on AI infrastructure, quantum readiness, sovereign deployments and cybersecurity. Stay informed with our technical articles and analysis.",
}

export default function InsightsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0B1F33]">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="insightsGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1FB6C1" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#insightsGrid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight mb-6">
              Insights
            </h1>
            <p className="text-lg md:text-xl text-[#9CA3AF] leading-relaxed mb-8">
              Evidence-based perspectives on AI, quantum and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#subscribe"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1FB6C1] text-[#0B1F33] font-semibold rounded-md hover:bg-[#17A2AD] transition-all duration-200 hover:-translate-y-0.5 group"
              >
                Subscribe for Insights
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-[#1FB6C1] text-[#1FB6C1] font-semibold rounded-md hover:bg-[#1FB6C1]/10 transition-colors"
              >
                Talk to an Architect
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Content */}
      <InsightsContent />


    </>
  )
}
