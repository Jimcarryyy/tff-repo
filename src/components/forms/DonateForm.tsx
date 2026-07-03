import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { programs } from "@/data/programs";
import { siteConfig } from "@/data/site";

const donateSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  amount: z.string().min(1, "Please select an amount"),
  designation: z.string().optional(),
  message: z.string().optional(),
});

type DonateFormData = z.infer<typeof donateSchema>;

const DonateForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<DonateFormData>({
    resolver: zodResolver(donateSchema),
    defaultValues: { amount: "", designation: "" },
  });

  const onSubmit = async (data: DonateFormData) => {
    const endpoint = siteConfig.formspree.donate;
    if (!endpoint) {
      toast.error("Form not configured. Set VITE_FORMSPREE_DONATE in your .env file.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Submission failed");

      setIsSuccess(true);
      reset();
      toast.success("Thank you for your pledge! We'll follow up with secure payment options.");
    } catch {
      toast.error("Failed to submit. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div role="status" className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">✓</span>
        </div>
        <h3 className="text-xl font-semibold text-primary mb-2">Thank You for Your Generosity!</h3>
        <p className="text-muted-foreground mb-2">
          Your pledge has been received. Our team will follow up within 2 business days with secure payment options.
        </p>
        <p className="text-sm text-muted-foreground mb-6">
          Online payment integration is coming soon. Your commitment makes a real difference.
        </p>
        <Button variant="outline" onClick={() => setIsSuccess(false)}>Make Another Pledge</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div>
        <Label htmlFor="donate-name">Full Name</Label>
        <Input id="donate-name" {...register("name")} placeholder="Your full name" className="mt-1.5" />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <Label htmlFor="donate-email">Email</Label>
        <Input id="donate-email" type="email" {...register("email")} placeholder="your.email@example.com" className="mt-1.5" />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <Label htmlFor="donate-amount">Pledge Amount</Label>
        <Select onValueChange={(v) => setValue("amount", v)}>
          <SelectTrigger id="donate-amount" className="mt-1.5">
            <SelectValue placeholder="Select amount" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="$50">$50</SelectItem>
            <SelectItem value="$100">$100</SelectItem>
            <SelectItem value="$250">$250</SelectItem>
            <SelectItem value="$500">$500</SelectItem>
            <SelectItem value="custom">Custom Amount</SelectItem>
          </SelectContent>
        </Select>
        {errors.amount && <p className="text-sm text-destructive mt-1">{errors.amount.message}</p>}
      </div>
      <div>
        <Label htmlFor="donate-designation">Designate To (Optional)</Label>
        <Select onValueChange={(v) => setValue("designation", v)}>
          <SelectTrigger id="donate-designation" className="mt-1.5">
            <SelectValue placeholder="General fund" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General Fund</SelectItem>
            {programs.map((p) => (
              <SelectItem key={p.slug} value={p.slug}>{p.title}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="donate-message">Message (Optional)</Label>
        <Textarea id="donate-message" {...register("message")} placeholder="Share why you're giving..." rows={3} className="mt-1.5" />
      </div>
      <p className="text-sm text-muted-foreground">
        This form captures your donation pledge. Secure online payment will be available in a future update.
      </p>
      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Pledge"
        )}
      </Button>
    </form>
  );
};

export default DonateForm;
