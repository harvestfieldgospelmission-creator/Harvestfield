import React from 'react';

interface MissionMarkProps {
  className?: string;
}

export const MissionMark: React.FC<MissionMarkProps> = ({ className = 'w-9 h-9' }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Globe */}
      <circle cx="30" cy="36" r="18" stroke="currentColor" strokeWidth="2.2" />
      <ellipse cx="30" cy="36" rx="9" ry="18" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 36H48" stroke="currentColor" strokeWidth="1.8" />
      <path d="M15 26H45" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15 46H45" stroke="currentColor" strokeWidth="1.6" />
      {/* Cross at crown */}
      <path d="M30 6V20" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M23 12H37" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      {/* Dove / Flame wing motif */}
      <path
        d="M36 27C41 21 48 16 53 11C51 19 48 25 43 29C48 27 52 24 55 20C54 27 49 33 41 36"
        stroke="#b87e18"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 25C24 23 29 24 33 27C28 29 24 31 20 31"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
