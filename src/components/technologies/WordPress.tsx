export default function WordPress({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      fill="currentColor"
    >
      <defs>
        <linearGradient id="wordpress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#21759B" />
          <stop offset="50%" stopColor="#2E8BC6" />
          <stop offset="100%" stopColor="#464646" />
        </linearGradient>
      </defs>
      
      {/* Background circle */}
      <circle cx="64" cy="64" r="56" fill="url(#wordpress-gradient)" opacity="0.1"/>
      
      {/* WordPress 'W' logo */}
      <g transform="translate(64, 64)">
        {/* Outer circle */}
        <circle cx="0" cy="0" r="28" fill="none" stroke="currentColor" strokeWidth="3"/>
        
        {/* WordPress W */}
        <g fill="currentColor">
          <path d="M -18 -15 L -12 15 L -6 -5 L 0 15 L 6 -5 L 12 15 L 18 -15" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"/>
        </g>
        
        {/* Center dot */}
        <circle cx="0" cy="0" r="2" fill="currentColor"/>
        
        {/* Decorative elements representing WordPress features */}
        <circle cx="-20" cy="-20" r="1.5" fill="#21759B" opacity="0.6"/>
        <circle cx="20" cy="-20" r="1.5" fill="#21759B" opacity="0.6"/>
        <circle cx="-20" cy="20" r="1.5" fill="#21759B" opacity="0.6"/>
        <circle cx="20" cy="20" r="1.5" fill="#21759B" opacity="0.6"/>
      </g>
      
      {/* WordPress text */}
      <text x="64" y="110" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor">
        WordPress
      </text>
    </svg>
  );
}
