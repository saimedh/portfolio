import { motion } from "framer-motion";
import { proofStats } from "../../data/profile";

export function ProofStatement() {
  return (
    <section className="border-y border-bg-border bg-bg-surface/40">
      <div className="container-page py-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl font-display text-xl text-ink sm:text-2xl"
        >
          Every project below went further than a training script — data
          pipeline, model, API, deployed UI, and a documented failure mode.
          That's what "production-ready" means here.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {proofStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-l-2 border-accent/40 pl-5"
            >
              <p className="font-mono text-4xl font-semibold text-ink">{stat.value}</p>
              <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
