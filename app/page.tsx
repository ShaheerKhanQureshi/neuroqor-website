import Link from "next/link"
import HeroVisual from "@/components/hero-visual"
import TwoPillars from "@/components/two-pillars"
import SovereignSection from "@/components/sovereign-section"
import ObservabilitySection from "@/components/observability-section"
import CyberFusionSection from "@/components/cyber-fusion-section"
import PartnerStrip from "@/components/partner-strip"
import FinalCTA from "@/components/final-cta"
import HeroAnimationWrapper from "@/components/hero-animation-wrapper"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#0B1F33] pt-24 pb-20 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="heroGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1FB6C1" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-12rem)]">
            {/* Text Content */}
            <HeroAnimationWrapper>
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight text-balance hero-title">
                  Integration without compromise
                </h1>
                <p className="text-lg md:text-xl text-[#9CA3AF] leading-relaxed max-w-xl hero-subtitle">
                  AI & quantum platforms engineered for regulated environments, backed by security operations you can trust.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 hero-buttons">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1FB6C1] text-[#0B1F33] font-semibold rounded-md hover:bg-[#17A2AD] transition-all duration-200 hover:-translate-y-0.5 btn-press group"
                  >
                    Talk to an Architect
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <Link
                    href="/contact?type=architecture"
                    className="inline-flex items-center justify-center px-6 py-3.5 border border-[#1FB6C1] text-[#1FB6C1] font-semibold rounded-md hover:bg-[#1FB6C1]/10 transition-colors btn-press"
                  >
                    Request a Reference Architecture
                  </Link>
                </div>
              </div>
            </HeroAnimationWrapper>

            {/* Hero Visual */}
            <div className="hidden lg:flex justify-center items-center hero-visual">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Two Pillars Section */}
      <TwoPillars />

      {/* Sovereign Deployments */}
      <SovereignSection />

      {/* Observability & Day-2 */}
      <ObservabilitySection />

      {/* Cyber Fusion Center */}
      <CyberFusionSection />

      {/* Partner Strip */}
      <PartnerStrip />

      {/* Final CTA */}
      <FinalCTA />
    </>
  )
}
