import { motion } from "framer-motion";
import { Brain, Target, LineChart, Zap, MessageSquare, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Strategy Engine",
    description: "Get enterprise-grade marketing strategies tailored to your brand, audience, and goals—powered by advanced AI.",
  },
  {
    icon: Target,
    title: "Smart Audience Targeting",
    description: "Discover high-converting customer segments you never knew existed. Stop wasting ad spend on the wrong people.",
  },
  {
    icon: LineChart,
    title: "Real-Time Analytics",
    description: "Track what matters. Get actionable insights, not vanity metrics. Know exactly what's working and why.",
  },
  {
    icon: Zap,
    title: "Instant Campaign Ideas",
    description: "Generate scroll-stopping creative concepts, ad copy, and campaign strategies in seconds.",
  },
  {
    icon: MessageSquare,
    title: "Brand Voice Mastery",
    description: "Your AI CMO learns your brand voice and ensures every piece of content feels authentically you.",
  },
  {
    icon: Shield,
    title: "Competitive Intelligence",
    description: "Know what your competitors are doing before they do. Stay two steps ahead with AI-powered market analysis.",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Superpowers for Your Brand
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Everything a CMO Does,{" "}
            <span className="gradient-text">But Faster</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            creativos.ai combines strategic thinking with execution speed. Get months of marketing work done in days.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 group hover:shadow-elevated transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
