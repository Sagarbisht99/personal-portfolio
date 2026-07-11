export default function TanStackQuery({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      fill="currentColor"
    >
      <defs>
        <linearGradient id="tanstack-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="50%" stopColor="#4ECDC4" />
          <stop offset="100%" stopColor="#45B7D1" />
        </linearGradient>
      </defs>
      
      {/* Background circle */}
      <circle cx="64" cy="64" r="56" fill="url(#tanstack-gradient)" opacity="0.1"/>
      
      {/* Main query icon - magnifying glass with data points */}
      <g transform="translate(20, 20)">
        {/* Magnifying glass handle */}
        <rect x="65" y="65" width="8" height="30" rx="4" fill="currentColor" transform="rotate(45 69 80)"/>
        
        {/* Magnifying glass circle */}
        <circle cx="40" cy="40" r="22" fill="none" stroke="currentColor" strokeWidth="4"/>
        
        {/* Data points inside magnifying glass */}
        <circle cx="32" cy="32" r="3" fill="#FF6B6B"/>
        <circle cx="48" cy="32" r="3" fill="#4ECDC4"/>
        <circle cx="32" cy="48" r="3" fill="#45B7D1"/>
        <circle cx="48" cy="48" r="3" fill="#FF6B6B"/>
        
        {/* Query lines representing data fetching */}
        <path d="M 32 32 L 48 32 M 32 48 L 48 48 M 32 32 L 32 48 M 48 32 L 48 48" 
              stroke="currentColor" strokeWidth="1" opacity="0.5"/>
      </g>
      
      {/* TanStack text */}
      <text x="64" y="110" textAnchor="middle" fontSize="12" fontWeight="bold" fill="currentColor">
        TanStack
      </text>
      <text x="64" y="122" textAnchor="middle" fontSize="8" fill="currentColor" opacity="0.7">
        Query
      </text>
    </svg>
  );
}
