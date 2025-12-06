"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import { Reveal } from "../(components)/Reveal";
import dynamic from "next/dynamic";
import DataUniverse from "../../components/visuals/DataUniverse";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import PaperPlane from "../../components/three/PaperPlane";

import AtmosphericGlow from "../../components/three/AtmosphericGlow";

import SignalStrip from "../../components/SignalStrip";
import ImpactChart from "../../components/ImpactChart";
import { Section, Card, CTAButton, MetricCard, Sparkline } from "../(components)/components";
import { ChartHistogram, ChartSparkline, ChartMiniBars, ChartRadialGauge } from "../../components/visuals/Charts";

import type { StackFoldMapProps } from "../../components/map/StackFoldMap";
const StackFoldMap = dynamic<StackFoldMapProps>(() => import("../../components/map/StackFoldMap").then(m => m.default), { ssr: false });

const microStats = [
  { label: "Signals Tracked", value: "180+", delta: "+12 this month" },
  { label: "Households Indexed", value: "132M", delta: "+0.8%" },
  { label: "Verticals Served", value: "6", delta: "" },
  { label: "ZIP Codes Scored", value: "41,700", delta: "+100%" },
];

export default function HomePage() {
  const sections = [
    { id: "hero", label: "Hero" },
    { id: "signals", label: "Signals" },
    { id: "map", label: "Hotspots" },
    { id: "how", label: "How" },
    { id: "use", label: "Use Cases" },
    { id: "trust", label: "Trust" },
    { id: "cta", label: "Get Started" },
  ];

  function Dolly() {
    const { camera } = useThree();
    useFrame(() => {
      const t = typeof window !== "undefined" ? Math.min(window.scrollY / Math.max(1, window.innerHeight), 1) : 0;
      camera.position.z = 12 - 4 * t; // z: 12 -> 8 on initial scroll
    });
    return null;
  }

  return (
    <div className="relative">
      {/* Side section index */}
      <div className="fixed right-5 top-1/2 z-40 -translate-y-1/2 hidden flex-col gap-2 md:flex">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className={`group grid h-5 w-5 place-items-center rounded-full border border-white/20 bg-white/10`}>
                    <span className="sr-only">{s.label}</span>
                    <span className="block h-1.5 w-1.5 rounded-full bg-black/80 group-aria-[current=true]:bg-black" />
                  </a>
                ))}
      </div>

      {/* HERO */}
      <section id="hero" className="relative flex min-h-[88vh] items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_10%,rgba(56,189,248,0.15),transparent),radial-gradient(900px_500px_at_0%_0%,rgba(20,184,166,0.12),transparent)]" />
        <Section className="pt-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <Reveal>
                <h1 className="display-hero text-white">
                  SIGNAL INTELLIGENCE
                  <br />FOR PROFITABLE MAILERS.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-white/70">
                  Interpretable indices that cut waste, boost response, and scale profitable reach across markets.
                </p>
              </Reveal>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <CTAButton href="/pricing" variant="primary">Request Data Audit</CTAButton>
                <CTAButton href="/signals" variant="secondary">View Signals & Indices</CTAButton>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {microStats.map((m, i) => (
                  <Reveal key={i} delay={0.05*i}><MetricCard label={m.label} value={m.value} delta={m.delta} /></Reveal>
                ))}
              </div>
            </div>
            <div className="relative">
              {/* R3F hero scene with lightweight fallback */}
              <div className="hidden md:block">
                <div className="mx-auto aspect-[4/3] w-full max-w-[640px] overflow-hidden rounded-3xl border border-frost bg-[rgba(13,15,26,0.5)] backdrop-blur">
                  <Canvas dpr={[1,1.5]} camera={{ fov: 60, position: [0, 0, 12] }}>
                    <Suspense fallback={null}>
                      <AtmosphericGlow />
                      <PaperPlane />
                      <Dolly />
                    </Suspense>
                  </Canvas>
                </div>
              </div>
              <div className="md:hidden">
                <DataUniverse />
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* LIVE SIGNAL OVERVIEW STRIP */}
      <SignalStrip />

      {/* INDEX DISTRIBUTION MINI-SCENE */}
      <section id="mini" className="relative py-20">
        <Section eyebrow="Distribution" title="Index Snapshot" subtitle="A quick peek at deciles, trend, and coverage.">
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-6"><div className="text-sm text-white/70">Deciles</div><div className="mt-2"><ChartHistogram /></div></Card>
            <Card className="p-6"><div className="text-sm text-white/70">Trend</div><div className="mt-2"><ChartSparkline /></div></Card>
            <Card className="p-6"><div className="text-sm text-white/70">Coverage Preview</div><div className="mt-2"><StackFoldMap height={220} hideUI showHeatmap={false} showChoropleth geographyLevel="state" /></div></Card>
          </div>
        </Section>
      </section>

      {/* US MARKET HOTSPOTS MAP */}
      <section id="map" className="relative py-20">
        <Section eyebrow="Explorer" title="US Market Hotspots" subtitle="Zoom from national to street-level. Toggle density, average index score, and recent growth.">
          <div className="grid gap-4 md:grid-cols-[1fr_360px]">
            <StackFoldMap height={420} />
            <div className="space-y-3">
              <Card className="p-4">
                <div className="text-sm text-white/70">Toggles</div>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {['Household density','Average index score','Recent growth'].map((t) => (
                    <span key={t} className="rounded-full bg-white/10 px-2 py-1 text-white/80">{t}</span>
                  ))}
                </div>
              </Card>
              <Card className="p-4">
                <div className="text-sm text-white/70">Preset indices</div>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {['Solar','HELOC','Auto Refi','High Net Worth','Direct Mail Response'].map((t) => (
                    <span key={t} className="rounded-full bg-emerald-400/15 px-2 py-1 text-emerald-300/90">{t}</span>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Infographic tiles */}
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              {t:'Top States by HNW Density', data:[88,84,81,77,72]},
              {t:'Top ZIPs by Mail Response', data:[24,22,20,19,18]},
              {t:'HELOC Appetite (Top 5)', data:[76,72,68,66,64]},
              {t:'Coverage Quality', gauge:72},
            ].map((tile, i) => (
              <Card key={i} className="p-4 transition-transform hover:-translate-y-0.5">
                <div className="text-sm text-white/80">{tile.t}</div>
                {"data" in tile ? (
                  <div className="mt-2"><ChartMiniBars data={tile.data} /></div>
                ) : (
                  <div className="mt-2"><ChartRadialGauge value={(tile as { gauge: number }).gauge} /></div>
                )}
              </Card>
            ))}
          </div>
        </Section>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="relative py-20">
        <Section eyebrow="Method" title="How StackFold Works" subtitle="From raw signals to activation in three steps.">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {t: "Ingest", d: "Unify public records, property, behavioral, and campaign signals."},
              {t: "Index", d: "Normalize, feature-engineer, and model into interpretable indices."},
              {t: "Activate", d: "Decile scores and push to your CRM, MAP, or ads platform."},
            ].map((c, i) => (
              <Reveal key={i} delay={0.05*i}><Card className="p-6 transition-transform hover:-translate-y-0.5"><div className="text-white/90 font-semibold">{c.t}</div><p className="mt-2 text-white/70 text-sm">{c.d}</p></Card></Reveal>
            ))}
          </div>
        </Section>
      </section>

      {/* USE CASES */}
      <section id="use" className="relative py-20">
        <Section eyebrow="Playbooks" title="Use Cases" subtitle="Prebuilt playbooks to accelerate time-to-value.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Performance Marketing", link: "/solutions" },
              { t: "Solar & Home Services", link: "/solutions/solar" },
              { t: "Financial Services & Credit", link: "/solutions/financial" },
              { t: "Auto & Insurance", link: "/solutions/auto-insurance" },
              { t: "Real Estate & Mortgage", link: "/solutions/real-estate-mortgage" },
              { t: "Nonprofit & Political", link: "/solutions/nonprofit-political" },
            ].map((c, i) => (
              <Card key={i} className="p-5">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-white/90">{c.t}</div>
                  <Link href={c.link} className="text-xs text-sky-300/90 hover:underline">View playbook</Link>
                </div>
                <div className="mt-4"><Sparkline /></div>
              </Card>
            ))}
          </div>
        </Section>
      </section>

      {/* BEFORE / AFTER IMPACT */}
      <section id="impact" className="relative py-20">
        <Section eyebrow="Impact" title="Before vs After Index Activation" subtitle="Reduce waste and increase response with interpretable scoring.">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <div className="text-white/90 font-semibold">Why it works</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
                <li>Decile-based targeting reduces low-propensity mail.</li>
                <li>Transparent features accelerate ops alignment.</li>
                <li>Geo + entity indices stabilize performance across markets.</li>
              </ul>
            </Card>
            <Card className="p-6">
              <ImpactChart height={260} />
            </Card>
          </div>
        </Section>
      </section>

      {/* CTA SPLIT */}
      <section id="cta" className="relative py-24">
        <Section>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-6">
              <div className="text-lg font-semibold text-white">Upload a sample file for free signal scoring</div>
              <p className="mt-2 text-sm text-white/70">Privacy-safe. We’ll return a mini report with top indices.</p>
              <div className="mt-4 flex gap-3">
                <CTAButton href="/pricing" variant="primary">Request Data Audit</CTAButton>
                <CTAButton href="/resources" variant="secondary">See sample report</CTAButton>
              </div>
            </Card>
            <Card className="p-6">
              <div className="text-lg font-semibold text-white">Schedule a 30-minute Signal Strategy Call</div>
              <p className="mt-2 text-sm text-white/70">Bring your goals—we’ll tailor an index package and rollout plan.</p>
              <div className="mt-4"><CTAButton href="/pricing" variant="primary">Book Strategy Call</CTAButton></div>
            </Card>
          </div>
        </Section>
      </section>
    </div>
  );
}
