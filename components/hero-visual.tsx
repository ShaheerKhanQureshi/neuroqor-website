"use client"

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg">
      <svg 
        viewBox="0 0 520 420" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Background Grid */}
        <defs>
          <pattern id="heroPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1FB6C1" strokeOpacity="0.06"/>
          </pattern>
        </defs>

        <rect width="520" height="420" fill="url(#heroPattern)" />

        {/* Shield Outline */}
        <path 
          d="M260 40 L380 90 V210 C380 280 320 330 260 360 C200 330 140 280 140 210 V90 Z"
          fill="none"
          stroke="#1FB6C1"
          strokeWidth="2"
          opacity="0.8"
        />

        {/* Vertical divider line */}
        <line 
          x1="260" 
          y1="60" 
          x2="260" 
          y2="340" 
          stroke="#1FB6C1" 
          strokeWidth="1" 
          strokeOpacity="0.15"
          strokeDasharray="4 4"
        />

        {/* Left side label - Infrastructure */}
        <text x="180" y="380" fill="#1FB6C1" fontSize="11" fontFamily="Inter, sans-serif" opacity="0.6">
          Infrastructure
        </text>

        {/* Right side label - Security */}
        <text x="300" y="380" fill="#1FB6C1" fontSize="11" fontFamily="Inter, sans-serif" opacity="0.6">
          Security
        </text>

        {/* Neural Nodes - Left Side (Infrastructure) */}
        <g className="node-pulse">
          <circle cx="200" cy="130" r="5" fill="#1FB6C1" opacity="0.9"/>
          <circle cx="180" cy="180" r="4" fill="#1FB6C1" opacity="0.7"/>
          <circle cx="220" cy="200" r="4" fill="#1FB6C1" opacity="0.8"/>
          <circle cx="190" cy="250" r="4" fill="#1FB6C1" opacity="0.7"/>
          <circle cx="230" cy="280" r="3" fill="#1FB6C1" opacity="0.6"/>
        </g>

        {/* Neural Nodes - Right Side (Security) */}
        <g className="node-pulse" style={{ animationDelay: '3s' }}>
          <circle cx="320" cy="130" r="5" fill="#1FB6C1" opacity="0.9"/>
          <circle cx="340" cy="180" r="4" fill="#1FB6C1" opacity="0.7"/>
          <circle cx="300" cy="200" r="4" fill="#1FB6C1" opacity="0.8"/>
          <circle cx="330" cy="250" r="4" fill="#1FB6C1" opacity="0.7"/>
          <circle cx="290" cy="280" r="3" fill="#1FB6C1" opacity="0.6"/>
        </g>

        {/* Central nodes */}
        <g className="node-pulse" style={{ animationDelay: '1.5s' }}>
          <circle cx="260" cy="150" r="6" fill="#1FB6C1" opacity="1"/>
          <circle cx="260" cy="220" r="5" fill="#1FB6C1" opacity="0.9"/>
          <circle cx="260" cy="300" r="4" fill="#1FB6C1" opacity="0.8"/>
        </g>

        {/* Connections - Left Side */}
        <g className="line-fade">
          <line x1="200" y1="130" x2="180" y2="180" stroke="#1FB6C1" strokeOpacity="0.4" strokeWidth="1"/>
          <line x1="200" y1="130" x2="220" y2="200" stroke="#1FB6C1" strokeOpacity="0.4" strokeWidth="1"/>
          <line x1="180" y1="180" x2="190" y2="250" stroke="#1FB6C1" strokeOpacity="0.3" strokeWidth="1"/>
          <line x1="220" y1="200" x2="190" y2="250" stroke="#1FB6C1" strokeOpacity="0.3" strokeWidth="1"/>
          <line x1="190" y1="250" x2="230" y2="280" stroke="#1FB6C1" strokeOpacity="0.3" strokeWidth="1"/>
        </g>

        {/* Connections - Right Side */}
        <g className="line-fade" style={{ animationDelay: '2s' }}>
          <line x1="320" y1="130" x2="340" y2="180" stroke="#1FB6C1" strokeOpacity="0.4" strokeWidth="1"/>
          <line x1="320" y1="130" x2="300" y2="200" stroke="#1FB6C1" strokeOpacity="0.4" strokeWidth="1"/>
          <line x1="340" y1="180" x2="330" y2="250" stroke="#1FB6C1" strokeOpacity="0.3" strokeWidth="1"/>
          <line x1="300" y1="200" x2="330" y2="250" stroke="#1FB6C1" strokeOpacity="0.3" strokeWidth="1"/>
          <line x1="330" y1="250" x2="290" y2="280" stroke="#1FB6C1" strokeOpacity="0.3" strokeWidth="1"/>
        </g>

        {/* Cross connections to center */}
        <g className="line-fade" style={{ animationDelay: '4s' }}>
          <line x1="200" y1="130" x2="260" y2="150" stroke="#1FB6C1" strokeOpacity="0.5" strokeWidth="1"/>
          <line x1="320" y1="130" x2="260" y2="150" stroke="#1FB6C1" strokeOpacity="0.5" strokeWidth="1"/>
          <line x1="220" y1="200" x2="260" y2="220" stroke="#1FB6C1" strokeOpacity="0.4" strokeWidth="1"/>
          <line x1="300" y1="200" x2="260" y2="220" stroke="#1FB6C1" strokeOpacity="0.4" strokeWidth="1"/>
          <line x1="230" y1="280" x2="260" y2="300" stroke="#1FB6C1" strokeOpacity="0.3" strokeWidth="1"/>
          <line x1="290" y1="280" x2="260" y2="300" stroke="#1FB6C1" strokeOpacity="0.3" strokeWidth="1"/>
        </g>

        {/* Central vertical connection */}
        <g className="line-fade" style={{ animationDelay: '1s' }}>
          <line x1="260" y1="150" x2="260" y2="220" stroke="#1FB6C1" strokeOpacity="0.6" strokeWidth="1.5"/>
          <line x1="260" y1="220" x2="260" y2="300" stroke="#1FB6C1" strokeOpacity="0.5" strokeWidth="1.5"/>
        </g>
      </svg>
    </div>
  )
}
