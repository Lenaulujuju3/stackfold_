"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Section, Card, CTAButton } from "../../(components)/components";
import type { Vertical } from "../../../lib/mock/types";
import type { StackFoldMapProps } from "../../../components/map/StackFoldMap";

const StackFoldMap = dynamic<StackFoldMapProps>(() => import("../../../components/map/StackFoldMap").then(m => m.default), { ssr: false });

export function BeforeAfterBars({ bars }: { bars: Vertical["bars"] }) {
  return (
    <Card className="p-5">
      <div className="text-sm text-white/70">Before vs After</div>
      <div className="mt-3 space-y-3">
        {bars.map((b) => {
          const max = Math.max(b.before, b.after);
          const beforePct = Math.max(8, Math.round((b.before / max) * 100));
          const afterPct = Math.max(8, Math.round((b.after / max) * 100));
          return (
            <div key={b.label} className="space-y-1">
              <div className="flex items-center justify-between text-xs text-white/60"><span>{b.label}</span><span>{b.before}{b.unit ?? ""} → {b.after}{b.unit ?? ""}</span></div>
              <div className="h-8 w-full rounded-lg bg-white/5">
                <div className="relative flex h-full w-full items-center">
                  <div className="h-8 rounded-l-lg bg-white/15" style={{ width: `${beforePct}%` }} />
                  <div className="-ml-2 h-8 rounded-r-lg bg-emerald-400/40" style={{ width: `${afterPct}%` }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default function VerticalTemplate({ vertical }: { vertical: Vertical }) {
  return (
    <div className="py-12">
      {/* HERO */}
      <Section eyebrow="Solutions" title={<span className="block text-5xl font-semibold leading-tight text-white">{vertical.name}</span>} subtitle={vertical.outcome}>
        <div className="mt-2 max-w-3xl text-white/70">{vertical.description}</div>
      </Section>

      <Section className="mt-4">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <BeforeAfterBars bars={vertical.bars} />
            <Card className="p-5">
              <div className="text-sm font-medium text-white">3-step Playbook</div>
              <div className="mt-3 grid gap-3 md:grid-cols-3">
                {[
                  {t: "Identify", d: "Pinpoint high-index geos and audiences."},
                  {t: "Activate", d: "Push deciles to CRM, MAP, or Ads."},
                  {t: "Optimize", d: "Iterate weekly on response & coverage."},
                ].map((s) => (
                  <Card key={s.t} className="p-4">
                    <div className="font-medium text-white/90">{s.t}</div>
                    <div className="mt-1 text-sm text-white/70">{s.d}</div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>
          <div className="space-y-4">
            <Card className="p-5">
              <div className="text-sm text-white/70">Mini case study</div>
              <div className="mt-3 grid gap-3">
                {vertical.kpis.map((k) => (
                  <div key={k.label} className="flex items-baseline justify-between">
                    <div className="text-white/70">{k.label}</div>
                    <div className="text-lg font-semibold text-white">{k.value}</div>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-5">
              <div className="text-sm text-white/70">Call to action</div>
              <CTAButton href="/pricing" className="mt-3 w-full">{vertical.ctaLabel ?? `Get ${vertical.name} Package`}</CTAButton>
            </Card>
          </div>
        </div>
      </Section>

      {/* HEATMAP PANEL */}
      <Section title="Heatmap Explorer" subtitle="Preview hotspots with vertical presets.">
        <div className="grid gap-4 md:grid-cols-[1fr_320px]">
          <StackFoldMap height={420} showHeatmap showChoropleth geographyLevel="state" />
          <Card className="p-4">
            <div className="text-sm text-white/70">Presets</div>
            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              {vertical.presets?.map((p) => (
                <span key={p.index} className="rounded-full bg-emerald-400/15 px-2 py-1 text-emerald-300/90">{p.index} {p.range ? `(${p.range[0]}–${p.range[1]})` : ""}</span>
              ))}
            </div>
            <div className="mt-4 text-xs text-white/50">Interactive map powered by mock data for demo.</div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
