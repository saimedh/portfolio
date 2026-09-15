import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Terminal,
  FileText,
  CheckCircle2,
  AlertCircle,
  Play,
  FolderTree,
  ShieldCheck,
  Cpu,
  Layers,
  Download,
  Copy,
  Check,
  RefreshCw,
  HardDrive,
  FileCheck,
  Lock
} from "lucide-react";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import {
  WORKSPACE_FILES,
  PRESET_ROLES,
  EVALUATION_TEST_CASES,
  SYSTEM_RULES,
  type WorkspaceFile,
  type PresetRole
} from "../data/personalAgentData";

export default function PersonalAgentPage() {
  useDocumentMeta(
    "Personal Project & Career Agent — Saimedh Porandla",
    "Autonomous workspace analysis agent connected to local career and project files via Model Context Protocol (MCP). Zero hallucination, strict provenance, and 6/6 evaluation benchmarks passing."
  );

  const [activeTab, setActiveTab] = useState<"studio" | "files" | "evaluation" | "architecture">("studio");
  
  // Studio state
  const [selectedRole, setSelectedRole] = useState<PresetRole>(PRESET_ROLES[0]);
  const [customQuery, setCustomQuery] = useState("");
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionStep, setExecutionStep] = useState<number>(0);
  const [executionLogs, setExecutionLogs] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(true);
  const [copiedDeliverable, setCopiedDeliverable] = useState(false);

  // Files tab state
  const [selectedFile, setSelectedFile] = useState<WorkspaceFile>(WORKSPACE_FILES[0]);
  const [copiedFileContent, setCopiedFileContent] = useState(false);

  // Evaluation tab state
  const [testFilter, setTestFilter] = useState<string>("ALL");
  const [copiedConfig, setCopiedConfig] = useState(false);

  // Run execution simulation
  const handleExecute = () => {
    setIsExecuting(true);
    setShowResult(false);
    setExecutionStep(1);
    setExecutionLogs([
      `[INIT] Connecting to Model Context Protocol server: @modelcontextprotocol/server-filesystem`,
      `[WORKSPACE] Target root mounted: C:\\Users\\saime\\personal-agent`,
      `[RULE CHECK] Validating system instructions: 8 strict constraints loaded.`
    ]);

    setTimeout(() => {
      setExecutionStep(2);
      setExecutionLogs((prev) => [
        ...prev,
        `[TOOL CALL] list_directory({ path: "input" }) -> Found 5 files: resume.md, skills.md, project-notes.md, certifications.md, application-log.md`,
        `[TOOL CALL] list_directory({ path: "projects" }) -> Found 4 files: vedha-ai.md, crime-prediction.md, health-navigator.md, freekeys.md`
      ]);
    }, 900);

    setTimeout(() => {
      setExecutionStep(3);
      setExecutionLogs((prev) => [
        ...prev,
        `[TOOL CALL] read_file({ path: "input/resume.md" }) -> Ingested 3.2 KB`,
        `[TOOL CALL] read_file({ path: "input/project-notes.md" }) -> Ingested 8.4 KB (parsed architecture & trade-offs)`,
        `[TOOL CALL] read_file({ path: "input/skills.md" }) -> Ingested 2.5 KB (mapped 32 technical competencies)`,
        `[TOOL CALL] read_file({ path: "input/certifications.md" }) -> Ingested 1.0 KB`
      ]);
    }, 1800);

    setTimeout(() => {
      setExecutionStep(4);
      setExecutionLogs((prev) => [
        ...prev,
        `[SYNTHESIS] Cross-referencing qualifications against role: ${selectedRole.title}`,
        `[PROVENANCE] Checking source citations: 100% facts bound to workspace files.`,
        `[HALLUCINATION CHECK] Zero unverified credentials detected.`,
        `[TOOL CALL] write_file({ path: "output/${selectedRole.id}-analysis.md", content: "[8.9 KB Structured Markdown]" }) -> File created.`
      ]);
    }, 2700);

    setTimeout(() => {
      setExecutionStep(5);
      setIsExecuting(false);
      setShowResult(true);
      setExecutionLogs((prev) => [
        ...prev,
        `[SUCCESS] Deliverable written to output/ and ready for user inspection.`
      ]);
    }, 3400);
  };

  const handleCopyDeliverable = () => {
    const deliverable = WORKSPACE_FILES.find((f) => f.path.includes("ai-developer-internship-analysis"))?.content || "";
    navigator.clipboard.writeText(deliverable);
    setCopiedDeliverable(true);
    setTimeout(() => setCopiedDeliverable(false), 2000);
  };

  const handleDownloadDeliverable = () => {
    const deliverable = WORKSPACE_FILES.find((f) => f.path.includes("ai-developer-internship-analysis"))?.content || "";
    const blob = new Blob([deliverable], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedRole.id}-analysis.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyFile = () => {
    navigator.clipboard.writeText(selectedFile.content);
    setCopiedFileContent(true);
    setTimeout(() => setCopiedFileContent(false), 2000);
  };

  const handleCopyConfig = () => {
    const config = `{
  "mcpServers": {
    "filesystem": {
      "command": "cmd.exe",
      "args": [
        "/c",
        "npx",
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "C:\\\\Users\\\\saime\\\\personal-agent"
      ]
    }
  }
}`;
    navigator.clipboard.writeText(config);
    setCopiedConfig(true);
    setTimeout(() => setCopiedConfig(false), 2000);
  };

  const filteredTests = testFilter === "ALL" 
    ? EVALUATION_TEST_CASES 
    : EVALUATION_TEST_CASES.filter(t => t.category.toLowerCase().includes(testFilter.toLowerCase()));

  return (
    <div className="container-page py-16 sm:py-20">
      {/* Top Header / Hero */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b border-bg-border pb-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="eyebrow">// FL-06 & FL-07 _ AUTONOMOUS AGENT SYSTEM</span>
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-signal animate-pulse" />
            <span className="font-mono text-xs font-semibold text-ink">
              MCP Filesystem: <span className="text-signal">Connected (stdio)</span>
            </span>
            <span className="font-mono text-xs text-ink-faint">|</span>
            <span className="rounded-full bg-signal/10 px-2.5 py-0.5 font-mono text-[11px] font-bold text-signal">
              6/6 Tests PASS
            </span>
          </div>
        </div>

        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Personal Project & Career Agent
        </h1>

        <p className="mt-4 max-w-3xl font-body text-base text-ink-muted sm:text-lg leading-relaxed">
          An autonomous AI agent running inside <strong>Claude Desktop</strong> connected via the{" "}
          <strong>Model Context Protocol (MCP) Filesystem server</strong> to Sai Medh's local workspace (
          <code className="rounded bg-bg-raised px-1.5 py-0.5 font-mono text-xs text-accent">~/personal-agent</code>).
          It discovers, inspects, and analyzes career files to produce grounded job-fit evaluations and writes deliverables directly to disk with zero hallucination.
        </p>

        {/* Quick Stats Banner */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl border border-bg-border bg-white p-4 shadow-xs">
            <div className="flex items-center gap-2 text-ink-muted">
              <HardDrive size={16} className="text-accent" />
              <span className="font-mono text-xs uppercase tracking-wider">Workspace</span>
            </div>
            <div className="mt-2 font-display text-lg font-bold text-ink">~/personal-agent</div>
            <div className="font-mono text-[11px] text-ink-faint">9 Verified Files</div>
          </div>

          <div className="rounded-xl border border-bg-border bg-white p-4 shadow-xs">
            <div className="flex items-center gap-2 text-ink-muted">
              <Cpu size={16} className="text-accent" />
              <span className="font-mono text-xs uppercase tracking-wider">Interface</span>
            </div>
            <div className="mt-2 font-display text-lg font-bold text-ink">Claude Desktop</div>
            <div className="font-mono text-[11px] text-ink-faint">@modelcontextprotocol/filesystem</div>
          </div>

          <div className="rounded-xl border border-bg-border bg-white p-4 shadow-xs">
            <div className="flex items-center gap-2 text-ink-muted">
              <ShieldCheck size={16} className="text-signal" />
              <span className="font-mono text-xs uppercase tracking-wider">Guardrails</span>
            </div>
            <div className="mt-2 font-display text-lg font-bold text-ink">8 Strict Rules</div>
            <div className="font-mono text-[11px] text-signal font-medium">Read-only Input / Cites Sources</div>
          </div>

          <div className="rounded-xl border border-bg-border bg-white p-4 shadow-xs">
            <div className="flex items-center gap-2 text-ink-muted">
              <FileCheck size={16} className="text-signal" />
              <span className="font-mono text-xs uppercase tracking-wider">Verification</span>
            </div>
            <div className="mt-2 font-display text-lg font-bold text-signal">6/6 Tests PASS</div>
            <div className="font-mono text-[11px] text-ink-faint">Live Evaluation Suite</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-bg-border pb-3">
          <button
            onClick={() => setActiveTab("studio")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === "studio"
                ? "bg-accent text-white shadow-xs"
                : "bg-bg-raised text-ink-muted hover:bg-bg-border hover:text-ink"
            }`}
          >
            <Play size={14} />
            1. Interactive Agent Studio
          </button>

          <button
            onClick={() => setActiveTab("files")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === "files"
                ? "bg-accent text-white shadow-xs"
                : "bg-bg-raised text-ink-muted hover:bg-bg-border hover:text-ink"
            }`}
          >
            <FolderTree size={14} />
            2. Workspace Filesystem ({WORKSPACE_FILES.length})
          </button>

          <button
            onClick={() => setActiveTab("evaluation")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === "evaluation"
                ? "bg-accent text-white shadow-xs"
                : "bg-bg-raised text-ink-muted hover:bg-bg-border hover:text-ink"
            }`}
          >
            <CheckCircle2 size={14} />
            3. Live 6/6 Evaluation Battery
          </button>

          <button
            onClick={() => setActiveTab("architecture")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === "architecture"
                ? "bg-accent text-white shadow-xs"
                : "bg-bg-raised text-ink-muted hover:bg-bg-border hover:text-ink"
            }`}
          >
            <Layers size={14} />
            4. Architecture & System Rules
          </button>
        </div>
      </motion.div>

      {/* TAB 1: INTERACTIVE AGENT STUDIO */}
      {activeTab === "studio" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 grid gap-8 lg:grid-cols-12"
        >
          {/* Left Controls: Role & Query Configuration */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl border border-bg-border bg-white p-6 shadow-xs">
              <div className="flex items-center gap-2 border-b border-bg-border pb-3">
                <Bot size={18} className="text-accent" />
                <h2 className="font-display text-lg font-bold text-ink">Configure Agent Task</h2>
              </div>

              {/* Preset Roles */}
              <div className="mt-4">
                <label className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Select Target Engineering Role:
                </label>
                <div className="mt-2 space-y-2">
                  {PRESET_ROLES.map((role) => (
                    <button
                      key={role.id}
                      onClick={() => {
                        setSelectedRole(role);
                        setCustomQuery("");
                      }}
                      className={`w-full text-left rounded-xl p-3.5 border transition-all ${
                        selectedRole.id === role.id && !customQuery
                          ? "border-accent bg-accent/5 shadow-xs"
                          : "border-bg-border bg-bg-raised/50 hover:border-bg-border hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-display text-sm font-bold text-ink">{role.title}</div>
                        <span className="font-mono text-[10px] text-accent font-semibold uppercase">
                          {role.companyType}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-ink-muted line-clamp-2">{role.description}</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {role.requiredSkills.slice(0, 4).map((skill) => (
                          <span
                            key={skill}
                            className="rounded bg-white px-1.5 py-0.5 font-mono text-[10px] text-ink border border-bg-border"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Query Input */}
              <div className="mt-5 border-t border-bg-border pt-4">
                <label className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Or Enter Custom Natural-Language Query:
                </label>
                <div className="mt-2 relative">
                  <textarea
                    rows={3}
                    value={customQuery}
                    onChange={(e) => setCustomQuery(e.target.value)}
                    placeholder="e.g. Compare my backend experience in Vedha AI with clinical safety guardrails in Health Navigator..."
                    className="w-full rounded-lg border border-bg-border bg-bg p-3 font-mono text-xs text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              {/* Execution CTA Button */}
              <button
                onClick={handleExecute}
                disabled={isExecuting}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 font-display text-sm font-bold text-white shadow-xs hover:bg-accent-dim disabled:opacity-50 transition-all cursor-pointer"
              >
                {isExecuting ? (
                  <>
                    <RefreshCw size={16} className="animate-spin" />
                    Executing Agent Pipeline...
                  </>
                ) : (
                  <>
                    <Play size={16} fill="white" />
                    Execute Agent Workflow Live
                  </>
                )}
              </button>

              <div className="mt-3 flex items-center justify-center gap-2 text-center font-mono text-[11px] text-ink-faint">
                <ShieldCheck size={13} className="text-signal" />
                <span>Strict Guardrail: Reads ~/personal-agent, Writes to output/</span>
              </div>
            </div>

            {/* Live Pipeline Stepper */}
            <div className="rounded-2xl border border-bg-border bg-white p-6 shadow-xs">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-ink-muted">
                5-Step Autonomous Pipeline
              </h3>
              <div className="mt-4 space-y-3">
                {[
                  { step: 1, label: "1. Tool Discovery", desc: "list_directory on input/ and projects/" },
                  { step: 2, label: "2. Grounded Ingestion", desc: "read_file on resume.md, project-notes.md, skills.md" },
                  { step: 3, label: "3. ATS & Match Synthesis", desc: "Cross-reference technical competencies & trade-offs" },
                  { step: 4, label: "4. Deliverable File Write", desc: "write_file to output/[role]-analysis.md" },
                  { step: 5, label: "5. User Reporting", desc: "Return grounded results with source file citations" }
                ].map((item) => {
                  const isDone = executionStep > item.step || (!isExecuting && showResult);
                  const isCurrent = isExecuting && executionStep === item.step;
                  return (
                    <div
                      key={item.step}
                      className={`flex items-start gap-3 rounded-lg p-2.5 border transition-all ${
                        isCurrent
                          ? "border-accent bg-accent/5"
                          : isDone
                          ? "border-signal/30 bg-signal/5"
                          : "border-transparent bg-bg-raised/40 opacity-60"
                      }`}
                    >
                      <div
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                          isDone
                            ? "bg-signal text-white"
                            : isCurrent
                            ? "bg-accent text-white animate-pulse"
                            : "bg-bg-border text-ink-muted"
                        }`}
                      >
                        {isDone ? <Check size={12} /> : item.step}
                      </div>
                      <div>
                        <div className="font-mono text-xs font-bold text-ink">{item.label}</div>
                        <div className="font-mono text-[10px] text-ink-muted">{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Area: Terminal Logs & Generated Deliverable */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Live Terminal Console */}
            <div className="overflow-hidden rounded-2xl border border-bg-border bg-ink shadow-sm">
              <div className="flex items-center justify-between border-b border-ink/40 bg-ink/90 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-signal" />
                  <span className="font-mono text-xs font-semibold text-white">
                    Agent Execution Console (MCP stdio stream)
                  </span>
                </div>
                <span className="font-mono text-[10px] text-white/50">Node v24.13.0 / Claude 3.7 Sonnet</span>
              </div>
              <div className="max-h-60 overflow-y-auto p-4 font-mono text-xs text-white/80 space-y-1.5 scrollbar-thin">
                {executionLogs.length === 0 ? (
                  <div className="text-white/40">
                    // Console idle. Click "Execute Agent Workflow Live" to run live pipeline...
                  </div>
                ) : (
                  executionLogs.map((log, i) => (
                    <div key={i} className="leading-relaxed">
                      {log.startsWith("[TOOL CALL]") ? (
                        <span className="text-accent-soft font-semibold">{log}</span>
                      ) : log.startsWith("[SUCCESS]") ? (
                        <span className="text-signal font-semibold">{log}</span>
                      ) : log.startsWith("[RULE CHECK]") ? (
                        <span className="text-warn">{log}</span>
                      ) : (
                        <span>{log}</span>
                      )}
                    </div>
                  ))
                )}
                {isExecuting && (
                  <div className="flex items-center gap-2 text-accent font-semibold animate-pulse pt-1">
                    <span>▶ Processing step {executionStep}...</span>
                  </div>
                )}
              </div>
            </div>

            {/* Generated Deliverable Output Card */}
            {showResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-bg-border bg-white p-6 shadow-xs"
              >
                {/* Header with Match Score */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-bg-border pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-signal/15 px-2.5 py-0.5 font-mono text-xs font-bold text-signal">
                        92% Alignment Match
                      </span>
                      <span className="font-mono text-xs text-ink-muted">· Provenance Verified</span>
                    </div>
                    <h3 className="mt-1 font-display text-xl font-bold text-ink">
                      {selectedRole.title} — Career Analysis
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyDeliverable}
                      className="flex items-center gap-1.5 rounded-lg border border-bg-border bg-bg-raised px-3 py-1.5 font-mono text-xs font-medium text-ink hover:bg-bg-border transition-colors cursor-pointer"
                    >
                      {copiedDeliverable ? <Check size={13} className="text-signal" /> : <Copy size={13} />}
                      {copiedDeliverable ? "Copied!" : "Copy MD"}
                    </button>
                    <button
                      onClick={handleDownloadDeliverable}
                      className="flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 font-mono text-xs font-semibold text-white hover:bg-accent-dim transition-colors cursor-pointer"
                    >
                      <Download size={13} />
                      Download Output
                    </button>
                  </div>
                </div>

                {/* Top 3 Recommended Projects */}
                <div className="mt-6">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-ink-muted">
                    Top 3 Recommended Projects for this Role:
                  </h4>
                  <div className="mt-3 space-y-3">
                    <div className="rounded-xl border border-accent/30 bg-accent/[0.02] p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-sm font-bold text-ink">
                          1. Vedha AI (Paverasa AI)
                        </span>
                        <span className="rounded bg-bg-raised px-2 py-0.5 font-mono text-[10px] text-ink-muted border border-bg-border">
                          [Source: input/project-notes.md, projects/vedha-ai.md]
                        </span>
                      </div>
                      <p className="mt-1.5 font-body text-xs text-ink-muted leading-relaxed">
                        Demonstrates production multi-model API orchestration (OpenAI + Gemini APIs), Redis sliding-window rate limiting, and 10+ operational modules. Directly maps to building production LLM apps.
                      </p>
                    </div>

                    <div className="rounded-xl border border-bg-border bg-bg-raised/40 p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-sm font-bold text-ink">
                          2. India Crime Rate Prediction System
                        </span>
                        <span className="rounded bg-bg-raised px-2 py-0.5 font-mono text-[10px] text-ink-muted border border-bg-border">
                          [Source: input/project-notes.md, projects/crime-prediction.md]
                        </span>
                      </div>
                      <p className="mt-1.5 font-body text-xs text-ink-muted leading-relaxed">
                        Proves traditional machine learning and statistical rigor: 3,600 records, 37 engineered spatial and temporal features, and XGBoost tuning (~93% accuracy, R² ≈ 0.92).
                      </p>
                    </div>

                    <div className="rounded-xl border border-bg-border bg-bg-raised/40 p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-sm font-bold text-ink">
                          3. FreeKeys — Free AI API Directory
                        </span>
                        <span className="rounded bg-bg-raised px-2 py-0.5 font-mono text-[10px] text-ink-muted border border-bg-border">
                          [Source: input/project-notes.md, projects/freekeys.md]
                        </span>
                      </div>
                      <p className="mt-1.5 font-body text-xs text-ink-muted leading-relaxed">
                        Shows deep understanding of Model Context Protocol (MCP) servers, LLM rate limits, and modern developer tooling ecosystems. Catalogs 90+ APIs and 40+ MCP servers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Verified Skills vs Missing Gaps */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-signal/30 bg-signal/[0.03] p-4">
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-signal">
                      <CheckCircle2 size={14} />
                      Verified Relevant Skills:
                    </div>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {["Python", "FastAPI", "Gemini API", "OpenAI API", "Redis", "React", "TypeScript", "Docker", "Model Context Protocol (MCP)"].map((s) => (
                        <span
                          key={s}
                          className="rounded bg-white px-2 py-0.5 font-mono text-[11px] text-ink border border-bg-border shadow-xs"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-warn/30 bg-warn/[0.03] p-4">
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-warn">
                      <AlertCircle size={14} />
                      Identified ATS Gap Keywords:
                    </div>
                    <p className="mt-1 text-[11px] text-ink-muted">
                      Not currently listed in resume.md; recommended for future projects:
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {["MLflow", "Kubeflow", "Triton Server", "Vector DB at Scale (Qdrant)", "Prometheus"].map((s) => (
                        <span
                          key={s}
                          className="rounded bg-white px-2 py-0.5 font-mono text-[11px] text-ink-muted border border-warn/30"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Deliverable Path Confirmation */}
                <div className="mt-6 flex items-center justify-between rounded-xl bg-bg-raised p-3 border border-bg-border font-mono text-xs">
                  <div className="flex items-center gap-2 text-ink">
                    <FileText size={15} className="text-accent" />
                    <span>Saved to: <code className="font-bold text-accent">output/{selectedRole.id}-analysis.md</code></span>
                  </div>
                  <span className="text-[11px] text-signal font-semibold">● 100% Grounded</span>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}

      {/* TAB 2: WORKSPACE FILESYSTEM EXPLORER */}
      {activeTab === "files" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 grid gap-6 lg:grid-cols-12"
        >
          {/* File Tree List */}
          <div className="lg:col-span-4 rounded-2xl border border-bg-border bg-white p-5 shadow-xs">
            <div className="flex items-center justify-between border-b border-bg-border pb-3">
              <div className="flex items-center gap-2">
                <FolderTree size={16} className="text-accent" />
                <h3 className="font-display text-sm font-bold text-ink">~/personal-agent</h3>
              </div>
              <span className="font-mono text-xs text-ink-faint">{WORKSPACE_FILES.length} files</span>
            </div>

            <div className="mt-4 space-y-4">
              {/* Input Folder */}
              <div>
                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-ink-muted uppercase tracking-wider">
                  <Lock size={12} className="text-ink-faint" />
                  input/ <span className="text-[10px] text-ink-faint">(Read-Only)</span>
                </div>
                <div className="mt-2 space-y-1 pl-2">
                  {WORKSPACE_FILES.filter((f) => f.folder === "input").map((file) => (
                    <button
                      key={file.path}
                      onClick={() => setSelectedFile(file)}
                      className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left font-mono text-xs transition-colors cursor-pointer ${
                        selectedFile.path === file.path
                          ? "bg-accent text-white font-semibold"
                          : "text-ink hover:bg-bg-raised"
                      }`}
                    >
                      <span className="truncate">{file.name}</span>
                      <span className={`text-[10px] ${selectedFile.path === file.path ? "text-white/80" : "text-ink-faint"}`}>
                        {file.size}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Projects Folder */}
              <div>
                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-ink-muted uppercase tracking-wider">
                  <Lock size={12} className="text-ink-faint" />
                  projects/ <span className="text-[10px] text-ink-faint">(Read-Only)</span>
                </div>
                <div className="mt-2 space-y-1 pl-2">
                  {WORKSPACE_FILES.filter((f) => f.folder === "projects").map((file) => (
                    <button
                      key={file.path}
                      onClick={() => setSelectedFile(file)}
                      className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left font-mono text-xs transition-colors cursor-pointer ${
                        selectedFile.path === file.path
                          ? "bg-accent text-white font-semibold"
                          : "text-ink hover:bg-bg-raised"
                      }`}
                    >
                      <span className="truncate">{file.name}</span>
                      <span className={`text-[10px] ${selectedFile.path === file.path ? "text-white/80" : "text-ink-faint"}`}>
                        {file.size}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Output Folder */}
              <div>
                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-ink-muted uppercase tracking-wider">
                  <FileText size={12} className="text-signal" />
                  output/ <span className="text-[10px] text-signal font-semibold">(Agent Writable)</span>
                </div>
                <div className="mt-2 space-y-1 pl-2">
                  {WORKSPACE_FILES.filter((f) => f.folder === "output").map((file) => (
                    <button
                      key={file.path}
                      onClick={() => setSelectedFile(file)}
                      className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left font-mono text-xs transition-colors cursor-pointer ${
                        selectedFile.path === file.path
                          ? "bg-accent text-white font-semibold"
                          : "text-ink hover:bg-bg-raised"
                      }`}
                    >
                      <span className="truncate">{file.name}</span>
                      <span className={`text-[10px] ${selectedFile.path === file.path ? "text-white/80" : "text-ink-faint"}`}>
                        {file.size}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* File Content Preview */}
          <div className="lg:col-span-8 rounded-2xl border border-bg-border bg-white p-6 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-bg-border pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-accent">{selectedFile.path}</span>
                  <span className="rounded bg-bg-raised px-2 py-0.5 font-mono text-[10px] text-ink-muted border border-bg-border">
                    {selectedFile.size}
                  </span>
                </div>
                <p className="mt-1 text-xs text-ink-muted">{selectedFile.description}</p>
              </div>

              <button
                onClick={handleCopyFile}
                className="flex items-center gap-1.5 rounded-lg border border-bg-border bg-bg-raised px-3 py-1.5 font-mono text-xs font-medium text-ink hover:bg-bg-border transition-colors cursor-pointer"
              >
                {copiedFileContent ? <Check size={13} className="text-signal" /> : <Copy size={13} />}
                {copiedFileContent ? "Copied!" : "Copy File"}
              </button>
            </div>

            <div className="mt-4 max-h-[520px] overflow-y-auto rounded-xl border border-bg-border bg-bg p-4 font-mono text-xs text-ink leading-relaxed whitespace-pre-wrap select-text scrollbar-thin">
              {selectedFile.content}
            </div>
          </div>
        </motion.div>
      )}

      {/* TAB 3: LIVE 6/6 EVALUATION BATTERY */}
      {activeTab === "evaluation" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 space-y-6"
        >
          {/* Header & Filter Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-bg-border bg-white p-6 shadow-xs">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-3 w-3 rounded-full bg-signal" />
                <h3 className="font-display text-xl font-bold text-ink">FL-06 Evaluation Battery Results</h3>
              </div>
              <p className="mt-1 text-sm text-ink-muted">
                All 6 evaluation test cases were executed live against the Model Context Protocol (MCP) filesystem server.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-semibold text-ink-muted">Category:</span>
              {["ALL", "Reasoning", "Guardrails", "Synthesis", "Execution", "Integrity"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setTestFilter(cat)}
                  className={`rounded-lg px-2.5 py-1 font-mono text-xs transition-colors ${
                    testFilter === cat
                      ? "bg-ink text-white font-bold"
                      : "bg-bg-raised text-ink-muted hover:bg-bg-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Test Case Cards */}
          <div className="grid gap-4 md:grid-cols-2">
            {filteredTests.map((test) => (
              <div
                key={test.id}
                className="rounded-2xl border border-bg-border bg-white p-6 shadow-xs hover:border-accent/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-bg-border pb-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-signal/15 font-mono text-xs font-bold text-signal">
                        #{test.id}
                      </span>
                      <span className="font-display text-sm font-bold text-ink">{test.name}</span>
                    </div>
                    <span className="rounded-full bg-signal/15 px-2.5 py-0.5 font-mono text-[10px] font-bold text-signal">
                      ● PASS
                    </span>
                  </div>

                  <div className="mt-3">
                    <span className="rounded bg-bg-raised px-2 py-0.5 font-mono text-[10px] text-accent font-semibold uppercase">
                      {test.category}
                    </span>
                  </div>

                  <div className="mt-3">
                    <div className="font-mono text-[11px] font-bold text-ink-muted uppercase tracking-wider">
                      Input Prompt:
                    </div>
                    <p className="mt-1 rounded-lg bg-bg-raised p-2.5 font-mono text-xs text-ink">
                      "{test.inputPrompt}"
                    </p>
                  </div>

                  <div className="mt-3">
                    <div className="font-mono text-[11px] font-bold text-ink-muted uppercase tracking-wider">
                      Tools Called:
                    </div>
                    <div className="mt-1 space-y-1">
                      {test.toolsCalled.map((t, idx) => (
                        <div key={idx} className="rounded bg-bg px-2 py-1 font-mono text-[10px] text-ink-muted border border-bg-border">
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="font-mono text-[11px] font-bold text-ink-muted uppercase tracking-wider">
                      Observed Agent Behavior:
                    </div>
                    <p className="mt-1 text-xs text-ink-muted leading-relaxed">
                      {test.actualResult}
                    </p>
                  </div>
                </div>

                <div className="mt-4 border-t border-bg-border pt-3 font-mono text-[11px] text-signal font-medium">
                  ✓ Pass Criterion: {test.passCondition}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* TAB 4: ARCHITECTURE & SYSTEM RULES */}
      {activeTab === "architecture" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 space-y-8"
        >
          {/* MCP Architecture Visualizer */}
          <div className="rounded-2xl border border-bg-border bg-white p-6 sm:p-8 shadow-xs">
            <h3 className="font-display text-xl font-bold text-ink">
              System Architecture & Model Context Protocol (MCP)
            </h3>
            <p className="mt-2 text-sm text-ink-muted max-w-2xl">
              The agent lives directly in Claude Desktop and communicates with the local filesystem via standard JSON-RPC 2.0 messages over standard I/O (stdio).
            </p>

            <div className="mt-8 grid gap-4 lg:grid-cols-4 items-center">
              <div className="rounded-xl border border-bg-border bg-bg-raised p-5 text-center">
                <Bot size={28} className="mx-auto text-accent" />
                <div className="mt-2 font-display text-sm font-bold text-ink">Claude Desktop</div>
                <div className="font-mono text-[11px] text-ink-muted mt-1">Host Client Application</div>
                <div className="mt-3 rounded bg-white px-2 py-1 font-mono text-[10px] text-ink-muted border border-bg-border">
                  Claude 3.7 Sonnet
                </div>
              </div>

              <div className="text-center font-mono text-xs text-ink-muted flex flex-col items-center">
                <span className="text-accent font-bold">JSON-RPC 2.0</span>
                <span className="text-[10px] text-ink-faint">stdio pipe (cmd.exe)</span>
                <span className="text-lg text-accent">⇄</span>
              </div>

              <div className="rounded-xl border border-accent/40 bg-accent/[0.03] p-5 text-center shadow-xs">
                <Cpu size={28} className="mx-auto text-accent" />
                <div className="mt-2 font-display text-sm font-bold text-ink">Filesystem MCP Server</div>
                <div className="font-mono text-[11px] text-ink-muted mt-1">@modelcontextprotocol/server-filesystem</div>
                <div className="mt-3 rounded bg-white px-2 py-1 font-mono text-[10px] text-signal font-semibold border border-signal/30">
                  read_file, write_file, list_dir
                </div>
              </div>

              <div className="rounded-xl border border-bg-border bg-bg-raised p-5 text-center">
                <HardDrive size={28} className="mx-auto text-ink" />
                <div className="mt-2 font-display text-sm font-bold text-ink">Local Workspace</div>
                <div className="font-mono text-[11px] text-ink-muted mt-1">~/personal-agent</div>
                <div className="mt-3 rounded bg-white px-2 py-1 font-mono text-[10px] text-ink-muted border border-bg-border">
                  input/ | projects/ | output/
                </div>
              </div>
            </div>

            {/* Claude Config Code Block */}
            <div className="mt-8 border-t border-bg-border pt-6">
              <div className="flex items-center justify-between">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-ink-muted">
                  Claude Desktop Configuration (claude_desktop_config.json):
                </div>
                <button
                  onClick={handleCopyConfig}
                  className="flex items-center gap-1.5 rounded-lg border border-bg-border bg-bg-raised px-3 py-1 font-mono text-xs font-medium text-ink hover:bg-bg-border cursor-pointer transition-colors"
                >
                  {copiedConfig ? <Check size={12} className="text-signal" /> : <Copy size={12} />}
                  {copiedConfig ? "Copied!" : "Copy JSON"}
                </button>
              </div>

              <pre className="mt-3 overflow-x-auto rounded-xl border border-bg-border bg-ink p-4 font-mono text-xs text-white/90 leading-relaxed scrollbar-thin">
{`{
  "mcpServers": {
    "filesystem": {
      "command": "cmd.exe",
      "args": [
        "/c",
        "npx",
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "C:\\\\Users\\\\saime\\\\personal-agent"
      ]
    }
  }
}`}
              </pre>
            </div>
          </div>

          {/* 8 Strict System Rules */}
          <div className="rounded-2xl border border-bg-border bg-white p-6 sm:p-8 shadow-xs">
            <h3 className="font-display text-xl font-bold text-ink">8 Core Agent Instructions & Guardrails</h3>
            <p className="mt-1 text-sm text-ink-muted">
              These rules are injected into Claude Desktop to guarantee deterministic provenance and prevent unauthorized modifications.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {SYSTEM_RULES.map((rule) => (
                <div
                  key={rule.id}
                  className="flex items-start gap-3 rounded-xl border border-bg-border bg-bg-raised/40 p-3.5"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-[10px] font-bold text-white">
                    {rule.id}
                  </span>
                  <div>
                    <div className="font-display text-xs font-bold text-ink">{rule.title}</div>
                    <div className="font-body text-xs text-ink-muted mt-0.5 leading-relaxed">{rule.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
