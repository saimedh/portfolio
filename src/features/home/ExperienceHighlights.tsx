import { motion } from "framer-motion";
import { experience } from "../../data/profile";
import { SectionHeading } from "../../components/shared/SectionHeading";

export function ExperienceHighlights() {
  return (
    <section id="experience" className="container-page py-24 scroll-mt-20">
      <SectionHeading
        eyebrow="// 04_track_record"
        title="Recent track record"
        description="A short, honest history — no inflated titles."
      />

      <div className="mt-12 space-y-6">
        {experience.map((item, i) => (
          <motion.div
            key={item.role}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="grid gap-2 border-b border-bg-border pb-6 sm:grid-cols-[200px_1fr]"
          >
            <div>
              <p className="font-mono text-xs text-ink-faint">{item.period}</p>
              <p className="mt-1 font-display font-semibold text-ink">{item.role}</p>
              <p className="text-sm text-accent font-medium">{item.org}</p>
            </div>
            <ul className="space-y-1.5">
              {item.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm text-ink-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
