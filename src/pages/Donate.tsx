import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DonateForm from "@/components/forms/DonateForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { donateTiers } from "@/data/site";
import { usePageMeta } from "@/lib/seo";
import { Heart, Repeat, Building2, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const givingOptions = [
  { icon: Repeat, title: "Monthly Giving", description: "Sustain our mission with a recurring monthly donation. Even $25/month funds critical research hours." },
  { icon: Building2, title: "Corporate Matching", description: "Many employers match charitable donations. Check if your company participates in a matching gift program." },
  { icon: Gift, title: "Legacy Giving", description: "Include TFF in your estate planning to create a lasting impact for future generations of trauma survivors." },
];

const DonatePage = () => {
  usePageMeta(
    "Donate",
    "Support the Translational Futures Foundation's mission to advance trauma recovery through innovative neuroscience research."
  );

  return (
    <>
      <PageHeader
        badge="Give Hope"
        title="Your Gift Changes Lives"
        description="Every donation directly funds research and treatment for trauma survivors. TFF is a 501(c)(3) organization — your gift is tax-deductible."
        breadcrumbs={[{ label: "Donate" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {donateTiers.map((tier) => (
              <Card key={tier.amount} className="border-border/50 hover-lift text-center">
                <CardContent className="pt-8">
                  <div className="text-3xl font-light text-primary mb-2">${tier.amount}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tier.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Make a Pledge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <DonateForm />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h2 className="subsection-heading text-primary">Other Ways to Give</h2>
              {givingOptions.map((option) => (
                <Card key={option.title} className="border-border/50">
                  <CardContent className="pt-6 flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <option.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{option.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{option.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <p className="text-sm text-muted-foreground">
                Questions about giving? <Link to="/contact" className="text-primary hover:underline">Contact us</Link> or
                learn more about our work on the <Link to="/about" className="text-primary hover:underline">About page</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DonatePage;
