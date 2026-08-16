import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ProjectCard } from "../features/projects/ProjectCard";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function ProjectsPage() {
  useDocumentMeta(
    "Projects — Saimedh Porandla",
    "Five production-ready AI applications: crime prediction, civic RAG copilot, health triage, recommendation systems, and wildfire detection."
  );

  return (
    <div className="container-page py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <span className="eyebrow">// build_log</span>
        <h1 className="mt-3 text-4xl font-semibold text-ink sm:text-5xl">Projects</h1>
        <p className="mt-4 text-lg text-ink-muted">
          Shipped systems and live applications. Each one covers the full path —
          problem, architecture, deployed result, and key technical decisions.
        </p>
      </motion.div>

      <div className="mt-14 space-y-10">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            nextProjectSlug={i < projects.length - 1 ? projects[i + 1].slug : undefined}
          />
        ))}
      </div>
    </div>
  );
}
