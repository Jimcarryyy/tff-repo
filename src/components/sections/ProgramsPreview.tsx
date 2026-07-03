import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { programs } from "@/data/programs";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProgramsPreview = () => {
  return (
    <section id="programs-preview" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
            Our Programs
          </div>
          <h2 className="section-heading mb-6 text-primary">Four Pillars of Innovation</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Evidence-based treatment programs backed by rigorous clinical research.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <Card key={program.slug} className="hover-lift border-border/50 group flex flex-col">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <program.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-primary">{program.title}</CardTitle>
                <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mx-auto">
                  {program.stats}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {program.shortDescription}
                </p>
                <Button asChild variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white">
                  <Link to={`/programs/${program.slug}`}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;
