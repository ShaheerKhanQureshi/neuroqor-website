"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const industries = [
  { value: "", label: "Select industry" },
  { value: "telecom", label: "Telecom" },
  { value: "government", label: "Government" },
  { value: "banking", label: "Banking" },
  { value: "other", label: "Other" },
]

const environments = [
  { value: "", label: "Select environment" },
  { value: "open", label: "Open Network" },
  { value: "restricted", label: "Restricted Connectivity" },
  { value: "airgapped", label: "Air-Gapped" },
]

const interests = [
  { id: "ai-infrastructure", label: "AI Infrastructure" },
  { id: "sovereign-deployments", label: "Sovereign Deployments" },
  { id: "observability", label: "Observability & Operations" },
  { id: "quantum-readiness", label: "Quantum Readiness" },
  { id: "cyber-fusion", label: "Cyber Fusion Center" },
  { id: "dark-soc", label: "Dark SOC" },
  { id: "threat-intel", label: "Threat Intelligence & OSINT" },
  { id: "dfir", label: "DFIR Readiness" },
]

interface FormData {
  fullName: string
  email: string
  company: string
  industry: string
  environment: string
  interests: string[]
  message: string
  consent: boolean
}

interface FormErrors {
  fullName?: string
  email?: string
  company?: string
  message?: string
  consent?: string
}

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    industry: "",
    environment: "",
    interests: [],
    message: "",
    consent: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

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

  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {}

    if (!data.fullName.trim()) {
      newErrors.fullName = "Please provide your first and last name."
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address."
    }

    if (!data.company.trim()) {
      newErrors.company = "Company/Organization is required."
    }

    if (!data.message.trim()) {
      newErrors.message = "Please describe your requirements or questions."
    }

    if (!data.consent) {
      newErrors.consent = "Please consent to data processing."
    }

    return newErrors
  }

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    setErrors(validate(formData))
  }

  const handleChange = (field: keyof FormData, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (touched[field]) {
      setErrors(validate({ ...formData, [field]: value }))
    }
  }

  const handleInterestToggle = (interestId: string) => {
    const newInterests = formData.interests.includes(interestId)
      ? formData.interests.filter((i) => i !== interestId)
      : [...formData.interests, interestId]
    handleChange("interests", newInterests)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate(formData)
    setErrors(validationErrors)
    setTouched({
      fullName: true,
      email: true,
      company: true,
      message: true,
      consent: true,
    })

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid - in production this would submit to an API
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-[#1FB6C1]/10 flex items-center justify-center mx-auto mb-6">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M10 16L14 20L22 12" stroke="#1FB6C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-[#111827] mb-4">Request received</h2>
          <p className="text-[#6B7280] leading-relaxed">
            Thank you for contacting NeuroQor. A solution architect will respond within one business day.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-2 fade-up">
            <h2 className="text-2xl font-semibold text-[#111827] mb-2">Send us a message</h2>
            <p className="text-[#6B7280] mb-8">
              Fill out the form and a NeuroQor architect will respond within one business day. All fields marked with * are required.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-[#111827] mb-2">
                  Full name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  onBlur={() => handleBlur("fullName")}
                  className={cn(
                    "w-full px-4 py-3 border rounded-md text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1FB6C1]/50 focus:border-[#1FB6C1] transition-colors",
                    touched.fullName && errors.fullName ? "border-red-500" : "border-gray-300"
                  )}
                  placeholder="First and last name"
                />
                {touched.fullName && errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                )}
                <p className="mt-1 text-xs text-[#9CA3AF]">Please provide your first and last name.</p>
              </div>

              {/* Work Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#111827] mb-2">
                  Work email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className={cn(
                    "w-full px-4 py-3 border rounded-md text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1FB6C1]/50 focus:border-[#1FB6C1] transition-colors",
                    touched.email && errors.email ? "border-red-500" : "border-gray-300"
                  )}
                  placeholder="you@company.com"
                />
                {touched.email && errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
                <p className="mt-1 text-xs text-[#9CA3AF]">We will only use your email to respond to your request.</p>
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#111827] mb-2">
                  Company/Organization *
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  onBlur={() => handleBlur("company")}
                  className={cn(
                    "w-full px-4 py-3 border rounded-md text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1FB6C1]/50 focus:border-[#1FB6C1] transition-colors",
                    touched.company && errors.company ? "border-red-500" : "border-gray-300"
                  )}
                  placeholder="Your organization"
                />
                {touched.company && errors.company && (
                  <p className="mt-1 text-sm text-red-500">{errors.company}</p>
                )}
                <p className="mt-1 text-xs text-[#9CA3AF]">Your employer or organization name.</p>
              </div>

              {/* Industry & Environment */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-[#111827] mb-2">
                    Industry
                  </label>
                  <select
                    id="industry"
                    value={formData.industry}
                    onChange={(e) => handleChange("industry", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#1FB6C1]/50 focus:border-[#1FB6C1] transition-colors bg-white"
                  >
                    {industries.map((ind) => (
                      <option key={ind.value} value={ind.value}>{ind.label}</option>
                    ))}
                  </select>
                  <p className="mt-1 text-xs text-[#9CA3AF]">Select the sector that best describes your organization.</p>
                </div>
                <div>
                  <label htmlFor="environment" className="block text-sm font-medium text-[#111827] mb-2">
                    Deployment environment
                  </label>
                  <select
                    id="environment"
                    value={formData.environment}
                    onChange={(e) => handleChange("environment", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#1FB6C1]/50 focus:border-[#1FB6C1] transition-colors bg-white"
                  >
                    {environments.map((env) => (
                      <option key={env.value} value={env.value}>{env.label}</option>
                    ))}
                  </select>
                  <p className="mt-1 text-xs text-[#9CA3AF]">Choose the environment in which your workloads operate.</p>
                </div>
              </div>

              {/* Areas of Interest */}
              <div>
                <label className="block text-sm font-medium text-[#111827] mb-3">
                  Areas of interest
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {interests.map((interest) => (
                    <label
                      key={interest.id}
                      className={cn(
                        "flex items-center gap-3 p-3 border rounded-md cursor-pointer transition-colors",
                        formData.interests.includes(interest.id)
                          ? "border-[#1FB6C1] bg-[#1FB6C1]/5"
                          : "border-gray-200 hover:border-gray-300"
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest.id)}
                        onChange={() => handleInterestToggle(interest.id)}
                        className="w-4 h-4 text-[#1FB6C1] border-gray-300 rounded focus:ring-[#1FB6C1]"
                      />
                      <span className="text-sm text-[#111827]">{interest.label}</span>
                    </label>
                  ))}
                </div>
                <p className="mt-2 text-xs text-[#9CA3AF]">Select the topics you wish to discuss.</p>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#111827] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  rows={5}
                  className={cn(
                    "w-full px-4 py-3 border rounded-md text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1FB6C1]/50 focus:border-[#1FB6C1] transition-colors resize-none",
                    touched.message && errors.message ? "border-red-500" : "border-gray-300"
                  )}
                  placeholder="Describe your requirements or questions..."
                />
                {touched.message && errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Consent */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => handleChange("consent", e.target.checked)}
                    className="w-4 h-4 mt-1 text-[#1FB6C1] border-gray-300 rounded focus:ring-[#1FB6C1]"
                  />
                  <span className="text-sm text-[#6B7280]">
                    I consent to NeuroQor storing my submitted information so they can respond to my inquiry. *
                  </span>
                </label>
                {touched.consent && errors.consent && (
                  <p className="mt-1 text-sm text-red-500">{errors.consent}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-[#1FB6C1] text-[#0B1F33] font-semibold rounded-md hover:bg-[#17A2AD] transition-all duration-200 hover:-translate-y-0.5 btn-press"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="fade-up delay-100">
            <div className="sticky top-32">
              <h3 className="text-lg font-semibold text-[#111827] mb-6">Other ways to reach us</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-[#111827] mb-1">Email</p>
                  <a href="mailto:info@neuroqor.com" className="text-[#1FB6C1] hover:underline">
                    info@neuroqor.com
                  </a>
                </div>

                <div>
                  <p className="text-sm font-medium text-[#111827] mb-1">Address</p>
                  <p className="text-[#6B7280] text-sm">
                    Office #614, AL Mustafa Tower,<br />
                    F-10 Markaz, Islamabad
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-[#111827] mb-1">Support</p>
                  <p className="text-[#6B7280] text-sm">
                    For existing customers, please contact your engagement manager or support representative.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-[#F4F6F8] rounded-lg">
                <p className="text-xs text-[#6B7280]">
                  Your data will be processed according to our privacy policy. We do not share personal information with partners or third parties without consent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
