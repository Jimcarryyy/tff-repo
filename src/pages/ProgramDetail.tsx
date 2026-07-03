import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/PageHeader";
import { getProgramBySlug } from "@/data/programs";
import { getPublicationsByCategory } from "@/data/publications";
import { usePageMeta } from "@/lib/seo";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

const ProgramDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = slug ? getProgramBySlug(slug) : undefined;

  usePageMeta(
    program ? program.title : "Program",
    program?.description ?? "TFF treatment program details."
  );

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  const relatedPubs = getPublicationsByCategory(program.slug);

  return (
    <>
      <PageHeader
        badge={program.stats}
        title={program.title}
        description={program.tagline}
        breadcrumbs={[
          { label: "Programs", path: "/programs" },
          { label: program.title },
        ]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="subsection-heading text-primary mb-4">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{program.problemStatement}</p>
              </div>

              <div>
                <h2 className="subsection-heading text-primary mb-4">Who We Serve</h2>
                <p className="text-muted-foreground leading-relaxed">{program.whoItServes}</p>
              </div>

              <div>
                <h2 className="subsection-heading text-primary mb-6">Our Approach</h2>
                <ul className="space-y-4">
                  {program.approach.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {relatedPubs.length > 0 && (
                <div>
                  <h2 className="subsection-heading text-primary mb-6">Related Research</h2>
                  <div className="space-y-4">
                    {relatedPubs.slice(0, 2).map((pub) => (
                      <Card key={pub.id} className="border-border/50">
                        <CardContent className="pt-6">
                          <h3 className="font-semibold text-primary mb-1">{pub.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{pub.authors} · {pub.journal}, {pub.year}</p>
                          <p className="text-sm text-muted-foreground mb-3">{pub.abstract.slice(0, 150)}...</p>
                          <a
                            href={pub.doiUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-primary hover:underline"
                          >
                            Read on PubMed <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <Card className="border-border/50 sticky top-28">
                <CardHeader>
                  <CardTitle className="text-primary">Outcomes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {program.outcomes.map((outcome) => (
                    <div key={outcome.label} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="text-sm text-muted-foreground">{outcome.label}</span>
                      <span className="text-2xl font-light text-primary">{outcome.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="space-y-3">
                <Button asChild className="w-full" size="lg">
                  <Link to="/contact">Contact Us About This Program</Link>
                </Button>
                <Button asChild variant="outline" className="w-full" size="lg">
                  <Link to={`/donate?program=${program.slug}`}>
                    Donate to This Program
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramDetail;
