"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const steps = [
  {
    id: "assess",
    title: "Assess",
    number: "01",
    content: "We start with a structured assessment of your current infrastructure, security posture and regulatory context. This includes AI workload sizing, cryptographic inventory for PQC planning, threat landscape evaluation and incident readiness review.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 10V14L17 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 18L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "design",
    title: "Design",
    number: "02",
    content: "Using assessment findings, we design architectures that align with your performance, sovereignty and security requirements. This covers compute sizing, fabric selection, storage tiers, network segmentation and operational tooling. For security, we design fusion centers, SOC workflows and evidence pipelines.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="16" y="4" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="4" y="16" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="16" y="16" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="12" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
        <line x1="8" y1="12" x2="8" y2="16" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
      </svg>
    ),
  },
  {
    id: "build",
    title: "Build",
    number: "03",
    content: "We implement and validate the designed architecture, coordinating with your teams and our partners. For sovereign environments, we manage transfer processes and migration clusters. Security controls, monitoring and automation are configured and tested.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 24L14 4L24 24H4Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M8 20L14 10L20 20" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" fill="none"/>
      </svg>
    ),
  },
  {
    id: "operate",
    title: "Operate",
    number: "04",
    content: "Once live, we provide Day-2 operations: proactive monitoring, automation, self-healing and optimization. Our dark SOC and cyber fusion center teams handle alert triage, incident response and continuous intelligence. Regular reviews ensure the platform meets SLOs and remains compliant.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 8V14L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="2" fill="currentColor"/>
      </svg>
    ),
  },
]

export default function ApproachTimeline() {
  const [activeStep, setActiveStep] = useState("assess")
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

  const currentStep = steps.find((s) => s.id === activeStep)

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] mb-6">
            Our methodology
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            A systematic approach ensures predictable outcomes and continuous improvement.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block fade-up delay-100">
          {/* Timeline Steps */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200" />
            <div 
              className="absolute top-6 left-0 h-0.5 bg-[#1FB6C1] transition-all duration-500"
              style={{ 
                width: `${(steps.findIndex(s => s.id === activeStep) / (steps.length - 1)) * 100}%` 
              }}
            />

            {/* Steps */}
            <div className="relative grid grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const isActive = step.id === activeStep
                const isPast = steps.findIndex(s => s.id === activeStep) >= index

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className="text-left group"
                  >
                    {/* Step Marker */}
                    <div className="flex flex-col items-center mb-6">
                      <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 relative z-10",
                        isActive ? "bg-[#1FB6C1] text-[#0B1F33]" : isPast ? "bg-[#1FB6C1] text-[#0B1F33]" : "bg-gray-200 text-[#6B7280] group-hover:bg-gray-300"
                      )}>
                        {step.icon}
                      </div>
                    </div>

                    {/* Step Label */}
                    <div className="text-center">
                      <span className={cn(
                        "text-xs font-medium",
                        isActive ? "text-[#1FB6C1]" : "text-[#9CA3AF]"
                      )}>
                        {step.number}
                      </span>
                      <h3 className={cn(
                        "text-lg font-semibold transition-colors",
                        isActive ? "text-[#111827]" : "text-[#6B7280] group-hover:text-[#111827]"
                      )}>
                        {step.title}
                      </h3>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Content */}
          {currentStep && (
            <div className="mt-16 p-8 bg-[#F4F6F8] rounded-xl">
              <p className="text-[#6B7280] leading-relaxed max-w-3xl">
                {currentStep.content}
              </p>
            </div>
          )}
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6 fade-up delay-100">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative pl-8 pb-8 border-l-2 border-gray-200 last:border-l-0 last:pb-0"
            >
              {/* Step marker */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-[#1FB6C1] flex items-center justify-center text-[#0B1F33]">
                {step.icon}
              </div>

              <div className="ml-6">
                <span className="text-xs font-medium text-[#1FB6C1]">{step.number}</span>
                <h3 className="text-xl font-semibold text-[#111827] mb-3">{step.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
