import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import type { Project } from "../../data/projects";
import { StatusBadge } from "../../components/ui/StatusBadge";
import { LinkButton } from "../../components/ui/LinkButton";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      id={project.slug}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="scroll-mt-24 rounded-2xl border border-bg-border bg-bg-surface p-6 sm:p-10"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-ink-faint">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="font-display text-2xl font-semibold text-ink">{project.name}</h3>
        </div>
        <StatusBadge status={project.status} />
      </div>

      <p className="mt-3 max-w-2xl text-ink-muted">{project.tagline}</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Problem</p>
          <p className="mt-2 text-sm text-ink-muted">{project.problem}</p>
        </div>
        <div>
          <p className="eyebrow">Solution</p>
          <p className="mt-2 text-sm text-ink-muted">{project.solution}</p>
        </div>
      </div>

      <div className="mt-8">
        <p className="eyebrow">Architecture</p>
        <ul className="mt-3 space-y-2">
          {project.architecture.map((line) => (
            <li key={line} className="flex gap-2 font-mono text-xs text-ink-muted">
              <span className="text-accent-soft">$</span> {line}
            </li>
          ))}
        </ul>
      </div>

      {/* Screenshot placeholder area - system dashboard visual */}
      <div className="mt-8 overflow-hidden rounded-xl border border-bg-border bg-bg-raised">
        <div className="flex items-center gap-1.5 border-b border-bg-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#5B616D]/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#5B616D]/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#5B616D]/60" />
          <span className="ml-2 font-mono text-[11px] text-ink-faint">{project.slug}.dev — dashboard</span>
        </div>
        <div className="grid grid-cols-3 gap-px bg-bg-border p-px">
          {[project.metric, { label: "Status", value: project.status }, { label: "Stack size", value: `${project.stack.length} tools` }].map((m) => (
            <div key={m.label} className="bg-bg-surface p-6 text-center">
              <p className="font-mono text-2xl font-semibold text-signal">{m.value}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ink-faint">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Results</p>
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
          <p className="eyebrow">Lessons learned</p>
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

      <div className="mt-8">
        <p className="eyebrow mb-3">Tech stack</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-bg-border bg-bg-raised px-3 py-1 font-mono text-xs text-ink-muted">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 border-t border-bg-border pt-6">
        <LinkButton href={project.github} variant="secondary" icon={<Code2 size={16} aria-hidden="true" />}>
          View source
        </LinkButton>
        {project.demo && (
          <LinkButton href={project.demo} variant="primary" icon={<ExternalLink size={16} aria-hidden="true" />}>
            Live demo
          </LinkButton>
        )}
      </div>
    </motion.article>
  );
}
