import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import SoundWave from "./SoundWave";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SoundWave />
          
          <h1 className="mt-8 font-heading text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Your conversations,
            <br />
            <span className="text-gradient-amber">automatically captured</span>
            <br />
            and organized.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            HarkenAI listens quietly in the background and turns your conversations into searchable insights — complete with summaries, action items, and contact intelligence.
          </p>

          <p className="mt-4 text-sm font-medium tracking-wide text-foreground/70">
            No bots. No manual recording. No lost conversations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground focus:ring-primary/30"
          />
          <Button variant="hero" size="lg" className="h-12 whitespace-nowrap gap-2">
            Get on the Waitlist
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <p className="text-xs text-muted-foreground">Coming soon to iOS & Android</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground/60">
            <span>Mac</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
            <span>iPhone</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
            <span>Web</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
