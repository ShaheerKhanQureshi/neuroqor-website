"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      // Skip animation for users who prefer reduced motion
      setIsLoading(false)
      return
    }

    // Wait for page to be ready
    const handleLoad = () => {
      // Minimum display time for smooth experience
      setTimeout(() => {
        setFadeOut(true)
        // Remove from DOM after fade animation
        setTimeout(() => {
          setIsLoading(false)
        }, 600)
      }, 1500)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      // Fallback timeout in case load event doesn't fire
      const fallbackTimer = setTimeout(handleLoad, 3000)
      return () => {
        window.removeEventListener('load', handleLoad)
        clearTimeout(fallbackTimer)
      }
    }
  }, [])

  if (!isLoading) return null

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#0B1F33] flex items-center justify-center transition-opacity duration-600 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      aria-live="polite"
      aria-busy={isLoading}
    >
      <div className={`flex flex-col items-center gap-6 ${fadeOut ? 'scale-95' : 'scale-100'} transition-transform duration-600`}>
        {/* Logo Animation */}
        <div className="logo-container">
          <img 
            src="/neuroqor-logo.svg" 
            alt="NeuroQor Logo" 
            className="w-24 h-24 md:w-32 md:h-32 object-contain logo-fade"
          />
        </div>

        {/* Company Name */}
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-white tracking-tight company-name">
            NeuroQor
          </h1>
        </div>

        {/* Subtle loading indicator */}
        <div className="loading-bar-container mt-4">
          <div className="loading-bar" />
        </div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .logo-fade,
          .company-name,
          .loading-bar {
            animation: none !important;
            opacity: 1 !important;
          }
        }

        .logo-fade {
          opacity: 0;
          animation: fadeInScale 0.6s ease-out 0.3s forwards;
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .company-name {
          opacity: 0;
          animation: fadeInUp 0.5s ease-out 0.8s forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .loading-bar-container {
          width: 120px;
          height: 2px;
          background: rgba(31, 182, 193, 0.2);
          border-radius: 1px;
          overflow: hidden;
        }

        .loading-bar {
          width: 40%;
          height: 100%;
          background: #1FB6C1;
          border-radius: 1px;
          animation: loadingSlide 1.2s ease-in-out infinite;
        }

        @keyframes loadingSlide {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(150%);
          }
          100% {
            transform: translateX(350%);
          }
        }
      `}</style>
    </div>
  )
}
