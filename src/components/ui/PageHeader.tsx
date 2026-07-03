import { PageBreadcrumbs } from "@/components/ui/PageBreadcrumbs";

type PageHeaderProps = {
  badge?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; path?: string }[];
};

export function PageHeader({ badge, title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="bg-muted border-b border-border/50 pt-28 pb-16">
      <div className="container mx-auto px-6">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-6">
            <PageBreadcrumbs items={breadcrumbs} />
          </div>
        )}
        {badge && (
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
            {badge}
          </div>
        )}
        <h1 className="section-heading text-primary mb-4">{title}</h1>
        {description && (
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
