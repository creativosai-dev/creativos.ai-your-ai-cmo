import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface NavbarProps {
  onJoinWaitlist: () => void;
}

const Navbar = ({ onJoinWaitlist }: NavbarProps) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold font-heading">creativos.ai</span>
          </a>

          {/* CTA Button */}
          <Button variant="default" size="sm" onClick={onJoinWaitlist}>
            Join Waitlist
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
