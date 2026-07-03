import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { Link } from "react-router-dom";

const TestimonialPreview = () => {
  const featured = testimonials[0];
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading text-primary mb-4">Stories of Recovery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from individuals whose lives have been transformed through our programs.
          </p>
        </div>
        <div className="max-w-3xl mx-auto mb-8">
          <TestimonialCard testimonial={featured} />
        </div>
        <div className="text-center">
          <Button asChild variant="outline">
            <Link to="/impact">Read More Stories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialPreview;
