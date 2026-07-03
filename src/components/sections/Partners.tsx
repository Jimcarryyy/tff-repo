import { partners } from "@/data/partners";

const Partners = () => {
  return (
    <section className="py-16 bg-background border-y border-border/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider font-medium">
          Trusted Research Partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center w-28 h-14 rounded-lg bg-muted/50 border border-border/30 grayscale hover:grayscale-0 transition-all duration-300"
              title={partner.name}
            >
              <span className="text-xs font-semibold text-muted-foreground tracking-wide">{partner.initials}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
