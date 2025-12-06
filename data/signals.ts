export type Signal = {
  slug: string;
  name: string;
  category: "Wealth" | "Credit & Risk" | "Home & Property" | "Behavioral" | "Engagement";
  description: string;
  coverage: string;
  useCase: string;
};

export const SIGNALS: Signal[] = [
  { slug: "solar-readiness", name: "Solar Readiness Index", category: "Home & Property", description: "Likelihood of homeowner adoption in next 12 months.", coverage: "US residential HHs", useCase: "Solar lead gen, canvassing, DM" },
  { slug: "credit-intent", name: "Credit Intent Index", category: "Credit & Risk", description: "Propensity to seek new credit lines / HELOC.", coverage: "US adult consumers", useCase: "Lending, HELOC, cards" },
  { slug: "donor-propensity", name: "Donor Propensity Index", category: "Engagement", description: "Likelihood to donate in next 90 days.", coverage: "US adult consumers", useCase: "Nonprofit, political" },
  { slug: "uhnwi-density", name: "UHNWI Density Index", category: "Wealth", description: "High net worth propensity by micro-geo.", coverage: "US households", useCase: "Luxury, private banking" },
  { slug: "dm-response", name: "Direct Mail Response Index", category: "Engagement", description: "Historic and modeled DM response at ZIP+ level.", coverage: "US households", useCase: "DM audience planning" },
];

export function findSignal(slug: string) { return SIGNALS.find((s) => s.slug === slug); }
