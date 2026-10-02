import React from 'react';

export type CertificationFilter = 'all' | 'certified' | 'reviewed';

interface CertificationSelectorProps {
  value: CertificationFilter;
  onChange: (value: CertificationFilter) => void;
}

const options: Array<{ value: CertificationFilter; label: string; activeClass: string }> = [
  { value: 'all', label: 'All movies', activeClass: 'border-white/25 bg-white/10 text-text-primary' },
  { value: 'certified', label: '🪷 Sanghi Certified', activeClass: 'border-orange-300/70 bg-orange-400/25 text-orange-50 shadow-lg shadow-orange-500/15' },
  { value: 'reviewed', label: 'Reviewed only', activeClass: 'border-sky-300/35 bg-sky-300/10 text-sky-100' }
];

export function CertificationSelector({ value, onChange }: CertificationSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(option => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`border px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
            value === option.value
              ? option.activeClass
              : 'border-white/10 chic-glass text-text-secondary hover:bg-white/5'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
