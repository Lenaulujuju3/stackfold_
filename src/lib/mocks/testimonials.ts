export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "StackFold's indices cut our CAC by 31% in the first quarter. The transparency into scoring features helped our ops team trust and act on the data immediately.",
    name: "Sarah Chen",
    role: "VP of Growth",
    company: "Sunfinity Solar"
  },
  {
    id: 't2',
    quote: "We replaced black-box models with StackFold's interpretable indices. Our compliance team loves the audit trail, and our response rates prove the approach works.",
    name: "Michael Rodriguez",
    role: "Head of Data Science",
    company: "EverBank"
  },
  {
    id: 't3',
    quote: "The geographic granularity is unmatched. We can target at the ZIP level while understanding why each area scores high or low. Game changer for our mail campaigns.",
    name: "Jennifer Park",
    role: "Director of Marketing",
    company: "SureAuto Insurance"
  },
  {
    id: 't4',
    quote: "Implementation was seamless. The API docs are clear, support is responsive, and we saw ROI within 6 weeks. Best data vendor partnership we've had.",
    name: "David Kim",
    role: "CTO",
    company: "HomeLend Mortgage"
  }
];
