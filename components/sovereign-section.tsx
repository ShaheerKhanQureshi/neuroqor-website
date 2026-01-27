"use client"

import { useEffect, useRef } from "react"

export default function SovereignSection() {
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 fade-up">
              <div className="w-12 h-12 rounded-lg bg-[#1FB6C1]/10 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 3L24 7V14C24 20 20 24 14 26C8 24 4 20 4 14V7L14 3Z" stroke="#1FB6C1" strokeWidth="1.5" fill="none"/>
                  <path d="M14 8V18M10 14H18" stroke="#1FB6C1" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-white fade-up delay-100">
              Deployments for sovereign and regulated environments
            </h2>

            <p className="text-lg text-[#9CA3AF] leading-relaxed fade-up delay-200">
              Sensitive workloads often require isolation. We design on-premises and air-gapped patterns that maintain high availability while meeting data-sovereignty requirements. Transfer processes, migration clusters and image repositories are structured to support updates and changes without external connectivity.
            </p>

            <ul className="space-y-3 fade-up delay-300">
              {[
                "On-premises and private-cloud architectures",
                "Air-gapped environments with controlled transfers",
                "Audited data flows for sovereignty compliance",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#9CA3AF]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M6 10L9 13L14 7" stroke="#1FB6C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="fade-up delay-200 hidden lg:block">
            <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              {/* Grid background */}
              <defs>
                <pattern id="sovereignGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1FB6C1" strokeOpacity="0.05"/>
                </pattern>
              </defs>
              <rect width="400" height="300" fill="url(#sovereignGrid)" />

              {/* Perimeter */}
              <rect x="40" y="40" width="320" height="220" rx="4" stroke="#1FB6C1" strokeWidth="1.5" strokeOpacity="0.4" fill="none" strokeDasharray="8 4"/>
              
              {/* Inner secure zone */}
              <rect x="80" y="80" width="240" height="140" rx="4" stroke="#1FB6C1" strokeWidth="1.5" strokeOpacity="0.8" fill="#1FB6C1" fillOpacity="0.05"/>
              
              {/* Server nodes */}
              <rect x="100" y="110" width="50" height="80" rx="2" stroke="#1FB6C1" strokeWidth="1" fill="#123C66"/>
              <rect x="170" y="110" width="50" height="80" rx="2" stroke="#1FB6C1" strokeWidth="1" fill="#123C66"/>
              <rect x="240" y="110" width="50" height="80" rx="2" stroke="#1FB6C1" strokeWidth="1" fill="#123C66"/>
              
              {/* Node details */}
              <line x1="110" y1="130" x2="140" y2="130" stroke="#1FB6C1" strokeOpacity="0.6" strokeWidth="1"/>
              <line x1="110" y1="145" x2="140" y2="145" stroke="#1FB6C1" strokeOpacity="0.4" strokeWidth="1"/>
              <line x1="110" y1="160" x2="140" y2="160" stroke="#1FB6C1" strokeOpacity="0.4" strokeWidth="1"/>
              
              <line x1="180" y1="130" x2="210" y2="130" stroke="#1FB6C1" strokeOpacity="0.6" strokeWidth="1"/>
              <line x1="180" y1="145" x2="210" y2="145" stroke="#1FB6C1" strokeOpacity="0.4" strokeWidth="1"/>
              <line x1="180" y1="160" x2="210" y2="160" stroke="#1FB6C1" strokeOpacity="0.4" strokeWidth="1"/>
              
              <line x1="250" y1="130" x2="280" y2="130" stroke="#1FB6C1" strokeOpacity="0.6" strokeWidth="1"/>
              <line x1="250" y1="145" x2="280" y2="145" stroke="#1FB6C1" strokeOpacity="0.4" strokeWidth="1"/>
              <line x1="250" y1="160" x2="280" y2="160" stroke="#1FB6C1" strokeOpacity="0.4" strokeWidth="1"/>

              {/* Connection lines between nodes */}
              <line x1="150" y1="150" x2="170" y2="150" stroke="#1FB6C1" strokeOpacity="0.5" strokeWidth="1"/>
              <line x1="220" y1="150" x2="240" y2="150" stroke="#1FB6C1" strokeOpacity="0.5" strokeWidth="1"/>

              {/* Labels */}
              <text x="200" y="230" fill="#1FB6C1" fontSize="10" fontFamily="Inter, sans-serif" textAnchor="middle" opacity="0.6">
                Sovereign Infrastructure
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
