"use client"

import { useEffect, useRef } from "react"

const capabilities = [
  {
    title: "Threat Intelligence",
    description: "Actionable insights about adversary motivations and tactics",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#1FB6C1" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="4" stroke="#1FB6C1" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="1" fill="#1FB6C1"/>
      </svg>
    ),
  },
  {
    title: "Security Telemetry",
    description: "Unified data access across enterprise systems",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 18L4 14M8 18V10M12 18V6M16 18V12M20 18V8" stroke="#1FB6C1" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Advanced Analytics",
    description: "AI-driven pattern recognition and correlation",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="#1FB6C1" strokeWidth="1.5"/>
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="#1FB6C1" strokeWidth="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="#1FB6C1" strokeWidth="1.5"/>
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="#1FB6C1" strokeWidth="1.5"/>
        <line x1="10" y1="6.5" x2="14" y2="6.5" stroke="#1FB6C1" strokeWidth="1" strokeDasharray="2 2"/>
        <line x1="6.5" y1="10" x2="6.5" y2="14" stroke="#1FB6C1" strokeWidth="1" strokeDasharray="2 2"/>
      </svg>
    ),
  },
  {
    title: "Automated Response",
    description: "Orchestrated workflows for rapid containment",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3V8M12 16V21M8 12H3M21 12H16" stroke="#1FB6C1" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" stroke="#1FB6C1" strokeWidth="1.5"/>
      </svg>
    ),
  },
]

export default function CyberFusionSection() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#F4F6F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] mb-6 fade-up">
            Unified security operations
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed fade-up delay-100">
            A Cyber Fusion Center brings together threat intelligence, telemetry, analytics and response workflows into a single operating model. By integrating data and context from across the enterprise, we help your teams move from reactive alert handling to proactive defence.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className={`fade-up delay-${(index + 1) * 100} bg-white rounded-lg p-6 border border-gray-200/80 hover:border-[#1FB6C1]/30 hover:shadow-sm transition-all duration-300`}
            >
              <div className="w-12 h-12 rounded-lg bg-[#0B1F33] flex items-center justify-center mb-4">
                {cap.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mb-2">
                {cap.title}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
