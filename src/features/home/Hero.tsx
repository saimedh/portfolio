import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import { LinkButton } from "../../components/ui/LinkButton";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-radial-glow">
      <div className="absolute inset-0 grain opacity-40" aria-hidden="true" />
      <div className="container-page relative flex flex-col items-start gap-8 py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 rounded-full border border-bg-border bg-bg-raised/60 px-3 py-1.5 font-mono text-xs text-signal"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-slow" />
          status: open to internships
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-4xl font-semibold leading-[1.1] text-ink sm:text-6xl"
        >
          I build AI-powered products that turn
          <span className="bg-gradient-to-r from-accent to-signal bg-clip-text text-transparent"> real problems into usable software.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl text-lg text-ink-muted leading-relaxed"
        >
          Not notebooks or brittle prototypes. Six end-to-end systems shipped from data pipelines and model training to deployed, usable interfaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-medium text-white shadow-glow transition-all hover:bg-accent-soft hover:shadow-[0_0_50px_rgba(99,102,241,0.4)] active:scale-[0.98]"
          >
            View My Work <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-bg-border bg-bg-surface px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-white"
          >
            Contact Me
          </Link>
          <LinkButton href="https://github.com/saimedh" variant="secondary" icon={<Code2 size={16} aria-hidden="true" />}>
            GitHub
          </LinkButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-4 w-full max-w-2xl rounded-xl border border-bg-border bg-bg-surface/70 p-4 font-mono text-xs text-ink-muted backdrop-blur-sm"
        >
          <div className="flex items-center gap-1.5 pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#5B616D]/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#5B616D]/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#5B616D]/60" />
            <span className="ml-2 text-ink-faint">build.log</span>
          </div>
          <p><span className="text-signal">✓</span> paverasa-ai — live mvp, 10+ ai modules</p>
          <p><span className="text-signal">✓</span> crime-prediction-system — deployed, ~93% accuracy</p>
          <p><span className="text-signal">✓</span> api-emporium (freekeys) — live, 90+ free tiers</p>
          <p className="text-ink-faint">running 4 more…</p>
        </motion.div>
      </div>
    </section>
  );
}
