import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto shadow-elevated"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Limited Early Access
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Ready to 10x Your{" "}
            <span className="gradient-text">D2C Marketing?</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Join the waitlist today and be among the first to experience the future of AI-powered marketing. Early adopters get exclusive benefits.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button variant="hero" size="xl" className="group">
              Join the Waitlist for Early Access
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • Be first in line • Exclusive launch pricing
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
