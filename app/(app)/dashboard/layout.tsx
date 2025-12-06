"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/dashboard/markets", label: "Markets" },
    { href: "/dashboard/settings", label: "Settings" },
  ];
  return (
    <div className="min-h-[80vh]">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 pt-8 sm:px-6 lg:grid-cols-[240px_1fr] lg:px-8">
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-2">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link key={l.href} href={l.href} className={`block rounded-xl border px-3 py-2 text-sm ${active ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200" : "border-white/10 bg-white/5 text-white/70 hover:text-white"}`}>
                  {l.label}
                </Link>
              );
            })}
            <div className="mt-6 text-xs text-white/50">Mock auth: use /login to switch user/admin.</div>
          </div>
        </aside>
        <section className="min-w-0">{children}</section>
      </div>
    </div>
  );
}
