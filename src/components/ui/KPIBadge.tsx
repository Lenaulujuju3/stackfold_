"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface KPIBadgeProps {
  label: string;
  value: string | number;
  change?: number;
  data?: number[];
  color?: string;
}

export default function KPIBadge({ label, value, change, data = [], color = "var(--accent-teal)" }: KPIBadgeProps) {
  const sparklinePath = useMemo(() => {
    if (!data.length) return "";
    const w = 60, h = 24, pad = 2;
    const min = Math.min(...data), max = Math.max(...data);
    const x = (i: number) => pad + (i * (w - pad * 2)) / (data.length - 1);
    const y = (v: number) => pad + (h - pad * 2) * (1 - (v - min) / Math.max(1, max - min));
    return data.map((v, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(v)}`).join(" ");
  }, [data]);

  const isPositive = change !== undefined ? change >= 0 : undefined;

  return (
    <motion.div
      className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs text-white/60">{label}</div>
          <div className="mt-1 text-2xl font-semibold text-white">{value}</div>
          {change !== undefined && (
            <div className={`mt-1 text-xs font-medium ${
              isPositive ? "text-emerald-300" : "text-red-300"
            }`}>
              {isPositive ? "+" : ""}{change}%
            </div>
          )}
        </div>
        {data.length > 0 && (
          <svg width={60} height={24} viewBox="0 0 60 24" className="mt-1">
            <path
              d={sparklinePath}
              fill="none"
              stroke={color}
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>
    </motion.div>
  );
}
