import { motion } from "framer-motion";
import { 
  CheckSquare, 
  Square, 
  Image as ImageIcon, 
  XCircle, 
  CheckCircle2, 
  Layers, 
  Type, 
  Sparkles, 
  ArrowRight, 
  Compass, 
  ShieldAlert
} from "lucide-react";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { SectionHeading } from "../components/shared/SectionHeading";
import { LinkButton } from "../components/ui/LinkButton";
import { projects } from "../data/projects";

const stillNeedToGather = [
  { label: "Final Paverasa screenshots (Dashboard, Chat, Tools)", done: false },
  { label: "Paverasa live demo URL", done: false },
  { label: "Paverasa public GitHub repository", done: false },
  { label: "Crime Prediction screenshots (Heatmap & Analytics)", done: false },
  { label: "Crime Prediction live interactive demo", done: false },
  { label: "Crime Prediction GitHub repository", done: false },
  { label: "Forest Fire Detection screenshots & satellite output", done: false },
  { label: "Movie Recommendation (MatchCine) live screenshots", done: true },
  { label: "FreeKeys (API Emporium) live screenshots & demo", done: true },
  { label: "Real professional photo for About section", done: false },
  { label: "Final project metrics verification", done: true },
  { label: "Internship work that can be publicly disclosed", done: false },
  { label: "GitHub profile link (github.com/saimedh)", done: true },
  { label: "LinkedIn profile link (linkedin.com/in/sai-medh)", done: true },
  { label: "Contact email (saimedhp@gmail.com)", done: true },
];

const colorTokens = [
  { name: "Obsidian Base", hex: "#090A0F", role: "Page Canvas Background", textDark: false },
  { name: "Dark Charcoal", hex: "#11131A", role: "Card & Panel Surface", textDark: false },
  { name: "Raised Charcoal", hex: "#181B24", role: "Elevated Badges & Code Blocks", textDark: false },
  { name: "Structural Slate", hex: "#202430", role: "Borders & Hairline Dividers", textDark: false },
  { name: "Near-White", hex: "#F3F4F6", role: "Primary Headings & High Contrast Text", textDark: true },
  { name: "Muted Slate", hex: "#94A3B8", role: "Body Descriptions & Secondary Labels", textDark: true },
  { name: "Calm Indigo", hex: "#6366F1", role: "Brand Accent & Primary CTAs", textDark: false },
  { name: "Mint Emerald", hex: "#10B981", role: "Live Status & Accuracy Signals", textDark: true },
];

