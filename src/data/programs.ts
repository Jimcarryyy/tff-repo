import { Brain, Heart, Microscope, Users, type LucideIcon } from "lucide-react";

export type ProgramCategory = "ptsd" | "chronic-pain" | "tbi" | "substance-abuse";

export type Program = {
  slug: ProgramCategory;
  title: string;
  tagline: string;
  description: string;
  shortDescription: string;
  stats: string;
  color: string;
  icon: LucideIcon;
  whoItServes: string;
  approach: string[];
  outcomes: { label: string; value: string }[];
  problemStatement: string;
};

export const programs: Program[] = [
  {
    slug: "ptsd",
    title: "PTSD & Trauma Recovery",
    tagline: "Reclaiming peace through neuroscience",
    description:
      "Innovative therapeutic approaches combining neurofeedback, cognitive behavioral therapy, and emerging neuroscience techniques to help veterans and civilians recover from traumatic experiences.",
    shortDescription:
      "Neurofeedback and CBT-based protocols for veterans and civilians recovering from trauma.",
    stats: "78% success rate",
    color: "bg-blue-500",
    icon: Brain,
    whoItServes: "Veterans, first responders, and civilians with combat-related or complex PTSD.",
    approach: [
      "Quantitative EEG-guided neurofeedback training",
      "Trauma-focused cognitive behavioral therapy (TF-CBT)",
      "Mindfulness-based stress reduction protocols",
      "Peer support integration with clinical care",
    ],
    outcomes: [
      { label: "Symptom Reduction", value: "78%" },
      { label: "Program Completion", value: "84%" },
      { label: "6-Month Follow-up Success", value: "71%" },
    ],
    problemStatement:
      "Over 8 million Americans live with PTSD, yet fewer than 40% receive evidence-based treatment. Our program addresses this gap with accessible, research-backed interventions.",
  },
  {
    slug: "chronic-pain",
    title: "Chronic Pain Management",
    tagline: "Healing the mind-body connection",
    description:
      "Comprehensive pain management solutions that address both the neurological and psychological aspects of chronic pain through evidence-based treatments.",
    shortDescription:
      "Integrated neurological and psychological approaches to chronic pain relief.",
    stats: "65% pain reduction",
    color: "bg-red-500",
    icon: Heart,
    whoItServes: "Individuals with chronic pain conditions including neuropathic pain, fibromyalgia, and pain comorbid with trauma.",
    approach: [
      "Neuromodulation and biofeedback techniques",
      "Acceptance and commitment therapy (ACT)",
      "Graded motor imagery for central sensitization",
      "Multidisciplinary pain education workshops",
    ],
    outcomes: [
      { label: "Pain Reduction", value: "65%" },
      { label: "Functional Improvement", value: "58%" },
      { label: "Medication Reduction", value: "42%" },
    ],
    problemStatement:
      "Chronic pain affects 50 million Americans and is often intertwined with trauma. Our dual neurological-psychological model targets the root mechanisms of persistent pain.",
  },
  {
    slug: "tbi",
    title: "TBI Rehabilitation",
    tagline: "Unlocking neuroplasticity for recovery",
    description:
      "Advanced rehabilitation programs for traumatic brain injury patients, utilizing cutting-edge neuroplasticity research to optimize recovery outcomes.",
    shortDescription:
      "Neuroplasticity-driven rehabilitation for traumatic brain injury recovery.",
    stats: "82% improvement",
    color: "bg-green-500",
    icon: Microscope,
    whoItServes: "Military personnel and civilians with mild to moderate traumatic brain injuries and post-concussive syndrome.",
    approach: [
      "Cognitive rehabilitation training modules",
      "Vestibular and balance therapy integration",
      "Transcranial stimulation adjunct protocols",
      "Personalized neuroplasticity exercise regimens",
    ],
    outcomes: [
      { label: "Cognitive Improvement", value: "82%" },
      { label: "Return to Work/School", value: "67%" },
      { label: "Quality of Life Gains", value: "74%" },
    ],
    problemStatement:
      "TBI is a signature wound of modern conflict, yet rehabilitation options remain limited. We leverage the brain's capacity for neuroplasticity to accelerate functional recovery.",
  },
  {
    slug: "substance-abuse",
    title: "Substance Abuse Recovery",
    tagline: "Addressing addiction at its neurobiological roots",
    description:
      "Integrated treatment programs that address the neurobiological foundations of addiction while providing comprehensive support for sustainable recovery.",
    shortDescription:
      "Neurobiology-informed addiction treatment with comprehensive recovery support.",
    stats: "71% completion rate",
    color: "bg-purple-500",
    icon: Users,
    whoItServes: "Individuals with substance use disorders, particularly those with co-occurring PTSD or chronic pain.",
    approach: [
      "Neurobiological assessment and craving management",
      "Motivational interviewing and contingency management",
      "Relapse prevention with trauma-informed care",
      "Family systems therapy and community reintegration",
    ],
    outcomes: [
      { label: "Program Completion", value: "71%" },
      { label: "12-Month Sobriety", value: "63%" },
      { label: "Co-occurring Disorder Improvement", value: "69%" },
    ],
    problemStatement:
      "Addiction and trauma frequently co-occur, creating treatment challenges that single-modality programs cannot address. Our integrated model treats both simultaneously.",
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
