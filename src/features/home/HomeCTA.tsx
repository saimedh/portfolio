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
        className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-white via-bg-raised/40 to-white p-10 text-center sm:p-16 shadow-xs"
      >
        {/* Decorative Connective Editorial Vector */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 opacity-15" aria-hidden="true">
          <img
            src="/images/illustrations/contact-connectivity-editorial.jpg"
            alt=""
            className="h-44 w-auto object-contain"
          />
        </div>

        <div className="relative z-10">
          <p className="eyebrow">// 06_next_step</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Ready to see this on your team?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted leading-relaxed">
            I&rsquo;m looking for an AI software engineering internship where I can
            keep shipping real systems — not just prototypes.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-accent-dim hover:shadow-sm active:scale-[0.98]"
          >
            Invite me for an internship interview <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