export default function Week03Page() {
  useDocumentMeta(
    "Week 03: Portfolio Judgment & Design Process — Saimedh Porandla",
    "Documentation of image curation rules, through-line progression, and visual judgment systems."
  );

  return (
    <div className="container-page py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <span className="eyebrow">// week_03_deliverable</span>
        <h1 className="mt-3 text-4xl font-semibold text-ink sm:text-5xl">
          Portfolio Judgment & Process
        </h1>
        <p className="mt-4 text-lg text-ink-muted leading-relaxed">
          How this portfolio curate authentic project imagery, enforces a unified through-line,
          and applies visual restraint so engineering work remains the loudest element on the page.
        </p>

        {/* Central One-Line Claim Banner */}
        <div className="mt-8 rounded-2xl border border-accent/40 bg-gradient-to-br from-bg-surface via-bg-raised to-bg-surface p-6 sm:p-8 shadow-glow">
          <p className="font-mono text-xs uppercase tracking-wider text-accent-soft">
            // central_through_line_claim
          </p>
          <p className="mt-3 font-display text-xl font-semibold text-ink sm:text-3xl leading-snug">
            "I build AI-powered products that turn real problems into usable software."
          </p>
        </div>
      </motion.div>

      {/* Navigation Jump Anchor Links */}
      <div className="mt-12 flex flex-wrap gap-3 font-mono text-xs">
        <a href="#task-01" className="rounded-lg border border-bg-border bg-bg-surface px-4 py-2 text-ink-muted hover:border-accent/40 hover:text-ink transition-colors">
          01 — Curate Your Images ↓
        </a>
        <a href="#task-02" className="rounded-lg border border-bg-border bg-bg-surface px-4 py-2 text-ink-muted hover:border-accent/40 hover:text-ink transition-colors">
          02 — The Through-Line ↓
        </a>
        <a href="#task-03" className="rounded-lg border border-bg-border bg-bg-surface px-4 py-2 text-ink-muted hover:border-accent/40 hover:text-ink transition-colors">
          03 — Visual Judgment ↓
        </a>
        <a href="#still-need" className="rounded-lg border border-bg-border bg-bg-surface px-4 py-2 text-ink-muted hover:border-accent/40 hover:text-ink transition-colors">
          04 — Still Need To Gather ↓
        </a>
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* TASK 01: CURATE YOUR IMAGES */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section id="task-01" className="mt-28 scroll-mt-24">
        <SectionHeading
          eyebrow="// assignment_01"
          title="01 — Curate Your Images"
          description="Evidence requires authenticity. Real work is proven exclusively with real screenshots. AI visuals are strictly reserved for atmospheric decoration."
        />

        {/* Core Image Rule Banner */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-signal/30 bg-signal/5 p-5">
            <div className="flex items-center gap-2 text-signal">
              <CheckCircle2 size={18} />
              <p className="font-mono text-xs font-semibold uppercase tracking-wider">Real Work</p>
            </div>
            <p className="mt-2 text-sm font-semibold text-ink">Real Project Captures</p>
            <p className="mt-1 text-xs text-ink-muted">Actual UI screens, terminal logs, data charts, and model outputs. Never fabricate fake mockups.</p>
          </div>

          <div className="rounded-xl border border-accent/30 bg-accent/5 p-5">
            <div className="flex items-center gap-2 text-accent-soft">
              <CheckCircle2 size={18} />
              <p className="font-mono text-xs font-semibold uppercase tracking-wider">Real Person</p>
            </div>
            <p className="mt-2 text-sm font-semibold text-ink">Authentic Photograph</p>
            <p className="mt-1 text-xs text-ink-muted">Unfiltered personal portrait. Never generate an AI avatar or synthetic portrait.</p>
          </div>

          <div className="rounded-xl border border-warn/30 bg-warn/5 p-5">
            <div className="flex items-center gap-2 text-warn">
              <Sparkles size={18} />
              <p className="font-mono text-xs font-semibold uppercase tracking-wider">Decoration Only</p>
            </div>
            <p className="mt-2 text-sm font-semibold text-ink">AI Atmosphere</p>
            <p className="mt-1 text-xs text-ink-muted">Subtle background radial glow, grid fade, and grain textures that support the theme without faking proof.</p>
          </div>
        </div>

        {/* Real Project Image Slots Gallery */}
        <div className="mt-12">
          <h3 className="font-display text-xl font-semibold text-ink">Project Image Slots & Evidence Strategy</h3>
          <p className="mt-2 text-sm text-ink-muted">
            Every project has a dedicated slot. If a real capture is not yet uploaded, an explicit and honest editable placeholder is displayed.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {projects.slice(0, 4).map((p) => (
              <div key={p.slug} className="rounded-xl border border-bg-border bg-bg-surface p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display font-semibold text-ink">{p.name}</span>
                  <span className={`font-mono text-[10px] uppercase px-2 py-0.5 rounded border ${
                    p.realScreenshotsAvailable 
                      ? "border-signal/30 bg-signal/10 text-signal" 
                      : "border-warn/30 bg-warn/10 text-warn"
                  }`}>
                    {p.realScreenshotsAvailable ? "Capture Attached" : "Screenshot Slot Active"}
                  </span>
                </div>

                <div className="mt-4 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-bg-border bg-bg-raised/40 p-8 text-center">
                  <ImageIcon size={28} className="text-ink-faint" />
                  <p className="mt-3 font-mono text-xs font-semibold uppercase tracking-wider text-accent-soft">
                    REAL SCREENSHOT NEEDED
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-ink-muted">
                    Target: {p.imageLabel}
                  </p>
                </div>
                <p className="mt-3 text-xs text-ink-muted">{p.tagline}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rejected Image Example & Detailed Reasoning */}
        <div className="mt-14 rounded-2xl border border-red-500/30 bg-red-500/5 p-6 sm:p-8">
          <div className="flex items-center gap-2 text-red-400">
            <ShieldAlert size={20} />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider">
              Rejected Image Documentation
            </span>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-red-500/40 bg-bg-surface p-8 text-center">
              <XCircle size={32} className="text-red-400" />
              <p className="mt-3 font-mono text-xs font-bold uppercase tracking-wider text-red-400">
                REJECTED AI IMAGE
              </p>
              <p className="mt-1 font-mono text-[10px] text-ink-faint">
                Synthetic AI Dashboard UI Mockup
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-display text-lg font-semibold text-ink">
                Rejection Reasoning:
              </h4>
              <blockquote className="border-l-2 border-red-400/60 pl-4 italic text-sm text-ink-muted">
                "Rejected because it looked polished but did not represent my actual work. Real project screenshots provide stronger proof, even when they are less visually perfect."
              </blockquote>
              <p className="text-xs text-ink-muted leading-relaxed">
                <strong>Specific technical evaluation:</strong> An AI image generator can produce glossy 3D glassmorphic mockups with charts that do not map to real database schemas, API routes, or actual responsive UI components. Presenting synthetic UI damages credibility with technical evaluators. We show real working interfaces or an explicit placeholder slot.
              </p>
            </div>
          </div>
        </div>

        {/* Image Decision Log */}
        <div className="mt-14">
          <h3 className="font-display text-xl font-semibold text-ink">Image Decision Log</h3>
          <div className="mt-4 overflow-x-auto rounded-xl border border-bg-border">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-bg-raised text-ink-faint uppercase border-b border-bg-border">
                <tr>
                  <th className="p-4">Visual Type</th>
                  <th className="p-4">Applied Location</th>
                  <th className="p-4">Why This Decision Was Made</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-bg-border bg-bg-surface text-ink-muted">
                <tr>
                  <td className="p-4 font-semibold text-signal">Real Capture</td>
                  <td className="p-4">Case Study Project Slots</td>
                  <td className="p-4 font-body">Proves actual work, real endpoints, and genuine architecture. Superior to any synthetic render.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-accent-soft">Real Photo</td>
                  <td className="p-4">About Page Profile Slot</td>
                  <td className="p-4 font-body">A developer must be represented authentically. AI-generated avatars signal artificiality.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-warn">AI Decorative Visual</td>
                  <td className="p-4">Hero Radial Glow & Grid Fade</td>
                  <td className="p-4 font-body">Adds atmospheric depth and cohesive branding without masquerading as software proof.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* TASK 02: THE THROUGH-LINE */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section id="task-02" className="mt-28 scroll-mt-24">
        <SectionHeading
          eyebrow="// assignment_02"
          title="02 — The Through-Line"
          description="Every page, project card, and button reinforces one central narrative and guides the visitor toward contact."
        />

        {/* Content Map */}
        <div className="mt-10">
          <h3 className="font-display text-xl font-semibold text-ink">Portfolio Content Map</h3>
          <p className="mt-2 text-sm text-ink-muted">
            How pages and sections are structured to build proof systematically.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Page 1: Home */}
            <div className="rounded-xl border border-bg-border bg-bg-surface p-5">
              <div className="flex items-center justify-between border-b border-bg-border pb-3">
                <span className="font-mono text-xs uppercase text-accent-soft font-semibold">01 — Home</span>
                <span className="font-mono text-[10px] text-ink-faint">/</span>
              </div>
              <p className="mt-3 text-xs text-ink-muted"><strong>Purpose:</strong> Instant proof & central claim.</p>
              <ul className="mt-3 space-y-1 text-xs text-ink-faint font-mono">
                <li>• Hero & Through-line</li>
                <li>• Proof Statement Stats</li>
                <li>• Featured Builds</li>
                <li>• Skills & Experience</li>
              </ul>
              <div className="mt-4 pt-3 border-t border-bg-border/60">
                <span className="font-mono text-[10px] uppercase text-signal">Strongest Case:</span>
                <p className="text-xs text-ink">Paverasa AI</p>
                <span className="mt-2 block font-mono text-[10px] uppercase text-accent-soft">Primary CTA:</span>
                <p className="text-xs text-ink font-semibold">View My Work →</p>
              </div>
            </div>

            {/* Page 2: Projects */}
            <div className="rounded-xl border border-bg-border bg-bg-surface p-5">
              <div className="flex items-center justify-between border-b border-bg-border pb-3">
                <span className="font-mono text-xs uppercase text-accent-soft font-semibold">02 — Projects</span>
                <span className="font-mono text-[10px] text-ink-faint">/projects</span>
              </div>
              <p className="mt-3 text-xs text-ink-muted"><strong>Purpose:</strong> Full 10-beat case studies.</p>
              <ul className="mt-3 space-y-1 text-xs text-ink-faint font-mono">
                <li>• Problem & Goal</li>
                <li>• Screenshot Slots</li>
                <li>• Process & Architecture</li>
                <li>• Metrics & Lessons</li>
              </ul>
              <div className="mt-4 pt-3 border-t border-bg-border/60">
                <span className="font-mono text-[10px] uppercase text-signal">Strongest Case:</span>
                <p className="text-xs text-ink">Paverasa & Crime Prediction</p>
                <span className="mt-2 block font-mono text-[10px] uppercase text-accent-soft">Primary CTA:</span>
                <p className="text-xs text-ink font-semibold">Live Demo / Next Case →</p>
              </div>
            </div>

            {/* Page 3: About */}
            <div className="rounded-xl border border-bg-border bg-bg-surface p-5">
              <div className="flex items-center justify-between border-b border-bg-border pb-3">
                <span className="font-mono text-xs uppercase text-accent-soft font-semibold">03 — About</span>
                <span className="font-mono text-[10px] text-ink-faint">/about</span>
              </div>
              <p className="mt-3 text-xs text-ink-muted"><strong>Purpose:</strong> Authenticity & background.</p>
              <ul className="mt-3 space-y-1 text-xs text-ink-faint font-mono">
                <li>• Real Photo Slot & Bio</li>
                <li>• Voice Card (5-7 words)</li>
                <li>• Before/After AI Edit Pass</li>
                <li>• Education & Timeline</li>
              </ul>
              <div className="mt-4 pt-3 border-t border-bg-border/60">
                <span className="font-mono text-[10px] uppercase text-signal">Key Asset:</span>
                <p className="text-xs text-ink">Resume Download</p>
                <span className="mt-2 block font-mono text-[10px] uppercase text-accent-soft">Primary CTA:</span>
                <p className="text-xs text-ink font-semibold">Contact Me →</p>
              </div>
            </div>

            {/* Page 4: Contact */}
            <div className="rounded-xl border border-bg-border bg-bg-surface p-5">
              <div className="flex items-center justify-between border-b border-bg-border pb-3">
                <span className="font-mono text-xs uppercase text-accent-soft font-semibold">04 — Contact</span>
                <span className="font-mono text-[10px] text-ink-faint">/contact</span>
              </div>
              <p className="mt-3 text-xs text-ink-muted"><strong>Purpose:</strong> Direct connection & hiring conversion.</p>
              <ul className="mt-3 space-y-1 text-xs text-ink-faint font-mono">
                <li>• Direct Contact Form</li>
                <li>• Email (saimedhp@gmail.com)</li>
                <li>• Phone & LinkedIn</li>
                <li>• GitHub Channel</li>
              </ul>
              <div className="mt-4 pt-3 border-t border-bg-border/60">
                <span className="font-mono text-[10px] uppercase text-signal">Final Action:</span>
                <p className="text-xs text-ink">Interview Invitation</p>
                <span className="mt-2 block font-mono text-[10px] uppercase text-accent-soft">Primary CTA:</span>
                <p className="text-xs text-ink font-semibold">Send Message →</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Through-Line Flow Diagram */}
        <div className="mt-12 rounded-xl border border-bg-border bg-bg-raised p-6 sm:p-8">
          <p className="eyebrow">// cta_progression_journey</p>
          <h3 className="mt-2 font-display text-xl font-semibold text-ink">
            Cohesive CTA Progression Journey
          </h3>
          <p className="mt-2 text-sm text-ink-muted">
            Rather than scattering random buttons, user actions progress intentionally toward the final conversion:
          </p>

          <div className="mt-6 flex flex-col gap-3 font-mono text-xs sm:flex-row sm:items-center sm:justify-between">
            <div className="rounded-lg border border-bg-border bg-bg-surface p-3 text-center flex-1">
              <span className="text-ink-faint block text-[10px]">Step 1 (Home)</span>
              <span className="text-ink font-semibold mt-1 block">View My Work</span>
            </div>
            <ArrowRight size={16} className="text-accent-soft mx-auto hidden sm:block" />
            <div className="rounded-lg border border-bg-border bg-bg-surface p-3 text-center flex-1">
              <span className="text-ink-faint block text-[10px]">Step 2 (Projects)</span>
              <span className="text-ink font-semibold mt-1 block">View Case Study</span>
            </div>
            <ArrowRight size={16} className="text-accent-soft mx-auto hidden sm:block" />
            <div className="rounded-lg border border-bg-border bg-bg-surface p-3 text-center flex-1">
              <span className="text-ink-faint block text-[10px]">Step 3 (Case Study)</span>
              <span className="text-ink font-semibold mt-1 block">Next Case / Demo</span>
            </div>
            <ArrowRight size={16} className="text-accent-soft mx-auto hidden sm:block" />
            <div className="rounded-lg border border-bg-border bg-bg-surface p-3 text-center flex-1">
              <span className="text-ink-faint block text-[10px]">Step 4 (About)</span>
              <span className="text-ink font-semibold mt-1 block">Contact Me</span>
            </div>
            <ArrowRight size={16} className="text-signal mx-auto hidden sm:block" />
            <div className="rounded-lg border border-signal/40 bg-signal/10 p-3 text-center flex-1">
              <span className="text-signal block text-[10px] font-bold">Final Action</span>
              <span className="text-signal font-semibold mt-1 block">Get In Touch</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* TASK 03: VISUAL JUDGMENT */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section id="task-03" className="mt-28 scroll-mt-24">
        <SectionHeading
          eyebrow="// assignment_03"
          title="03 — Visual Judgment"
          description="Design frames the work; it does not compete with the work. Every color, font, spacing unit, and motion effect is documented."
        />

        {/* Color Palette */}
        <div className="mt-10">
          <h3 className="font-display text-xl font-semibold text-ink">Color Palette Tokens</h3>
          <p className="mt-2 text-sm text-ink-muted">
            A quiet obsidian background with calm indigo accents keeps attention on software architecture and code.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {colorTokens.map((c) => (
              <div key={c.name} className="rounded-xl border border-bg-border bg-bg-surface p-4">
                <div 
                  className="h-14 w-full rounded-lg border border-white/10" 
                  style={{ backgroundColor: c.hex }} 
                />
                <p className="mt-3 font-mono text-xs font-semibold text-ink">{c.name}</p>
                <p className="font-mono text-[11px] text-accent-soft">{c.hex}</p>
                <p className="mt-1 text-[11px] text-ink-faint">{c.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Typography & Layout Rules */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Typography */}
          <div className="rounded-xl border border-bg-border bg-bg-surface p-6">
            <div className="flex items-center gap-2 text-accent-soft">
              <Type size={20} />
              <h3 className="font-display text-lg font-semibold text-ink">Typography Hierarchy</h3>
            </div>
            <ul className="mt-4 space-y-3 text-xs text-ink-muted font-mono">
              <li className="border-b border-bg-border pb-2">
                <span className="text-ink font-semibold block font-display text-base">Space Grotesk (Headings)</span>
                Geometric character with subtle ink traps for crisp display titles (h1–h4).
              </li>
              <li className="border-b border-bg-border pb-2">
                <span className="text-ink font-semibold block font-body text-sm">Inter (Body Copy)</span>
                Neutral, highly legible UI typography optimized for long case-study descriptions.
              </li>
              <li>
                <span className="text-ink font-semibold block font-mono text-xs">JetBrains Mono (Data & Code)</span>
                Technical data, terminal logs, metric numbers, and architectural component lists.
              </li>
            </ul>
          </div>

          {/* Layout & Rhythm */}
          <div className="rounded-xl border border-bg-border bg-bg-surface p-6">
            <div className="flex items-center gap-2 text-accent-soft">
              <Layers size={20} />
              <h3 className="font-display text-lg font-semibold text-ink">Layout & Rhythm</h3>
            </div>
            <ul className="mt-4 space-y-3 text-xs text-ink-muted">
              <li className="border-b border-bg-border pb-2">
                <strong className="text-ink block">Max-width Containment:</strong>
                Constrained to 1152px (<code className="font-mono text-accent-soft">max-w-6xl</code>) with responsive horizontal padding (24px mobile, 32px desktop).
              </li>
              <li className="border-b border-bg-border pb-2">
                <strong className="text-ink block">Spacing Baseline:</strong>
                Built on an 8px modular spacing scale (8px, 16px, 24px, 32px, 48px, 80px) to establish vertical breathing room.
              </li>
              <li>
                <strong className="text-ink block">Framing Over Noise:</strong>
                Subtle hairline borders (<code className="font-mono text-accent-soft">#202430</code>) and glassmorphism structure content cleanly.
              </li>
            </ul>
          </div>
        </div>

        {/* Motion Principles */}
        <div className="mt-12 rounded-xl border border-bg-border bg-bg-surface p-6 sm:p-8">
          <div className="flex items-center gap-2 text-accent-soft">
            <Compass size={20} />
            <h3 className="font-display text-lg font-semibold text-ink">Motion & Interaction Principles</h3>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3 text-xs text-ink-muted">
            <div className="rounded-lg bg-bg-raised p-4">
              <p className="font-mono font-semibold text-ink">Subtle Scroll Reveals</p>
              <p className="mt-1">Elements slide up 12–20px with 0.5s duration and ease-out curve.</p>
            </div>
            <div className="rounded-lg bg-bg-raised p-4">
              <p className="font-mono font-semibold text-ink">Micro Hover States</p>
              <p className="mt-1">Buttons and cards respond with 1–2px lift and soft indigo glow.</p>
            </div>
            <div className="rounded-lg bg-bg-raised p-4">
              <p className="font-mono font-semibold text-ink">Accessibility First</p>
              <p className="mt-1">Full <code className="font-mono text-accent-soft">prefers-reduced-motion</code> support zeroes out all transitions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* SECTION 04: STILL NEED TO GATHER (CHECKLIST) */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section id="still-need" className="mt-28 scroll-mt-24">
        <SectionHeading
          eyebrow="// evidence_audit"
          title="Still Need To Gather (Honest Checklist)"
          description="A transparent checklist of verified assets versus pending production captures. Nothing is marked complete without real proof."
        />

        <div className="mt-8 rounded-2xl border border-bg-border bg-bg-surface p-6 sm:p-8">
          <div className="grid gap-3 sm:grid-cols-2">
            {stillNeedToGather.map((item, idx) => (
              <div 
                key={idx}
                className={`flex items-start gap-3 rounded-lg border p-3.5 transition-colors ${
                  item.done 
                    ? "border-signal/30 bg-signal/5 text-ink" 
                    : "border-bg-border bg-bg-raised/40 text-ink-muted"
                }`}
              >
                {item.done ? (
                  <CheckSquare size={18} className="text-signal shrink-0 mt-0.5" />
                ) : (
                  <Square size={18} className="text-ink-faint shrink-0 mt-0.5" />
                )}
                <span className="text-xs font-mono leading-relaxed">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Action Bar */}
      <div className="mt-20 border-t border-bg-border pt-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-display font-semibold text-ink">Ready to explore the case studies?</p>
          <p className="text-xs text-ink-muted">View all full-stack and machine learning systems.</p>
        </div>
        <div className="flex gap-3">
          <LinkButton href="/projects" variant="primary" icon={<ArrowRight size={16} aria-hidden="true" />}>
            View All Projects
          </LinkButton>
          <LinkButton href="/contact" variant="secondary">
            Contact Me
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
