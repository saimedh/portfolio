import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function HomeCTA() {
  return (
    <section className="container-page pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-bg-surface to-bg-raised p-10 text-center sm:p-16"
      >
        <div className="absolute inset-0 bg-radial-glow" aria-hidden="true" />
        <div className="relative">
          <p className="eyebrow">// 06_next_step</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Ready to see this on your team?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            I'm looking for an AI software engineering internship where I can
            keep shipping real systems — not just prototypes.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-medium text-white shadow-glow transition-all hover:bg-accent-soft active:scale-[0.98]"
          >
            Invite me for an internship interview <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
