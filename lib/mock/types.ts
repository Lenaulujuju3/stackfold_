// Centralized mock data types for StackFold
export type ID = string;

export type VerticalSlug =
  | "solar"
  | "financial"
  | "auto-insurance"
  | "real-estate-mortgage"
  | "nonprofit-political";

export interface KPI {
  label: string;
  value: string | number;
  delta?: string;
}

export interface BeforeAfterBar {
  label: string; // e.g., CAC, Response Rate, Revenue per HH
  before: number;
  after: number;
  unit?: string; // %, $, etc.
}

export interface Vertical {
  slug: VerticalSlug;
  name: string;
  outcome: string; // outcome statement for hero
  description?: string;
  bars: BeforeAfterBar[];
  kpis: KPI[]; // mini case-study metrics
  presets?: { index: string; range?: [number, number] }[];
  ctaLabel?: string; // Get [Vertical] Index Package
}

export interface IndexDef {
  id: ID;
  name: string;
  category: string;
  version: string;
  lastUpdated: string;
  status: "active" | "draft" | "paused";
}

export interface Customer {
  id: ID;
  company: string;
  plan: string;
  lastLogin: string;
  indicesCount: number;
  status: "active" | "trial" | "suspended";
}

export interface Invoice {
  id: ID;
  customer: string;
  amount: number; // USD cents or dollars (we'll use dollars for mock)
  status: "paid" | "due" | "overdue";
  date: string;
}

export interface CoverageStats {
  household: number; // percent
  email: number;
  phone: number;
  address: number;
  byState?: { state: string; coverage: number }[]; // for choropleth
}

export interface SavedView {
  id: ID;
  name: string;
  index: string;
  scoreRange: [number, number];
  geography: "state" | "county" | "zip";
  heatmap: boolean;
  choropleth: boolean;
  center?: [number, number];
  zoom?: number;
}

export interface BlogPost {
  id: ID;
  title: string;
  excerpt: string;
  tags: ("Signals" | "Vertical Playbooks" | "Case Studies")[];
  date: string;
}

export interface PlaybookCard {
  id: ID;
  title: string;
  vertical: VerticalSlug;
  summary: string;
}

export interface Webinar {
  id: ID;
  title: string;
  presenters: string[];
  cta: string; // CTA label
}

export interface Leader {
  id: ID;
  name: string;
  title: string;
  avatar?: string;
  bio: string;
}
