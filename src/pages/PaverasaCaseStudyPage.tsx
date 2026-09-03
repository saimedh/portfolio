import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Code2,
  Cpu,
  CheckCircle2,
  Workflow,
  Sparkles,
  MessageSquare,
  FileText,
  Bot,
  Image as ImageIcon,
  Mic,
  Globe,
  ScanText,
  Bookmark,
  ShieldCheck,
  Server,
  Terminal,
  Zap,
  Clock,
  Boxes,
  AlertCircle,
  ExternalLink
} from "lucide-react";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

interface ScreenSlot {
  id: string;
  title: string;
  category: string;
  src: string;
  description: string;
  expectedFile: string;
}

const PRODUCT_SCREENS: ScreenSlot[] = [
  {
    id: "dashboard",
    title: "1. Super App Dashboard",
    category: "Central Command",
    src: "/images/projects/paverasa/dashboard.png",
    description: "Unified entry point presenting recent workflows, quick tool launchers, active agent runs, and token consumption metrics.",
    expectedFile: "/images/projects/paverasa/dashboard.png",
  },
  {
    id: "agent-workspace",
    title: "2. AI Agent Workspace",
    category: "Standout Engine",
    src: "/images/projects/paverasa/agent-workspace.png",
    description: "High-level goal input canvas where users define target outcomes and inspect the planned execution tree before launch.",
    expectedFile: "/images/projects/paverasa/agent-workspace.png",
  },
  {
    id: "agent-execution",
    title: "3. Agent Execution View",
    category: "Live Telemetry",
    src: "/images/projects/paverasa/agent-execution.png",
    description: "Real-time streaming timeline displaying autonomous tool calls, sub-task status changes, and intermediate memory states.",
    expectedFile: "/images/projects/paverasa/agent-execution.png",
  },
  {
    id: "generated-result",
    title: "4. Generated Result & Sandbox",
    category: "Output Canvas",
    src: "/images/projects/paverasa/generated-result.png",
    description: "Interactive preview container rendering synthesized assets, sandboxed web code, and downloadable project artifacts.",
    expectedFile: "/images/projects/paverasa/generated-result.png",
  },
  {
    id: "ai-chat",
    title: "5. AI Chat & Multi-Model Switcher",
    category: "Conversation",
    src: "/images/projects/paverasa/ai-chat.png",
    description: "Multi-turn streaming chat interface with prompt memory, provider toggle (Gemini / OpenAI), and syntax-highlighted code output.",
    expectedFile: "/images/projects/paverasa/ai-chat.png",
  },
  {
    id: "website-generator",
    title: "6. Website Generator",
    category: "Creation Tool",
    src: "/images/projects/paverasa/website-generator.png",
    description: "Single-prompt landing page generator with responsive split-screen preview, Tailwind CSS scaffolding, and instant export.",
    expectedFile: "/images/projects/paverasa/website-generator.png",
  },
  {
    id: "pdf-chat",
    title: "7. PDF Chat & Document RAG",
    category: "Analysis",
    src: "/images/projects/paverasa/pdf-chat.png",
    description: "Split-pane PDF reader with semantic vector search, direct citation badges, and instant document summarization.",
    expectedFile: "/images/projects/paverasa/pdf-chat.png",
  },
  {
    id: "mobile-interface",
    title: "8. Mobile Responsive Interface",
    category: "Cross-Platform",
    src: "/images/projects/paverasa/mobile-interface.png",
    description: "Flutter mobile layout showing adaptive navigation, touch-optimized agent triggers, and responsive tool grid.",
    expectedFile: "/images/projects/paverasa/mobile-interface.png",
  },
];

const MODULES = [
  { name: "AI Agent Workspace", icon: Bot, tag: "Standout", desc: "Turns single user goals into automated multi-step execution plans." },
  { name: "AI Chat", icon: MessageSquare, tag: "Multi-Model", desc: "Streaming conversational assistant with Gemini & OpenAI routing." },
  { name: "Image Generator", icon: ImageIcon, tag: "Creative", desc: "Prompt-driven image synthesis with style presets and aspect ratios." },
  { name: "Resume Builder", icon: FileText, tag: "Career", desc: "Structured profile extractor generating ATS-optimized PDF resumes." },
  { name: "PDF Chat", icon: BookmarksIcon, tag: "RAG Engine", desc: "Upload complex PDFs to query, extract citations, and summarize." },
  { name: "Voice Assistant", icon: Mic, tag: "Audio", desc: "Hands-free speech transcription and audible conversational playback." },
  { name: "Code Generator", icon: Code2, tag: "Dev Tools", desc: "Context-aware code snippet, script, and component generation." },
  { name: "Website Generator", icon: Globe, tag: "Web Engine", desc: "Full landing page synthesis with responsive HTML/Tailwind bundles." },
  { name: "OCR Scanner", icon: ScanText, tag: "Vision", desc: "High-accuracy text extraction from invoices, receipts, and images." },
  { name: "Prompt Library", icon: Bookmark, tag: "Productivity", desc: "Curated catalog of reusable, battle-tested system prompt templates." },
  { name: "Admin Dashboard", icon: ShieldCheck, tag: "Governance", desc: "Per-user token usage, rate limits, audit logs, and provider health." },
];

