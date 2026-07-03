import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/PageHeader";
import { faqs, patientResources } from "@/data/faq";
import { siteConfig } from "@/data/site";
import { usePageMeta } from "@/lib/seo";
import { Download, ExternalLink, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const ResourcesPage = () => {
  usePageMeta(
    "Patient Resources",
    "FAQs, treatment guidelines, crisis resources, and downloadable guides from the Translational Futures Foundation."
  );

  return (
    <>
      <PageHeader
        badge="Resources"
        title="Patient & Family Resources"
        description="Information, guides, and support resources to help you navigate treatment and recovery."
        breadcrumbs={[{ label: "Resources" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="subsection-heading text-primary mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div>
              <h2 className="subsection-heading text-primary mb-6">Crisis Support</h2>
              <div className="space-y-4 mb-8">
                {siteConfig.crisisResources.map((resource) => (
                  <Card key={resource.name} className="border-border/50">
                    <CardContent className="pt-6 flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-foreground">{resource.name}</h3>
                        <p className="text-2xl font-light text-primary mt-1">{resource.phone}</p>
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          <Phone className="w-4 h-4 mr-2" />
                          Visit
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="subsection-heading text-primary mb-6">Downloads & Links</h2>
              <div className="space-y-3">
                {patientResources.map((resource) => (
                  <Card key={resource.title} className="border-border/50 hover-lift">
                    <CardContent className="pt-4 pb-4 flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-medium text-foreground text-sm">{resource.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{resource.description}</p>
                      </div>
                      {"file" in resource ? (
                        <a href={resource.file} className="text-primary hover:text-primary/80 shrink-0" aria-label={`Download ${resource.title}`}>
                          <Download className="w-5 h-5" />
                        </a>
                      ) : (
                        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-primary shrink-0">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
            <Button asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResourcesPage;
