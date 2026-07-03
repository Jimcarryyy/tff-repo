import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/data/site";
import { usePageMeta } from "@/lib/seo";

const PrivacyPage = () => {
  usePageMeta(
    "Privacy Policy",
    "Privacy policy for the Translational Futures Foundation website and patient data handling practices."
  );

  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description={`Last updated: January 2026. ${siteConfig.name} is committed to protecting your privacy.`}
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl prose prose-slate">
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">Information We Collect</h2>
              <p>
                We collect information you voluntarily provide through contact forms, donation pledges, and newsletter
                subscriptions. This may include your name, email address, organization, and message content. We do not
                sell or share your personal information with third parties for marketing purposes.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">HIPAA & Health Information</h2>
              <p>
                Clinical patient information is protected under HIPAA regulations and is handled separately from website
                communications. This website does not collect protected health information (PHI) through general contact
                forms. Patients enrolled in our programs receive a separate HIPAA-compliant privacy notice.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">How We Use Your Information</h2>
              <p>
                Information submitted through our website is used to respond to inquiries, process donation pledges,
                send newsletter communications (with your consent), and improve our services. Form submissions are
                processed through Formspree, a third-party form handler.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">Cookies & Analytics</h2>
              <p>
                This website may use essential cookies for functionality. We do not use invasive tracking or advertising
                cookies. If analytics are enabled, data is anonymized and used solely to improve site performance.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal information by contacting us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a>.
                California residents have additional rights under the CCPA.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">Contact</h2>
              <p>
                For privacy-related questions, contact our Privacy Officer at {siteConfig.email} or write to us at{" "}
                {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
