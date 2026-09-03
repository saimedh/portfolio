import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { experience, certifications, timeline, skillGroups, bio } from "../data/profile";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { SectionHeading } from "../components/shared/SectionHeading";
import { LinkButton } from "../components/ui/LinkButton";
import { VoiceCard } from "../components/shared/VoiceCard";
import { BeforeAfter } from "../components/shared/BeforeAfter";

export default function AboutPage() {
  useDocumentMeta(
    "About — Saimedh Porandla",
    "AI software engineer with shipped end-to-end AI applications. Education, experience, certifications, and timeline."
  );

  return (
    <div className="container-page py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-10 lg:grid-cols-[1fr_320px]"
      >
        <div>
          <span className="eyebrow">// about</span>
          <h1 className="mt-3 text-4xl font-semibold text-ink sm:text-5xl">Saimedh Porandla</h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            {bio}
          </p>
        </div>

        <div className="h-fit rounded-xl border border-bg-border bg-bg-surface p-6">
          <p className="eyebrow">Quick facts</p>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between border-b border-bg-border pb-2">
              <dt className="text-ink-muted">Location</dt>
              <dd className="text-ink">Hyderabad, India (remote-friendly)</dd>
            </div>
            <div className="flex justify-between border-b border-bg-border pb-2">
              <dt className="text-ink-muted">Focus</dt>
              <dd className="text-ink">AI/ML + Full-stack</dd>
            </div>
            <div className="flex justify-between border-b border-bg-border pb-2">
              <dt className="text-ink-muted">Availability</dt>
              <dd className="text-signal">Open now</dd>
            </div>
          </dl>
          <LinkButton
            href="/resume.pdf"
            variant="primary"
            icon={<Download size={16} aria-hidden="true" />}
            className="mt-6 w-full"
          >
            Download resume
          </LinkButton>
        </div>
      </motion.div>

      <div className="mt-16">
        <VoiceCard />
      </div>

      <div className="mt-16">
        <BeforeAfter />
      </div>

      <div className="mt-24">
        <SectionHeading eyebrow="// experience_and_education" title="Experience & education" />
        <div className="mt-10 space-y-6">
          {experience.map((item) => (
            <div key={item.role} className="grid gap-2 border-b border-bg-border pb-6 sm:grid-cols-[200px_1fr]">
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
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <SectionHeading eyebrow="// certifications" title="Certifications" />
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {certifications.map((cert) => (
            <li key={cert} className="rounded-lg border border-bg-border bg-white p-4 text-sm text-ink-muted shadow-xs">
              {cert}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-24">
        <SectionHeading eyebrow="// skills" title="Skills" />
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-bg-border bg-bg-border sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.label} className="bg-white p-6">
              <p className="eyebrow">{group.label}</p>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-ink-muted">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 pb-8">
        <SectionHeading eyebrow="// timeline" title="Timeline" />
        <ol className="mt-10 space-y-0">
          {timeline.map((item, i) => (
            <li key={item.year} className="relative flex gap-6 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-white font-mono text-[10px] text-accent font-semibold shadow-xs">
                  {item.year.slice(2)}
                </span>
                {i < timeline.length - 1 && <span className="mt-1 w-px flex-1 bg-bg-border" />}
              </div>
              <div className="pt-1">
                <p className="font-mono text-xs text-ink-faint">{item.year}</p>
                <p className="mt-1 text-sm text-ink-muted">{item.label}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
