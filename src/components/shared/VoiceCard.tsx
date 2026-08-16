import { motion } from "framer-motion";

export function VoiceCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-accent/20 bg-gradient-to-br from-bg-surface to-bg-raised p-6 text-center"
    >
      <p className="eyebrow mb-3">My voice</p>
      <p className="font-display text-lg font-medium text-ink sm:text-xl">
        Direct · Technical · Practical · Clear · Curious · No-buzzwords
      </p>
    </motion.div>
  );
}
