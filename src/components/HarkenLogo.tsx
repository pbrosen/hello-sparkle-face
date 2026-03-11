const HarkenLogo = ({ className = "h-8 w-auto" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 160 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Icon: Stylized ear/headphone with soundwaves */}
      <g>
        {/* Sound wave lines (left side) */}
        <rect x="2" y="10" width="4" height="12" rx="2" fill="hsl(36, 95%, 55%)" />
        <rect x="8" y="6" width="4" height="20" rx="2" fill="hsl(36, 95%, 55%)" />
        <rect x="14" y="10" width="4" height="12" rx="2" fill="hsl(36, 95%, 55%)" />
        
        {/* Head/ear shape */}
        <path
          d="M22 8C22 8 26 4 30 8C34 12 34 20 30 24C26 28 22 24 22 24"
          stroke="hsl(36, 95%, 55%)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="23" cy="16" r="2" fill="hsl(28, 100%, 60%)" />
      </g>

      {/* "HarkenAI" text */}
      <text
        x="42"
        y="22"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="600"
        fontSize="18"
        fill="currentColor"
        letterSpacing="-0.5"
      >
        HarkenAI
      </text>
    </svg>
  );
};

export default HarkenLogo;
