"use client";
import { HOUSEHOLD_ITEMS, type HouseholdIndexKey } from "@/lib/mock/householdItems";

interface IndexCardProps {
  indexId: HouseholdIndexKey;
  className?: string;
}

export function IndexCard({ indexId, className = "" }: IndexCardProps) {
  const data = HOUSEHOLD_ITEMS[indexId];
  
  if (!data) return null;

  const formatValue = (key: string, value: number): string => {
    if (key.includes('Rate')) return `${value}%`;
    if (key.includes('Score')) return value.toString();
    if (key.includes('Bill') || key.includes('Value') || key.includes('Equity')) {
      return new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD',
        maximumFractionDigits: 0 
      }).format(value);
    }
    if (key.includes('Age') || key.includes('Subs')) return value.toString();
    return `${value}%`;
  };

  const getLabel = (key: string): string => {
    const labels: Record<string, string> = {
      luxuryAutoIndex: 'Luxury Auto',
      secondHome: 'Second Home',
      privateSchool: 'Private School',
      brokerage: 'Brokerage',
      helocAvailable: 'HELOC Avail',
      catalogBuyer: 'Catalog Buyer',
      couponUser: 'Coupon User',
      donateByMail: 'Mail Donor',
      magazineSubs: 'Magazines',
      sweepstakesEntrant: 'Sweepstakes',
      roofAge: 'Roof Age',
      southFacing: 'South Face',
      electricBill: 'Electric Bill',
      pool: 'Pool/Spa',
      evOwned: 'EV Owned',
      ltvUnder60: 'LTV ≤60%',
      firstMortgageRate: 'Mortgage Rate',
      creditScore: 'Credit Score',
      homeValue: 'Home Value',
      equityAvailable: 'Equity Avail',
    };
    return labels[key] || key;
  };

  return (
    <div className={`grid gap-2 ${className}`}>
      {Object.entries(data).map(([key, value]) => (
        <span 
          key={key} 
          className="px-2 py-1 rounded bg-white/10 text-xs text-white/80 flex justify-between"
        >
          <span>{getLabel(key)}</span>
          <span className="font-semibold text-white">{formatValue(key, value)}</span>
        </span>
      ))}
    </div>
  );
}
