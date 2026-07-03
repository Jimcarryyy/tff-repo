import veteranImage from "@/assets/veteran-recovery.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/PageHeader";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { annualImpact, chartData, testimonials } from "@/data/testimonials";
import { impactStats } from "@/data/site";
import { usePageMeta } from "@/lib/seo";
import { useEffect, useRef, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Link } from "react-router-dom";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const ImpactPage = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  usePageMeta(
    "Our Impact",
    "See how the Translational Futures Foundation is transforming lives through evidence-based trauma recovery programs."
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const livesCount = useCountUp(500, 2000, statsVisible);

  return (
    <>
      <PageHeader
        badge="Impact"
        title="Transforming Lives Through Science"
        description="Our evidence-based approach has helped hundreds of individuals reclaim their lives from trauma."
        breadcrumbs={[{ label: "Impact" }]}
      />

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6" ref={statsRef}>
          <div className="grid md:grid-cols-4 gap-8">
            {impactStats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-light mb-2">
                  {i === 0 && statsVisible ? `${livesCount}+` : stat.number}
                </div>
                <div className="text-lg font-medium mb-2">{stat.label}</div>
                <p className="text-sm opacity-80">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="subsection-heading text-primary mb-12 text-center">Patient Stories</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="subsection-heading text-primary mb-6">Recovery Outcomes by Program</h2>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[...chartData]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="program" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                    <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} unit="%" />
                    <Tooltip
                      contentStyle={{
                        background: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                      formatter={(value: number) => [`${value}%`, "Success Rate"]}
                    />
                    <Bar dataKey="successRate" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <img src={veteranImage} alt="Recovery session" className="rounded-2xl shadow-2xl w-full h-80 object-cover" />
          </div>

          <h2 className="subsection-heading text-primary mb-8 text-center">2025 Annual Impact</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {annualImpact.map((item) => (
              <Card key={item.metric} className="border-border/50">
                <CardContent className="pt-6 flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">{item.metric}</span>
                  <div className="text-right">
                    <span className="text-2xl font-light text-primary">{item.value}</span>
                    <span className="text-xs text-green-600 ml-2">{item.change}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/donate">Support Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImpactPage;
