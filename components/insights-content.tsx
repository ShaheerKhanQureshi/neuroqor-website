"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const insights = [
  {
    id: 1,
    title: "Operationalizing Day-2 for AI Platforms",
    abstract: "Why proactive monitoring, automation and optimization are critical for ongoing performance. Explore the essential practices that ensure AI platforms continue to deliver value after initial deployment.",
    category: "Operations",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Preparing for Post-Quantum Cryptography",
    abstract: "NIST released PQC standards in 2024 and advises organizations to begin migration. Learn the steps to inventory and migrate cryptographic assets before quantum computing threatens current encryption.",
    category: "Quantum",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "The Rise of the Cyber Fusion Center",
    abstract: "How integrating threat intelligence and response workflows improves detection and collaboration. Discover the operating model that breaks down silos and enables intelligence-driven security.",
    category: "Security",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Designing Air-Gapped AI Environments",
    abstract: "Transfer processes, migration clusters and image repositories for isolated deployments. A technical guide to maintaining AI infrastructure without external connectivity.",
    category: "Infrastructure",
    readTime: "15 min read",
  },
  {
    id: 5,
    title: "Human-AI Collaboration in the SOC",
    abstract: "How AI can assist with triage and enrichment while analysts retain oversight. The balance between automation and human judgment in modern security operations.",
    category: "Security",
    readTime: "9 min read",
  },
  {
    id: 6,
    title: "Evidence Pipelines and Chain-of-Custody",
    abstract: "DFIR best practices and the importance of preserving evidence through proper processes. Ensure your digital evidence is admissible and available when needed.",
    category: "Forensics",
    readTime: "11 min read",
  },
]

const categories = ["All", "Operations", "Quantum", "Security", "Infrastructure", "Forensics"]

export default function InsightsContent() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
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

  const filteredInsights = activeCategory === "All" 
    ? insights 
    : insights.filter(i => i.category === activeCategory)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
    }
  }

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-3xl mb-16 fade-up">
          <h2 className="text-2xl font-semibold text-[#111827] mb-4">Why insights matter</h2>
          <p className="text-[#6B7280] leading-relaxed">
            Technology is evolving quickly; regulated industries need clear guidance to navigate change. Our insights are concise analyses grounded in evidence. They highlight best practices on infrastructure design, security operations and quantum readiness.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12 fade-up delay-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-[#0B1F33] text-white"
                  : "bg-[#F4F6F8] text-[#6B7280] hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 fade-up delay-200">
          {filteredInsights.map((insight) => (
            <article
              key={insight.id}
              className="group bg-[#F4F6F8] rounded-lg p-6 border border-transparent hover:border-[#1FB6C1]/20 card-lift"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 bg-[#0B1F33] text-[#1FB6C1] text-xs font-medium rounded">
                  {insight.category}
                </span>
                <span className="text-xs text-[#9CA3AF]">{insight.readTime}</span>
              </div>

              <h3 className="text-lg font-semibold text-[#111827] mb-3 group-hover:text-[#1FB6C1] transition-colors">
                {insight.title}
              </h3>

              <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                {insight.abstract}
              </p>

              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1FB6C1] hover:underline"
              >
                Read more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7H11M11 7L8 4M11 7L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {/* Subscribe Section */}
        <div id="subscribe" className="scroll-mt-32 fade-up delay-300">
          <div className="bg-[#0B1F33] rounded-xl p-8 lg:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Subscribe for Insights
              </h3>
              <p className="text-[#9CA3AF] mb-8">
                Receive periodic updates and technical briefs on AI infrastructure, quantum readiness and cybersecurity.
              </p>

              {subscribed ? (
                <p className="text-[#1FB6C1]">Thank you for subscribing. You will receive our next insight soon.</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Work email"
                    required
                    className="flex-1 px-4 py-3 bg-[#123C66] border border-[#1FB6C1]/20 rounded-md text-white placeholder:text-[#6B7280] focus:outline-none focus:border-[#1FB6C1] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#1FB6C1] text-[#0B1F33] font-semibold rounded-md hover:bg-[#17A2AD] transition-colors whitespace-nowrap btn-press"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
