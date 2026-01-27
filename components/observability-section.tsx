"use client"

import { useEffect, useRef } from "react"

export default function ObservabilitySection() {
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <div className="fade-up order-2 lg:order-1 hidden lg:block">
            <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              {/* Flow diagram: Logs -> Metrics -> Traces */}
              
              {/* Box 1: Logs */}
              <rect x="20" y="100" width="100" height="80" rx="4" stroke="#1FB6C1" strokeWidth="1.5" fill="#F4F6F8"/>
              <text x="70" y="145" fill="#111827" fontSize="12" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="500">
                Logs
              </text>
              <line x1="40" y1="160" x2="100" y2="160" stroke="#1FB6C1" strokeOpacity="0.3" strokeWidth="1"/>
              <line x1="40" y1="168" x2="80" y2="168" stroke="#1FB6C1" strokeOpacity="0.2" strokeWidth="1"/>
              
              {/* Arrow 1 */}
              <path d="M120 140 L150 140" stroke="#1FB6C1" strokeWidth="1.5" strokeOpacity="0.6"/>
              <path d="M145 135 L155 140 L145 145" stroke="#1FB6C1" strokeWidth="1.5" strokeOpacity="0.6" fill="none"/>

              {/* Box 2: Metrics */}
              <rect x="155" y="100" width="100" height="80" rx="4" stroke="#1FB6C1" strokeWidth="1.5" fill="#F4F6F8"/>
              <text x="205" y="145" fill="#111827" fontSize="12" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="500">
                Metrics
              </text>
              {/* Mini chart */}
              <polyline 
                points="175,165 185,155 195,160 205,150 215,158 225,148 235,155" 
                stroke="#1FB6C1" 
                strokeWidth="1.5" 
                fill="none"
                strokeOpacity="0.6"
              />

              {/* Arrow 2 */}
              <path d="M255 140 L285 140" stroke="#1FB6C1" strokeWidth="1.5" strokeOpacity="0.6"/>
              <path d="M280 135 L290 140 L280 145" stroke="#1FB6C1" strokeWidth="1.5" strokeOpacity="0.6" fill="none"/>

              {/* Box 3: Traces */}
              <rect x="290" y="100" width="100" height="80" rx="4" stroke="#1FB6C1" strokeWidth="1.5" fill="#F4F6F8"/>
              <text x="340" y="145" fill="#111827" fontSize="12" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="500">
                Traces
              </text>
              {/* Trace lines */}
              <line x1="310" y1="158" x2="370" y2="158" stroke="#1FB6C1" strokeOpacity="0.5" strokeWidth="2"/>
              <line x1="320" y1="166" x2="360" y2="166" stroke="#1FB6C1" strokeOpacity="0.3" strokeWidth="2"/>
              <line x1="330" y1="174" x2="350" y2="174" stroke="#1FB6C1" strokeOpacity="0.2" strokeWidth="2"/>

              {/* Insights output */}
              <path d="M205 200 L205 230" stroke="#1FB6C1" strokeWidth="1.5" strokeOpacity="0.6"/>
              <path d="M200 225 L205 235 L210 225" stroke="#1FB6C1" strokeWidth="1.5" strokeOpacity="0.6" fill="none"/>
              
              <rect x="135" y="240" width="140" height="30" rx="4" stroke="#1FB6C1" strokeWidth="1.5" fill="#1FB6C1" fillOpacity="0.1"/>
              <text x="205" y="260" fill="#1FB6C1" fontSize="11" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="500">
                Actionable Insights
              </text>

              {/* Label */}
              <text x="205" y="60" fill="#6B7280" fontSize="10" fontFamily="Inter, sans-serif" textAnchor="middle">
                Observability Stack
              </text>
            </svg>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-4 fade-up">
              <div className="w-12 h-12 rounded-lg bg-[#1FB6C1]/10 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="10" stroke="#1FB6C1" strokeWidth="1.5" fill="none"/>
                  <path d="M14 8V14L18 16" stroke="#1FB6C1" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] fade-up delay-100">
              Operate with insight
            </h2>

            <p className="text-lg text-[#6B7280] leading-relaxed fade-up delay-200">
              Day-2 operations are where platforms prove their value. Our observability stack collects logs, metrics and traces to provide actionable insights. Automation accelerates remediation and enforces policies. Scalability and cost optimization ensure that resources expand with demand.
            </p>

            <ul className="space-y-3 fade-up delay-300">
              {[
                "Proactive monitoring and anomaly detection",
                "Self-healing automation reduces mean time to resolution",
                "SLO-driven operational behaviors",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#6B7280]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M6 10L9 13L14 7" stroke="#1FB6C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
