import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";
import { StatusBadge } from "../../components/ui/StatusBadge";
import { SectionHeading } from "../../components/shared/SectionHeading";

export function FeaturedProjects() {
  const leadProject = projects[0]; // Paverasa AI
  const otherFeatured = projects.slice(1, 4);

  return (
    <section className="container-page py-20 sm:py-24">
      <SectionHeading
        eyebrow="// 01_proof"
        title="Featured builds"
        description="Shipped systems and live applications. Each one solves a real problem, from unified multi-model AI workflows to spatiotemporal crime prediction."
      />

      {/* Flagship Lead Showcase Card: Paverasa AI */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mt-12 overflow-hidden rounded-2xl border border-accent/40 bg-white p-6 sm:p-10 shadow-xs hover:border-accent hover:shadow-sm transition-all"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-bg-border pb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse-slow" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
              Flagship Project
            </span>
            <span className="font-mono text-xs text-ink-faint">·</span>
            <span className="font-mono text-xs text-ink-muted">Lead Build</span>
          </div>
          <StatusBadge status={leadProject.status} />
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              {leadProject.name} — AI Productivity Super App
            </h3>
            <p className="mt-3 text-base font-medium text-ink-muted leading-relaxed">
              I built an AI workspace that turns one user goal into an executable workflow across 11 integrated tools.
            </p>
            <p className="mt-2 text-sm text-ink-muted leading-relaxed">
              {leadProject.problem}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {leadProject.stack.slice(0, 8).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-bg-border bg-bg-raised px-2.5 py-1 font-mono text-xs text-ink-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to={leadProject.caseStudyUrl || `/projects/paverasa-ai`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-mono text-xs font-semibold text-white shadow-xs transition-all hover:bg-accent-dim hover:shadow-sm active:scale-[0.98]"
              >
                Read Deep-Dive Case Study <ArrowUpRight size={15} />
              </Link>
              <a
                href={leadProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-bg-border bg-white px-4 py-2.5 font-mono text-xs font-semibold text-ink transition-all hover:bg-bg-raised"
              >
                GitHub Source
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-xl border border-bg-border bg-bg-raised p-5">
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
              // Core Architecture
            </p>
            <ul className="mt-3 space-y-2 text-xs text-ink-muted leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-signal font-bold">✓</span>
                <span>Centralized FastAPI async service layer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-signal font-bold">✓</span>
                <span>Multi-model routing (Gemini & OpenAI API)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-signal font-bold">✓</span>
                <span>Redis rate limiting, task queues & caching</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-signal font-bold">✓</span>
                <span>Docker + AWS + Nginx reverse proxy</span>
              </li>
            </ul>

            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-bg-border pt-4 text-center">
              <div className="rounded-lg bg-white p-3 border border-bg-border">
                <p className="font-mono text-lg font-bold text-accent">10+ Tools</p>
                <p className="font-mono text-[10px] uppercase text-ink-faint">Unified Modules</p>
              </div>
              <div className="rounded-lg bg-white p-3 border border-bg-border">
                <p className="font-mono text-lg font-bold text-signal">Live MVP</p>
                <p className="font-mono text-[10px] uppercase text-ink-faint">Deployment</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Grid of Other Shipped Builds */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {otherFeatured.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              to={project.caseStudyUrl || `/projects#${project.slug}`}
              className="group flex h-full flex-col rounded-xl border border-bg-border bg-white p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-sm"
            >
              <div className="flex items-start justify-between">
                <StatusBadge status={project.status} />
                <ArrowUpRight
                  size={18}
                  className="text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{project.name}</h3>
              <p className="mt-2 flex-1 text-sm text-ink-muted leading-relaxed">{project.tagline}</p>
              <div className="mt-5 flex items-center justify-between border-t border-bg-border pt-4">
                <span className="font-mono text-xs text-ink-faint">{project.metric.label}</span>
                <span className="font-mono text-sm font-semibold text-signal">{project.metric.value}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-accent hover:text-accent-dim font-semibold transition-colors"
        >
          View all {projects.length} projects <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
