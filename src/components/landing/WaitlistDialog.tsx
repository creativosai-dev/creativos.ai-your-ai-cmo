import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const waitlistSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().trim().min(1, "Phone number is required").max(20, "Phone must be less than 20 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  brandName: z.string().trim().min(1, "Brand name is required").max(100, "Brand name must be less than 100 characters"),
  websiteOrInstagram: z.string().trim().min(1, "Website or Instagram is required").max(255, "Must be less than 255 characters"),
});

interface WaitlistDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistDialog = ({ isOpen, onClose }: WaitlistDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    brandName: "",
    websiteOrInstagram: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = waitlistSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("waitlist").insert({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        brand_name: formData.brandName.trim(),
        website_or_instagram: formData.websiteOrInstagram.trim(),
      });

      if (error) throw error;

      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting waitlist:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      brandName: "",
      websiteOrInstagram: "",
    });
    setErrors({});
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="glass-card rounded-2xl p-8 w-full max-w-md relative shadow-elevated"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-3">
                  Thank You for Joining!
                </h3>
                <p className="text-muted-foreground">
                  You'll be the first to know when our beta version is ready. Get ready to transform your D2C marketing!
                </p>
                <Button onClick={handleClose} className="mt-6">
                  Close
                </Button>
              </motion.div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    <Sparkles className="w-4 h-4" />
                    Early Access
                  </div>
                  <h3 className="text-2xl font-bold font-heading">Join the Waitlist</h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    Be among the first to experience AI-powered marketing
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <Input
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <Input
                      name="brandName"
                      placeholder="Brand Name *"
                      value={formData.brandName}
                      onChange={handleChange}
                      className={errors.brandName ? "border-destructive" : ""}
                    />
                    {errors.brandName && <p className="text-destructive text-xs mt-1">{errors.brandName}</p>}
                  </div>

                  <div>
                    <Input
                      name="websiteOrInstagram"
                      placeholder="Website or Instagram Link *"
                      value={formData.websiteOrInstagram}
                      onChange={handleChange}
                      className={errors.websiteOrInstagram ? "border-destructive" : ""}
                    />
                    {errors.websiteOrInstagram && <p className="text-destructive text-xs mt-1">{errors.websiteOrInstagram}</p>}
                  </div>

                  <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Join Waitlist"
                    )}
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WaitlistDialog;
