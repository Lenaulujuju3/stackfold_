import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing – StackFold",
  description: "Flexible tiers and ROI calculator to estimate value.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
