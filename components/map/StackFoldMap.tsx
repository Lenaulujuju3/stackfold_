"use client";
import React from "react";

export type GeographyLevel = "auto" | "state" | "county" | "zip" | "free-draw";

export interface SelectedRegion {
  id: string;
  geography_name: string;
  level: Exclude<GeographyLevel, "auto">;
  index_score: number;
  households: number;
  rank?: number;
}

export interface StackFoldMapProps {
  className?: string;
  initialCenter?: [number, number];
  initialZoom?: number;
  showHeatmap?: boolean;
  showChoropleth?: boolean;
  geographyLevel?: GeographyLevel;
  showPoints?: boolean;
  onSelectRegions?: (regions: SelectedRegion[]) => void;
  preselected?: SelectedRegion[];
  height?: number | string;
  hideUI?: boolean;
  stateCoverageOverrides?: Record<string, number>;
}

export default function StackFoldMap(props: StackFoldMapProps) {
  const { height = 480, className = "" } = props;
  
  return (
    <div 
      className={`relative flex items-center justify-center rounded-xl border border-white/10 bg-white/5 ${className}`}
      style={{ height: typeof height === 'number' ? `${height}px` : height }}
    >
      <div className="text-center text-white/60">
        <div className="text-lg font-semibold mb-2">Map Placeholder</div>
        <p className="text-sm">Interactive map requires Mapbox token</p>
        <p className="text-xs mt-2">Set NEXT_PUBLIC_MAPBOX_TOKEN to enable</p>
      </div>
    </div>
  );
}
