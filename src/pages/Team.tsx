import teamImage from "@/assets/team-working.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/PageHeader";
import { advisors, teamMembers } from "@/data/team";
import { usePageMeta } from "@/lib/seo";
import { Award, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const TeamPage = () => {
  usePageMeta(
    "Our Team",
    "Meet the world-class experts behind the Translational Futures Foundation's mission to advance trauma recovery."
  );

  return (
    <>
      <PageHeader
        badge="Leadership"
        title="World-Class Expertise"
        description="Our interdisciplinary team brings together leading experts in neuroscience, clinical psychology, biomedical engineering, and veteran care."
        breadcrumbs={[{ label: "Team" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <img src={teamImage} alt="TFF research team" className="rounded-2xl shadow-2xl w-full h-96 object-cover" />
            <div>
              <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span>200+ Combined Publications</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span>50+ Years Experience</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Together, we're pioneering the future of trauma recovery through collaborative research
                and compassionate clinical care.
              </p>
            </div>
          </div>

          <h2 className="subsection-heading text-primary mb-8">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {teamMembers.map((member) => (
              <Card key={member.name} className="hover-lift text-center border-border/50 group">
                <CardContent className="pt-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-semibold text-primary">{member.initials}</span>
                  </div>
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">{member.credentials}</span>
                  <h3 className="subsection-heading text-primary mt-4 mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-xs text-primary/70 mb-3 font-medium">{member.specialization}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.fullBio.slice(0, 120)}...</p>
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {member.researchInterests.map((interest) => (
                      <span key={interest} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                        {interest}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center gap-2">
                    <Button size="sm" variant="outline" className="w-10 h-10 p-0" aria-label={`Email ${member.name} (demo)`} asChild>
                      <a href={`mailto:${member.email}`}><Mail className="w-4 h-4" /></a>
                    </Button>
                    <Button size="sm" variant="outline" className="w-10 h-10 p-0" aria-label={`LinkedIn for ${member.name} (demo)`} title="Demo link">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="subsection-heading text-primary mb-8">Board of Advisors</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {advisors.map((advisor) => (
              <Card key={advisor.name} className="border-border/50 hover-lift">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-lg font-semibold text-secondary">{advisor.initials}</span>
                  </div>
                  <h3 className="font-semibold text-primary mb-1">{advisor.name}</h3>
                  <p className="text-sm text-secondary font-medium mb-3">{advisor.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{advisor.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted rounded-2xl p-10 text-center">
            <h3 className="text-xl font-semibold text-primary mb-3">Join Our Team</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We're always looking for passionate researchers, clinicians, and professionals who share our mission.
            </p>
            <Button asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;
