import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import { LinkButton } from "../../components/ui/LinkButton";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-bg-border">
      {/* Decorative Connective Editorial Vector Backdrop */}
      <div className="pointer-events-none absolute right-0 top-12 hidden w-1/2 opacity-15 lg:block" aria-hidden="true">
        <img
          src="/images/illustrations/hero-editorial.jpg"
          alt=""
          className="w-full object-contain"
        />
      </div>
      <div className="absolute inset-0 grain opacity-40" aria-hidden="true" />

      <div className="container-page relative flex flex-col items-start gap-8 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 rounded-full border border-bg-border bg-bg-surface px-3 py-1.5 font-mono text-xs text-signal shadow-xs"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-slow" />
          status: open to internships
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-4xl font-semibold leading-[1.1] text-ink sm:text-6xl tracking-tight"
        >
          I build AI-powered products that turn
          <span className="bg-gradient-to-r from-accent to-[#EA580C] bg-clip-text text-transparent"> real problems into usable software.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl text-lg text-ink-muted leading-relaxed"
        >
          Not notebooks or brittle prototypes. Six end-to-end systems shipped from data pipelines and model training to deployed, usable interfaces.
        </motion.p>

        {/* Lead with Strongest Project: Vedha AI Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="w-full max-w-2xl rounded-xl border border-accent/30 bg-bg-surface p-5 shadow-xs transition-all hover:border-accent hover:shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-bg-border pb-3">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse-slow" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                Lead Project Spotlight
              </span>
              <span className="font-mono text-xs text-ink-faint">·</span>
              <span className="font-display text-sm font-bold text-ink">Vedha AI</span>
            </div>
            <a
              href="https://vedhai.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-signal/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-signal uppercase tracking-wider hover:bg-signal/20 transition-colors"
            >
              Live Demo ↗
            </a>
          </div>
          <p className="mt-3 text-sm text-ink-muted leading-relaxed">
            I built an AI workspace that turns one user goal into an executable workflow across 11 integrated tools (FastAPI, Flutter, Redis, Gemini & OpenAI APIs).
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs text-ink-faint">
              10+ Core Modules · Multi-Model Architecture
            </span>
            <Link
              to="/projects/vedha-ai"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent hover:text-accent-dim transition-colors"
            >
              Read Deep-Dive Case Study <ArrowRight size={13} />
            </Link>
          </div>
        </motion.div>

        {/* Primary and Secondary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-accent-dim hover:shadow-sm active:scale-[0.98]"
          >
            View My Work <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-bg-border bg-bg-surface px-6 py-3.5 text-sm font-semibold text-ink shadow-xs transition-all hover:border-accent/40 hover:bg-bg-raised"
          >
            Start a Conversation
          </Link>
          <LinkButton href="https://github.com/saimedh" variant="secondary" icon={<Code2 size={16} aria-hidden="true" />}>
            GitHub
          </LinkButton>
        </motion.div>

        {/* Shipped Systems Telemetry Log */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-2xl rounded-xl border border-bg-border bg-bg-surface p-4 font-mono text-xs text-ink-muted shadow-xs"
        >
          <div className="flex items-center gap-1.5 pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]/60" />
            <span className="ml-2 text-ink-faint">build.log</span>
          </div>
          <p><span className="text-signal">✓</span> vedha-ai — live mvp, 10+ ai modules, autonomous workspace</p>
          <p><span className="text-signal">✓</span> crime-prediction-system — deployed, ~93% accuracy</p>
          <p><span className="text-signal">✓</span> health-navigator-ai — deployed, 83% triage match</p>
          <p className="text-ink-faint">running 4 more…</p>
        </motion.div>
      </div>
    </section>
  );
}
