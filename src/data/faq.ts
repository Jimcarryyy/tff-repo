export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "Who is eligible for TFF treatment programs?",
    answer:
      "Our programs serve veterans, first responders, and civilians affected by PTSD, chronic pain, TBI, or substance use disorders. Eligibility is determined through a comprehensive clinical assessment. We accept referrals from healthcare providers, VA facilities, and self-referrals.",
  },
  {
    question: "How long do treatment programs typically last?",
    answer:
      "Program duration varies by condition and individual needs. PTSD programs typically run 12–16 weeks, chronic pain programs 8–12 weeks, TBI rehabilitation 16–24 weeks, and substance abuse programs 12–20 weeks. All programs include follow-up care.",
  },
  {
    question: "Does insurance cover TFF treatments?",
    answer:
      "Many of our services are covered by major insurance providers and VA benefits. Our intake team works with each patient to verify coverage and explore financial assistance options. Contact us for a personalized benefits review.",
  },
  {
    question: "What makes TFF's approach different?",
    answer:
      "We integrate cutting-edge neuroscience research directly into clinical care. Our treatments combine neurofeedback, neuromodulation, and evidence-based psychotherapy in protocols developed and validated through our own clinical trials.",
  },
  {
    question: "How can I support the foundation's mission?",
    answer:
      "There are many ways to get involved: make a tax-deductible donation, volunteer your time, partner as a research institution, or help spread awareness. Visit our Donate page or Contact page to learn more.",
  },
  {
    question: "Is my personal health information kept private?",
    answer:
      "Absolutely. TFF is committed to protecting patient privacy in accordance with HIPAA regulations. All research participants provide informed consent, and clinical data is handled with the highest security standards. See our Privacy Policy for details.",
  },
  {
    question: "Can healthcare providers refer patients to TFF?",
    answer:
      "Yes. We welcome referrals from physicians, psychologists, VA providers, and other healthcare professionals. Our referral process is streamlined to ensure patients can begin assessment within two weeks of referral.",
  },
  {
    question: "Does TFF offer telehealth options?",
    answer:
      "Select program components are available via telehealth, including initial consultations, psychoeducation sessions, and follow-up care. In-person sessions are required for neurofeedback and neuromodulation treatments.",
  },
  {
    question: "How do I access crisis support?",
    answer:
      "If you or someone you know is in crisis, please call 988 (Suicide & Crisis Lifeline) or the VA Crisis Line at 1-800-273-8255. TFF's clinical support is available during business hours; for emergencies, always call 911.",
  },
  {
    question: "Are TFF research studies open for enrollment?",
    answer:
      "We regularly enroll participants in clinical trials across all four program areas. Visit our Research page for current studies or contact our research team at research@translationalfutures.org.",
  },
];

export const patientResources = [
  {
    title: "Treatment Overview",
    description: "A comprehensive guide to TFF's treatment approach, program structure, and what to expect.",
    file: "/resources/treatment-overview.pdf",
  },
  {
    title: "Family & Caregiver Guide",
    description: "Resources for families supporting a loved one through trauma recovery treatment.",
    file: "/resources/family-guide.pdf",
  },
  {
    title: "988 Suicide & Crisis Lifeline",
    description: "Free, confidential support for people in distress. Available 24/7.",
    url: "https://988lifeline.org",
  },
  {
    title: "VA Mental Health Services",
    description: "Veterans Affairs mental health resources, crisis support, and treatment locator.",
    url: "https://www.mentalhealth.va.gov",
  },
] as const;
