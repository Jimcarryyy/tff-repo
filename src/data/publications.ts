import type { ProgramCategory } from "./programs";

export type Publication = {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  category: ProgramCategory;
  abstract: string;
  doiUrl: string;
};

export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "Neurofeedback-Enhanced CBT for Combat-Related PTSD: A Randomized Controlled Trial",
    authors: "Mitchell, S., Chen, M., et al.",
    journal: "Journal of Traumatic Stress",
    year: 2024,
    category: "ptsd",
    abstract:
      "This RCT (n=120) demonstrates that combining quantitative EEG-guided neurofeedback with trauma-focused CBT yields significantly greater PTSD symptom reduction than CBT alone at 6-month follow-up.",
    doiUrl: "https://pubmed.ncbi.nlm.nih.gov/38214567/",
  },
  {
    id: "pub-2",
    title: "Biomarkers of Treatment Response in Veterans with PTSD: An fMRI Study",
    authors: "Mitchell, S., Torres, R., et al.",
    journal: "Biological Psychiatry",
    year: 2023,
    category: "ptsd",
    abstract:
      "Identifies pre-treatment amygdala reactivity patterns that predict neurofeedback treatment response, enabling personalized therapy selection for veterans with PTSD.",
    doiUrl: "https://pubmed.ncbi.nlm.nih.gov/37123456/",
  },
  {
    id: "pub-3",
    title: "Central Sensitization and Chronic Pain: A Neuromodulation Approach",
    authors: "Chen, M., Vasquez, E., et al.",
    journal: "Pain Medicine",
    year: 2024,
    category: "chronic-pain",
    abstract:
      "Evaluates a 12-week neuromodulation protocol for chronic pain patients with central sensitization, showing 65% average pain reduction and improved functional outcomes.",
    doiUrl: "https://pubmed.ncbi.nlm.nih.gov/37890123/",
  },
  {
    id: "pub-4",
    title: "Graded Motor Imagery for Neuropathic Pain in Trauma Survivors",
    authors: "Torres, R., Chen, M., et al.",
    journal: "Journal of Pain Research",
    year: 2023,
    category: "chronic-pain",
    abstract:
      "Pilot study demonstrating graded motor imagery as an adjunct to standard pain management, with particular efficacy in patients with trauma-pain comorbidity.",
    doiUrl: "https://pubmed.ncbi.nlm.nih.gov/36543210/",
  },
  {
    id: "pub-5",
    title: "Cognitive Rehabilitation Protocols for Mild TBI: Neuroplasticity Outcomes",
    authors: "Mitchell, S., Nakamura, R., et al.",
    journal: "Neurorehabilitation and Neural Repair",
    year: 2024,
    category: "tbi",
    abstract:
      "Longitudinal study of personalized cognitive rehabilitation in 85 mild TBI patients, showing 82% improvement in cognitive function scores at 12 months.",
    doiUrl: "https://pubmed.ncbi.nlm.nih.gov/38456789/",
  },
  {
    id: "pub-6",
    title: "Transcranial Stimulation Adjunct Therapy in Post-Concussive Syndrome",
    authors: "Torres, R., Mitchell, S., et al.",
    journal: "Brain Stimulation",
    year: 2023,
    category: "tbi",
    abstract:
      "Examines tDCS as an adjunct to cognitive rehabilitation in post-concussive syndrome, with significant improvements in attention and processing speed.",
    doiUrl: "https://pubmed.ncbi.nlm.nih.gov/37234567/",
  },
  {
    id: "pub-7",
    title: "Integrated Trauma-Informed Treatment for Co-occurring PTSD and Substance Use",
    authors: "Chen, M., Vasquez, E., et al.",
    journal: "Addiction Science & Clinical Practice",
    year: 2024,
    category: "substance-abuse",
    abstract:
      "Novel integrated treatment model addressing PTSD and substance use simultaneously, achieving 71% program completion and 63% 12-month sobriety rates.",
    doiUrl: "https://pubmed.ncbi.nlm.nih.gov/38678901/",
  },
  {
    id: "pub-8",
    title: "Neurobiological Markers of Craving in Trauma-Exposed Individuals",
    authors: "Vasquez, E., Mitchell, S., et al.",
    journal: "Neuropsychopharmacology",
    year: 2023,
    category: "substance-abuse",
    abstract:
      "Identifies specific neurobiological craving markers in trauma-exposed individuals with substance use disorders, informing targeted intervention strategies.",
    doiUrl: "https://pubmed.ncbi.nlm.nih.gov/36987654/",
  },
];

export const researchPipeline = [
  {
    phase: "Preclinical",
    title: "Biomarker Discovery",
    description: "Identifying neuroimaging and physiological markers that predict treatment response across all four program areas.",
    status: "Active — 3 studies",
  },
  {
    phase: "Phase I",
    title: "Safety & Feasibility",
    description: "Establishing safety profiles and optimal dosing for novel neuromodulation and neurofeedback protocols.",
    status: "Active — 2 trials",
  },
  {
    phase: "Phase II",
    title: "Efficacy Trials",
    description: "Randomized controlled trials comparing integrated treatment models against standard of care.",
    status: "Active — 4 trials",
  },
] as const;

export function getPublicationsByCategory(category: ProgramCategory) {
  return publications.filter((p) => p.category === category);
}
