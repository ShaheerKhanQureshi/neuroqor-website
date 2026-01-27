"use client"

import React from "react"

import { useEffect, useRef } from "react"

const aiQuantumSections = [
  {
    id: "ai-infrastructure",
    title: "AI Infrastructure Platforms",
    content: "We design and build compute environments optimized for machine learning and quantum workloads. Systems combine GPU/CPU clusters, high-bandwidth fabric and tiered storage to deliver predictable performance. Orchestration frameworks provision, schedule and scale resources, enabling efficient model training and inference.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="#1FB6C1" strokeWidth="1.5"/>
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="#1FB6C1" strokeWidth="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="#1FB6C1" strokeWidth="1.5"/>
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="#1FB6C1" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: "sovereign",
    title: "Sovereign Deployments",
    content: "For customers requiring restricted connectivity, we implement on-premises, private-cloud and air-gapped architectures. Transfer processes, migration clusters and offline image repositories facilitate updates without compromising isolation. Data flows are audited to maintain sovereignty.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L20 7V13C20 17 16 20 12 22C8 20 4 17 4 13V7L12 3Z" stroke="#1FB6C1" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    id: "observability",
    title: "Observability & Platform Operations",
    content: "Our day-2 operations service includes proactive monitoring, automation and continuous optimization. Observability tools collect telemetry to identify issues before they impact users. Self-healing and AI-driven automation reduce mean time to resolution and enforce compliance.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#1FB6C1" strokeWidth="1.5"/>
        <path d="M12 7V12L15 14" stroke="#1FB6C1" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "quantum",
    title: "Quantum Readiness & Post-Quantum Security",
    content: "Quantum computing threatens existing cryptography. We assess cryptographic assets, inventory algorithms and migrate systems to quantum-resistant standards. NIST released PQC standards in 2024 and advises organizations to begin migration. Our program guides you through discovery, inventory, transition planning and implementation.",
    bullets: [
      "Cryptographic discovery and inventory",
      "PQC algorithm selection and implementation",
      "Governance and compliance with transition timelines",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="#1FB6C1" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="8" stroke="#1FB6C1" strokeWidth="1" strokeDasharray="4 3"/>
        <circle cx="12" cy="4" r="1.5" fill="#1FB6C1"/>
        <circle cx="12" cy="20" r="1.5" fill="#1FB6C1"/>
        <circle cx="4" cy="12" r="1.5" fill="#1FB6C1"/>
        <circle cx="20" cy="12" r="1.5" fill="#1FB6C1"/>
      </svg>
    ),
  },
]

const cyberSections = [
  {
    id: "fusion",
    title: "Cyber Fusion Center",
    content: "The Cyber Fusion Center integrates threat intelligence, telemetry, analytics and response into a collaborative function. It emphasises context and coordination so that your teams can act decisively. Core components include threat intelligence integration, unified data access, advanced analytics, automation and incident response collaboration.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#1FB6C1" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="4" stroke="#1FB6C1" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="1" fill="#1FB6C1"/>
      </svg>
    ),
  },
  {
    id: "dark-soc",
    title: "Dark SOC",
    content: "In our dark SOC, AI assists with alert clustering, enrichment and prioritization, reducing noise and enabling analysts to focus on strategic decisions. Roles are clearly delineated: AI performs low-risk, high-volume tasks while humans supervise and validate actions. Accountability and reviewability are mandatory.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="#1FB6C1" strokeWidth="1.5"/>
        <circle cx="8" cy="12" r="2" stroke="#1FB6C1" strokeWidth="1"/>
        <path d="M12 10H18M12 14H16" stroke="#1FB6C1" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "threat-intel",
    title: "Threat Intelligence & OSINT",
    content: "Threat intelligence transforms raw data into actionable insight. We collect information from OSINT, proprietary feeds, dark-web monitoring and internal telemetry. Analysts contextualize this data to understand actor motivations, tactics and vulnerabilities, enabling proactive defence and risk prioritization.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#1FB6C1" strokeWidth="1.5"/>
        <path d="M16 16L20 20" stroke="#1FB6C1" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "dfir",
    title: "Digital Forensics & Incident Response (DFIR)",
    content: "Our DFIR readiness program prepares your organization to handle incidents and preserve evidence. Digital forensics officers follow a strict chain-of-custody to protect digital evidence, from collection and examination to analysis and reporting. Incident response plans include preparation, identification, containment, eradication and recovery. Evidence pipelines, automated logs and chain-of-custody documentation ensure forensic readiness and compliance.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6C5 2 4 3 4 4V20C4 21 5 22 6 22H18C19 22 20 21 20 20V8L14 2Z" stroke="#1FB6C1" strokeWidth="1.5"/>
        <path d="M14 2V8H20" stroke="#1FB6C1" strokeWidth="1.5"/>
        <path d="M9 15L11 17L15 13" stroke="#1FB6C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

interface SectionProps {
  id: string
  title: string
  content: string
  bullets?: string[]
  icon: React.ReactNode
  index: number
  isLast: boolean
}

function SolutionSection({ id, title, content, bullets, icon, index, isLast }: SectionProps) {
  return (
    <div
      id={id}
      className={`fade-up delay-${((index % 4) + 1) * 100} scroll-mt-32`}
    >
      <div className="grid lg:grid-cols-[1fr,2fr] gap-8 lg:gap-12">
        {/* Icon & Title */}
        <div>
          <div className="w-14 h-14 rounded-lg bg-[#F4F6F8] flex items-center justify-center mb-4 icon-bounce">
            {icon}
          </div>
          <h3 className="text-2xl font-semibold text-[#111827]">
            {title}
          </h3>
        </div>

        {/* Content */}
        <div>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            {content}
          </p>
          {bullets && (
            <ul className="space-y-2">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3 text-[#6B7280]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1FB6C1] shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Divider */}
      {!isLast && (
        <div className="h-px bg-gray-200 mt-16" />
      )}
    </div>
  )
}

export default function SolutionsContent() {
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* AI & Quantum Infrastructure Pillar */}
        <div className="mb-24">
          <div className="mb-12 fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B1F33] text-white rounded-full text-sm font-medium mb-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              Pillar One
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] mb-4">
              AI & Quantum Infrastructure
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl">
              Enterprise-grade platforms designed for machine learning workloads, sovereign requirements, and quantum-ready security.
            </p>
          </div>

          <div className="space-y-16">
            {aiQuantumSections.map((section, index) => (
              <SolutionSection
                key={section.id}
                {...section}
                index={index}
                isLast={index === aiQuantumSections.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Divider between pillars */}
        <div className="relative my-24">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#1FB6C1]/20"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-white px-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#1FB6C1]">
                <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4"/>
                <circle cx="16" cy="16" r="6" fill="currentColor" opacity="0.2"/>
                <circle cx="16" cy="16" r="3" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Cybersecurity & Intelligence Pillar */}
        <div>
          <div className="mb-12 fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B1F33] text-white rounded-full text-sm font-medium mb-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L20 7V13C20 17 16 20 12 22C8 20 4 17 4 13V7L12 3Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
              Pillar Two
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] mb-4">
              Cybersecurity & Intelligence
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl">
              Integrated security operations combining human expertise with AI-augmented capabilities for comprehensive threat management.
            </p>
          </div>

          <div className="space-y-16">
            {cyberSections.map((section, index) => (
              <SolutionSection
                key={section.id}
                {...section}
                index={index}
                isLast={index === cyberSections.length - 1}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
