import { motion } from "framer-motion";
import { MessageSquareOff, UserX, ListX, Users, MailX, KeyRound } from "lucide-react";

const lostItems = [
  { icon: KeyRound, label: "What was agreed" },
  { icon: UserX, label: "Who said what" },
  { icon: ListX, label: "Action items" },
  { icon: Users, label: "Who they met" },
  { icon: MailX, label: "How to follow up" },
  { icon: MessageSquareOff, label: "Key decisions" },
];

const ProblemSection = () => {
  return (
    <section className="py-28 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">The Problem</p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Conversations are where work
            <br />
            <span className="text-gradient-amber">actually happens.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground text-lg">
            Important decisions happen in meetings, hallway conversations, phone calls, quick huddles, investor discussions, and customer calls. But most of those conversations <strong className="text-foreground">disappear the moment they end.</strong>
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {lostItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card rounded-xl p-4 flex items-center gap-3"
            >
              <item.icon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm text-secondary-foreground">{item.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center space-y-1"
        >
          <p className="text-muted-foreground">Work gets repeated. Follow-ups fall through.</p>
          <p className="text-foreground font-medium">Important insights get lost.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
