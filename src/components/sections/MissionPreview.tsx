import brainScanImage from "@/assets/brain-scan-hope.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MissionPreview = () => {
  return (
    <section id="mission-preview" className="py-24 bg-muted relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-48 translate-x-48" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-heading mb-8 text-primary">Our Mission</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              We bridge the gap between cutting-edge neuroscience research and real-world healing solutions.
              Our foundation translates scientific breakthroughs into accessible treatments that restore hope
              and transform lives affected by trauma.
            </p>
            <Button asChild variant="outline" className="group">
              <Link to="/about">
                Our Full Story
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
            <img
              src={brainScanImage}
              alt="Medical professional reviewing brain scan results"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionPreview;
