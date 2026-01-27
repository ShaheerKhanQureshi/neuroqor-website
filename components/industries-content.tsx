"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const industries = [
  {
    id: "telecom",
    title: "Telecom",
    subtitle: "Performance and resilience",
    content: "Carriers require low-latency AI workloads and constant uptime. Our AI infrastructure delivers predictable throughput and scales with subscriber growth. Sovereign deployment options support carrier-grade isolation where spectrum data or lawful intercept capabilities necessitate on-premises control. Observability and dark SOC services reduce mean time to detect by automating triage and enabling analysts to focus on network-specific threats.",
    capabilities: [
      "Low-latency AI workloads for real-time decisions",
      "Sovereign deployments for carrier-grade isolation",
      "Dark SOC for automated triage and detection",
      "Scalable infrastructure for subscriber growth",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4V28M8 8V24M24 8V24M4 12V20M28 12V20" stroke="#1FB6C1" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    bgPattern: (
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 400 300">
        {/* Network topology pattern */}
        <circle cx="100" cy="150" r="30" stroke="#1FB6C1" strokeWidth="1" fill="none"/>
        <circle cx="200" cy="80" r="25" stroke="#1FB6C1" strokeWidth="1" fill="none"/>
        <circle cx="300" cy="150" r="30" stroke="#1FB6C1" strokeWidth="1" fill="none"/>
        <circle cx="200" cy="220" r="25" stroke="#1FB6C1" strokeWidth="1" fill="none"/>
        <line x1="130" y1="150" x2="175" y2="105" stroke="#1FB6C1" strokeWidth="1"/>
        <line x1="225" y1="105" x2="270" y2="150" stroke="#1FB6C1" strokeWidth="1"/>
        <line x1="130" y1="150" x2="175" y2="195" stroke="#1FB6C1" strokeWidth="1"/>
        <line x1="225" y1="195" x2="270" y2="150" stroke="#1FB6C1" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    id: "government",
    title: "Government",
    subtitle: "Sovereignty and compliance",
    content: "Government programs demand sovereign deployments and rigorous security controls. We design air-gapped and restricted-connectivity environments to protect sensitive data. Our quantum readiness program helps agencies adopt NIST's PQC standards. The cyber fusion center integrates cross-agency intelligence and incident response to improve collaboration and reduce alert fatigue.",
    capabilities: [
      "Air-gapped and restricted-connectivity environments",
      "Quantum readiness aligned with NIST PQC standards",
      "Cross-agency intelligence integration",
      "Rigorous security controls for sensitive data",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L4 10V16C4 22 9 27 16 28C23 27 28 22 28 16V10L16 4Z" stroke="#1FB6C1" strokeWidth="2" fill="none"/>
        <path d="M12 16L15 19L20 13" stroke="#1FB6C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bgPattern: (
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 400 300">
        {/* Secure perimeter grid */}
        <rect x="80" y="60" width="240" height="180" stroke="#1FB6C1" strokeWidth="2" fill="none" strokeDasharray="8 4"/>
        <rect x="120" y="100" width="160" height="100" stroke="#1FB6C1" strokeWidth="1" fill="none"/>
        <line x1="80" y1="150" x2="120" y2="150" stroke="#1FB6C1" strokeWidth="1"/>
        <line x1="280" y1="150" x2="320" y2="150" stroke="#1FB6C1" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    id: "banking",
    title: "Banking",
    subtitle: "Trust and continuous assurance",
    content: "Financial institutions must balance innovation with stringent regulatory requirements. Our AI platforms support model training for fraud detection while meeting governance and audit needs. Dark SOC and threat intelligence capabilities deliver real-time monitoring and enriched context to defend against sophisticated attacks. DFIR readiness and evidence pipelines ensure that digital evidence is preserved and admissible.",
    capabilities: [
      "AI platforms for fraud detection model training",
      "Governance and audit compliance",
      "Real-time threat monitoring and intelligence",
      "DFIR readiness with evidence preservation",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="20" rx="2" stroke="#1FB6C1" strokeWidth="2" fill="none"/>
        <path d="M4 14H28" stroke="#1FB6C1" strokeWidth="2"/>
        <rect x="8" y="18" width="8" height="4" rx="1" stroke="#1FB6C1" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    bgPattern: (
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 400 300">
        {/* Transaction flow graph */}
        <path d="M60 150 L140 100 L220 150 L300 80 L340 120" stroke="#1FB6C1" strokeWidth="2" fill="none"/>
        <circle cx="60" cy="150" r="6" fill="#1FB6C1"/>
        <circle cx="140" cy="100" r="6" fill="#1FB6C1"/>
        <circle cx="220" cy="150" r="6" fill="#1FB6C1"/>
        <circle cx="300" cy="80" r="6" fill="#1FB6C1"/>
        <circle cx="340" cy="120" r="6" fill="#1FB6C1"/>
        <path d="M60 200 L140 220 L220 180 L300 210 L340 190" stroke="#1FB6C1" strokeWidth="1" strokeDasharray="4 4" fill="none"/>
      </svg>
    ),
  },
]

export default function IndustriesContent() {
  const [activeIndustry, setActiveIndustry] = useState("telecom")
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

  const currentIndustry = industries.find((i) => i.id === activeIndustry)

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Industry Tabs */}
        <div className="flex flex-col sm:flex-row gap-2 mb-16 fade-up">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry.id)}
              className={cn(
                "px-6 py-4 rounded-lg text-left transition-all duration-200 border flex-1",
                activeIndustry === industry.id
                  ? "bg-[#0B1F33] text-white border-[#0B1F33]"
                  : "bg-[#F4F6F8] text-[#111827] border-transparent hover:border-[#1FB6C1]/30"
              )}
            >
              <span className="font-semibold block">{industry.title}</span>
              <span className={cn(
                "text-sm",
                activeIndustry === industry.id ? "text-[#9CA3AF]" : "text-[#6B7280]"
              )}>
                {industry.subtitle}
              </span>
            </button>
          ))}
        </div>

        {/* Industry Content */}
        {currentIndustry && (
          <div className="fade-up delay-100">
            <div className="relative rounded-xl bg-[#F4F6F8] p-8 lg:p-12 overflow-hidden">
              {/* Background pattern */}
              {currentIndustry.bgPattern}

              <div className="relative grid lg:grid-cols-2 gap-12 items-start">
                {/* Content */}
                <div>
                  <div className="w-16 h-16 rounded-xl bg-[#0B1F33] flex items-center justify-center mb-6">
                    {currentIndustry.icon}
                  </div>

                  <h2 className="text-3xl font-semibold text-[#111827] mb-2">
                    {currentIndustry.title}
                  </h2>
                  <p className="text-[#1FB6C1] font-medium mb-6">
                    {currentIndustry.subtitle}
                  </p>

                  <p className="text-[#6B7280] leading-relaxed">
                    {currentIndustry.content}
                  </p>
                </div>

                {/* Capabilities */}
                <div className="bg-white rounded-lg p-8 border border-gray-200/80">
                  <h3 className="text-lg font-semibold text-[#111827] mb-6">
                    Key Capabilities
                  </h3>
                  <ul className="space-y-4">
                    {currentIndustry.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5">
                          <path d="M6 10L9 13L14 7" stroke="#1FB6C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-[#6B7280]">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
