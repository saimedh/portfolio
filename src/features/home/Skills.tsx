import { motion } from "framer-motion";
import { skillGroups } from "../../data/profile";
import { SectionHeading } from "../../components/shared/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="container-page py-24 scroll-mt-20">
      <SectionHeading
        eyebrow="// 02_capability"
        title="What I bring to a team"
        description="Full-stack range, applied specifically to shipping AI features — not just training models in isolation."
      />

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-bg-border bg-bg-border sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-bg-surface p-6"
          >
            <p className="eyebrow">{group.label}</p>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-ink-muted">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
