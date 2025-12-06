import { Metadata } from "next";
import Link from "next/link";
import { Section, Card, CTAButton } from "../../(components)/components";
import { BLOG_POSTS, PLAYBOOKS, WEBINARS } from "../../../lib/mock/data";

export const metadata: Metadata = {
  title: "Resources – StackFold",
  description: "Insights, playbooks, and webinars to help you activate indices.",
};

export default function ResourcesPage() {
  return (
    <div className="py-12">
      <Section eyebrow="Resources" title="Blog & Insights" subtitle="Technical notes and practical guides.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((b) => (
            <Card key={b.id} className="p-5">
              <div className="text-xs text-white/60">{b.tags.join(", ")}</div>
              <div className="mt-1 text-white font-medium">{b.title}</div>
              <div className="mt-1 text-sm text-white/70">{b.excerpt}</div>
              <div className="mt-3 text-xs text-white/50">{new Date(b.date).toLocaleDateString()}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Signal Playbooks" subtitle="Click a playbook to view the vertical package.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PLAYBOOKS.map((p) => (
            <Card key={p.id} className="p-5">
              <div className="flex items-center justify-between">
                <div className="font-medium text-white/90">{p.title}</div>
                <Link href={`/solutions/${p.vertical}`} className="text-xs text-sky-300/90 hover:underline">Open</Link>
              </div>
              <div className="mt-1 text-sm text-white/70">{p.summary}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Webinars / On‑demand demos" subtitle="See the platform in action.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WEBINARS.map((w) => (
            <Card key={w.id} className="p-5">
              <div className="font-medium text-white/90">{w.title}</div>
              <div className="mt-1 text-sm text-white/70">{w.presenters.join(" • ")}</div>
              <div className="mt-3"><CTAButton href="/pricing">{w.cta}</CTAButton></div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
