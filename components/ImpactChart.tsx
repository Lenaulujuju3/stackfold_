"use client";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { ResponsiveBarCanvas } from "@nivo/bar";
import dataRaw from "../data/campaign_a_b.json";
import { luxuryTheme } from "../lib/nivoLuxuryTheme";

// Expect data shape: [{ year: 2019, before: number, after: number }, ...]

export default function ImpactChart({ height = 260 }: { height?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { damping: 30, stiffness: 120 });

  const years = (dataRaw as { year: number }[]).map((d) => d.year);
  const [idx, setIdx] = useState(0);
  useMotionValueEvent(progress, "change", (v: number) => {
    const i = Math.max(0, Math.min(years.length - 1, Math.round(v * (years.length - 1))));
    setIdx(i);
  });

  const theme = luxuryTheme;

  const common = { indexBy: "label", keys: ["Before", "After"], padding: 0.25 } as const;

  // derive a frame for the current year
  const frame = useMemo(() => (idx: number) => {
    const i = Math.round(idx);
    const d = (dataRaw as { year: number; before: number; after: number }[])[i] || (dataRaw as { year: number; before: number; after: number }[])[0];
    return [
      { label: String(d.year), Before: d.before, After: d.after },
    ];
  }, []);

  return (
    <div ref={ref} className="w-full" style={{ height }}>
      <motion.div style={{ height, opacity: 1 }}>
        <ResponsiveBarCanvas
          data={frame(idx)}
          keys={common.keys as readonly unknown[]}
          indexBy={common.indexBy as string}
          layout="horizontal"
          margin={{ top: 10, right: 20, bottom: 20, left: 60 }}
          axisBottom={{ tickSize: 0, tickPadding: 6, legend: "Score", legendOffset: 28 }}
          axisLeft={{ tickSize: 0, tickPadding: 6, legend: "Year", legendOffset: -50 }}
          colors={(bar: unknown) => ((bar as { id: string }).id === "After" ? "#FF4F79" : "#FFB97A")}
          theme={theme as unknown}
          enableLabel={false}
          motionConfig={{ tension: 120, friction: 20 } as unknown}
          animate={true}
          role="img"
        />
      </motion.div>
      <div className="mt-2 text-xs text-white/60">Scroll to scrub years</div>
    </div>
  );
}
