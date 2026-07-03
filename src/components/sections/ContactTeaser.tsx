import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactTeaser = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="subsection-heading text-primary mb-4">Ready to Connect?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Whether you're a patient, researcher, partner, or supporter — we'd love to hear from you.
        </p>
        <Button asChild size="lg">
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  );
};

export default ContactTeaser;
