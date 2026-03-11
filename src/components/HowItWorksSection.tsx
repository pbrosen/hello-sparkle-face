import { motion } from "framer-motion";
import { Ear, Scissors, Sparkles, Database } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Ear,
    title: "Listen",
    desc: "HarkenAI runs quietly in the background on your device. It captures meetings, calls, discussions, and quick conversations.",
    note: "No meeting bots. No setup.",
  },
  {
    num: "02",
    icon: Scissors,
    title: "Separate",
    desc: "Using dynamic conversation separation, HarkenAI automatically detects when conversations start and end.",
    note: "No manual start or stop.",
  },
  {
    num: "03",
    icon: Sparkles,
    title: "Understand",
    desc: "AI analyzes every conversation and extracts summaries, action items, decisions, key topics, and the people involved.",
    note: null,
  },
  {
    num: "04",
    icon: Database,
    title: "Remember",
    desc: "Every conversation becomes searchable across your entire history.",
    note: null,
  },
];

const queries = [
  "What did the customer say about pricing?",
  "Who introduced me to Sarah Chen?",
  "What did we decide about the launch timeline?",
];

const HowItWorksSection = () => {
  return (
    <section className="py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">How It Works</p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Four steps to <span className="text-gradient-amber">total recall</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card rounded-2xl p-6 relative overflow-hidden group"
            >
              <span className="absolute top-4 right-5 font-heading text-4xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {step.num}
              </span>
              <step.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              {step.note && (
                <p className="mt-3 text-xs font-medium text-primary/80">{step.note}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 max-w-lg mx-auto space-y-3"
        >
          {queries.map((q) => (
            <div key={q} className="glass-card rounded-lg px-4 py-3 text-sm text-secondary-foreground italic">
              "{q}"
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
