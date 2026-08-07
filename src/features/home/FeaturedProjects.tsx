import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";
import { StatusBadge } from "../../components/ui/StatusBadge";
import { SectionHeading } from "../../components/shared/SectionHeading";

export function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="container-page py-24">
      <SectionHeading
        eyebrow="// 01_proof"
        title="Featured builds"
        description="Three of five shipped systems. Each one solves a real access problem, not a toy dataset."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {featured.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              to={`/projects#${project.slug}`}
              className="group flex h-full flex-col rounded-xl border border-bg-border bg-bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow"
            >
              <div className="flex items-start justify-between">
                <StatusBadge status={project.status} />
                <ArrowUpRight
                  size={18}
                  className="text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{project.name}</h3>
              <p className="mt-2 flex-1 text-sm text-ink-muted">{project.tagline}</p>
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
          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-accent-soft hover:text-signal"
        >
          View all 5 projects <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
