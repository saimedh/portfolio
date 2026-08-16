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
          I build production-ready
          <span className="bg-gradient-to-r from-accent to-signal bg-clip-text text-transparent"> AI web applications.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl text-lg text-ink-muted"
        >
          Not notebooks. Not demos that break on the second click. Five AI systems,
          each shipped from data pipeline to deployed interface — for public
          safety, healthcare access, and civic services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-medium text-white shadow-glow transition-all hover:bg-accent-soft hover:shadow-[0_0_50px_rgba(110,86,207,0.4)] active:scale-[0.98]"
          >
            Invite me for an internship interview <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <LinkButton href="https://github.com/saimedh" variant="secondary" icon={<Code2 size={16} aria-hidden="true" />}>
            View GitHub
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
          <p><span className="text-signal">✓</span> api-emporium (freekeys) — live, 90+ free tiers</p>
          <p><span className="text-signal">✓</span> vedha-ai — live, fast conversational assistant</p>
          <p><span className="text-signal">✓</span> matchcine — live, taste matching engine</p>
          <p className="text-ink-faint">running 2 more…</p>
        </motion.div>
      </div>
    </section>
  );
}
