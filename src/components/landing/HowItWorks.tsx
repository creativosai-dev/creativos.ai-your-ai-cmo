import { motion } from "framer-motion";
import { Upload, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Connect Your Brand",
    description: "Link your store, ad accounts, and analytics. Our AI gets to know your brand DNA in minutes.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Analyzes Everything",
    description: "Our engine processes your data, market trends, and competitor moves to build your custom strategy.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Execute & Scale",
    description: "Get actionable recommendations, campaign ideas, and optimization tips. Watch your metrics soar.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Simple Setup
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            From Zero to <span className="gradient-text">CMO</span> in Minutes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No complex onboarding. No lengthy consultations. Just connect, analyze, and grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-8 text-center group hover:shadow-elevated transition-all duration-300">
                {/* Step number */}
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl font-bold text-primary/10 font-heading">
                  {step.step}
                </span>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                    <step.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold font-heading mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
