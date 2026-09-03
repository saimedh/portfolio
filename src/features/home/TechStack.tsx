import { motion } from "framer-motion";
import { techStack } from "../../data/profile";

export function TechStack() {
  return (
    <section className="border-y border-bg-border bg-white py-14">
      <p className="container-page eyebrow mb-6">// 03_stack</p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent z-10" />
        <motion.div
          className="flex gap-4 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="rounded-full border border-bg-border bg-bg-raised px-4 py-2 font-mono text-sm text-ink-muted"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
