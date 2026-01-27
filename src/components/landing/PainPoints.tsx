import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, Clock, Users } from "lucide-react";

const painPoints = [
  {
    icon: AlertCircle,
    title: "Guessing Game Marketing",
    description: "Making decisions based on gut feeling instead of data-driven insights that actually convert.",
  },
  {
    icon: TrendingDown,
    title: "Skyrocketing CAC",
    description: "Customer acquisition costs eating into your margins while competitors seem to scale effortlessly.",
  },
  {
    icon: Clock,
    title: "No Time to Strategize",
    description: "Stuck in execution mode, unable to step back and see the bigger picture for growth.",
  },
  {
    icon: Users,
    title: "Can't Afford a CMO",
    description: "A $200K+ CMO isn't in the budget, but you need enterprise-level marketing strategy.",
  },
];

const PainPoints = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Sound Familiar?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            D2C Marketing Is <span className="gradient-text">Broken</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            You're not alone. These challenges are holding back thousands of D2C brands from reaching their potential.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 group hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <point.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold font-heading mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
