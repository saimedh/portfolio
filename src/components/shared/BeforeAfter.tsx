import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export function BeforeAfter() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-bg-border bg-bg-surface p-8 sm:p-10"
    >
      <p className="eyebrow">How I Edit AI Writing</p>
      <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
        Before / After
      </h2>
      <p className="mt-3 max-w-2xl text-ink-muted">
        Generic AI writing tries to sound impressive. I edit it to sound like someone who actually built the thing.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Before */}
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
          <div className="mb-4 flex items-center gap-2">
            <X size={18} className="text-red-400" aria-hidden="true" />
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-red-400">
              Generic AI version
            </p>
          </div>
          <p className="text-sm italic text-ink-muted">
            "I leveraged cutting-edge AI technologies to develop an innovative solution that delivers seamless user experiences."
          </p>
        </div>

        {/* After */}
        <div className="rounded-xl border border-signal/20 bg-signal/5 p-6">
          <div className="mb-4 flex items-center gap-2">
            <Check size={18} className="text-signal" aria-hidden="true" />
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-signal">
              My edited version
            </p>
          </div>
          <p className="text-sm text-ink">
            "I built one mobile app that puts multiple AI tools in one place."
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-lg bg-bg-raised p-4 font-mono text-xs text-ink-muted">
        <p className="text-ink-faint">// What changed:</p>
        <p className="mt-2">- Removed buzzwords (cutting-edge, innovative, seamless)</p>
        <p>- Made it concrete (one mobile app, multiple AI tools)</p>
        <p>- Used active voice (I built)</p>
        <p>- Kept it short</p>
      </div>
    </motion.section>
  );
}
