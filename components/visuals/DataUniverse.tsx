"use client";
import { motion } from "framer-motion";
import React from "react";

// Faux-3D data sphere using animated SVG. Lightweight and SSR-safe.
export default function DataUniverse({ className = "" }: { className?: string }) {
  const rings = [8, 14, 22, 30, 38, 46, 54];
  const dots = Array.from({ length: 72 }).map((_, i) => ({
    angle: (i / 72) * Math.PI * 2,
    r: 30 + (i % 5) * 6,
  }));
  return (
    <div className={className}>
      <motion.div
        className="relative mx-auto aspect-square w-full max-w-[540px]"
        initial={{ opacity: 0, rotate: -10, scale: 0.96 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Slow orbital rotation */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 42, ease: "linear" }}
        >
          <svg viewBox="-60 -60 120 120" className="h-full w-full">
            <defs>
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
                <stop offset="60%" stopColor="#22d3ee" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="0" cy="0" r="36" fill="url(#glow)" />
            {/* latitude rings */}
            {rings.map((r, idx) => (
              <ellipse key={idx} cx="0" cy="0" rx={r} ry={Math.max(4, 60 - r)} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={0.4} />
            ))}
            {/* longitude arcs */}
            {Array.from({ length: 12 }).map((_, i) => (
              <ellipse key={i} cx="0" cy="0" rx={50} ry={12} transform={`rotate(${(i * 180) / 12})`} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={0.4} />
            ))}
            {/* data nodes */}
            {dots.map((d, i) => (
              <circle key={i} cx={Math.cos(d.angle) * d.r} cy={Math.sin(d.angle) * d.r} r={0.9} fill={i % 3 === 0 ? "#14b8a6" : i % 3 === 1 ? "#38bdf8" : "#f59e0b"} opacity={0.9} />
            ))}
          </svg>
        </motion.div>

        {/* subtle parallax halo */}
        <motion.div
          className="absolute -inset-6 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.15),transparent_60%)] blur-2xl"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