function BookmarksIcon(props: React.SVGProps<SVGSVGElement>) {
  return <FileText {...(props as any)} />;
}

const AGENT_WORKFLOW_STEPS = [
  {
    num: "01",
    title: "User Goal",
    action: "User enters single natural-language objective",
    detail: 'Prompt: "Build landing page for my startup."',
    icon: Sparkles,
  },
  {
    num: "02",
    title: "AI Understands Request",
    action: "Deconstructs requirements & constraints",
    detail: "Extracts startup industry, target audience, conversion goal, and brand aesthetic.",
    icon: Cpu,
  },
  {
    num: "03",
    title: "Creates Execution Plan",
    action: "Generates multi-step dependency graph",
    detail: "5-stage orchestration: Copywriting → Layout architecture → Code → Packaging → Validation.",
    icon: Workflow,
  },
  {
    num: "04",
    title: "Selects Tools",
    action: "Dispatches internal model APIs & generators",
    detail: "Invokes Gemini API for copy, Code Generator for React/Tailwind, and Image Generator for visual assets.",
    icon: Boxes,
  },
  {
    num: "05",
    title: "Generates Output",
    action: "Synthesizes code, copy, and required files",
    detail: "Writes semantic HTML5, builds Tailwind component tree, writes CSS styling, and formats index.html.",
    icon: Terminal,
  },
  {
    num: "06",
    title: "Validates Result",
    action: "Automated syntax & layout verification",
    detail: "Performs tag integrity linting, responsive viewport validation, and asset link verification.",
    icon: CheckCircle2,
  },
  {
    num: "07",
    title: "Returns Final Result",
    action: "Delivers live sandboxed preview & export bundle",
    detail: "Presents interactive iframe preview with one-click ZIP download and GitHub export.",
    icon: Zap,
  },
];

