"use client"

import React from "react"

import Link from "next/link"
import { useState } from "react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/approach", label: "Approach" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/accessibility", label: "Accessibility" },
]

const SHOW_PARTNERS = false

const partners = [
  "ID Quantique",
  "IonQ",
  "Dell",
  "Cisco",
  "H3C",
  "Trend Micro"
]

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
    }
  }

  return (
    <footer className="bg-[#0B1F33] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path
                    d="M24 4L40 10V22C40 32 32 40 24 44C16 40 8 32 8 22V10L24 4Z"
                    stroke="#1FB6C1"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="24" cy="18" r="2" fill="#1FB6C1" />
                  <circle cx="18" cy="24" r="1.5" fill="#1FB6C1" />
                  <circle cx="30" cy="24" r="1.5" fill="#1FB6C1" />
                  <circle cx="20" cy="30" r="1.5" fill="#1FB6C1" />
                  <circle cx="28" cy="30" r="1.5" fill="#1FB6C1" />
                  <circle cx="24" cy="36" r="1.5" fill="#1FB6C1" />
                  <line x1="24" y1="18" x2="18" y2="24" stroke="#1FB6C1" strokeWidth="1" opacity="0.6" />
                  <line x1="24" y1="18" x2="30" y2="24" stroke="#1FB6C1" strokeWidth="1" opacity="0.6" />
                  <line x1="18" y1="24" x2="20" y2="30" stroke="#1FB6C1" strokeWidth="1" opacity="0.6" />
                  <line x1="30" y1="24" x2="28" y2="30" stroke="#1FB6C1" strokeWidth="1" opacity="0.6" />
                  <line x1="20" y1="30" x2="24" y2="36" stroke="#1FB6C1" strokeWidth="1" opacity="0.6" />
                  <line x1="28" y1="30" x2="24" y2="36" stroke="#1FB6C1" strokeWidth="1" opacity="0.6" />
                </svg>
              </div>
              <span className="font-semibold text-lg text-white">NeuroQor</span>
            </Link>
            <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
              AI & Quantum infrastructure and Cybersecurity integration for regulated environments.
            </p>
            <p className="text-[#6B7280] text-xs">
              Office #614, AL Mustafa Tower,<br />
              F-10 Markaz, Islamabad
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#9CA3AF] text-sm hover:text-[#1FB6C1] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Partners */}
          {SHOW_PARTNERS && (
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
                Partners
              </h4>
              <ul className="space-y-3">
                {partners.map((partner) => (
                  <li key={partner} className="text-[#9CA3AF] text-sm">
                    {partner}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">Partners</h4>
            <ul className="space-y-3">
              {partners.map((partner) => (
                <li key={partner} className="text-[#9CA3AF] text-sm">
                  {partner}
                </li>
              ))}
            </ul>
          </div> */}

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">Subscribe for Insights</h4>
            <p className="text-[#9CA3AF] text-sm mb-4">
              Receive periodic updates and technical briefs.
            </p>
            {subscribed ? (
              <p className="text-[#1FB6C1] text-sm">Thank you for subscribing.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Work email"
                  required
                  className="w-full px-4 py-2.5 bg-[#123C66] border border-[#1FB6C1]/20 rounded-md text-sm text-white placeholder:text-[#6B7280] focus:outline-none focus:border-[#1FB6C1] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2.5 bg-[#1FB6C1] text-[#0B1F33] text-sm font-semibold rounded-md hover:bg-[#17A2AD] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1FB6C1]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#6B7280] text-xs">
              NeuroQor operates globally with sovereign deployment options. Availability varies by jurisdiction.
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#6B7280] text-xs hover:text-[#9CA3AF] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
