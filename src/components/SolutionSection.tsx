import { motion } from "framer-motion";
import { FileText, ListChecks, Hash, Users, Brain, Search } from "lucide-react";

const outputs = [
  { icon: FileText, label: "A transcript", desc: "Word-for-word record" },
  { icon: Brain, label: "A clear summary", desc: "AI-generated overview" },
  { icon: ListChecks, label: "Action items", desc: "Next steps extracted" },
  { icon: Hash, label: "Key topics", desc: "Themes identified" },
  { icon: Users, label: "People involved", desc: "Speaker detection" },
  { icon: Search, label: "Contact intelligence", desc: "Emails & LinkedIn" },
];

const SolutionSection = () => {
  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">The Solution</p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            HarkenAI <span className="text-gradient-amber">remembers</span> your conversations.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground text-lg">
            Runs quietly in the background and automatically turns conversations into structured records.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {outputs.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card glow-border rounded-xl p-5 group hover:bg-card/80 transition-colors"
            >
              <item.icon className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-foreground">{item.label}</h3>
              <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center text-lg text-foreground font-medium"
        >
          Everything becomes organized and searchable.
        </motion.p>
      </div>
    </section>
  );
};

export default SolutionSection;
