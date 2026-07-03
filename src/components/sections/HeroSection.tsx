import heroBackground from "@/assets/hero-background.jpg";
import { Button } from "@/components/ui/button";
import { impactStats } from "@/data/site";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

type HeroSectionProps = {
  onOpenVideo: () => void;
};

const HeroSection = ({ onOpenVideo }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 sm:pt-28">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 hero-parallax"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/60 to-secondary/50" />
      </div>

      <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-32 left-20 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-500" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white pb-10 sm:pb-16">
        <div className="max-w-5xl mx-auto fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              Pioneering Neuroscience Research
            </span>
          </div>
          <h1 className="hero-heading mb-6 leading-tight text-2xl sm:text-4xl">
            Transforming Lives Through
            <span className="block text-gradient bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent text-2xl sm:text-6xl font-extrabold">
              Scientific Innovation
            </span>
          </h1>
          <p className="text-base sm:text-xl font-light mb-8 sm:mb-12 leading-relaxed opacity-95 max-w-4xl mx-auto">
            The Translational Futures Foundation bridges cutting-edge neuroscience research with compassionate care,
            developing breakthrough treatments for PTSD, chronic pain, TBI, and substance abuse.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center items-center mb-8 sm:mb-12">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 group text-white bg-primary hover:bg-primary/90"
            >
              <Link to="/donate">
                Support Our Mission
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <button
              type="button"
              className="w-full sm:w-auto text-base sm:text-lg px-5 sm:px-7 py-3 border-white/50 text-black bg-white/80 hover:bg-white border rounded-sm flex items-center justify-center font-semibold transition-all duration-200 backdrop-blur-sm group focus:ring-2"
              onClick={onOpenVideo}
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Our Story
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-16 max-w-2xl mx-auto">
            {impactStats.slice(0, 3).map((stat) => (
              <div key={stat.label} className="text-center py-2">
                <div className="text-2xl sm:text-3xl font-light mb-1">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
