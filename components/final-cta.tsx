"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-up")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#0B1F33]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 fade-up">
          Ready to discuss your environment?
        </h2>
        <p className="text-lg text-[#9CA3AF] mb-10 max-w-2xl mx-auto fade-up delay-100">
          Our architects understand the challenges of regulated environments. Start a conversation about your infrastructure and security requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up delay-200">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1FB6C1] text-[#0B1F33] font-semibold rounded-md hover:bg-[#17A2AD] transition-all duration-200 hover:-translate-y-0.5 btn-press group"
          >
            Talk to an Architect
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link
            href="/contact?type=discovery"
            className="inline-flex items-center justify-center px-8 py-4 border border-[#1FB6C1] text-[#1FB6C1] font-semibold rounded-md hover:bg-[#1FB6C1]/10 transition-colors btn-press"
          >
            Schedule a Discovery Session
          </Link>
        </div>
      </div>
    </section>
  )
}
