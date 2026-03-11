import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

const rows = [
  { feature: "Background listening", harken: true, granola: false },
  { feature: "Dynamic conversation separation", harken: true, granola: false },
  { feature: "AI summaries & action items", harken: true, granola: true },
  { feature: "Speaker identification", harken: true, granola: "limited" },
  { feature: "Email lookup for participants", harken: true, granola: false },
  { feature: "LinkedIn connect", harken: true, granola: false },
  { feature: "Mac app", harken: true, granola: true },
  { feature: "iOS app", harken: true, granola: true },
  { feature: "Web app", harken: true, granola: false },
];

const ComparisonSection = () => {
  return (
    <section className="py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">Comparison</p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            How HarkenAI <span className="text-gradient-amber">compares</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Most tools help you take notes. HarkenAI helps you <strong className="text-foreground">remember and understand</strong> your conversations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 max-w-2xl mx-auto glass-card rounded-2xl overflow-hidden"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left p-4 text-sm text-muted-foreground font-normal">Feature</th>
                <th className="p-4 text-sm font-semibold text-primary text-center">HarkenAI</th>
                <th className="p-4 text-sm text-muted-foreground font-normal text-center">Granola</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-b border-border/30 last:border-0">
                  <td className="p-4 text-sm text-secondary-foreground">{row.feature}</td>
                  <td className="p-4 text-center">
                    {row.harken ? (
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    ) : (
                      <Minus className="h-4 w-4 text-muted-foreground mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {row.granola === true ? (
                      <Check className="h-4 w-4 text-muted-foreground mx-auto" />
                    ) : row.granola === "limited" ? (
                      <span className="text-xs text-muted-foreground">Limited</span>
                    ) : (
                      <Minus className="h-4 w-4 text-muted-foreground/50 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center space-y-1 text-sm"
        >
          <p className="text-muted-foreground">Granola helps you write better meeting notes.</p>
          <p className="text-foreground font-medium">HarkenAI turns conversations into structured knowledge.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
