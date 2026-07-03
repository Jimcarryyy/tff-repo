export const siteConfig = {
  name: "Translational Futures Foundation",
  shortName: "TFF",
  tagline: "Advancing Trauma Recovery Through Science",
  description:
    "The Translational Futures Foundation advances innovative treatments for PTSD, chronic pain, TBI, and substance abuse through cutting-edge neuroscience and compassionate care.",
  email: "contact@translationalfutures.org",
  phone: "(650) 847-2900",
  address: {
    street: "3400 Hillview Avenue, Suite 200",
    city: "Palo Alto",
    state: "CA",
    zip: "94304",
  },
  ein: "94-XXXXXXX",
  founded: 2018,
  formspree: {
    contact: import.meta.env.VITE_FORMSPREE_CONTACT || "",
    donate: import.meta.env.VITE_FORMSPREE_DONATE || "",
    newsletter: import.meta.env.VITE_FORMSPREE_NEWSLETTER || "",
  },
  social: {
    linkedin: "https://linkedin.com/company/translational-futures",
    twitter: "https://twitter.com/TFFoundation",
  },
  crisisResources: [
    { name: "988 Suicide & Crisis Lifeline", phone: "988", url: "https://988lifeline.org" },
    { name: "VA Crisis Line", phone: "1-800-273-8255", url: "https://www.veteranscrisisline.net" },
  ],
} as const;

export const navLinks = [
  { label: "About", path: "/about" },
  { label: "Programs", path: "/programs" },
  { label: "Team", path: "/team" },
  { label: "Impact", path: "/impact" },
  { label: "Research", path: "/research" },
  { label: "Donate", path: "/donate" },
  { label: "Contact", path: "/contact" },
] as const;

export const impactStats = [
  { number: "500+", label: "Lives Transformed", description: "Patients who have successfully completed our programs" },
  { number: "12", label: "Active Research Studies", description: "Ongoing clinical trials and research projects" },
  { number: "85%", label: "Treatment Success Rate", description: "Patients showing significant improvement" },
  { number: "24/7", label: "Support Available", description: "Round-the-clock care and emergency support" },
] as const;

export const milestones = [
  { year: "2012", title: "Research Origins", description: "Founding team begins collaborative neuroscience research at Stanford-affiliated labs, focusing on trauma biomarkers." },
  { year: "2016", title: "First Clinical Trial", description: "Phase I trial launches for novel neurofeedback protocol in PTSD patients, achieving promising early results." },
  { year: "2018", title: "Foundation Established", description: "Translational Futures Foundation incorporated as a 501(c)(3) nonprofit to bridge research and clinical care." },
  { year: "2024", title: "Expanded Impact", description: "Four integrated programs serving 500+ patients across PTSD, chronic pain, TBI, and substance abuse recovery." },
] as const;

export const donateTiers = [
  { amount: 50, impact: "Provides one hour of neurofeedback therapy for a veteran in need." },
  { amount: 100, impact: "Funds clinical assessment materials for two new patients." },
  { amount: 250, impact: "Supports a week of group therapy sessions for trauma survivors." },
  { amount: 500, impact: "Sponsors one patient's full intake and evaluation process." },
] as const;
