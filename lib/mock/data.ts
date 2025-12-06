import type { BlogPost, CoverageStats, Customer, Invoice, IndexDef, Leader, PlaybookCard, SavedView, Vertical } from "./types";

export const VERTICALS: Vertical[] = [
  {
    slug: "solar",
    name: "Solar & Home Energy",
    outcome: "Lower CAC and increase install rates with Solar Readiness indices",
    description: "Target households with high solar propensity and financing readiness.",
    bars: [
      { label: "CAC", before: 1550, after: 1190, unit: "$" },
      { label: "Lead→Install", before: 3.4, after: 5.2, unit: "%" },
      { label: "DM Response", before: 0.7, after: 1.4, unit: "%" },
    ],
    kpis: [
      { label: "Lift vs. control", value: "+31%" },
      { label: "Coverage", value: "94% HH" },
      { label: "Avg. Payback", value: "< 8 weeks" },
    ],
    presets: [
      { index: "Solar Readiness", range: [70, 100] },
      { index: "HELOC Appetite", range: [60, 100] },
    ],
    ctaLabel: "Get Solar Index Package",
  },
  {
    slug: "financial",
    name: "Financial Services",
    outcome: "Improve approvals and reduce risk using Credit Intent and Risk Indices",
    description: "Acquisition and cross-sell signals across credit, lending, and wealth.",
    bars: [
      { label: "Response Rate", before: 1.2, after: 2.1, unit: "%" },
      { label: "CPA", before: 240, after: 180, unit: "$" },
      { label: "Approval Rate", before: 28, after: 35, unit: "%" },
    ],
    kpis: [
      { label: "Lift vs. control", value: "+24%" },
      { label: "Coverage", value: "95% HH" },
      { label: "Time to live", value: "3-6 weeks" },
    ],
    presets: [
      { index: "Credit Intent", range: [65, 100] },
      { index: "Risk / Fraud", range: [0, 40] },
    ],
    ctaLabel: "Get Financial Index Package",
  },
  {
    slug: "auto-insurance",
    name: "Auto & Insurance",
    outcome: "Drive quotes and bind rates with propensity and churn indices",
    description: "Identify high-intent drivers and households for auto and P&C.",
    bars: [
      { label: "Quote→Bind", before: 11, after: 14, unit: "%" },
      { label: "Churn", before: 8.5, after: 6.2, unit: "%" },
      { label: "DM Response", before: 0.5, after: 1.0, unit: "%" },
    ],
    kpis: [
      { label: "Lift vs. control", value: "+18%" },
      { label: "Coverage", value: "93% HH" },
      { label: "CPL savings", value: "-22%" },
    ],
    presets: [
      { index: "Auto Refi Propensity", range: [60, 100] },
      { index: "Insurance Switch Likelihood", range: [70, 100] },
    ],
    ctaLabel: "Get Auto & Insurance Package",
  },
  {
    slug: "real-estate-mortgage",
    name: "Real Estate & Mortgage",
    outcome: "Find move-ready households with HELOC and Mortgage propensity",
    description: "Prospect for HELOC, purchase, and refi with precise geo targeting.",
    bars: [
      { label: "Response Rate", before: 0.9, after: 1.6, unit: "%" },
      { label: "CPA", before: 320, after: 240, unit: "$" },
      { label: "Close Rate", before: 4.2, after: 6.0, unit: "%" },
    ],
    kpis: [
      { label: "Lift vs. control", value: "+29%" },
      { label: "Coverage", value: "96% HH" },
      { label: "Average lift", value: "+0.7x" },
    ],
    presets: [
      { index: "HELOC Appetite", range: [70, 100] },
      { index: "Mortgage Purchase Propensity", range: [65, 100] },
    ],
    ctaLabel: "Get Mortgage Index Package",
  },
  {
    slug: "nonprofit-political",
    name: "Nonprofit & Political",
    outcome: "Increase giving and turnout with donor and persuasion indices",
    description: "Audience building for fundraising and advocacy.",
    bars: [
      { label: "Donor Response", before: 0.7, after: 1.3, unit: "%" },
      { label: "CPG (Cost per gift)", before: 94, after: 68, unit: "$" },
      { label: "Volunteer Signup", before: 0.3, after: 0.6, unit: "%" },
    ],
    kpis: [
      { label: "Lift vs. control", value: "+35%" },
      { label: "Coverage", value: "90% HH" },
      { label: "Time to live", value: "2-4 weeks" },
    ],
    presets: [
      { index: "Donor Propensity", range: [65, 100] },
      { index: "Persuasion Likelihood", range: [60, 100] },
    ],
    ctaLabel: "Get Nonprofit Index Package",
  },
];

export const COVERAGE: CoverageStats = {
  household: 95,
  email: 78,
  phone: 71,
  address: 97,
  byState: [
    { state: "CA", coverage: 97 },
    { state: "NY", coverage: 96 },
    { state: "TX", coverage: 94 },
    { state: "FL", coverage: 95 },
    { state: "IL", coverage: 93 },
  ],
};

