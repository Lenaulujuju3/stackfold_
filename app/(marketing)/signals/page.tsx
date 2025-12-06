"use client";
import React, { useMemo, useState } from "react";
import { Section, Card } from "../../(components)/components";
import { SIGNALS } from "../../../data/signals";
import { Reveal } from "../../(components)/Reveal";

export default function SignalsPage() {
  const [selected, setSelected] = useState("all");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(SIGNALS.map((s) => s.category)));
    return ["all", ...cats];
  }, []);

  const filtered = useMemo(() => {
    if (selected === "all") return SIGNALS;
    return SIGNALS.filter((s) => s.category === selected);
  }, [selected]);

  return (
    <div className="py-8">
      <Section title="Signals & Indices" subtitle="Explore our library of predictive signals">
        <Card className="p-6">
          <div className="mb-4 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`rounded-full px-3 py-1 text-sm ${
                  selected === cat
                    ? "bg-zenith text-midnight"
                    : "bg-dusk/60 text-white/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((signal, i) => (
              <Reveal key={signal.slug} delay={0.05 * i}>
                <Card className="p-4">
                  <div className="font-medium text-white/90">{signal.name}</div>
                  <div className="mt-1 text-sm text-white/60">{signal.category}</div>
                  <div className="mt-2 text-xs text-white/50">{signal.description}</div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Card>
      </Section>
    </div>
  );
}
