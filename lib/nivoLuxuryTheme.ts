export const luxuryTheme = {
  background: "transparent",
  axis: {
    domain: { line: { stroke: "rgba(255,255,255,0.06)", strokeWidth: 0.5 } },
    ticks: {
      line: { stroke: "rgba(255,255,255,0.06)", strokeWidth: 0.5 },
      text: { fill: "#FFB97A", fontSize: 12 },
    },
    legend: { text: { fill: "#FFB97A" } },
  },
  grid: { line: { stroke: "#FFFFFF", strokeOpacity: 0.08, strokeDasharray: "4 4" } },
  tooltip: {
    container: {
      background: "rgba(42,45,62,0.7)",
      color: "#FFEEDD",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderLeft: "4px solid #FF4F79",
      borderRadius: 16,
    },
  },
} as const;
