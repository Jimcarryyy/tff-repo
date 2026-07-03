import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/data/site";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

const NewsletterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    const endpoint = siteConfig.formspree.newsletter;
    if (!endpoint) {
      toast.error("Newsletter not configured. Set VITE_FORMSPREE_NEWSLETTER in your .env file.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email: data.email }),
      });

      if (!response.ok) throw new Error("Submission failed");

      reset();
      toast.success("You're subscribed! Welcome to the TFF community.");
    } catch {
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3" noValidate>
      <div className="flex-grow">
        <Label htmlFor="newsletter-email" className="sr-only">Email address</Label>
        <Input
          id="newsletter-email"
          type="email"
          {...register("email")}
          placeholder="Enter your email"
          aria-label="Email address for newsletter"
        />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting} className="shrink-0">
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
      </Button>
    </form>
  );
};

export default NewsletterForm;
