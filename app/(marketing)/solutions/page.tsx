import { Metadata } from "next";
import Link from "next/link";
import { Section, Card, CTAButton } from "../../(components)/components";
import { VERTICALS } from "../../../lib/mock/data";

export const metadata: Metadata = {
  title: "Solutions – StackFold",
  description: "Vertical playbooks powered by interpretable indices.",
};

export default function SolutionsIndexPage() {
  return (
    <div className="py-12">
      <Section eyebrow="Solutions" title="Vertical Playbooks" subtitle="Reusable packages tuned for your outcomes.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VERTICALS.map((v) => (
            <Card key={v.slug} className="p-5">
              <div className="flex items-center justify-between">
                <div className="font-medium text-white/90">{v.name}</div>
                <Link href={`/solutions/${v.slug}`} className="text-xs text-sky-300/90 hover:underline">View</Link>
              </div>
              <p className="mt-2 text-sm text-white/70">{v.outcome}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {(v.presets ?? []).map((p) => (
                  <span key={p.index} className="rounded-full bg-white/10 px-2 py-1 text-white/70">{p.index}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-6"><CTAButton href="/pricing">Get a tailored index package</CTAButton></div>
      </Section>
    </div>
  );
}
