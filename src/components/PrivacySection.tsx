import { motion } from "framer-motion";
import { Shield, Lock, Trash2 } from "lucide-react";

const items = [
  { icon: Lock, label: "Recordings are encrypted" },
  { icon: Shield, label: "Your data is never sold" },
  { icon: Trash2, label: "You control what is stored or deleted" },
];

const PrivacySection = () => {
  return (
    <section className="py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">Privacy</p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Your conversations <span className="text-gradient-amber">stay private.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            HarkenAI is designed with privacy in mind.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 max-w-2xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card glow-border rounded-xl p-5 flex items-center gap-3 flex-1 w-full sm:w-auto"
            >
              <item.icon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm text-secondary-foreground">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
