import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { experience, certifications, timeline, skillGroups } from "../data/profile";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { SectionHeading } from "../components/shared/SectionHeading";
import { LinkButton } from "../components/ui/LinkButton";

export default function AboutPage() {
  useDocumentMeta(
    "About — Saimedh Porandla",
    "AI software engineer with 5 shipped end-to-end AI applications. Education, experience, certifications, and timeline."
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
            I'm a computer science student who builds AI systems that actually work in production.
            Most AI projects I see stop at a training script or a Jupyter notebook. I care about
            the parts that come after: serving the model through an API, handling edge cases,
            building a UI that non-technical users can navigate, and dealing with the messy
            real-world problems like cold-start users and data that doesn't fit the textbook assumptions.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">
            Over the past two years, I've shipped five full-stack AI applications — crime prediction,
            government scheme discovery, health triage, movie recommendations, and wildfire detection.
            Each one has a deployed API, a working frontend, and real users or pilot deployments.
            I'm looking for an AI/ML software engineering internship where I can keep building
            systems that have to work, not just demo well.
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

      <div className="mt-24">
        <SectionHeading eyebrow="// experience_and_education" title="Experience & education" />
        <div className="mt-10 space-y-6">
          {experience.map((item) => (
            <div key={item.role} className="grid gap-2 border-b border-bg-border pb-6 sm:grid-cols-[200px_1fr]">
              <div>
                <p className="font-mono text-xs text-ink-faint">{item.period}</p>
                <p className="mt-1 font-display font-semibold text-ink">{item.role}</p>
                <p className="text-sm text-accent-soft">{item.org}</p>
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
            <li key={cert} className="rounded-lg border border-bg-border bg-bg-surface p-4 text-sm text-ink-muted">
              {cert}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-24">
        <SectionHeading eyebrow="// skills" title="Skills" />
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-bg-border bg-bg-border sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.label} className="bg-bg-surface p-6">
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
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-bg-raised font-mono text-[10px] text-accent-soft">
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

      {/* Before/After Writing Section */}
      <div className="mt-24 pb-8">
        <SectionHeading 
          eyebrow="// writing_approach" 
          title="How I write about my work"
          description="Most portfolio copy sounds like it was written by a marketing bot. Here's the difference between generic AI fluff and how I actually describe what I built."
        />
        
        <div className="mt-10 space-y-8">
          {/* Example 1 */}
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-red-400">Generic AI version</span>
              </div>
              <p className="mt-4 text-sm italic text-ink-muted leading-relaxed">
                "I leveraged cutting-edge AI technologies to develop an innovative solution that delivers seamless user experiences and drives transformational business outcomes through next-generation machine learning algorithms."
              </p>
            </div>
            <div className="rounded-xl border border-signal/30 bg-signal/5 p-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-signal">How I actually write</span>
              </div>
              <p className="mt-4 text-sm text-ink-muted leading-relaxed">
                "I built a crime prediction system that scores city grid cells by incident risk. It uses XGBoost on spatiotemporal features and serves predictions through a Redis-cached API with sub-100ms latency."
              </p>
            </div>
          </div>

          {/* Example 2 */}
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-red-400">Generic AI version</span>
              </div>
              <p className="mt-4 text-sm italic text-ink-muted leading-relaxed">
                "As a passionate developer, I architected a revolutionary RAG pipeline that seamlessly integrates state-of-the-art embedding models to unlock unprecedented value for end users."
              </p>
            </div>
            <div className="rounded-xl border border-signal/30 bg-signal/5 p-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-signal">How I actually write</span>
              </div>
              <p className="mt-4 text-sm text-ink-muted leading-relaxed">
                "I built a RAG assistant for government schemes. Hybrid search (BM25 + vector) with cross-encoder reranking. The system refuses to answer if it can't cite a source — learned that the hard way after an early hallucination."
              </p>
            </div>
          </div>

          {/* Example 3 */}
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-red-400">Generic AI version</span>
              </div>
              <p className="mt-4 text-sm italic text-ink-muted leading-relaxed">
                "I spearheaded the development of an advanced recommendation engine utilizing synergistic collaborative filtering techniques to optimize user engagement and maximize conversion rates."
              </p>
            </div>
            <div className="rounded-xl border border-signal/30 bg-signal/5 p-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-signal">How I actually write</span>
              </div>
              <p className="mt-4 text-sm text-ink-muted leading-relaxed">
                "I built a movie recommender that handles cold-start users. Collaborative filtering (implicit ALS) for warm users, content-based (sentence embeddings) for new users. The real work was making it not break when someone has zero ratings."
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-bg-border bg-bg-surface p-6">
          <p className="eyebrow">Why this matters</p>
          <p className="mt-3 text-sm text-ink-muted leading-relaxed">
            The difference isn't just style. Specific technical details prove I actually built the thing. 
            Buzzwords like "cutting-edge" and "revolutionary" are substitutes for real evidence. 
            If you read my case studies and can't tell what technologies I used, what problems I solved, 
            and what tradeoffs I made — I failed to communicate what I actually did.
          </p>
        </div>
      </div>
    </div>
  );
}
