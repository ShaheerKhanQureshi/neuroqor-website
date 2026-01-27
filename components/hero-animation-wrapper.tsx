"use client"

import React from "react"

import { useEffect, useRef } from "react"

interface HeroAnimationWrapperProps {
  children: React.ReactNode
}

export default function HeroAnimationWrapper({ children }: HeroAnimationWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      // Skip animation and show content immediately
      const wrapper = wrapperRef.current
      if (wrapper) {
        wrapper.classList.add('hero-animated')
      }
      return
    }

    // Small delay to allow loading screen to finish
    const timer = setTimeout(() => {
      const wrapper = wrapperRef.current
      if (wrapper) {
        wrapper.classList.add('hero-animated')
      }
    }, 1800) // Slightly after loading screen fades

    return () => clearTimeout(timer)
  }, [])

  return (
    <div ref={wrapperRef} className="hero-content-wrapper">
      {children}
      <style jsx>{`
        .hero-content-wrapper {
          opacity: 0;
        }
        
        .hero-content-wrapper.hero-animated {
          animation: heroFadeIn 0.8s ease-out forwards;
        }
        
        @keyframes heroFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .hero-content-wrapper {
            opacity: 1 !important;
            animation: none !important;
          }
        }
      `}</style>
    </div>
  )
}
