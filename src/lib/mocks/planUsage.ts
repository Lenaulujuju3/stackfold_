export interface PlanUsage {
  plan: {
    name: string;
    monthlyCost: number;
    billingDate: string;
  };
  usage: {
    dataCredits: {
      used: number;
      total: number;
      unit: string;
    };
    downloads: {
      used: number;
      total: number;
      unit: string;
    };
    batchJobs: {
      used: number;
      total: number;
      unit: string;
    };
  };
  features: string[];
  limits: {
    maxRecordsPerExport: number;
    maxConcurrentJobs: number;
    apiRateLimit: string;
  };
}

export const PLAN_USAGE: PlanUsage = {
  plan: {
    name: "Professional",
    monthlyCost: 299,
    billingDate: "2025-12-15"
  },
  usage: {
    dataCredits: {
      used: 75,
      total: 100,
      unit: "credits"
    },
    downloads: {
      used: 12,
      total: 50,
      unit: "files"
    },
    batchJobs: {
      used: 3,
      total: 10,
      unit: "jobs"
    }
  },
  features: [
    "Access to all market indices",
    "Geographic segmentation tools",
    "CSV and Parquet export formats",
    "API access with 1000 requests/day",
    "Email support",
    "Segment saving and management"
  ],
  limits: {
    maxRecordsPerExport: 500000,
    maxConcurrentJobs: 3,
    apiRateLimit: "1000 requests/day"
  }
};
