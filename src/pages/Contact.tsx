import ContactForm from "@/components/forms/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/data/site";
import { usePageMeta } from "@/lib/seo";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  usePageMeta(
    "Contact Us",
    "Get in touch with the Translational Futures Foundation for partnerships, media inquiries, volunteering, and general questions."
  );

  const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`;

  return (
    <>
      <PageHeader
        badge="Get Involved"
        title="Join Our Mission"
        description="Whether you're interested in supporting our research, partnering with our programs, or learning more — we'd love to connect."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\D/g, "")}` },
                { icon: MapPin, label: "Address", value: fullAddress },
              ].map((item) => (
                <Card key={item.label} className="border-border/50">
                  <CardContent className="pt-6 flex items-start gap-4">
                    <item.icon className="w-6 h-6 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{item.label}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="rounded-lg overflow-hidden border border-border/50 h-48">
                <iframe
                  title="TFF Office Location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-122.15%2C37.41%2C-122.13%2C37.43&layer=mapnik&marker=37.42%2C-122.14"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
