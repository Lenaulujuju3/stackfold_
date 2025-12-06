"use client";

import { useSearchParams } from "next/navigation";
import MapExplorer from "../../../../components/dashboard/MapExplorer";

export default function ExplorerPage() {
  const searchParams = useSearchParams();
  const index = searchParams.get("index") || "HNW";
  const zoom = searchParams.get("zoom") || "country";

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">Market Explorer</h1>
        <p className="mt-2 text-white/70">Analyze geographic markets and identify high-value segments</p>
      </div>
      
      <MapExplorer activeIndex={index} zoom={zoom} />
    </div>
  );
}
