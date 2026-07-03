import brainScanImage from "@/assets/brain-scan-hope.jpg";
import { PageHeader } from "@/components/ui/PageHeader";
import { milestones, siteConfig } from "@/data/site";
import { usePageMeta } from "@/lib/seo";
import { Download, FlaskConical, Heart, Lightbulb } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation", description: "Pioneering breakthrough treatments through cutting-edge neuroscience and technology." },
  { icon: FlaskConical, title: "Collaboration", description: "Building partnerships across institutions to accelerate scientific discovery and impact." },
  { icon: Heart, title: "Hope", description: "Restoring hope and dignity to those whose lives have been affected by trauma." },
];

const About = () => {
  usePageMeta(
    "About Us",
    "Learn about the Translational Futures Foundation's mission, history, and commitment to advancing trauma recovery through science."
  );

  return (
    <>
      <PageHeader
        badge="About TFF"
        title="Bridging Science and Healing"
        description="Since 2018, we've been dedicated to translating neuroscience breakthroughs into life-changing treatments for trauma survivors."
        breadcrumbs={[{ label: "About" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="subsection-heading text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Translational Futures Foundation exists to close the gap between laboratory discoveries
                and bedside care. We believe every trauma survivor deserves access to the most advanced,
                evidence-based treatments available.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through rigorous research, compassionate clinical care, and strategic partnerships, we develop
                and deliver innovative therapies for PTSD, chronic pain, traumatic brain injury, and substance
                use disorders.
              </p>
            </div>
            <img src={brainScanImage} alt="Neuroscience research" className="rounded-2xl shadow-2xl w-full h-80 object-cover" />
          </div>

          <div className="mb-24">
            <h2 className="subsection-heading text-primary mb-12 text-center">Our Journey</h2>
            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, i) => (
                <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold shrink-0">
                      {milestone.year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && <div className="w-px h-full bg-border mt-2 min-h-[3rem]" />}
                  </div>
                  <div className="pb-8">
                    <span className="text-sm text-primary font-medium">{milestone.year}</span>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <h2 className="subsection-heading text-primary mb-12 text-center">How We Work</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Research", desc: "Conduct rigorous neuroscience studies and clinical trials to discover new treatment pathways." },
                { step: "02", title: "Translation", desc: "Transform laboratory findings into practical, scalable clinical protocols and technologies." },
                { step: "03", title: "Care", desc: "Deliver compassionate, evidence-based treatment to patients who need it most." },
              ].map((item) => (
                <div key={item.step} className="text-center p-8 rounded-2xl bg-muted border border-border/50 hover-lift">
                  <div className="text-4xl font-light text-primary/30 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="subsection-heading text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary text-white rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-light mb-4">Transparency & Accountability</h2>
            <p className="opacity-90 max-w-2xl mx-auto mb-6">
              As a 501(c)(3) nonprofit (EIN: {siteConfig.ein}), we are committed to financial transparency
              and responsible stewardship of every donation.
            </p>
            <a
              href="/resources/annual-report.pdf"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Annual Report (Sample)
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
