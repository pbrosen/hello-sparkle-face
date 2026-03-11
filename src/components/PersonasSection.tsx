import { motion } from "framer-motion";
import { Rocket, TrendingUp, Briefcase, User } from "lucide-react";

const personas = [
  {
    icon: Rocket,
    title: "Founders",
    desc: "Track investor meetings, hiring conversations, and product discussions. Never forget what was said.",
  },
  {
    icon: TrendingUp,
    title: "Sales Professionals",
    desc: "Capture customer calls and automatically extract decision makers, objections, and action items.",
  },
  {
    icon: Briefcase,
    title: "Consultants",
    desc: "Turn every client conversation into organized insights and follow-ups.",
  },
  {
    icon: User,
    title: "Professionals",
    desc: "Remember the people you meet and what you discussed.",
  },
];

const PersonasSection = () => {
  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">Built For</p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Built for <span className="text-gradient-amber">professionals</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {personas.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <p.icon className="h-7 w-7 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-foreground text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;