export default function PaverasaCaseStudyPage() {
  useDocumentMeta(
    "Vedha AI — AI Productivity Super App Case Study",
    "Deep dive case study of Vedha AI: architecture, AI agent workspace, multi-model orchestration, and production engineering."
  );

  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [selectedWorkflowStep, setSelectedWorkflowStep] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const activeScreen = PRODUCT_SCREENS[activeScreenIndex];

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111827] selection:bg-[#FF5722]/15 selection:text-[#EA580C]">
      {/* Editorial Sticky Navigation Bar */}
      <nav className="sticky top-0 z-40 border-b border-[#E5E7EB] bg-[#FAFAFA]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 sm:px-8">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider text-[#4B5563] transition-colors hover:text-[#111827]"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-white px-2.5 py-1 font-mono text-[11px] text-[#4B5563] sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EA580C]" />
              Production Case Study
            </span>
            <a
              href="https://github.com/saimedh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E7EB] bg-white px-3 py-1.5 font-mono text-xs font-medium text-[#111827] shadow-sm transition-all hover:border-[#D1D5DB] hover:bg-[#F9FAFB]"
            >
              <Code2 size={13} />
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <header className="relative overflow-hidden border-b border-[#E5E7EB] bg-white py-16 sm:py-24">
        <div className="pointer-events-none absolute right-0 top-0 hidden w-1/3 opacity-30 lg:block">
          <img
            src="/images/illustrations/hero-editorial.jpg"
            alt=""
            aria-hidden="true"
            className="w-full object-cover"
          />
        </div>

        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#FF5722]/20 bg-[#FFF7ED] px-3.5 py-1.5 font-mono text-xs font-semibold text-[#EA580C]"
            >
              <Sparkles size={13} />
              One app. Multiple AI tools.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 font-display text-4xl font-bold tracking-tight text-[#111827] sm:text-6xl"
            >
              Vedha AI (formerly Paverasa AI)
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl font-medium leading-relaxed text-[#374151] sm:text-2xl"
            >
              I built an AI workspace that turns{" "}
              <span className="text-[#EA580C] underline decoration-[#FF5722]/30 decoration-2 underline-offset-4">
                one user goal into an executable workflow.
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 max-w-2xl text-base leading-relaxed text-[#6B7280]"
            >
              Instead of switching between disconnected tools for chat, document analysis, code generation, and landing pages, Vedha AI consolidates the entire creation pipeline into an autonomous, agent-driven execution engine.
            </motion.p>

            {/* Tech Stack Chips */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-2"
            >
              {[
                "Flutter",
                "FastAPI",
                "PostgreSQL",
                "Redis",
                "Gemini API",
                "OpenAI API",
                "Docker",
                "AWS",
                "Nginx",
                "GitHub Actions"
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[#E5E7EB] bg-[#F9FAFB] px-2.5 py-1 font-mono text-xs font-medium text-[#374151]"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="https://vedhai.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#FF5722] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#EA580C] hover:shadow-md active:scale-[0.98]"
              >
                Try Live Demo <ExternalLink size={16} />
              </a>
              <a
                href="#screens"
                className="inline-flex items-center gap-2 rounded-lg border border-[#D1D5DB] bg-white px-6 py-3.5 text-sm font-semibold text-[#111827] shadow-sm transition-all hover:border-[#9CA3AF] hover:bg-[#F9FAFB]"
              >
                Explore Screens <ArrowRight size={16} />
              </a>
              <a
                href="https://github.com/saimedh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#D1D5DB] bg-white px-6 py-3.5 text-sm font-semibold text-[#111827] shadow-sm transition-all hover:border-[#9CA3AF] hover:bg-[#F9FAFB]"
              >
                <Code2 size={16} />
                GitHub
              </a>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="mx-auto max-w-6xl space-y-24 px-6 py-20 sm:px-8">
        {/* ========================================================================= */}
        {/* 2. PROBLEM SECTION */}
        {/* ========================================================================= */}
        <section id="problem" className="scroll-mt-24">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#EA580C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722]" />
            01 / The Problem
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-[#111827] sm:text-4xl">
            The Fragmentation Tax of Modern AI Workflows
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#4B5563]">
            Every day, knowledge workers, developers, and students switch between 5 to 8 isolated AI tools: one for conversational chat, another for OCR scanning, a third for resume generation, and separate sites for PDF extraction and website scaffolding.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* The Fragmented Reality */}
            <div className="rounded-2xl border border-[#FECACA] bg-[#FEF2F2]/60 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-sm font-bold text-[#DC2626]">
                <AlertCircle size={18} />
                The Fragmented Workflow (Before)
              </div>
              <ul className="mt-6 space-y-4 text-sm text-[#4B5563]">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FEE2E2] font-mono text-xs font-bold text-[#DC2626]">✕</span>
                  <span><strong>8 Disjointed Browser Tabs:</strong> Context is repeatedly lost when moving data from chat to document generation tools.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FEE2E2] font-mono text-xs font-bold text-[#DC2626]">✕</span>
                  <span><strong>Subscription & Key Sprawl:</strong> Managing multiple subscriptions, credit pools, and fragmented API billing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FEE2E2] font-mono text-xs font-bold text-[#DC2626]">✕</span>
                  <span><strong>Manual Glue Work:</strong> Users must act as the manual clipboard bridge between text, code, and document pipelines.</span>
                </li>
              </ul>
            </div>

            {/* The Paverasa Solution */}
            <div className="rounded-2xl border border-[#BBF7D0] bg-[#F0FDF4]/70 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-sm font-bold text-[#16A34A]">
                <CheckCircle2 size={18} />
                The Paverasa AI Solution (After)
              </div>
              <ul className="mt-6 space-y-4 text-sm text-[#4B5563]">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] font-mono text-xs font-bold text-[#16A34A]">✓</span>
                  <span><strong>Unified Workspace Canvas:</strong> 11 essential AI productivity tools accessible under a single authenticated interface.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] font-mono text-xs font-bold text-[#16A34A]">✓</span>
                  <span><strong>Automated Goal Execution:</strong> An autonomous agent orchestrates tool chains from a single prompt goal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] font-mono text-xs font-bold text-[#16A34A]">✓</span>
                  <span><strong>Consolidated Backend:</strong> Standardized FastAPI gateway with multi-model fallback, rate limiting, and Redis caching.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. SOLUTION SECTION (11 MODULES) */}
        {/* ========================================================================= */}
        <section id="solution" className="scroll-mt-24">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#EA580C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722]" />
            02 / Solution & Tool Suite
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-[#111827] sm:text-4xl">
            A Complete AI Productivity Super App
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#4B5563]">
            Vedha AI brings together 11 essential capabilities behind a unified architecture, eliminating tool-switching while retaining high-precision specialized controls.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((mod) => {
              const Icon = mod.icon;
              const isHighlight = mod.tag === "Standout";
              return (
                <div
                  key={mod.name}
                  className={`group relative rounded-xl border p-6 transition-all ${
                    isHighlight
                      ? "border-[#FF5722] bg-[#FFF7ED]/50 shadow-sm"
                      : "border-[#E5E7EB] bg-white hover:border-[#D1D5DB] hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                        isHighlight ? "bg-[#FF5722] text-white" : "bg-[#F3F4F6] text-[#111827]"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <span
                      className={`font-mono text-[11px] font-semibold uppercase tracking-wider ${
                        isHighlight ? "text-[#EA580C]" : "text-[#6B7280]"
                      }`}
                    >
                      {mod.tag}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-[#111827]">
                    {mod.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#6B7280]">
                    {mod.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. STANDOUT FEATURE — AI AGENT WORKSPACE */}
        {/* ========================================================================= */}
        <section
          id="agent-workspace"
          className="relative scroll-mt-24 overflow-hidden rounded-3xl border border-[#FF5722]/30 bg-gradient-to-br from-[#FFF7ED] via-white to-white p-8 sm:p-12 shadow-sm"
        >
          <div className="pointer-events-none absolute right-0 top-0 hidden w-1/3 opacity-20 lg:block">
            <img
              src="/images/illustrations/ai-system-editorial.jpg"
              alt=""
              aria-hidden="true"
              className="w-full object-cover"
            />
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF5722]/30 bg-white px-3 py-1 font-mono text-xs font-bold text-[#EA580C]">
              <Sparkles size={13} />
              Standout Core Feature
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold text-[#111827] sm:text-5xl">
              AI Agent Workspace: From Goal to Execution
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4B5563]">
              Unlike basic chat completions, the AI Agent Workspace functions as an autonomous project manager. It digests an end goal, synthesizes a multi-step dependency tree, invokes specialized generation tools, and validates the output before returning the finished artifact.
            </p>
          </div>

          {/* Concrete Walkthrough Example */}
          <div className="mt-12 rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E7EB] pb-6">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#EA580C]">
                  Real-World Execution Scenario
                </span>
                <h4 className="mt-1 text-xl font-bold text-[#111827]">
                  User Goal: &ldquo;Build landing page for my startup.&rdquo;
                </h4>
              </div>
              <span className="rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-1 font-mono text-xs text-[#4B5563]">
                7 Autonomous Stages
              </span>
            </div>

            {/* Interactive Timeline Tabs */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {AGENT_WORKFLOW_STEPS.map((step, idx) => {
                const StepIcon = step.icon;
                const isSelected = selectedWorkflowStep === idx;
                return (
                  <button
                    key={step.num}
                    onClick={() => setSelectedWorkflowStep(idx)}
                    className={`flex flex-col rounded-xl border p-4 text-left transition-all ${
                      isSelected
                        ? "border-[#FF5722] bg-[#FFF7ED] shadow-sm"
                        : "border-[#E5E7EB] bg-[#FAFAFA] hover:border-[#D1D5DB] hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#EA580C]">
                        {step.num}
                      </span>
                      <StepIcon
                        size={16}
                        className={isSelected ? "text-[#FF5722]" : "text-[#9CA3AF]"}
                      />
                    </div>
                    <span className="mt-2 font-display text-sm font-bold text-[#111827]">
                      {step.title}
                    </span>
                    <span className="mt-1 text-[11px] text-[#6B7280]">
                      {step.action}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Step Deep Dive Box */}
            <div className="mt-6 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-[#EA580C]">
                  Stage {AGENT_WORKFLOW_STEPS[selectedWorkflowStep].num} Telemetry
                </span>
                <span className="font-mono text-xs text-[#6B7280]">
                  status: verified_pass
                </span>
              </div>
              <h5 className="mt-2 text-base font-bold text-[#111827]">
                {AGENT_WORKFLOW_STEPS[selectedWorkflowStep].title} — {AGENT_WORKFLOW_STEPS[selectedWorkflowStep].action}
              </h5>
              <p className="mt-2 font-mono text-xs leading-relaxed text-[#374151]">
                {AGENT_WORKFLOW_STEPS[selectedWorkflowStep].detail}
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. ARCHITECTURE SECTION */}
        {/* ========================================================================= */}
        <section id="architecture" className="scroll-mt-24">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#EA580C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722]" />
            04 / Systems Architecture
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-[#111827] sm:text-4xl">
            Multi-Tier Orchestration & Infrastructure
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#4B5563]">
            Designed for high concurrency and resilience. The architecture decouples the cross-platform frontend from third-party LLM providers via a centralized FastAPI gateway equipped with Redis caching, task queues, and circuit breakers.
          </p>

          {/* Architecture Visual Diagram */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-10 shadow-sm">
            <div className="flex flex-col gap-6">
              {/* Tier 1: Client */}
              <div className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-5">
                <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
                  <span className="font-mono text-xs font-bold text-[#111827]">
                    01. CLIENT PRESENTATION LAYER
                  </span>
                  <span className="font-mono text-xs text-[#6B7280]">Flutter Web / Desktop / Mobile</span>
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-lg border border-[#E5E7EB] bg-white p-3 font-mono text-xs text-[#374151]">
                    Reactive State Management (Bloc / Provider)
                  </div>
                  <div className="rounded-lg border border-[#E5E7EB] bg-white p-3 font-mono text-xs text-[#374151]">
                    WebSocket Real-Time Stream Consumer
                  </div>
                  <div className="rounded-lg border border-[#E5E7EB] bg-white p-3 font-mono text-xs text-[#374151]">
                    Cross-Platform Responsive Viewports
                  </div>
                </div>
              </div>

              {/* Data Flow Indicator */}
              <div className="flex justify-center text-[#9CA3AF]">
                <ArrowRight size={20} className="rotate-90 text-[#EA580C]" />
              </div>

              {/* Tier 2: API Gateway & Orchestrator */}
              <div className="rounded-xl border border-[#FF5722]/30 bg-[#FFF7ED]/40 p-5">
                <div className="flex items-center justify-between border-b border-[#FF5722]/20 pb-3">
                  <span className="font-mono text-xs font-bold text-[#EA580C]">
                    02. BACKEND API GATEWAY & ORCHESTRATION LAYER
                  </span>
                  <span className="font-mono text-xs text-[#6B7280]">FastAPI (Async Python)</span>
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-4">
                  <div className="rounded-lg border border-[#E5E7EB] bg-white p-3 font-mono text-xs text-[#374151]">
                    REST & WebSockets
                  </div>
                  <div className="rounded-lg border border-[#E5E7EB] bg-white p-3 font-mono text-xs text-[#374151]">
                    JWT Auth & RBAC
                  </div>
                  <div className="rounded-lg border border-[#E5E7EB] bg-white p-3 font-mono text-xs text-[#374151]">
                    Agent Tool Dispatcher
                  </div>
                  <div className="rounded-lg border border-[#E5E7EB] bg-white p-3 font-mono text-xs text-[#374151]">
                    Provider Circuit Breaker
                  </div>
                </div>
              </div>

              {/* Data Flow Indicator */}
              <div className="flex justify-center text-[#9CA3AF]">
                <ArrowRight size={20} className="rotate-90 text-[#EA580C]" />
              </div>

              {/* Tier 3: AI Inference, Storage & Cache */}
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-5">
                  <span className="font-mono text-xs font-bold text-[#111827]">
                    03. AI INFERENCE ENGINES
                  </span>
                  <div className="mt-3 space-y-2 font-mono text-xs text-[#374151]">
                    <div className="rounded-lg border border-[#E5E7EB] bg-white p-2.5">Gemini API (High context, multimodal)</div>
                    <div className="rounded-lg border border-[#E5E7EB] bg-white p-2.5">OpenAI API (Code synthesis, tool use)</div>
                    <div className="rounded-lg border border-[#E5E7EB] bg-white p-2.5">Automated Multi-Model Fallback</div>
                  </div>
                </div>

                <div className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-5">
                  <span className="font-mono text-xs font-bold text-[#111827]">
                    04. DATA & CACHE TIER
                  </span>
                  <div className="mt-3 space-y-2 font-mono text-xs text-[#374151]">
                    <div className="rounded-lg border border-[#E5E7EB] bg-white p-2.5">PostgreSQL (Relational schemas)</div>
                    <div className="rounded-lg border border-[#E5E7EB] bg-white p-2.5">Redis (Rate limits, token cache)</div>
                    <div className="rounded-lg border border-[#E5E7EB] bg-white p-2.5">Object Storage (PDFs, OCR scans)</div>
                  </div>
                </div>

                <div className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-5">
                  <span className="font-mono text-xs font-bold text-[#111827]">
                    05. INFRASTRUCTURE & OPS
                  </span>
                  <div className="mt-3 space-y-2 font-mono text-xs text-[#374151]">
                    <div className="rounded-lg border border-[#E5E7EB] bg-white p-2.5">Docker Containerization</div>
                    <div className="rounded-lg border border-[#E5E7EB] bg-white p-2.5">GitHub Actions CI/CD Pipeline</div>
                    <div className="rounded-lg border border-[#E5E7EB] bg-white p-2.5">AWS EC2 + Nginx Reverse Proxy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. PRODUCT SCREENS (SCREENSHOT GALLERY) */}
        {/* ========================================================================= */}
        <section id="screens" className="scroll-mt-24">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#EA580C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722]" />
            05 / Product Screens & Evidence
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-[#111827] sm:text-4xl">
            Real Product Interface Evidence
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#4B5563]">
            Explore the core screens of Vedha AI. Every frame is dedicated strictly to real capture evidence—never AI-generated UI mockups or fabricated dashboards.
          </p>

          {/* Interactive Screen Selector Tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            {PRODUCT_SCREENS.map((screen, idx) => (
              <button
                key={screen.id}
                onClick={() => setActiveScreenIndex(idx)}
                className={`rounded-lg px-3.5 py-2 font-mono text-xs font-medium transition-all ${
                  activeScreenIndex === idx
                    ? "bg-[#111827] text-white shadow-sm"
                    : "border border-[#E5E7EB] bg-white text-[#4B5563] hover:border-[#D1D5DB] hover:bg-[#F9FAFB]"
                }`}
              >
                {screen.title}
              </button>
            ))}
          </div>

          {/* High-Fidelity Capture Frame */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-[#E5E7EB] bg-[#F9FAFB] px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#EF4444]/70" />
                <span className="h-3 w-3 rounded-full bg-[#F59E0B]/70" />
                <span className="h-3 w-3 rounded-full bg-[#10B981]/70" />
                <span className="ml-2 font-mono text-xs text-[#6B7280]">
                  paverasa-app // {activeScreen.id}
                </span>
              </div>
              <span className="font-mono text-xs font-medium text-[#EA580C]">
                {activeScreen.category}
              </span>
            </div>

            {/* Screen Image Container or Real Screenshot Slot */}
            <div className="relative min-h-[380px] bg-[#F3F4F6] sm:min-h-[480px]">
              {!failedImages[activeScreen.id] ? (
                <img
                  src={activeScreen.src}
                  alt={activeScreen.title}
                  onError={() => handleImageError(activeScreen.id)}
                  className="w-full object-contain max-h-[560px]"
                />
              ) : null}

              {/* Graceful Fallback if Real Capture is Pending Drop-in */}
              {failedImages[activeScreen.id] && (
                <div className="flex min-h-[380px] flex-col items-center justify-center p-8 text-center sm:min-h-[480px]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white text-[#9CA3AF] shadow-sm">
                    <ImageIcon size={32} />
                  </div>
                  <h4 className="mt-4 font-mono text-base font-bold text-[#111827]">
                    REAL SCREENSHOT CAPTURE SLOT
                  </h4>
                  <p className="mt-2 max-w-md text-sm text-[#6B7280]">
                    Drop your authentic project screenshot into:
                  </p>
                  <code className="mt-2 rounded bg-[#E5E7EB] px-3 py-1 font-mono text-xs font-semibold text-[#111827]">
                    {activeScreen.expectedFile}
                  </code>
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#FED7AA] bg-[#FFF7ED] px-3 py-1 font-mono text-xs text-[#C2410C]">
                    <ShieldCheck size={13} />
                    Verified Evidence Policy: No Fake UI Mockups
                  </div>
                </div>
              )}
            </div>

            {/* Caption & Metadata Footer */}
            <div className="border-t border-[#E5E7EB] bg-white p-5 sm:p-6">
              <h4 className="font-display text-lg font-bold text-[#111827]">
                {activeScreen.title}
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-[#4B5563]">
                {activeScreen.description}
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. TECHNICAL CHALLENGES */}
        {/* ========================================================================= */}
        <section id="challenges" className="scroll-mt-24">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#EA580C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722]" />
            06 / Engineering Challenges
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-[#111827] sm:text-4xl">
            Engineering Problems & Architectural Solutions
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#4B5563]">
            Building an all-in-one multi-model application exposed significant concurrency, latency, and consistency challenges. Here is how they were solved.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Challenge 1 */}
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-8 shadow-sm">
              <div className="font-mono text-xs font-bold text-[#EA580C]">
                CHALLENGE 01
              </div>
              <h3 className="mt-2 font-display text-xl font-bold text-[#111827]">
                Multi-Model API Normalization & Failover
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                <strong>Problem:</strong> Different AI providers (Gemini API vs. OpenAI API) utilize incompatible request schemas, streaming event protocols, and token payload structures.
              </p>
              <div className="mt-4 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-xs leading-relaxed text-[#374151]">
                <strong>Architectural Solution:</strong> Implemented a centralized Adapter Pattern in FastAPI. Incoming requests hit a normalized schema contract; internal adapters translate requests, normalize streaming chunk events into Server-Sent Events (SSE), and execute automatic failover if an upstream provider encounters a 429 or 503 error.
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-8 shadow-sm">
              <div className="font-mono text-xs font-bold text-[#EA580C]">
                CHALLENGE 02
              </div>
              <h3 className="mt-2 font-display text-xl font-bold text-[#111827]">
                Long-Running Background Tasks & Real-Time Sync
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                <strong>Problem:</strong> Agent workflows (such as website generation and multi-step research) take 15 to 45 seconds to complete, causing standard HTTP connections to drop or timeout.
              </p>
              <div className="mt-4 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-xs leading-relaxed text-[#374151]">
                <strong>Architectural Solution:</strong> Decoupled execution using asynchronous worker queues and Redis pub/sub. The frontend establishes a persistent WebSocket connection that receives real-time progress events as each sub-task in the execution plan completes.
              </div>
            </div>

            {/* Challenge 3 */}
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-8 shadow-sm">
              <div className="font-mono text-xs font-bold text-[#EA580C]">
                CHALLENGE 03
              </div>
              <h3 className="mt-2 font-display text-xl font-bold text-[#111827]">
                Redis Caching & Sliding-Window Rate Limiting
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                <strong>Problem:</strong> Repeated identical prompts and rogue queries risk exhausting API token quotas and spiking operational cloud costs.
              </p>
              <div className="mt-4 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-xs leading-relaxed text-[#374151]">
                <strong>Architectural Solution:</strong> Implemented Redis-based prompt hash caching for deterministic tasks (e.g., OCR text parsing and summary templates). Added token-bucket sliding-window rate limiters per user account to prevent API abuse.
              </div>
            </div>

            {/* Challenge 4 */}
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-8 shadow-sm">
              <div className="font-mono text-xs font-bold text-[#EA580C]">
                CHALLENGE 04
              </div>
              <h3 className="mt-2 font-display text-xl font-bold text-[#111827]">
                Secure Authentication & Role-Based Quota Controls
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                <strong>Problem:</strong> Multi-tenant super app environments require secure session handling across Flutter mobile and web clients without exposing API keys.
              </p>
              <div className="mt-4 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-xs leading-relaxed text-[#374151]">
                <strong>Architectural Solution:</strong> Built JWT-based authentication with refresh token rotation and role-based access control (RBAC). All upstream AI credentials remain strictly confined within backend environment variables, never leaking to the client.
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. RESULTS & EVIDENCE */}
        {/* ========================================================================= */}
        <section id="results" className="scroll-mt-24">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#EA580C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722]" />
            07 / Results & Evidence
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-[#111827] sm:text-4xl">
            Measurable Evidence & Verified Outcomes
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#4B5563]">
            In strict accordance with evidence-based developer portfolio integrity, metrics are reported only where proven. Placeholders indicate live operational targets.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 text-center shadow-sm">
              <span className="font-mono text-2xl font-bold text-[#111827] sm:text-3xl">
                11
              </span>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-[#6B7280]">
                Features Shipped
              </p>
              <span className="mt-2 inline-block rounded bg-[#DCFCE7] px-2 py-0.5 font-mono text-[10px] font-semibold text-[#16A34A]">
                Shipped in MVP
              </span>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 text-center shadow-sm">
              <span className="font-mono text-2xl font-bold text-[#111827] sm:text-3xl">
                Live MVP
              </span>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-[#6B7280]">
                Deployment Status
              </p>
              <span className="mt-2 inline-block rounded bg-[#DBEAFE] px-2 py-0.5 font-mono text-[10px] font-semibold text-[#1D4ED8]">
                AWS + Docker
              </span>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 text-center shadow-sm">
              <span className="font-mono text-xl font-bold text-[#EA580C] sm:text-2xl">
                [Users]
              </span>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-[#6B7280]">
                Active Users
              </p>
              <span className="mt-2 inline-block rounded bg-[#F3F4F6] px-2 py-0.5 font-mono text-[10px] font-semibold text-[#6B7280]">
                Pilot Cohort
              </span>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 text-center shadow-sm">
              <span className="font-mono text-xl font-bold text-[#EA580C] sm:text-2xl">
                [Requests]
              </span>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-[#6B7280]">
                Processed Runs
              </p>
              <span className="mt-2 inline-block rounded bg-[#F3F4F6] px-2 py-0.5 font-mono text-[10px] font-semibold text-[#6B7280]">
                In Benchmarking
              </span>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 text-center shadow-sm">
              <span className="font-mono text-xl font-bold text-[#EA580C] sm:text-2xl">
                &lt;800ms
              </span>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-[#6B7280]">
                Gateway Latency
              </p>
              <span className="mt-2 inline-block rounded bg-[#FEF3C7] px-2 py-0.5 font-mono text-[10px] font-semibold text-[#D97706]">
                Target Benchmark
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. WHAT I LEARNED */}
        {/* ========================================================================= */}
        <section id="learnings" className="scroll-mt-24">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#EA580C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722]" />
            08 / Key Learnings
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-[#111827] sm:text-4xl">
            Engineering Insights & Takeaways
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#4B5563]">
            Key lessons distilled from moving from isolated prototype scripts to a consolidated, production-ready multi-tool application.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF7ED] text-[#EA580C]">
                <Workflow size={18} />
              </div>
              <h4 className="mt-4 font-display text-base font-bold text-[#111827]">
                AI Orchestration
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-[#6B7280]">
                Prompting is only 10% of the battle. The core challenge is state tracking, sub-task verification, and handling non-deterministic model outputs with strict parsing guardrails.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF7ED] text-[#EA580C]">
                <Server size={18} />
              </div>
              <h4 className="mt-4 font-display text-base font-bold text-[#111827]">
                API Architecture
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-[#6B7280]">
                Designing unified REST & WebSocket contracts early protects frontend clients from model provider API deprecations, schema alterations, and rate limit shifts.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF7ED] text-[#EA580C]">
                <Boxes size={18} />
              </div>
              <h4 className="mt-4 font-display text-base font-bold text-[#111827]">
                Full-Stack Development
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-[#6B7280]">
                Combining Flutter&rsquo;s cross-platform UI flexibility with FastAPI&rsquo;s asynchronous speed provided seamless desktop, web, and mobile responsiveness.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF7ED] text-[#EA580C]">
                <Globe size={18} />
              </div>
              <h4 className="mt-4 font-display text-base font-bold text-[#111827]">
                Cloud Deployment
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-[#6B7280]">
                Using Docker containers behind Nginx reverse proxy simplifies SSL termination, WebSocket upgrade routing, and cloud deployment reproducibility on AWS.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF7ED] text-[#EA580C]">
                <Clock size={18} />
              </div>
              <h4 className="mt-4 font-display text-base font-bold text-[#111827]">
                Background Processing
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-[#6B7280]">
                Heavy AI synthesis must never block the main HTTP request loop. Asynchronous queues and streaming protocols are mandatory for reliable user feedback.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF7ED] text-[#EA580C]">
                <ShieldCheck size={18} />
              </div>
              <h4 className="mt-4 font-display text-base font-bold text-[#111827]">
                Production Engineering
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-[#6B7280]">
                Production AI engineering demands defensive architecture: automatic retries with exponential backoff, circuit breakers, and Redis rate limiters.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. FINAL CTA SECTION */}
        {/* ========================================================================= */}
        <section
          id="cta"
          className="relative scroll-mt-24 overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white p-8 sm:p-14 text-center shadow-sm"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 opacity-20">
            <img
              src="/images/illustrations/contact-connectivity-editorial.jpg"
              alt=""
              aria-hidden="true"
              className="h-48 w-auto object-cover"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF5722]/30 bg-[#FFF7ED] px-3.5 py-1 font-mono text-xs font-semibold text-[#EA580C]">
              <Sparkles size={13} />
              Experience the Architecture
            </div>

            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#111827] sm:text-5xl">
              Want to see how it works?
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#4B5563] sm:text-lg">
              Explore the backend orchestration codebase, inspect the multi-model architecture, or request a walk-through demonstration.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://vedhai.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#FF5722] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#EA580C] hover:shadow-md active:scale-[0.98]"
              >
                Try Vedha AI Live Demo <ExternalLink size={16} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-[#D1D5DB] bg-white px-7 py-3.5 text-sm font-semibold text-[#111827] shadow-sm transition-all hover:border-[#9CA3AF] hover:bg-[#F9FAFB]"
              >
                Start a Conversation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
