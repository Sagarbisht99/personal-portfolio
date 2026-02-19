 export default function PHP({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      fill="currentColor"
    >
      <defs>
        <linearGradient id="php-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#777BB4" />
          <stop offset="100%" stopColor="#4F5B93" />
        </linearGradient>
      </defs>
      
      {/* Background oval */}
      <ellipse cx="64" cy="64" rx="56" ry="32" fill="url(#php-gradient)" opacity="0.1"/>
      
      {/* PHP text in oval shape */}
      <g transform="translate(64, 64)">
        <text 
          x="0" 
          y="8" 
          textAnchor="middle" 
          fontSize="28" 
          fontWeight="bold" 
          fill="#777BB4"
          fontFamily="Arial, sans-serif"
        >
          php
        </text>
      </g>
      
      {/* Decorative elements */}
      <circle cx="20" cy="40" r="3" fill="#777BB4" opacity="0.3"/>
      <circle cx="108" cy="40" r="3" fill="#777BB4" opacity="0.3"/>
      <circle cx="20" cy="88" r="3" fill="#777BB4" opacity="0.3"/>
      <circle cx="108" cy="88" r="3" fill="#777BB4" opacity="0.3"/>
      
      {/* PHP symbol elements */}
      <path d="M 30 64 L 35 64 M 93 64 L 98 64" stroke="#777BB4" strokeWidth="2" opacity="0.5"/>
    </svg>
  );
}
