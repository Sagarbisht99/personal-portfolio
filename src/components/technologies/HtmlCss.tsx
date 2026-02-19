export default function HtmlCss({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      fill="currentColor"
    >
      <defs>
        <linearGradient id="html-gradient" x1="0%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#E34C26" />
          <stop offset="100%" stopColor="#F06529" />
        </linearGradient>
        <linearGradient id="css-gradient" x1="50%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1572B6" />
          <stop offset="100%" stopColor="#33A9DC" />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect x="10" y="10" width="108" height="108" rx="12" fill="currentColor" opacity="0.05"/>
      
      {/* HTML5 Logo (left side) */}
      <g transform="translate(32, 40)">
        <path d="M 0 0 L 2 8 L 16 8 L 18 0 Z" fill="url(#html-gradient)"/>
        <path d="M 2 8 L 3 12 L 15 12 L 16 8 Z" fill="#E34C26"/>
        <path d="M 3 12 L 4 16 L 14 16 L 15 12 Z" fill="#E34C26"/>
        <path d="M 4 16 L 5 20 L 13 20 L 14 16 Z" fill="#E34C26"/>
        <path d="M 5 20 L 6 24 L 12 24 L 13 20 Z" fill="#E34C26"/>
        <path d="M 6 24 L 7 28 L 11 28 L 12 24 Z" fill="#E34C26"/>
        
        {/* HTML5 text */}
        <text x="9" y="40" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#E34C26">
          HTML5
        </text>
      </g>
      
      {/* CSS3 Logo (right side) */}
      <g transform="translate(72, 40)">
        <path d="M 0 0 L 2 8 L 16 8 L 18 0 Z" fill="url(#css-gradient)"/>
        <path d="M 2 8 L 3 12 L 15 12 L 16 8 Z" fill="#1572B6"/>
        <path d="M 3 12 L 4 16 L 14 16 L 15 12 Z" fill="#1572B6"/>
        <path d="M 4 16 L 5 20 L 13 20 L 14 16 Z" fill="#1572B6"/>
        <path d="M 5 20 L 6 24 L 12 24 L 13 20 Z" fill="#1572B6"/>
        <path d="M 6 24 L 7 28 L 11 28 L 12 24 Z" fill="#1572B6"/>
        
        {/* CSS3 text */}
        <text x="9" y="40" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1572B6">
          CSS3
        </text>
      </g>
      
      {/* Plus sign between HTML and CSS */}
      <g transform="translate(64, 60)">
        <circle cx="0" cy="0" r="8" fill="currentColor" opacity="0.2"/>
        <path d="M -4 0 L 4 0 M 0 -4 L 0 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </g>
      
      {/* Combined label */}
      <text x="64" y="110" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor">
        HTML/CSS3
      </text>
    </svg>
  );
}
