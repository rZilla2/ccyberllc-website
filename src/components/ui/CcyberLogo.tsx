export function CcyberLogo({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 150" className={className}>
      <path d="M 60 15 L 20 25 L 20 80 Q 20 110, 60 130 Q 100 110, 100 80 L 100 45 L 80 45 L 80 78 Q 80 100, 60 112 Q 40 100, 40 78 L 40 36 L 60 30 L 90 38 L 90 22.5 Z" fill="#6E93B8"/>
      
      <g transform="translate(68, 25) scale(1.6)">
        <path d="M 10 32 L 25 17 L 35 17 L 20 32 L 35 47 L 25 47 Z" fill="#9F83B6"/>
        <path d="M 30 32 L 45 17 L 55 17 L 40 32 L 55 47 L 45 47 Z" fill="#9F83B6"/>
        <path d="M 50 32 L 65 17 L 75 17 L 60 32 L 75 47 L 65 47 Z" fill="#9F83B6"/>
      </g>

      <text x="195" y="102" style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 800 }} fontSize="94" fill="#8F9EB4" letterSpacing="-1.5">CCYBER</text>
    </svg>
  );
}
