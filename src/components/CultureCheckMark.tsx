import React from 'react';

interface CultureCheckMarkProps {
  className?: string;
  showWordmark?: boolean;
}

export function CultureCheckMark({ className = '', showWordmark = true }: CultureCheckMarkProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`} aria-label="Culture Check">
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="2.5" y="2.5" width="37" height="37" rx="11" className="fill-orange-400/10 stroke-orange-300/50" />
        <path d="M13.5 12.5H28.5" className="stroke-current text-orange-200" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M13.5 29.5H28.5" className="stroke-current text-orange-200" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M12.5 15.5V26.5" className="stroke-current text-orange-200" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M29.5 15.5V21" className="stroke-current text-orange-200" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M18 22.1L21.4 25.4L29.8 17" className="stroke-current text-text-primary" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="1.35" className="fill-orange-300" />
        <circle cx="16" cy="26" r="1.35" className="fill-orange-300" />
      </svg>
      {showWordmark && (
        <div className="leading-none">
          <span className="block text-xl md:text-2xl font-black tracking-[-0.04em] uppercase">Culture Check</span>
          <span className="hidden sm:block text-[9px] font-black uppercase tracking-[0.18em] text-orange-300 mt-1.5">Every film held up to Bharat's values.</span>
        </div>
      )}
    </div>
  );
}
