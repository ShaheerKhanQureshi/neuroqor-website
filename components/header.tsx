"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/approach", label: "Approach" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-200/50 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={cn(
              "transition-all duration-300",
              scrolled ? "w-9 h-9" : "w-11 h-11"
            )}>
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Shield outline */}
                <path
                  d="M24 4L40 10V22C40 32 32 40 24 44C16 40 8 32 8 22V10L24 4Z"
                  stroke="#1FB6C1"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Brain/neural network nodes */}
                <circle cx="24" cy="18" r="2" fill="#1FB6C1" />
                <circle cx="18" cy="24" r="1.5" fill="#1FB6C1" />
                <circle cx="30" cy="24" r="1.5" fill="#1FB6C1" />
                <circle cx="20" cy="30" r="1.5" fill="#1FB6C1" />
                <circle cx="28" cy="30" r="1.5" fill="#1FB6C1" />
                <circle cx="24" cy="36" r="1.5" fill="#1FB6C1" />
                {/* Connections */}
                <line x1="24" y1="18" x2="18" y2="24" stroke="#1FB6C1" strokeWidth="1" opacity="0.6" />
                <line x1="24" y1="18" x2="30" y2="24" stroke="#1FB6C1" strokeWidth="1" opacity="0.6" />
                <line x1="18" y1="24" x2="20" y2="30" stroke="#1FB6C1" strokeWidth="1" opacity="0.6" />
                <line x1="30" y1="24" x2="28" y2="30" stroke="#1FB6C1" strokeWidth="1" opacity="0.6" />
                <line x1="20" y1="30" x2="24" y2="36" stroke="#1FB6C1" strokeWidth="1" opacity="0.6" />
                <line x1="28" y1="30" x2="24" y2="36" stroke="#1FB6C1" strokeWidth="1" opacity="0.6" />
              </svg>
            </div>
            <span className={cn(
              "font-semibold tracking-tight transition-all duration-300",
              scrolled ? "text-lg text-[#0B1F33]" : "text-xl text-[#0B1F33]"
            )}>
              NeuroQor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                  pathname === item.href
                    ? "text-[#1FB6C1]"
                    : "text-[#6B7280] hover:text-[#111827]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[#1FB6C1] text-[#0B1F33] text-sm font-semibold rounded-md hover:bg-[#17A2AD] transition-all duration-200 hover:-translate-y-0.5 btn-press"
          >
            Talk to an Architect
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#111827]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium transition-colors rounded-md",
                    pathname === item.href
                      ? "text-[#1FB6C1] bg-[#F4F6F8]"
                      : "text-[#6B7280] hover:text-[#111827] hover:bg-[#F4F6F8]"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 mx-4 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#1FB6C1] text-[#0B1F33] text-sm font-semibold rounded-md"
              >
                Talk to an Architect
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
