"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  MapPin, 
  BarChart3, 
  FileText, 
  Download, 
  CreditCard, 
  Settings,
  Menu,
  X
} from "lucide-react";

const navItems = [
  { href: "/dashboard/explorer", label: "Explorer", icon: MapPin },
  { href: "/dashboard/indices", label: "Indices", icon: BarChart3 },
  { href: "/dashboard/score", label: "Score", icon: FileText },
  { href: "/dashboard/downloads", label: "Downloads", icon: Download },
  { href: "/dashboard/usage", label: "Usage", icon: CreditCard },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export default function SidebarNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const NavContent = () => (
    <nav className="flex flex-col gap-2 p-4">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
              isActive 
                ? "bg-white/10 text-white" 
                : "text-white/70 hover:bg-white/5 hover:text-white"
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Icon className="h-5 w-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 grid h-10 w-10 place-items-center rounded-lg bg-midnight text-white md:hidden"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Sidebar */}
      <div className="relative">
        {/* Desktop sidebar */}
        <div className="hidden h-full w-64 border-r border-white/10 bg-midnight/50 backdrop-blur md:block">
          <div className="py-6">
            <div className="px-4 pb-6">
              <Link href="/dashboard" className="text-lg font-bold text-white">
                StackFold
              </Link>
            </div>
            <NavContent />
          </div>
        </div>

        {/* Mobile sidebar */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-40 w-64 border-r border-white/10 bg-midnight/95 backdrop-blur md:hidden"
            >
              <div className="py-6">
                <div className="px-4 pb-6">
                  <Link href="/dashboard" className="text-lg font-bold text-white">
                    StackFold
                  </Link>
                </div>
                <NavContent />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
