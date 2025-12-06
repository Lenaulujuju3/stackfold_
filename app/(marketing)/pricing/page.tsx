"use client";
import { useState, useMemo } from 'react';
import { Section, Card, CTAButton } from "../../(components)/components";
import { Input } from "../../../components/ui/shadcn";
import { ChartComparisonBars } from "../../../components/visuals/Charts";
import { ShieldCheck, Rocket, LineChart } from "lucide-react";

export default function PricingPage() {
  const tiers = [
    { name: "Starter", price: "$1,500/mo", icon: LineChart, bullets: ["Up to 5 indices", "2 markets", "Email support"] },
    { name: "Growth", price: "$4,500/mo", icon: Rocket, bullets: ["Up to 15 indices", "10 markets", "Priority support"] },
    { name: "Enterprise", price: "Custom", icon: ShieldCheck, bullets: ["Unlimited indices", "Nationwide", "SLA, SSO, SOC2"] },
  ];

  // ROI calculator
  const [marketSize, setMarketSize] = useState(100000);
  const [response, setResponse] = useState(1.2); // %
  const [cpl, setCpl] = useState(80);
  const [uplift, setUplift] = useState(25); // % expected

  const result = useMemo(() => {
    const leads = marketSize * (response / 100);
    const cost = leads * cpl;
    const improvedLeads = leads * (1 + uplift / 100);
    const deltaLeads = improvedLeads - leads;
    const estSavings = deltaLeads * cpl;
    return { leads, cost, improvedLeads, deltaLeads, estSavings };
  }, [marketSize, response, cpl, uplift]);

  return (
    <div className="py-16">
      <Section title="Pricing" subtitle="Flexible tiers for teams at every stage.">
        <div className="grid gap-4 md:grid-cols-3">
          {tiers.map((t) => {
            const Icon = t.icon;
            return (
              <Card key={t.name} className="p-6 transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_50px_rgba(34,211,238,0.15)]">
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 text-emerald-300" />
                  <div className="text-white/90 font-semibold">{t.name}</div>
                </div>
                <div className="mt-1 text-2xl text-white">{t.price}</div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/70">
                  {t.bullets.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <div className="mt-4"><CTAButton href="/login">Start</CTAButton></div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <div className="text-white/90 font-semibold">ROI Calculator</div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div>
                <div className="text-xs text-white/60">Market size (people/HHs)</div>
                <Input type="number" value={marketSize} onChange={(e) => setMarketSize(Number(e.target.value))} />
              </div>
              <div>
                <div className="text-xs text-white/60">Current response %</div>
                <Input type="number" step={0.1} value={response} onChange={(e) => setResponse(Number(e.target.value))} />
              </div>
              <div>
                <div className="text-xs text-white/60">CPL / CAC ($)</div>
                <Input type="number" value={cpl} onChange={(e) => setCpl(Number(e.target.value))} />
              </div>
              <div>
                <div className="text-xs text-white/60">Expected uplift %</div>
                <Input type="number" step={1} value={uplift} onChange={(e) => setUplift(Number(e.target.value))} />
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-white/90 font-semibold">Visual ROI</div>
            <div className="mt-3 text-xs text-white/60">Leads (Current vs With StackFold)</div>
            <ChartComparisonBars a={result.leads} b={result.improvedLeads} />
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-white/80">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3"><div className="text-white/60">Baseline leads</div><div className="text-xl text-white">{Math.round(result.leads).toLocaleString()}</div></div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3"><div className="text-white/60">Improved leads</div><div className="text-xl text-white">{Math.round(result.improvedLeads).toLocaleString()}</div></div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3"><div className="text-white/60">Delta leads</div><div className="text-xl text-white">{Math.round(result.deltaLeads).toLocaleString()}</div></div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3"><div className="text-white/60">Est. added value ($)</div><div className="text-xl text-white">{Math.round(result.estSavings).toLocaleString()}</div></div>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
