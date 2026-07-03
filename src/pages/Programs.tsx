import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/PageHeader";
import { programs } from "@/data/programs";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

import { usePageMeta } from "@/lib/seo";

const ProgramsPage = () => {
  usePageMeta(
    "Our Programs",
    "Explore TFF's four evidence-based treatment programs for PTSD, chronic pain, TBI, and substance abuse recovery."
  );

  return (
    <>
      <PageHeader
        badge="Treatment Programs"
        title="Four Pillars of Innovation"
        description="We focus on four critical areas where innovative neuroscience can make the greatest impact on trauma recovery."
        breadcrumbs={[{ label: "Programs" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-12">
            <div className="bg-primary/5 rounded-2xl p-6 flex items-center space-x-6">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Combined Success Rate: 74%</span>
              <div className="w-px h-6 bg-border" />
              <span className="text-sm text-muted-foreground">500+ Patients Treated</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <Card key={program.slug} className="hover-lift border-border/50 group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <program.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-primary mb-1">{program.title}</CardTitle>
                      <p className="text-sm text-secondary font-medium">{program.tagline}</p>
                      <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mt-2">
                        {program.stats}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">{program.description}</p>
                  <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-white">
                    <Link to={`/programs/${program.slug}`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 bg-muted rounded-3xl p-12">
            <h3 className="text-2xl font-semibold text-primary mb-4">Join Our Research Community</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Be part of groundbreaking research that's changing lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Become a Research Partner</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/research">View Publications</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramsPage;
