export default function JQuery({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      fill="currentColor"
    >
      <defs>
        <linearGradient id="jquery-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0769AD" />
          <stop offset="100%" stopColor="#1A73E8" />
        </linearGradient>
      </defs>
      
      {/* Background circle */}
      <circle cx="64" cy="64" r="56" fill="url(#jquery-gradient)" opacity="0.1"/>
      
      {/* jQuery logo - stylized 'j' and 'q' */}
      <g transform="translate(64, 64)">
        {/* Main circle background */}
        <circle cx="0" cy="0" r="28" fill="none" stroke="currentColor" strokeWidth="3"/>
        
        {/* jQuery 'j' character */}
        <path 
          d="M -8 -15 Q -8 -5, -8 5 Q -8 15, -3 20 Q 2 25, 8 20 Q 13 15, 13 5"
          fill="none" 
          stroke="currentColor" 
          strokeWidth="4"
          strokeLinecap="round"
        />
        
        {/* jQuery dot */}
        <circle cx="-8" cy="22" r="3" fill="currentColor"/>
        
        {/* Decorative dots representing jQuery's versatility */}
        <circle cx="-15" cy="-10" r="2" fill="#0769AD" opacity="0.6"/>
        <circle cx="15" cy="-10" r="2" fill="#0769AD" opacity="0.6"/>
        <circle cx="-15" cy="10" r="2" fill="#0769AD" opacity="0.6"/>
        <circle cx="15" cy="10" r="2" fill="#0769AD" opacity="0.6"/>
      </g>
      
      {/* jQuery text */}
      <text x="64" y="110" textAnchor="middle" fontSize="12" fontWeight="bold" fill="currentColor">
        jQuery
      </text>
    </svg>
  );
}
