"use client";
import React from "react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  RadialBarChart,
  RadialBar,
} from "recharts";
import { Cell } from "recharts";

export function ChartSparkline({ data = [10,12,9,13,16,14,18,22,20,24], color = "#22d3ee", className = "h-20 w-full" }: { data?: number[]; color?: string; className?: string }) {
  const rows = data.map((v, i) => ({ i, v }));
  return (
    <div className={className}>
      <ResponsiveContainer>
        <LineChart data={rows} margin={{ top: 6, right: 6, bottom: 0, left: 0 }}>
          <Line type="monotone" dataKey="v" stroke={color} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ChartMiniBars({ data = [4,8,12,7,10], color = "#38bdf8", className = "h-24 w-full" }: { data?: number[]; color?: string; className?: string }) {
  const rows = data.map((v, i) => ({ name: `${i+1}`, v }));
  return (
    <div className={className}>
      <ResponsiveContainer>
        <BarChart data={rows} margin={{ top: 6, right: 6, left: 6, bottom: 0 }}>
          <Bar dataKey="v" fill={color} radius={[4,4,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ChartHistogram({ deciles = [10,11,12,13,14,14,12,10,8,6], className = "h-28 w-full" }: { deciles?: number[]; className?: string }) {
  const rows = deciles.map((v, i) => ({ decile: `${i+1}`, v }));
  return (
    <div className={className}>
      <ResponsiveContainer>
        <BarChart data={rows} margin={{ top: 6, right: 6, left: 6, bottom: 0 }}>
          <XAxis dataKey="decile" hide />
          <Bar dataKey="v" fill="#22d3ee" radius={[3,3,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ChartComparisonBars({ a = 100, b = 140, labels = ["Current", "With StackFold"], colors = ["#64748b", "#22d3ee"], className = "h-40 w-full" }: { a?: number; b?: number; labels?: [string, string]; colors?: [string, string]; className?: string }) {
  const rows = [{ name: labels[0], v: a }, { name: labels[1], v: b }];
  return (
    <div className={className}>
      <ResponsiveContainer>
        <BarChart data={rows} margin={{ top: 12, right: 12, left: 12, bottom: 0 }}>
          <XAxis dataKey="name" tick={{ fill: "#a3a3a3" }} axisLine={false} tickLine={false} />
          <YAxis hide />
          <Bar dataKey="v" radius={[6,6,0,0]}>
            {rows.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? colors[0] : colors[1]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ChartRadialGauge({ value = 72, className = "h-36 w-full", color = "#22d3ee" }: { value?: number; className?: string; color?: string }) {
  const rows = [{ name: "score", v: value, fill: color }];
  return (
    <div className={className}>
      <ResponsiveContainer>
        <RadialBarChart innerRadius="70%" outerRadius="100%" startAngle={180} endAngle={0} data={rows}>
          <RadialBar background dataKey="v" cornerRadius={8} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
