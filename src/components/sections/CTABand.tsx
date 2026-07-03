import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import NewsletterForm from "@/components/forms/NewsletterForm";

const CTABand = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-heading text-primary mb-4">Join Our Mission</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your support directly funds life-changing research and treatment for trauma survivors.
              Every contribution brings hope to someone who needs it.
            </p>
            <Button asChild size="lg" className="group">
              <Link to="/donate">
                Make a Donation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-2">Stay Connected</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Get updates on research breakthroughs, patient stories, and ways to get involved.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABand;
