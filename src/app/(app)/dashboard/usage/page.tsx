"use client";

import { motion } from "framer-motion";
import { CreditCard, Download, Package, TrendingUp } from 'lucide-react';

interface UsageMetric {
  title: string;
  used: number;
  total: number;
  unit: string;
  icon: React.ElementType;
}

const usageMetrics: UsageMetric[] = [
  { title: "Data Credits", used: 75, total: 100, unit: "credits", icon: CreditCard },
  { title: "Downloads", used: 12, total: 50, unit: "files", icon: Download },
  { title: "Batch Jobs", used: 3, total: 10, unit: "jobs", icon: Package },
];

function RadialCard({ metric }: { metric: UsageMetric }) {
  const percentage = Math.round((metric.used / metric.total) * 100);
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur text-center"
    >
      <div className="relative w-32 h-32 mx-auto mb-4">
        <svg className="transform -rotate-90 w-32 h-32">
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-white/10"
          />
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="text-accent transition-all duration-1000 ease-out"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <metric.icon className="h-6 w-6 text-accent mb-1" />
          <span className="text-2xl font-bold text-white">{percentage}%</span>
        </div>
      </div>
      <h3 className="text-sm text-white/60 mb-1">{metric.title}</h3>
      <div className="text-lg font-semibold text-white">
        {metric.used} <span className="text-base font-normal text-white/60">/ {metric.total} {metric.unit}</span>
      </div>
    </motion.div>
  );
}

export default function UsagePage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Usage & Billing</h1>
        <p className="text-white/70">Monitor your plan usage and manage billing</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {usageMetrics.map((metric) => (
          <RadialCard key={metric.title} metric={metric} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Current Plan</h2>
          <span className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-sm font-medium">
            Professional
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-white/60">Monthly cost:</span>
            <span className="ml-2 text-white font-semibold">$299/month</span>
          </div>
          <div>
            <span className="text-white/60">Next billing:</span>
            <span className="ml-2 text-white">Dec 15, 2025</span>
          </div>
        </div>
      </motion.div>

      <div className="mt-8 flex gap-4">
        <button
          onClick={() => window.location.href = '/dashboard/settings?upgrade=true'}
          className="px-6 py-3 rounded-lg bg-accent hover:bg-accent/80 transition text-white font-medium flex items-center gap-2"
        >
          <TrendingUp className="h-5 w-5" />
          Upgrade Plan
        </button>
        <button
          onClick={() => window.location.href = '/dashboard/settings'}
          className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition text-white font-medium"
        >
          Manage Billing
        </button>
      </div>
    </div>
  );
}
