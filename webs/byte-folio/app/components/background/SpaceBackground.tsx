/**
 * SpaceBackground - Server Component
 * CSS-based star field with cosmic elements
 * No JS required - pure CSS animations
 */

export function SpaceBackground() {
  return (
    <div className="space-background" aria-hidden="true">
      {/* Static stars layer */}
      <div className="stars-layer stars-small" />
      <div className="stars-layer stars-medium" />
      <div className="stars-layer stars-large" />

      {/* Shooting stars */}
      <div className="shooting-star shooting-star-1" />
      <div className="shooting-star shooting-star-2" />
      <div className="shooting-star shooting-star-3" />

      {/* Glow orbs */}
      <div className="glow-orb glow-orb-cyan" />
      <div className="glow-orb glow-orb-pink" />
      <div className="glow-orb glow-orb-purple" />

      {/* Mountain silhouettes - using Figma mountain blues */}
      <svg
        className="mountains"
        viewBox="0 0 1728 400"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Figma mountain gradients */}
          <linearGradient id="mountain-back" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3744b5" />
            <stop offset="51%" stopColor="#330995" />
            <stop offset="100%" stopColor="#120751" />
          </linearGradient>
          <linearGradient id="mountain-mid" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#221b8c" />
            <stop offset="100%" stopColor="#120751" />
          </linearGradient>
          <linearGradient id="mountain-front" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#142187" />
            <stop offset="100%" stopColor="#022463" />
          </linearGradient>
        </defs>
        {/* Back mountain layer */}
        <path
          d="M0,400 L0,200 Q150,100 300,180 Q450,60 600,140 Q750,40 900,120 Q1050,20 1200,100 Q1350,60 1500,140 Q1650,80 1728,160 L1728,400 Z"
          fill="url(#mountain-back)"
          opacity="0.6"
        />
        {/* Mid mountain layer */}
        <path
          d="M0,400 L0,260 Q200,180 400,240 Q600,120 800,200 Q1000,100 1200,180 Q1400,140 1600,220 L1728,180 L1728,400 Z"
          fill="url(#mountain-mid)"
          opacity="0.7"
        />
        {/* Front mountain layer */}
        <path
          d="M0,400 L0,300 Q220,220 440,280 Q660,180 880,260 Q1100,160 1320,240 Q1540,200 1728,280 L1728,400 Z"
          fill="url(#mountain-front)"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}

/**
 * Planet Earth - Large decorative planet for hero section
 * Uses Figma earth colors: #00B1FF, #004361, #2266C5
 */
export function PlanetEarth() {
  return (
    <div className="planet-earth" aria-hidden="true">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Figma earth gradient */}
          <radialGradient id="planet-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0, 177, 255, 0.3)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="planet-surface" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#00b1ff" />
            <stop offset="69%" stopColor="#00b1ff" />
            <stop offset="88%" stopColor="#004361" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>
          <radialGradient id="planet-inner" cx="50%" cy="50%" r="50%">
            <stop offset="81%" stopColor="#00b1ff" />
            <stop offset="93%" stopColor="#004361" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>
          <radialGradient id="planet-clouds" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2266c5" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Outer glow */}
        <circle cx="100" cy="100" r="95" fill="url(#planet-glow)" />

        {/* Planet body - main surface */}
        <circle cx="100" cy="100" r="80" fill="url(#planet-surface)" />

        {/* Inner highlight */}
        <circle cx="100" cy="100" r="70" fill="url(#planet-inner)" opacity="0.7" />

        {/* Cloud/atmosphere patterns */}
        <ellipse cx="70" cy="80" rx="25" ry="15" fill="url(#planet-clouds)" opacity="0.4" />
        <ellipse cx="130" cy="95" rx="20" ry="12" fill="url(#planet-clouds)" opacity="0.3" />
        <ellipse cx="85" cy="125" rx="18" ry="10" fill="url(#planet-clouds)" opacity="0.35" />

        {/* Specular highlight */}
        <ellipse cx="65" cy="65" rx="25" ry="18" fill="rgba(255,255,255,0.15)" />
      </svg>
    </div>
  );
}

