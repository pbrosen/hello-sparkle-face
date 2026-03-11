import { motion } from "framer-motion";

const SoundWave = () => {
  const bars = 24;
  return (
    <div className="flex items-center justify-center gap-[3px] h-16 opacity-60">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[2px] rounded-full bg-primary"
          initial={{ height: 6 }}
          animate={{
            height: [6, Math.random() * 50 + 10, 6],
          }}
          transition={{
            duration: 1.2 + Math.random() * 0.8,
            repeat: Infinity,
            delay: i * 0.05,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default SoundWave;