export const BLOG_POSTS: BlogPost[] = [
  { id: "b1", title: "What is a Market Index?", excerpt: "A practical guide to interpretable scoring.", tags: ["Signals"], date: "2025-10-12" },
  { id: "b2", title: "Solar Playbook: Q4 Tactics", excerpt: "Where to focus and why.", tags: ["Vertical Playbooks"], date: "2025-10-18" },
  { id: "b3", title: "Case Study: 22% CAC Reduction", excerpt: "Financial services activation.", tags: ["Case Studies"], date: "2025-09-30" },
  { id: "b4", title: "Indices vs. Black-Box Models", excerpt: "Why transparency matters.", tags: ["Signals"], date: "2025-08-09" },
];

export const PLAYBOOKS: PlaybookCard[] = [
  { id: "p1", title: "Solar Readiness", vertical: "solar", summary: "Boost installs and lower CAC with proven geos" },
  { id: "p2", title: "Credit Intent", vertical: "financial", summary: "Increase approvals and reduce risk" },
  { id: "p3", title: "Auto Refi Propensity", vertical: "auto-insurance", summary: "Find high-intent refi prospects" },
  { id: "p4", title: "HELOC Appetite", vertical: "real-estate-mortgage", summary: "Tap into home equity demand" },
  { id: "p5", title: "Donor Propensity", vertical: "nonprofit-political", summary: "Lift giving and turnout" },
];

export const WEBINARS: { id: string; title: string; presenters: string[]; cta: string }[] = [
  { id: "w1", title: "Live Demo: Market Explorer", presenters: ["Head of Product", "Data Scientist"], cta: "Watch on-demand" },
  { id: "w2", title: "Playbooks: Solar & Mortgage", presenters: ["Growth Lead"], cta: "Register" },
];

export const LEADERS: Leader[] = [
  { id: "l1", name: "Alex Rivera", title: "CEO", avatar: "/next.svg", bio: "Operator and builder across data platforms." },
  { id: "l2", name: "Samir Patel", title: "Head of Data", avatar: "/vercel.svg", bio: "ML and privacy engineering lead." },
  { id: "l3", name: "Julia Chen", title: "VP Growth", avatar: "/globe.svg", bio: "Scaled GTM at analytics companies." },
];

export const MILESTONES: { date: string; text: string }[] = [
  { date: "2023", text: "Founded to make signals interpretable & actionable" },
  { date: "2024", text: "First enterprise deployments with SOC2 readiness" },
  { date: "2025", text: "Market Explorer and Index Catalog launched" },
];

export const CUSTOMERS: Customer[] = [
  { id: "c1", company: "Sunfinity", plan: "Enterprise", lastLogin: "2025-11-27", indicesCount: 14, status: "active" },
  { id: "c2", company: "EverBank", plan: "Business", lastLogin: "2025-11-26", indicesCount: 9, status: "active" },
  { id: "c3", company: "SureAuto", plan: "Starter", lastLogin: "2025-11-22", indicesCount: 5, status: "trial" },
];

export const INVOICES: Invoice[] = [
  { id: "INV-1001", customer: "Sunfinity", amount: 4800, status: "paid", date: "2025-10-02" },
  { id: "INV-1002", customer: "EverBank", amount: 3200, status: "due", date: "2025-11-01" },
  { id: "INV-1003", customer: "SureAuto", amount: 1200, status: "overdue", date: "2025-11-10" },
];

export const INDICES: IndexDef[] = [
  { id: "i1", name: "Solar Readiness", category: "Home & Property", version: "1.3", lastUpdated: "2025-11-25", status: "active" },
  { id: "i2", name: "Credit Intent", category: "Credit & Risk", version: "2.0", lastUpdated: "2025-11-22", status: "active" },
  { id: "i3", name: "HELOC Appetite", category: "Financial", version: "1.1", lastUpdated: "2025-11-20", status: "draft" },
];

export const SAVED_VIEWS: SavedView[] = [
  { id: "sv1", name: "Solar Hotspots", index: "Solar Readiness", scoreRange: [70, 100], geography: "zip", heatmap: true, choropleth: true, center: [-119.4, 36.7], zoom: 5.4 },
  { id: "sv2", name: "HELOC Density", index: "HELOC Appetite", scoreRange: [65, 100], geography: "county", heatmap: false, choropleth: true, center: [-98.6, 39.8], zoom: 4 },
];

export const ADMIN_SUMMARY = [
  { metric: "Total Users", value: "1,234", status: "Active" },
  { metric: "Active Projects", value: "56", status: "In Progress" },
  { metric: "Data Coverage", value: "95%", status: "Excellent" },
  { metric: "System Health", value: "Online", status: "Healthy" },
];
