export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  timeframe: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'Solar Installer Reduces CAC by 31%',
    company: 'Sunfinity Solar',
    industry: 'Solar & Home Energy',
    challenge: 'High customer acquisition costs and low conversion rates in competitive solar markets',
    solution: 'Implemented StackFold Solar Readiness and HELOC Appetite indices to target high-propensity households',
    results: [
      { metric: 'CAC Reduction', value: '-31%', description: 'From $1,550 to $1,190 per acquisition' },
      { metric: 'Lead Conversion', value: '+53%', description: 'From 3.4% to 5.2% install rate' },
      { metric: 'Mail Response', value: '+100%', description: 'From 0.7% to 1.4% response rate' }
    ],
    timeframe: 'Q1-Q2 2025'
  },
  {
    id: 'cs2',
    title: 'Bank Increases Approval Rates by 25%',
    company: 'EverBank',
    industry: 'Financial Services',
    challenge: 'Low approval rates and high risk in credit card acquisition campaigns',
    solution: 'Deployed Credit Intent and Risk indices to pre-qualify prospects and reduce adverse selection',
    results: [
      { metric: 'Approval Rate', value: '+25%', description: 'From 28% to 35% approval rate' },
      { metric: 'CPA Reduction', value: '-25%', description: 'From $240 to $180 per acquisition' },
      { metric: 'Response Rate', value: '+75%', description: 'From 1.2% to 2.1% response rate' }
    ],
    timeframe: 'Q3 2025'
  },
  {
    id: 'cs3',
    title: 'Insurer Boosts Quote-to-Bind by 27%',
    company: 'SureAuto Insurance',
    industry: 'Auto & Insurance',
    challenge: 'Low quote-to-bind conversion and high churn rates in competitive markets',
    solution: 'Leveraged Auto Refi Propensity and Insurance Switch Likelihood indices for targeted campaigns',
    results: [
      { metric: 'Quote-to-Bind', value: '+27%', description: 'From 11% to 14% conversion rate' },
      { metric: 'Churn Reduction', value: '-27%', description: 'From 8.5% to 6.2% churn rate' },
      { metric: 'CPL Savings', value: '-22%', description: 'Cost per lead reduction' }
    ],
    timeframe: 'Q2-Q3 2025'
  },
  {
    id: 'cs4',
    title: 'Mortgage Lender Achieves 29% Higher Close Rates',
    company: 'HomeLend Mortgage',
    industry: 'Real Estate & Mortgage',
    challenge: 'Low close rates and high cost per acquisition in mortgage lending',
    solution: 'Applied HELOC Appetite and Mortgage Purchase Propensity indices for precise geographic targeting',
    results: [
      { metric: 'Close Rate', value: '+43%', description: 'From 4.2% to 6.0% close rate' },
      { metric: 'CPA Reduction', value: '-25%', description: 'From $320 to $240 per acquisition' },
      { metric: 'Response Rate', value: '+78%', description: 'From 0.9% to 1.6% response rate' }
    ],
    timeframe: 'Q1-Q2 2025'
  }
];
