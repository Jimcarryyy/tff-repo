import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="border-border/50 hover-lift h-full">
      <CardContent className="pt-8">
        <blockquote>
          <p className="text-muted-foreground leading-relaxed italic mb-6">"{testimonial.quote}"</p>
          <footer>
            <p className="font-semibold text-primary">{testimonial.name}</p>
            <p className="text-sm text-secondary">{testimonial.role}</p>
            <p className="text-xs text-muted-foreground mt-1">{testimonial.program}</p>
          </footer>
        </blockquote>
      </CardContent>
    </Card>
  );
}
