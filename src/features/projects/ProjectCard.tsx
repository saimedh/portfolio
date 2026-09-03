import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, ExternalLink, Image as ImageIcon, ArrowRight } from "lucide-react";
import type { Project } from "../../data/projects";
import { StatusBadge } from "../../components/ui/StatusBadge";
import { LinkButton } from "../../components/ui/LinkButton";

export function ProjectCard({ project, index, nextProjectSlug }: { project: Project; index: number; nextProjectSlug?: string }) {
  return (
    <motion.article
      id={project.slug}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="scroll-mt-24 rounded-2xl border border-bg-border bg-white p-6 sm:p-10 shadow-xs transition-all hover:border-accent/40 hover:shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-ink-faint">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="font-display text-2xl font-bold text-ink">{project.name}</h3>
        </div>
        <div className="flex items-center gap-2">
          {project.caseStudyUrl && (
            <Link
              to={project.caseStudyUrl}
              className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs font-semibold text-accent hover:bg-accent/20 transition-colors"
            >
              Deep Dive <ArrowRight size={12} />
            </Link>
          )}
          <StatusBadge status={project.status} />
        </div>
      </div>

      <p className="mt-3 max-w-2xl text-ink-muted leading-relaxed">{project.tagline}</p>

      {/* 01 Overview / Goal & 02 Problem */}
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <p className="eyebrow">// 01_problem</p>
          <p className="mt-2 text-sm text-ink-muted leading-relaxed">{project.problem}</p>
        </div>
        <div>
          <p className="eyebrow">// 02_goal_and_solution</p>
          <p className="mt-2 text-sm font-medium text-ink leading-relaxed">{project.goal}</p>
          <p className="mt-2 text-sm text-ink-muted leading-relaxed">{project.solution}</p>
        </div>
      </div>

      {/* 03 Real Work Screenshot Slot (Task 01) */}
      <div className="mt-8 overflow-hidden rounded-xl border border-bg-border bg-[#F9FAFB]">
        <div className="flex items-center justify-between border-b border-bg-border px-4 py-2.5 bg-bg-raised">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]/70" />
            <span className="ml-2 font-mono text-[11px] text-ink-faint">{project.slug}.view</span>
          </div>
          <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
            {project.image ? "Real Project Capture" : "Real Screenshot Slot"}
          </span>
        </div>

        {project.image ? (
          <div className="relative">
            <img
              src={project.image}
              alt={`${project.name} interface capture`}
              className="w-full object-cover max-h-96"
            />
            <div className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-1 font-mono text-[10px] text-signal font-semibold">
              REAL CAPTURE
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-10 text-center bg-white border-dashed border-2 border-bg-border m-3 rounded-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-raised text-ink-faint">
              <ImageIcon size={24} />
            </div>
            <p className="mt-3 font-mono text-sm font-bold tracking-wider text-accent">
              REAL SCREENSHOT NEEDED
            </p>
            <p className="mt-1 font-mono text-xs text-ink-muted">
              Replace with actual project capture: <span className="text-ink font-semibold">{project.imageLabel}</span>
            </p>
            <p className="mt-2 font-mono text-[11px] text-ink-faint">
              (Rule: Never fabricate AI mockups to prove real work)
            </p>
          </div>
        )}

        {/* Live Metrics & Status Banner */}
        <div className="grid grid-cols-3 gap-px bg-bg-border p-px">
          {[project.metric, { label: "Deployment", value: project.status }, { label: "Stack Size", value: `${project.stack.length} tools` }].map((m) => (
            <div key={m.label} className="bg-white p-4 text-center">
              <p className="font-mono text-lg font-bold text-signal sm:text-xl">{m.value}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ink-faint">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 04 Process & Technical Architecture */}
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <p className="eyebrow">// 03_process_steps</p>
          <ul className="mt-3 space-y-2">
            {project.process.map((step, sIdx) => (
              <li key={sIdx} className="flex gap-2 text-xs text-ink-muted">
                <span className="font-mono text-accent font-semibold">{sIdx + 1}.</span> {step}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">// 04_technical_architecture</p>
          <ul className="mt-3 space-y-2">
            {project.architecture.map((line) => (
              <li key={line} className="flex gap-2 font-mono text-xs text-ink-muted">
                <span className="text-accent">$</span> {line}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 05 Results & Lessons */}
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <p className="eyebrow">// 05_measurable_results</p>
          <ul className="mt-3 space-y-2">
            {project.results.map((r) => (
              <li key={r} className="flex gap-2 text-sm text-ink-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">// 06_lessons_and_decisions</p>
          <ul className="mt-3 space-y-2">
            {project.lessons.map((l) => (
              <li key={l} className="flex gap-2 text-sm text-ink-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-warn" />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-8">
        <p className="eyebrow mb-3">// 07_tech_stack</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-bg-border bg-bg-raised px-3 py-1 font-mono text-xs text-ink-muted">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links & CTA Progression */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-bg-border pt-6">
        <div className="flex flex-wrap items-center gap-3">
          {project.caseStudyUrl && (
            <Link
              to={project.caseStudyUrl}
              className="inline-flex items-center gap-2 rounded-lg bg-[#FF5722] px-4 py-2.5 font-mono text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#EA580C] hover:shadow-md active:scale-[0.98]"
            >
              Read Full Case Study <ArrowRight size={14} aria-hidden="true" />
            </Link>
          )}
          <LinkButton href={project.github} variant="secondary" icon={<Code2 size={16} aria-hidden="true" />}>
            View source
          </LinkButton>
          {project.demo && (
            <LinkButton href={project.demo} variant="primary" icon={<ExternalLink size={16} aria-hidden="true" />}>
              Live demo
            </LinkButton>
          )}
        </div>

        {nextProjectSlug && (
          <a
            href={`#${nextProjectSlug}`}
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-accent hover:text-accent-dim transition-colors font-semibold"
          >
            Next case study <ArrowRight size={14} aria-hidden="true" />
          </a>
        )}
      </div>
    </motion.article>
  );
}