/**
 * Astronaut mascot - Floating character
 * Uses Figma cyan #43e0f7 for visor
 */
export function Astronaut() {
  return (
    <div className="astronaut animate-float" aria-hidden="true">
      <svg
        viewBox="0 0 100 120"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="helmet-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f0f0f0" />
            <stop offset="100%" stopColor="#a0a0a0" />
          </linearGradient>
          <linearGradient id="visor-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#43e0f7" />
            <stop offset="50%" stopColor="#142187" />
            <stop offset="100%" stopColor="#19002a" />
          </linearGradient>
        </defs>

        {/* Body/suit */}
        <ellipse cx="50" cy="85" rx="25" ry="30" fill="url(#helmet-gradient)" />

        {/* Helmet */}
        <circle cx="50" cy="40" r="30" fill="url(#helmet-gradient)" />

        {/* Visor */}
        <ellipse cx="50" cy="42" rx="20" ry="18" fill="url(#visor-gradient)" />

        {/* Visor reflection */}
        <ellipse cx="42" cy="36" rx="6" ry="4" fill="rgba(255,255,255,0.4)" />

        {/* Arms */}
        <ellipse cx="20" cy="80" rx="10" ry="15" fill="url(#helmet-gradient)" />
        <ellipse cx="80" cy="75" rx="10" ry="15" fill="url(#helmet-gradient)" transform="rotate(20, 80, 75)" />

        {/* Legs */}
        <ellipse cx="38" cy="110" rx="8" ry="12" fill="url(#helmet-gradient)" />
        <ellipse cx="62" cy="110" rx="8" ry="12" fill="url(#helmet-gradient)" />

        {/* Backpack */}
        <rect x="55" y="70" width="15" height="25" rx="3" fill="#330995" />
      </svg>
    </div>
  );
}

/**
 * UFO decoration
 * Uses Figma purple colors: #8657e8, #42218e, #5102ae
 */
export function UFO({ className = "" }: { className?: string }) {
  return (
    <div className={`ufo ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 80 50"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="ufo-body" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8657e8" />
            <stop offset="100%" stopColor="#42218e" />
          </linearGradient>
          <radialGradient id="ufo-glow" cx="50%" cy="100%" r="60%">
            <stop offset="0%" stopColor="rgba(67, 224, 247, 0.6)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Beam/glow */}
        <ellipse cx="40" cy="45" rx="25" ry="8" fill="url(#ufo-glow)" />

        {/* Body */}
        <ellipse cx="40" cy="25" rx="35" ry="12" fill="url(#ufo-body)" />

        {/* Dome */}
        <ellipse cx="40" cy="18" rx="15" ry="12" fill="#798df1" />

        {/* Dome reflection */}
        <ellipse cx="35" cy="14" rx="5" ry="4" fill="rgba(255,255,255,0.4)" />

        {/* Lights - using Figma cyan #43e0f7 and pink #d10057 */}
        <circle cx="20" cy="25" r="3" fill="#43e0f7" className="animate-twinkle" />
        <circle cx="40" cy="28" r="3" fill="#d10057" className="animate-twinkle" style={{ animationDelay: "0.5s" }} />
        <circle cx="60" cy="25" r="3" fill="#43e0f7" className="animate-twinkle" style={{ animationDelay: "1s" }} />
      </svg>
    </div>
  );
}

/**
 * Small decorative moon
 */
export function Moon({ className = "" }: { className?: string }) {
  return (
    <div className={`moon ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="moon-surface" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#94a3b8" />
          </radialGradient>
        </defs>

        {/* Moon body */}
        <circle cx="30" cy="30" r="25" fill="url(#moon-surface)" />

        {/* Craters */}
        <circle cx="20" cy="25" r="5" fill="#cbd5e1" opacity="0.5" />
        <circle cx="35" cy="35" r="7" fill="#cbd5e1" opacity="0.4" />
        <circle cx="40" cy="20" r="4" fill="#cbd5e1" opacity="0.3" />
      </svg>
    </div>
  );
}
