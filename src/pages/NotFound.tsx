import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/lib/seo";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  usePageMeta("Page Not Found", "The page you're looking for doesn't exist.");

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-muted pt-20">
      <div className="text-center px-6">
        <div className="text-8xl font-light text-primary/20 mb-4">404</div>
        <h1 className="section-heading text-primary mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/programs">View Programs</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
