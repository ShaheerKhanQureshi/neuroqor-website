"use client"

import { useEffect, useRef } from "react"

const partners = [
  {
    name: "ID Quantique & IonQ",
    description: "Quantum hardware and PQC innovations",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="#1FB6C1" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="8" stroke="#1FB6C1" strokeWidth="1" strokeDasharray="4 3"/>
        <circle cx="12" cy="4" r="1.5" fill="#1FB6C1"/>
        <circle cx="12" cy="20" r="1.5" fill="#1FB6C1"/>
      </svg>
    ),
  },
  {
    name: "Dell, Cisco & H3C",
    description: "Compute, fabric and storage platforms",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="6" rx="1" stroke="#1FB6C1" strokeWidth="1.5"/>
        <rect x="3" y="14" width="18" height="6" rx="1" stroke="#1FB6C1" strokeWidth="1.5"/>
        <circle cx="6" cy="7" r="1" fill="#1FB6C1"/>
        <circle cx="6" cy="17" r="1" fill="#1FB6C1"/>
      </svg>
    ),
  },
  {
    name: "Trend Micro",
    description: "Threat detection and antivirus technologies",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L20 7V13C20 17 16 20 12 22C8 20 4 17 4 13V7L12 3Z" stroke="#1FB6C1" strokeWidth="1.5" fill="none"/>
        <path d="M9 12L11 14L15 10" stroke="#1FB6C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function AboutContent() {
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
        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
          <div className="fade-up">
            <h2 className="text-3xl font-semibold text-[#111827] mb-6">Mission</h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              NeuroQor's mission is to build and operate AI and quantum infrastructure that is inherently secure. We believe that capability and security must co-evolve—there is no innovation without trust.
            </p>
          </div>
          <div className="fade-up delay-100">
            <h2 className="text-3xl font-semibold text-[#111827] mb-6">Vision</h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Our vision is to enable regulated industries to harness AI and quantum computing while maintaining sovereignty, privacy and operational assurance.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-24 fade-up delay-200">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-[#111827] mb-6">Origins</h2>
            <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
              NeuroQor was founded by engineers and security practitioners who saw a gap between high-performance computing and real-world operational requirements. We set out to build systems that meet stringent regulatory and availability needs.
            </p>
            <p className="text-sm text-[#9CA3AF] italic">
              Note: Founding year and key milestones to be added.
            </p>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-24 fade-up delay-300">
          <div className="bg-[#F4F6F8] rounded-xl p-8 lg:p-12">
            <h2 className="text-3xl font-semibold text-[#111827] mb-6">Leadership Philosophy</h2>
            <p className="text-lg text-[#6B7280] leading-relaxed mb-8 max-w-3xl">
              Our leadership team blends expertise in AI infrastructure, quantum research and cybersecurity operations. They champion evidence-based decision-making and continuous improvement.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-gray-200/80">
                  <div className="w-16 h-16 rounded-full bg-gray-200 mb-4" />
                  <div className="h-4 w-24 bg-gray-200 rounded mb-2" />
                  <div className="h-3 w-32 bg-gray-100 rounded" />
                  <p className="text-xs text-[#9CA3AF] mt-4 italic">Leadership bio placeholder</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner Ecosystem */}
        <div className="mb-24 fade-up delay-400">
          <h2 className="text-3xl font-semibold text-[#111827] mb-6">Partner Ecosystem</h2>
          <p className="text-lg text-[#6B7280] leading-relaxed mb-10 max-w-3xl">
            NeuroQor collaborates with a select group of partners to deliver integrated solutions. These partnerships are instrumental in delivering reliable systems and staying ahead of emerging threats.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-[#F4F6F8] rounded-lg p-6 border border-transparent hover:border-[#1FB6C1]/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0B1F33] flex items-center justify-center mb-4">
                  {partner.icon}
                </div>
                <h3 className="font-semibold text-[#111827] mb-2">{partner.name}</h3>
                <p className="text-sm text-[#6B7280]">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Responsibility */}
        <div className="fade-up delay-400">
          <div className="border-l-4 border-[#1FB6C1] pl-6 lg:pl-8">
            <h2 className="text-2xl font-semibold text-[#111827] mb-4">Responsibility</h2>
            <p className="text-[#6B7280] leading-relaxed max-w-3xl">
              We are committed to ethical AI, environmental sustainability and community engagement. Our operations adhere to applicable regulations and we seek to minimise our environmental impact through efficient infrastructure design and responsible sourcing.
            </p>
            <p className="text-sm text-[#9CA3AF] mt-4 italic">
              Specifics to be added upon internal validation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
