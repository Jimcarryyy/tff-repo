import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/PageHeader";
import { publications, researchPipeline } from "@/data/publications";
import type { ProgramCategory } from "@/data/programs";
import { usePageMeta } from "@/lib/seo";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const categories: { label: string; value: ProgramCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "PTSD", value: "ptsd" },
  { label: "Pain", value: "chronic-pain" },
  { label: "TBI", value: "tbi" },
  { label: "Substance Abuse", value: "substance-abuse" },
];

const ResearchPage = () => {
  const [filter, setFilter] = useState<ProgramCategory | "all">("all");

  usePageMeta(
    "Research & Publications",
    "Explore peer-reviewed research and clinical trials from the Translational Futures Foundation."
  );

  const filtered = filter === "all" ? publications : publications.filter((p) => p.category === filter);

  return (
    <>
      <PageHeader
        badge="Research"
        title="Publications & Clinical Trials"
        description="Our research is published in leading peer-reviewed journals and drives every treatment protocol we deliver."
        breadcrumbs={[{ label: "Research" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="subsection-heading text-primary mb-8">Research Pipeline</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {researchPipeline.map((phase) => (
              <Card key={phase.phase} className="border-border/50 hover-lift">
                <CardContent className="pt-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{phase.phase}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{phase.description}</p>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{phase.status}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat.value
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {filtered.map((pub) => (
              <Card key={pub.id} className="border-border/50 hover-lift">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-grow">
                      <h3 className="font-semibold text-primary text-lg mb-1">{pub.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {pub.authors} · <em>{pub.journal}</em>, {pub.year}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{pub.abstract}</p>
                    </div>
                    <a
                      href={pub.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover:underline shrink-0"
                    >
                      PubMed <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 bg-muted rounded-2xl p-10">
            <h3 className="text-xl font-semibold text-primary mb-3">Partner With Our Research Team</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Interested in collaborating on clinical trials or research initiatives?
            </p>
            <Button asChild>
              <Link to="/contact">Contact Research Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchPage;
