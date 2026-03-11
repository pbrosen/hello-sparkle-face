import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Never lose another
            <br />
            <span className="text-gradient-amber">important conversation.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-lg mx-auto">
            HarkenAI turns your conversations into organized, searchable knowledge. Start remembering everything.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground"
          />
          <Button variant="hero" size="lg" className="h-12 whitespace-nowrap gap-2">
            Get on the Waitlist
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
