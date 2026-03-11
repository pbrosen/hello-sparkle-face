import { motion } from "framer-motion";
import {
  Headphones, Layers, Brain, Users, Search, Monitor,
} from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "Continuous Listening",
    desc: "Runs quietly while you work. Meetings, calls, and conversations captured automatically — no meeting bots.",
  },
  {
    icon: Layers,
    title: "Dynamic Separation",
    desc: "Automatically detects where conversations begin and end. Sequential discussions become distinct records.",
  },
  {
    icon: Brain,
    title: "Conversation Intelligence",
    desc: "AI summaries, action item detection, decision tracking, and topic extraction from every conversation.",
  },
  {
    icon: Users,
    title: "Relationship Intelligence",
    desc: "Speaker identification, company detection, email lookup, and LinkedIn connection from conversation records.",
  },
  {
    icon: Search,
    title: "Conversation Memory",
    desc: "Full-text search across every conversation. Cross-meeting context and an AI assistant for past conversations.",
  },
  {
    icon: Monitor,
    title: "Cross-Platform Access",
    desc: "Mac app for desktop capture, iPhone app for on-the-go, and web app for search and review from anywhere.",
  },
];

const FeaturesSection = () => {
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
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">Features</p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Everything you need to <span className="text-gradient-amber">never forget</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 group hover:glow-border transition-all duration-300"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
