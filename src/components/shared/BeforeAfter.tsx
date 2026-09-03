import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const examples = [
  {
    before:
      "I leveraged cutting-edge AI technologies to develop an innovative solution that delivers seamless user experiences.",
    after: "I built one web app that brings 10 common AI tools into one place behind a single FastAPI backend with Redis caching.",
    points: [
      "Removed buzzwords (cutting-edge, innovative, seamless)",
      "Named the exact architecture (FastAPI backend with Redis caching)",
      "Used direct active voice (I built)",
    ],
  },
  {
    before:
      "Spearheaded a robust, game-changing movie recommendation engine utilizing sophisticated algorithmic synergy.",
    after:
      "I built MatchCine to stop endless streaming search loops by filtering movies through mood and concise metadata cards.",
    points: [
      "Cut corporate filler (spearheaded, robust, synergy)",
      "Addressed the human problem (endless streaming search loops)",
      "Described the actual interface (mood and concise metadata cards)",
    ],
  },
];

export function BeforeAfter() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-bg-border bg-bg-surface p-8 sm:p-10"
    >
      <p className="eyebrow">// editorial_standards</p>
      <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
        How I Edit AI Writing (Before / After)
      </h2>
      <p className="mt-3 max-w-2xl text-ink-muted">
        Generic writing hides behind buzzwords. I write like someone who actually built and debugged the system.
      </p>

      <div className="mt-8 space-y-8">
        {examples.map((item, index) => (
          <div key={index} className="space-y-4 rounded-xl border border-bg-border/60 bg-bg-raised/40 p-6">
            <div className="grid gap-4 lg:grid-cols-2">
              {/* Before */}
              <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <X size={16} className="text-red-400" aria-hidden="true" />
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-red-400">
                    Generic / AI-sounding
                  </p>
                </div>
                <p className="text-sm italic text-ink-muted leading-relaxed">
                  "{item.before}"
                </p>
              </div>

              {/* After */}
              <div className="rounded-lg border border-signal/20 bg-signal/5 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Check size={16} className="text-signal" aria-hidden="true" />
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-signal">
                    Voice-true / Plain & specific
                  </p>
                </div>
                <p className="text-sm text-ink leading-relaxed font-medium">
                  "{item.after}"
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-bg-surface p-3.5 font-mono text-xs text-ink-muted border border-bg-border/50">
              <span className="text-accent font-semibold">// What changed: </span>
              {item.points.join(" · ")}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
