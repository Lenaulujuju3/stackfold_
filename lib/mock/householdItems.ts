export const HOUSEHOLD_ITEMS = {
  // HNW & Wealth
  HNW: {
    luxuryAutoIndex: 87,        // % likelihood household owns luxury auto
    secondHome: 34,             // % owns second home
    privateSchool: 71,          // % pays private-school tuition
    brokerage: 92,              // % has brokerage account
    helocAvailable: 78,         // % has untapped HELOC
  },
  // Direct-Mail Response
  Response: {
    catalogBuyer: 65,           // % bought from catalog last 12m
    couponUser: 88,             // % uses coupons weekly
    donateByMail: 54,           // % donated via mail last year
    magazineSubs: 41,           // # active magazine subs
    sweepstakesEntrant: 73,     // % enters mail sweeps
  },
  // Solar Propensity
  Solar: {
    roofAge: 12,                // avg roof age (years)
    southFacing: 81,            // % roof faces south/south-west
    electricBill: 210,          // avg monthly electric ($)
    pool: 29,                   // % has pool / spa
    evOwned: 17,                // % owns EV
  },
  // HELOC Opportunity
  HELOC: {
    ltvUnder60: 68,             // % LTV ≤ 60%
    firstMortgageRate: 3.9,     // avg first-mortgage rate (%)
    creditScore: 742,           // avg VantageScore
    homeValue: 485000,          // avg estimated value ($)
    equityAvailable: 156000,    // avg tappable equity ($)
  },
} as const;

export type HouseholdIndexKey = keyof typeof HOUSEHOLD_ITEMS;
