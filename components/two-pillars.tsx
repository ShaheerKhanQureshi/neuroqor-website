"use client"

import { useEffect, useRef } from "react"

const pillars = [
  {
    title: "AI & Quantum Infrastructure",
    description: "We design and build compute environments optimized for machine learning and quantum workloads.",
    items: [
      { label: "Compute", desc: "GPU/CPU clusters for model training" },
      { label: "Fabric", desc: "High-bandwidth interconnects" },
      { label: "Tiered Storage", desc: "Optimized data access patterns" },
      { label: "Orchestration", desc: "Automated provisioning and scaling" },
    ],
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="14" height="14" rx="2" stroke="#1FB6C1" strokeWidth="1.5" fill="none"/>
        <rect x="26" y="8" width="14" height="14" rx="2" stroke="#1FB6C1" strokeWidth="1.5" fill="none"/>
        <rect x="8" y="26" width="14" height="14" rx="2" stroke="#1FB6C1" strokeWidth="1.5" fill="none"/>
        <rect x="26" y="26" width="14" height="14" rx="2" stroke="#1FB6C1" strokeWidth="1.5" fill="none"/>
        <line x1="22" y1="15" x2="26" y2="15" stroke="#1FB6C1" strokeWidth="1" opacity="0.5"/>
        <line x1="22" y1="33" x2="26" y2="33" stroke="#1FB6C1" strokeWidth="1" opacity="0.5"/>
        <line x1="15" y1="22" x2="15" y2="26" stroke="#1FB6C1" strokeWidth="1" opacity="0.5"/>
        <line x1="33" y1="22" x2="33" y2="26" stroke="#1FB6C1" strokeWidth="1" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: "Cybersecurity & Intelligence",
    description: "Integrated security functions—threat intelligence, dark SOC and digital forensics—to protect and monitor platforms.",
    items: [
      { label: "Cyber Fusion Center", desc: "Unified security operations" },
      { label: "Dark SOC", desc: "AI-assisted triage and detection" },
      { label: "Threat Intelligence", desc: "Actionable adversary insights" },
      { label: "DFIR & Evidence", desc: "Chain-of-custody preservation" },
    ],
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6L38 12V24C38 32 32 38 24 42C16 38 10 32 10 24V12L24 6Z" stroke="#1FB6C1" strokeWidth="1.5" fill="none"/>
        <path d="M18 24L22 28L30 20" stroke="#1FB6C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function TwoPillars() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] mb-6">
            AI & Quantum Infrastructure and Cybersecurity & Intelligence
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            NeuroQor delivers two equal pillars. We believe infrastructure and security are inseparable.
          </p>
        </div>

        {/* Two Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`fade-up delay-${(index + 1) * 100} bg-[#F4F6F8] rounded-lg p-8 lg:p-10 border border-transparent hover:border-[#1FB6C1]/20 card-lift`}
            >
              {/* Icon */}
              <div className="mb-6">{pillar.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#111827] mb-3">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                {pillar.description}
              </p>

              {/* Items */}
              <ul className="space-y-4">
                {pillar.items.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1FB6C1] mt-2 shrink-0" />
                    <div>
                      <span className="text-[#111827] font-medium">{item.label}</span>
                      <span className="text-[#6B7280]"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
