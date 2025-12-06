"use client";

import { useState } from "react";
import type { FC } from "react";
import dynamic from 'next/dynamic';
import type { StackFoldMapProps } from '../../../components/map/StackFoldMap';

const StackFoldMap = dynamic<StackFoldMapProps>(() => 
  import('../../../components/map/StackFoldMap').then(m => m.default), 
  { ssr: false }
);

interface MapExplorerProps {
  activeIndex?: string;
}

export const MapExplorer: FC<MapExplorerProps> = ({ activeIndex = 'HNW' }) => {
  const [showSaveSheet, setShowSaveSheet] = useState(false);

  const indexOptions = [
    { value: 'HNW', label: 'High Net Worth' },
    { value: 'Response', label: 'Mail Response' },
    { value: 'Solar', label: 'Solar Ready' },
    { value: 'HELOC', label: 'HELOC Appetite' },
    { value: 'Custom', label: 'Custom Index' },
  ];

  return (
    <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-black/20 backdrop-blur">
      {/* Index selector bar */}
      <div className="absolute top-4 left-4 z-10 flex gap-2 rounded-lg border border-white/10 bg-midnight/80 backdrop-blur p-2">
        {indexOptions.map((option) => (
          <button
            key={option.value}
            className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
              activeIndex === option.value
                ? 'bg-accent text-white'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Main map */}
      <StackFoldMap 
        height={600} 
        showHeatmap={true} 
        showChoropleth={true}
        geographyLevel="zip"
      />

      {/* Save segment floating bar */}
      <div className="absolute bottom-4 right-4 z-10">
        <button 
          onClick={() => setShowSaveSheet(true)}
          className="px-4 py-2 rounded-lg bg-accent/80 text-white hover:bg-accent transition shadow-lg"
        >
          Save Segment
        </button>
      </div>

      {/* Save sheet */}
      {showSaveSheet && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-96 rounded-2xl border border-white/10 bg-midnight/90 backdrop-blur-xl p-6 shadow-2xl">
            <h2 className="text-xl font-semibold mb-4 text-white">Save Segment</h2>
            <input 
              type="text" 
              placeholder="Segment name"
              className="w-full mb-4 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50"
            />
            <select className="w-full mb-4 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white">
              <option value="CSV">CSV</option>
              <option value="Parquet">Parquet</option>
            </select>
            <div className="mb-4 text-sm text-white/60">
              Estimated records: <span className="text-white font-semibold">12,345</span>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setShowSaveSheet(false)}
                className="flex-1 px-4 py-2 rounded-lg bg-accent hover:bg-accent/80 transition"
              >
                Create Export
              </button>
              <button 
                onClick={() => setShowSaveSheet(false)}
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Default export for dynamic import
export default MapExplorer;
