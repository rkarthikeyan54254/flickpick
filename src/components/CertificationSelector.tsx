import React from 'react';

export type CertificationFilter = 'all' | 'certified' | 'reviewed';

interface CertificationSelectorProps {
  value: CertificationFilter;
  onChange: (value: CertificationFilter) => void;
}

const options: Array<{ value: CertificationFilter; label: string }> = [
  { value: 'all', label: 'All movies' },
  { value: 'certified', label: 'Sanghi Certified' },
  { value: 'reviewed', label: 'Reviewed only' }
];

export function CertificationSelector({ value, onChange }: CertificationSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(option => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
            value === option.value
              ? 'bg-orange-400 text-black shadow-lg shadow-orange-400/10'
              : 'chic-glass text-text-secondary hover:bg-white/5'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
