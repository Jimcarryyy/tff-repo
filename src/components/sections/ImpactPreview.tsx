import { Button } from "@/components/ui/button";
import { impactStats } from "@/data/site";
import { Heart, Star, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const icons = [Users, TrendingUp, Star, Heart];

const ImpactPreview = () => {
  return (
    <section id="impact-preview" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-6">Transforming Lives Through Science</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Our evidence-based approach has helped hundreds reclaim their lives from trauma.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {impactStats.map((stat, index) => {
            const Icon = icons[index];
            return (
              <div key={stat.label} className="text-center group">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-light mb-2">{stat.number}</div>
                <div className="text-lg font-medium mb-2">{stat.label}</div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <Button asChild variant="secondary" size="lg" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
            <Link to="/impact">See Our Full Impact</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactPreview;
