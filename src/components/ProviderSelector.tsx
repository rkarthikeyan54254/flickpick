import React from 'react';
import { PROVIDERS } from '../services/tmdb';
import type { StreamingProviderOption } from '../services/providerRegistry';

interface ProviderSelectorProps {
  selectedRegion: string;
  selectedProviders: number[];
  onProviderToggle: (providerId: number) => void;
  providers?: StreamingProviderOption[];
}

export function ProviderSelector({ selectedRegion, selectedProviders, onProviderToggle, providers }: ProviderSelectorProps) {
  const fallbackProviders = PROVIDERS[selectedRegion as keyof typeof PROVIDERS] || PROVIDERS['IN'];
  const availableProviders = providers && providers.length > 0
    ? providers
    : fallbackProviders.map((provider) => ({ id: provider.id, name: provider.name }));

  return (
    <div className="flex flex-wrap gap-3">
      {availableProviders.map((provider) => {
        const isActive = selectedProviders.includes(provider.id);

        return (
          <button
            key={provider.id}
            onClick={() => onProviderToggle(provider.id)}
            className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
              isActive
                ? 'bg-orange-100 text-stone-950 border-orange-100 shadow-lg shadow-orange-500/10'
                : 'chic-glass text-text-secondary border-glass-border hover:border-orange-300/30 hover:bg-orange-400/5'
            }`}
          >
            {provider.name}
          </button>
        );
      })}
    </div>
  );
}
