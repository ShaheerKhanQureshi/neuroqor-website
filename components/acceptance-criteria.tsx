"use client"

import { useEffect, useRef } from "react"

const criteria = [
  {
    title: "Performance benchmarks",
    description: "Throughput, latency and response time targets",
  },
  {
    title: "Security posture targets",
    description: "No unpatched critical vulnerabilities",
  },
  {
    title: "Auditability",
    description: "Evidence pipelines and chain-of-custody documentation",
  },
  {
    title: "Compliance",
    description: "Alignment with relevant standards (e.g., NIST PQC transition timeline)",
  },
  {
    title: "Operational readiness",
    description: "Runbooks, SLOs and training completed",
  },
]

export default function AcceptanceCriteria() {
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
    <section ref={sectionRef} className="py-24 bg-[#F4F6F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1FB6C1]/10 text-[#1FB6C1] text-sm font-medium rounded-full mb-6">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 8L7.5 9.5L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              Reusable Module
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] mb-6">
              Acceptance criteria
            </h2>

            <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
              Each engagement defines measurable criteria for success. Success is measured against these criteria before handover. Our design, build and operate services stand up to regulatory and operational scrutiny.
            </p>

            <div className="p-6 bg-white rounded-lg border border-gray-200/80">
              <p className="text-[#111827] font-medium mb-2">Delivery built for scrutiny</p>
              <p className="text-sm text-[#6B7280]">
                Every step is documented, auditable and aligned with industry standards.
              </p>
            </div>
          </div>

          {/* Criteria List */}
          <div className="space-y-4 fade-up delay-100">
            {criteria.map((item, index) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 bg-white rounded-lg border border-gray-200/80 hover:border-[#1FB6C1]/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0B1F33] flex items-center justify-center text-[#1FB6C1] shrink-0">
                  <span className="text-sm font-semibold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#6B7280]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
