import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Code2, ExternalLink } from "lucide-react";
import { getProjectBySlug, projects } from "../data/projects";
import { StatusBadge } from "../components/ui/StatusBadge";
import { LinkButton } from "../components/ui/LinkButton";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : null;

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  useDocumentMeta(
    project ? `${project.name} — Case Study` : "Project Not Found",
    project?.tagline
  );

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="container-page py-20">
      {/* Back navigation */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-mono text-sm text-ink-muted hover:text-signal"
        >
          <ArrowLeft size={14} aria-hidden="true" /> Back to all projects
        </Link>
      </motion.div>

      {/* Project header */}
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8"
      >
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} />
          <span className="font-mono text-xs text-ink-faint">/</span>
          <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">
            Case Study
          </span>
        </div>
        <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 max-w-3xl text-xl text-ink-muted">{project.tagline}</p>
      </motion.header>

      {/* Quick links */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 flex flex-wrap gap-3"
      >
        <LinkButton
          href={project.github}
          variant="secondary"
          icon={<Code2 size={16} aria-hidden="true" />}
        >
          View source
        </LinkButton>
        {project.demo && (
          <LinkButton
            href={project.demo}
            variant="primary"
            icon={<ExternalLink size={16} aria-hidden="true" />}
          >
            Live demo
          </LinkButton>
        )}
      </motion.div>

      {/* Tech stack */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 rounded-xl border border-bg-border bg-bg-surface p-6"
      >
        <p className="eyebrow">Tech stack</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-bg-border bg-bg-raised px-3 py-1 font-mono text-xs text-ink-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Case study content */}
      <div className="mt-16 space-y-16">
        {/* Problem */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-ink">Problem</h2>
          <div className="mt-6 space-y-4">
            {project.caseStudy.problemDetail.map((paragraph, i) => (
              <p key={i} className="text-base text-ink-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.section>

        {/* What I Did */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-ink">What I Did</h2>
          
          <p className="mt-6 text-base text-ink-muted leading-relaxed">
            {project.caseStudy.whatIDid.overview}
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="eyebrow">Main features</h3>
              <ul className="mt-4 space-y-2">
                {project.caseStudy.whatIDid.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm text-ink-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="eyebrow">Technical decisions</h3>
              <ul className="mt-4 space-y-2">
                {project.caseStudy.whatIDid.decisions.map((decision) => (
                  <li key={decision} className="flex gap-2 text-sm text-ink-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-soft" />
                    {decision}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="eyebrow">Challenges & solutions</h3>
            <div className="mt-4 space-y-4">
              {project.caseStudy.whatIDid.challenges.map((challenge) => (
                <div
                  key={challenge}
                  className="rounded-lg border border-bg-border bg-bg-raised p-4"
                >
                  <p className="text-sm text-ink-muted leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div className="mt-10">
            <h3 className="eyebrow">Architecture</h3>
            <ul className="mt-4 space-y-2">
              {project.architecture.map((line) => (
                <li key={line} className="flex gap-2 font-mono text-xs text-ink-muted">
                  <span className="text-accent-soft">$</span> {line}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* What Came of It */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-ink">What Came of It</h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="eyebrow">Achievements</h3>
              <ul className="mt-4 space-y-2">
                {project.caseStudy.whatCameOfIt.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-2 text-sm text-ink-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="eyebrow">What I learned</h3>
              <ul className="mt-4 space-y-2">
                {project.caseStudy.whatCameOfIt.learned.map((lesson) => (
                  <li key={lesson} className="flex gap-2 text-sm text-ink-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-warn" />
                    {lesson}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-bg-border bg-bg-surface p-6">
            <h3 className="eyebrow">Current status</h3>
            <p className="mt-3 text-sm text-ink-muted leading-relaxed">
              {project.caseStudy.whatCameOfIt.status}
            </p>
          </div>

          {project.caseStudy.whatCameOfIt.nextSteps.length > 0 && (
            <div className="mt-8">
              <h3 className="eyebrow">Next steps</h3>
              <ul className="mt-4 space-y-2">
                {project.caseStudy.whatCameOfIt.nextSteps.map((step) => (
                  <li key={step} className="flex gap-2 text-sm text-ink-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-soft" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.section>
      </div>

      {/* Prev/Next navigation */}
      <motion.nav
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20 grid gap-4 border-t border-bg-border pt-10 sm:grid-cols-2"
        aria-label="Project navigation"
      >
        {prevProject ? (
          <Link
            to={`/projects/${prevProject.slug}`}
            className="group flex flex-col gap-2 rounded-xl border border-bg-border bg-bg-surface p-6 transition-all hover:border-accent/50 hover:bg-bg-raised"
          >
            <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-faint">
              <ArrowLeft size={12} aria-hidden="true" /> Previous
            </span>
            <span className="font-display text-lg font-semibold text-ink group-hover:text-signal">
              {prevProject.name}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            to={`/projects/${nextProject.slug}`}
            className="group flex flex-col gap-2 rounded-xl border border-bg-border bg-bg-surface p-6 text-right transition-all hover:border-accent/50 hover:bg-bg-raised sm:items-end"
          >
            <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-faint">
              Next <ArrowRight size={12} aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-semibold text-ink group-hover:text-signal">
              {nextProject.name}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </motion.nav>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 rounded-2xl border border-accent/30 bg-gradient-to-br from-bg-surface to-bg-raised p-10 text-center"
      >
        <p className="eyebrow">// next_step</p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
          Like what you see?
        </h3>
        <p className="mt-3 text-ink-muted">
          I'm looking for AI/ML software engineering internships where I can keep building things that actually work.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white shadow-glow transition-all hover:bg-accent-soft hover:shadow-[0_0_50px_rgba(110,86,207,0.4)] active:scale-[0.98]"
        >
          Get in touch <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </motion.div>
    </div>
  );
}
