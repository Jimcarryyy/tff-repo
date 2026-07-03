export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  fullBio: string;
  initials: string;
  credentials: string;
  specialization: string;
  researchInterests: string[];
  type: "staff" | "advisor";
  email?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Founder & Director of Research",
    bio: "Neuroscientist with 15+ years in trauma research and clinical neuroscience. Published 50+ peer-reviewed papers.",
    fullBio:
      "Dr. Mitchell founded TFF after two decades at the intersection of neuroscience and clinical care. Her pioneering work on trauma biomarkers has been cited over 3,000 times. She leads the foundation's research strategy and maintains active collaborations with Stanford, UCSF, and the VA Palo Alto Health Care System.",
    initials: "SM",
    credentials: "PhD, MD",
    specialization: "Neuroscience & PTSD Research",
    researchInterests: ["Trauma biomarkers", "Neurofeedback protocols", "fMRI-guided therapy"],
    type: "staff",
    email: "s.mitchell@translationalfutures.org",
  },
  {
    name: "Dr. Michael Chen",
    role: "Clinical Director",
    bio: "Licensed psychologist specializing in PTSD and evidence-based therapeutic interventions with veterans.",
    fullBio:
      "Dr. Chen brings 12 years of clinical experience treating combat veterans and first responders. He developed TFF's trauma-focused CBT curriculum and oversees all clinical operations. He is a certified practitioner in EMDR and prolonged exposure therapy.",
    initials: "MC",
    credentials: "PhD, PsyD",
    specialization: "Clinical Psychology",
    researchInterests: ["Veteran mental health", "EMDR efficacy", "Group therapy models"],
    type: "staff",
    email: "m.chen@translationalfutures.org",
  },
  {
    name: "Dr. Rebecca Torres",
    role: "Director of Translation",
    bio: "Biomedical engineer focused on translating research into practical treatment solutions and medical devices.",
    fullBio:
      "Dr. Torres bridges the gap between laboratory discoveries and bedside applications. She holds three patents in neuromodulation devices and leads TFF's technology transfer initiatives. Previously at Medtronic Neuromodulation, she now directs the foundation's device development pipeline.",
    initials: "RT",
    credentials: "PhD, PE",
    specialization: "Biomedical Engineering",
    researchInterests: ["Neuromodulation devices", "Wearable biosensors", "Digital therapeutics"],
    type: "staff",
    email: "r.torres@translationalfutures.org",
  },
  {
    name: "James Williams",
    role: "Operations Director",
    bio: "Former military officer with extensive experience in veteran care and program management across multiple states.",
    fullBio:
      "James served 20 years in the U.S. Army before transitioning to nonprofit leadership. He manages TFF's day-to-day operations, grant administration, and veteran outreach programs. His operational expertise has scaled the foundation from a single-site pilot to a multi-program organization.",
    initials: "JW",
    credentials: "MBA",
    specialization: "Operations & Veteran Affairs",
    researchInterests: ["Program scalability", "Veteran outreach", "Grant management"],
    type: "staff",
    email: "j.williams@translationalfutures.org",
  },
];

export const advisors: TeamMember[] = [
  {
    name: "Dr. Elena Vasquez",
    role: "Board Chair & Scientific Advisor",
    bio: "Professor of Psychiatry at UCSF with expertise in addiction neuroscience and public health policy.",
    fullBio:
      "Dr. Vasquez chairs TFF's scientific advisory board and provides strategic guidance on research priorities. Her NIH-funded work on addiction neurobiology informs the foundation's substance abuse program.",
    initials: "EV",
    credentials: "MD, MPH",
    specialization: "Addiction Neuroscience",
    researchInterests: ["Addiction policy", "Public health", "Clinical trial design"],
    type: "advisor",
  },
  {
    name: "Dr. Robert Nakamura",
    role: "Clinical Advisor",
    bio: "Former VA Chief of Mental Health Services with 30 years of experience in military trauma care.",
    fullBio:
      "Dr. Nakamura advises on clinical protocol development and VA partnership strategy. He has overseen mental health programs serving over 50,000 veterans throughout his career.",
    initials: "RN",
    credentials: "MD",
    specialization: "Military Psychiatry",
    researchInterests: ["VA partnerships", "Military culture", "Integrated care models"],
    type: "advisor",
  },
  {
    name: "Dr. Amara Okafor",
    role: "Research Ethics Advisor",
    bio: "Bioethicist specializing in human subjects research and trauma-informed consent protocols.",
    fullBio:
      "Dr. Okafor ensures all TFF research meets the highest ethical standards. She chairs the institutional review board liaison committee and developed the foundation's trauma-informed consent framework.",
    initials: "AO",
    credentials: "PhD",
    specialization: "Research Ethics",
    researchInterests: ["Informed consent", "Trauma-informed research", "IRB compliance"],
    type: "advisor",
  },
];
