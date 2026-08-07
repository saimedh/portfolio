import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base text-ink-muted sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
