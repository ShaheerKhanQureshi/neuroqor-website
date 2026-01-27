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
          <svg 
            viewBox="0 0 80 80" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-20 h-20 md:w-24 md:h-24"
          >
            {/* Shield outline - draws in */}
            <path
              d="M40 8L64 18V36C64 52 52 64 40 72C28 64 16 52 16 36V18L40 8Z"
              stroke="#1FB6C1"
              strokeWidth="2"
              fill="none"
              className="shield-path"
            />
            
            {/* Neural network nodes - fade in with stagger */}
            <g className="neural-nodes">
              <circle cx="40" cy="28" r="3" fill="#1FB6C1" className="node node-1" />
              <circle cx="30" cy="38" r="2.5" fill="#1FB6C1" className="node node-2" />
              <circle cx="50" cy="38" r="2.5" fill="#1FB6C1" className="node node-3" />
              <circle cx="33" cy="50" r="2.5" fill="#1FB6C1" className="node node-4" />
              <circle cx="47" cy="50" r="2.5" fill="#1FB6C1" className="node node-5" />
              <circle cx="40" cy="60" r="2" fill="#1FB6C1" className="node node-6" />
            </g>
            
            {/* Connections - draw after nodes */}
            <g className="connections">
              <line x1="40" y1="28" x2="30" y2="38" stroke="#1FB6C1" strokeWidth="1" className="connection connection-1" />
              <line x1="40" y1="28" x2="50" y2="38" stroke="#1FB6C1" strokeWidth="1" className="connection connection-2" />
              <line x1="30" y1="38" x2="33" y2="50" stroke="#1FB6C1" strokeWidth="1" className="connection connection-3" />
              <line x1="50" y1="38" x2="47" y2="50" stroke="#1FB6C1" strokeWidth="1" className="connection connection-4" />
              <line x1="33" y1="50" x2="40" y2="60" stroke="#1FB6C1" strokeWidth="1" className="connection connection-5" />
              <line x1="47" y1="50" x2="40" y2="60" stroke="#1FB6C1" strokeWidth="1" className="connection connection-6" />
            </g>
          </svg>
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
          .shield-path,
          .node,
          .connection,
          .company-name,
          .loading-bar {
            animation: none !important;
            opacity: 1 !important;
            stroke-dashoffset: 0 !important;
          }
        }

        .shield-path {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: drawShield 1s ease-out 0.2s forwards;
        }

        @keyframes drawShield {
          to {
            stroke-dashoffset: 0;
          }
        }

        .node {
          opacity: 0;
          transform-origin: center;
        }

        .node-1 { animation: fadeInNode 0.3s ease-out 0.5s forwards; }
        .node-2 { animation: fadeInNode 0.3s ease-out 0.6s forwards; }
        .node-3 { animation: fadeInNode 0.3s ease-out 0.7s forwards; }
        .node-4 { animation: fadeInNode 0.3s ease-out 0.8s forwards; }
        .node-5 { animation: fadeInNode 0.3s ease-out 0.9s forwards; }
        .node-6 { animation: fadeInNode 0.3s ease-out 1s forwards; }

        @keyframes fadeInNode {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .connection {
          stroke-dasharray: 20;
          stroke-dashoffset: 20;
          opacity: 0.6;
        }

        .connection-1 { animation: drawLine 0.2s ease-out 0.7s forwards; }
        .connection-2 { animation: drawLine 0.2s ease-out 0.8s forwards; }
        .connection-3 { animation: drawLine 0.2s ease-out 0.9s forwards; }
        .connection-4 { animation: drawLine 0.2s ease-out 1s forwards; }
        .connection-5 { animation: drawLine 0.2s ease-out 1.1s forwards; }
        .connection-6 { animation: drawLine 0.2s ease-out 1.2s forwards; }

        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
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
