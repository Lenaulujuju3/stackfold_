"use client";
import Link from "next/link";
import { useMemo } from "react";
import useMagnetic from "../../hooks/useMagnetic";
import DarkToggle from "../../src/components/ui/DarkToggle";
import Newsletter from "../../src/components/ui/Newsletter";

// Design system primitives
export function Card({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`glass-luxury rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

export function Section({ title, eyebrow, subtitle, children, className = "" }: React.PropsWithChildren<{ title?: React.ReactNode; eyebrow?: React.ReactNode; subtitle?: React.ReactNode; className?: string }>) {
  return (
    <section className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <header className="mb-8">
          {eyebrow && <div className="text-xs font-semibold uppercase tracking-widest text-amber-300/90">{eyebrow}</div>}
          {title && <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/95">{title}</h2>}
          {subtitle && <p className="mt-2 max-w-3xl text-white/70">{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  );
}

export function CTAButton({ href = "#", children, variant = "primary", className = "" }: React.PropsWithChildren<{ href?: string; variant?: "primary" | "secondary"; className?: string }>) {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors will-change-transform";
  const variants = {
    primary: "bg-zenith text-midnight hover:bg-zenith/90",
    secondary: "bg-dusk/60 text-[#E6E6E6] hover:bg-dusk/70 border border-frost",
  } as const;
  // subtle magnetic hover effect
  // to avoid ref issues with Next Link, wrap in a span
  const ref = useMagnetic(12);
  return (
    <span ref={ref} className="inline-block" /* magnetic wrapper */>
      <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    </span>
  );
}

export function MetricCard({ label, value, delta }: { label: string; value: string; delta?: string }) {
  return (
    <Card className="p-5">
      <div className="text-sm text-white/60">{label}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <div className="text-2xl font-semibold text-white">{value}</div>
        {delta && <div className="text-xs text-emerald-300/90">{delta}</div>}
      </div>
    </Card>
  );
}

export function Sparkline({ data = [10, 14, 9, 16, 18, 15, 22, 24, 21, 28], color = "var(--accent-teal)" }: { data?: number[]; color?: string }) {
  const path = useMemo(() => {
    if (!data.length) return "";
    const w = 160, h = 48, pad = 4;
    const min = Math.min(...data), max = Math.max(...data);
    const x = (i: number) => pad + (i * (w - pad * 2)) / (data.length - 1);
    const y = (v: number) => pad + (h - pad * 2) * (1 - (v - min) / Math.max(1, max - min));
    return data.map((v, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(v)}`).join(" ");
  }, [data]);
  return (
    <svg width={160} height={48} viewBox="0 0 160 48" aria-hidden>
      <path d={path} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

export function HeatMapPlaceholder({ title = "US Market Hotspots" }: { title?: string }) {
  return (
    <Card className="p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-white/80 font-medium">{title}</div>
        <div className="flex gap-2 text-xs">
          <span className="rounded-full bg-emerald-400/20 px-2 py-1 text-emerald-300/90">Household Density</span>
          <span className="rounded-full bg-sky-400/20 px-2 py-1 text-sky-300/90">Avg Index</span>
          <span className="rounded-full bg-amber-400/20 px-2 py-1 text-amber-300/90">Growth</span>
        </div>
      </div>
      <div className="relative h-72 w-full overflow-hidden rounded-xl bg-gradient-to-br from-accent-2/15 via-transparent to-amber-300/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.25),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.25),transparent_50%),radial-gradient(circle_at_40%_80%,rgba(245,158,11,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute right-4 top-4 text-xs text-white/60">Interactive heat map (placeholder)</div>
      </div>
    </Card>
  );
}

export function NavBar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/signals", label: "Signals & Indices" },
    { href: "/solutions", label: "Solutions" },
    { href: "/data", label: "Data & Methodology" },
    { href: "/pricing", label: "Pricing" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About" },
  ];
  return (
    <div className="sticky top-0 z-50">
      <div className="border-b border-white/10 bg-[rgba(13,15,26,0.5)] backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-semibold text-white">
            <span className="bg-gradient-to-r from-accent-1 via-accent-2 to-amber-300 bg-clip-text text-transparent">StackFold</span>
          </Link>
          <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white">{l.label}</Link>
            ))}
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <DarkToggle />
            <CTAButton href="/pricing" variant="secondary">Request Data Audit</CTAButton>
            <CTAButton href="/pricing" variant="primary">Book Strategy Call</CTAButton>
            <Link href="/login" className="ml-2 text-white/70 hover:text-white">Login</Link>
          </div>
          <div className="md:hidden">
            <CTAButton href="/pricing" variant="primary" className="text-xs px-3 py-2">Audit</CTAButton>
          </div>
        </nav>
      </div>
      {/* Sticky CTA on small screens */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid place-items-center bg-[rgba(13,15,26,0.5)] p-2 backdrop-blur md:hidden">
        <div className="flex w-full max-w-2xl items-center gap-2">
          <CTAButton href="/pricing" variant="primary" className="flex-1">Request Data Audit</CTAButton>
          <CTAButton href="/pricing" variant="secondary" className="flex-1">Book Call</CTAButton>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/60 py-10 backdrop-blur">
      <Section className="">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div className="text-white/70">
            <div className="font-semibold text-white">Trusted by leaders</div>
            <div className="mt-2 text-sm">Enterprise-grade security. SOC2-ready. Privacy-first.</div>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-4 opacity-90">
            {[
              { a: '#FFEEDD', b: '#FFB97A' },
              { a: '#FFB97A', b: '#FF4F79' },
              { a: '#FFEEDD', b: '#FF4F79' },
              { a: '#FFB97A', b: '#FFEEDD' },
            ].map((g, i) => (
              <span key={i} className="shard" style={{ ['--shard-a' as unknown as string]: g.a, ['--shard-b' as unknown as string]: g.b }} />
            ))}
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <div className="font-semibold text-white">Stay Updated</div>
            <div className="mt-2 text-sm text-white/70">Get the latest insights on signal intelligence and market trends.</div>
          </div>
          <div className="flex justify-start md:justify-end">
            <Newsletter />
          </div>
        </div>
        
        <div className="mt-8 flex items-center justify-between text-xs text-white/50">
          <div>© {new Date().getFullYear()} StackFold, Inc.</div>
          <div className="flex gap-4">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-of-service">Terms</Link>
            <Link href="#">Security</Link>
          </div>
        </div>
      </Section>
    </footer>
  );
}
