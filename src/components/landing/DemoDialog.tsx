import { motion, AnimatePresence } from "framer-motion";
import { X, Brain, TrendingUp, Target, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DemoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const demoScreens = [
  {
    icon: Brain,
    title: "AI Strategy Engine",
    description: "Our AI analyzes your brand data, market trends, and competitor movements to build a custom marketing strategy.",
    gradient: "from-primary to-accent",
  },
  {
    icon: TrendingUp,
    title: "Performance Dashboard",
    description: "Real-time insights into your campaigns, ROAS tracking, and AI-powered recommendations for optimization.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Target,
    title: "Audience Intelligence",
    description: "Deep customer segmentation and targeting suggestions based on behavioral patterns and purchase intent.",
    gradient: "from-primary via-accent to-primary",
  },
  {
    icon: BarChart3,
    title: "Campaign Automation",
    description: "Set goals, and let AI handle the rest—from ad copy generation to budget allocation across channels.",
    gradient: "from-accent via-primary to-accent",
  },
];

const DemoDialog = ({ isOpen, onClose }: DemoDialogProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-2xl p-6 md:p-8 w-full max-w-4xl relative shadow-elevated my-8"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors z-10"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Product Demo
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-heading">
                See <span className="gradient-text">creativos.ai</span> in Action
              </h2>
              <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
                Discover how our AI CMO transforms D2C marketing with intelligent automation and insights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {demoScreens.map((screen, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl bg-secondary/50 border border-border/50 p-6 hover:border-primary/30 transition-all duration-300"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${screen.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Mock dashboard visualization */}
                  <div className="relative h-32 mb-4 rounded-lg bg-card/50 border border-border/30 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${screen.gradient} flex items-center justify-center shadow-glow`}>
                        <screen.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute bottom-2 left-2 right-2 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-primary/20 rounded"
                          style={{ height: `${Math.random() * 20 + 10}px` }}
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold font-heading mb-2">{screen.title}</h3>
                  <p className="text-sm text-muted-foreground">{screen.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button onClick={onClose} variant="hero" size="lg">
                Got It, Sign Me Up!
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoDialog;
