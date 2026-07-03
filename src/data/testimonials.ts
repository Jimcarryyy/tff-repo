export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  program: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "The Translational Futures Foundation gave me my life back. After years of struggling with PTSD and chronic pain, their innovative treatment approach helped me find peace, purpose, and hope for the future again.",
    name: "Marcus T.",
    role: "Marine Veteran, Program Graduate",
    program: "PTSD & Chronic Pain",
  },
  {
    id: "t2",
    quote:
      "After my TBI, I was told I'd never return to my career. TFF's rehabilitation program proved them wrong. The personalized cognitive training and neuroplasticity exercises made all the difference.",
    name: "Jennifer L.",
    role: "TBI Program Graduate",
    program: "TBI Rehabilitation",
  },
  {
    id: "t3",
    quote:
      "For the first time in a decade, I feel like myself again. The integrated approach that addressed both my trauma and addiction simultaneously was exactly what I needed. The team truly cares.",
    name: "David R.",
    role: "Recovery Program Graduate",
    program: "Substance Abuse Recovery",
  },
];

export const annualImpact = [
  { metric: "Patients Served", value: "127", change: "+23%" },
  { metric: "Research Publications", value: "8", change: "+2" },
  { metric: "Clinical Hours Delivered", value: "4,200", change: "+18%" },
  { metric: "Community Workshops", value: "36", change: "+12" },
  { metric: "Research Partners", value: "14", change: "+3" },
  { metric: "Grant Funding Secured", value: "$2.4M", change: "+$600K" },
] as const;

export const chartData = [
  { program: "PTSD", successRate: 78 },
  { program: "Pain", successRate: 65 },
  { program: "TBI", successRate: 82 },
  { program: "Substance", successRate: 71 },
] as const;
