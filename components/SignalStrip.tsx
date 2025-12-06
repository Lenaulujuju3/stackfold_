"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { ResponsiveLineCanvas } from "@nivo/line";
import { Card, Section } from "../app/(components)/components";
import { luxuryTheme } from "../lib/nivoLuxuryTheme";

const cards = [
  { title: "Solar Propensity", lift: "+32%" },
  { title: "Direct Mail Response", lift: "+18%" },
  { title: "HELOC Opportunity", lift: "+27%" },
  { title: "HNW Density", lift: "+41%" },
];

function Spark() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const series = [
    {
      id: "trend",
      data: Array.from({ length: 12 }).map((_, i) => ({ x: i + 1, y: 50 + (Math.sin(i * 0.7) + 1) * 12 + (i > 6 ? i - 6 : 0) })),
    },
  ];
  return (
    <div ref={ref} className="h-20 w-full">
      {inView && (
        <ResponsiveLineCanvas
          data={series}
          margin={{ top: 6, right: 6, bottom: 6, left: 6 }}
          xScale={{ type: "point" }}
          yScale={{ type: "linear", min: "auto", max: "auto", stacked: false, reverse: false }}
          enableGridX={false}
          enableGridY={false}
          axisLeft={null}
          axisBottom={null}
          enablePoints={false}
          colors={["#FF4F79"]}
          theme={luxuryTheme as unknown}
          isInteractive={false}
          motionConfig={{ tension: 120, friction: 20 } as unknown}
          animate={true}
          role="img"
        />
      )}
    </div>
  );
}

export default function SignalStrip() {
  return (
    <section id="signals" className="relative py-20">
      <Section eyebrow="Signals" title="Live Signal Overview" subtitle="Visual snapshots from core indices.">
        <div className="no-scrollbar -mx-2 flex snap-x gap-3 overflow-x-auto px-2 pb-2 md:grid md:grid-cols-4 md:overflow-visible">
          {cards.map((c, i) => (
            <Card key={i} className="min-w-[320px] snap-center p-4 transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_50px_rgba(34,211,238,0.2)]">
              <div className="flex items-center justify-between">
                <div className="font-medium text-white/90">{c.title}</div>
                <div className="text-xs text-sky-300/90">View sample</div>
              </div>
              <p className="mt-1 text-xs text-white/60">Last 12 months</p>
              <div className="mt-2"><Spark /></div>
              <div className="mt-2 text-xs text-emerald-300/90">{c.lift} lift vs baseline</div>
            </Card>
          ))}
        </div>
      </Section>
    </section>
  );
}
