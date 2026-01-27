import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import PainPoints from "@/components/landing/PainPoints";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import WaitlistDialog from "@/components/landing/WaitlistDialog";
import DemoDialog from "@/components/landing/DemoDialog";

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar onJoinWaitlist={() => setIsWaitlistOpen(true)} />
      <Hero 
        onJoinWaitlist={() => setIsWaitlistOpen(true)} 
        onHowItWorks={() => setIsDemoOpen(true)} 
      />
      <PainPoints />
      <Features />
      <HowItWorks />
      <CTA onJoinWaitlist={() => setIsWaitlistOpen(true)} />
      <Footer />
      
      <WaitlistDialog 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
      <DemoDialog 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </main>
  );
};

export default Index;
