import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signals & Indices – StackFold",
  description: "Browse the catalog of interpretable indices across verticals.",
};

export default function SignalsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
