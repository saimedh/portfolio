import { motion } from "framer-motion";
import { SectionHeading } from "../../components/shared/SectionHeading";
import { MessageSquareQuote } from "lucide-react";

const pending = [
  { name: "Pilot clinician", context: "Health Navigator AI clinic trial" },
  { name: "Village council coordinator", context: "Paverasa AI pilot" },
  { name: "FlyRank program lead", context: "AI Fluency Week 1 review" },
];

export function Testimonials() {
  return (
    <section className="container-page py-24">
      <SectionHeading
        eyebrow="// 05_validation"
        title="Feedback in progress"
        description="I'd rather show you real pilots than invented quotes. These are the people who've used what I've built — write-ups land here as they're finalized."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {pending.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col gap-3 rounded-xl border border-dashed border-bg-border bg-white p-6 shadow-xs"
          >
            <MessageSquareQuote size={20} className="text-ink-faint" aria-hidden="true" />
            <p className="font-mono text-xs uppercase tracking-wider text-warn">pending write-up</p>
            <p className="text-sm text-ink-muted">{p.context}</p>
            <p className="text-xs text-ink-faint">— {p.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
