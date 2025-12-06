"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getUser, type User } from "../../../lib/auth";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => { setUser(getUser()); }, []);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-900/50 backdrop-blur border-r border-white/10">
          <div className="p-6">
            <h2 className="text-xl font-bold text-white mb-6">Admin</h2>
            <nav className="space-y-2">
              <a
                href="/admin"
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  pathname === "/admin"
                    ? "bg-blue-600 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                Dashboard
              </a>
              <a
                href="/admin/indices"
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  pathname === "/admin/indices"
                    ? "bg-blue-600 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                Indices
              </a>
              <a
                href="/admin/invoices"
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  pathname === "/admin/invoices"
                    ? "bg-blue-600 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                Invoices
              </a>
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8">
          <div className="mb-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
            <div className="text-white/70">
              {user.email} ({user.role})
            </div>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
