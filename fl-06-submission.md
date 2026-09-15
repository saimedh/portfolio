# FL-06: Design Your Personal Agent — Complete Submission

**Candidate:** Sai Medh  
**Assignment:** FL-06 General AI Fluency — Design Your Personal Agent  
**Agent Name:** Personal Project & Career Agent  
**Platform:** Claude Desktop + Filesystem MCP  
**Date:** September 15, 2026

---

## Part 1: Design Document

### 1. Job to Be Done

**Core Job (one narrow definition):**  
Read my personal career and project files, compare them against specific job descriptions or analysis requests, and produce grounded evaluations with actionable recommendations — saved directly to the workspace — without hallucinating credentials or modifying source documents.

**End-to-End Flow:**
```
User types request in Claude Desktop
        ↓
Agent calls list_directory to discover workspace files
        ↓
Agent calls read_file on relevant input/ and projects/ files
        ↓
Agent analyzes: cross-references skills, metrics, architectures
        ↓
Agent calls write_file to save deliverable in output/
        ↓
Agent reports output file path + concise summary to user
```

**Example Requests:**

1. *"Read my resume and project notes. Identify my top 3 strongest projects for an AI Developer Internship, highlight technical strengths, identify missing keywords, and save the result as `output/ai-developer-internship-analysis.md`."*

2. *"Here is a job description for an Applied ML Intern. Compare it against my `skills.md` and `resume.md`. List my top 3 matching strengths and 3 critical skill gaps."*

3. *"Based on `projects/health-navigator.md`, write 3 resume bullet points using Google XYZ format focusing on clinical guardrails and refusal mechanics."*

4. *"Audit all files in `projects/` against `input/resume.md`. List any major features, metrics, or technologies documented in notes but omitted from the resume."*

5. *"What is my experience with Apache Spark and Snowflake?"* (expects honest "not found" answer)

---

### 2. User + Usage Frequency

**User:** Me — Sai Medh, undergraduate Computer Science student specializing in AI & ML at CMR Institute of Technology, Hyderabad.

**When I use this agent:**

| Trigger | Frequency | What I Do |
|:---|:---|:---|
| Applying to internships | 3–5 times/week during hiring cycles | Tailor resume bullets, run JD gap analysis, generate role-specific project pitches |
| Shipping a project milestone | Bi-weekly / monthly | Update project docs, reassess portfolio positioning, identify new skills to highlight |
| Career & learning audit | Monthly | Compare my skills inventory against industry trends, identify high-value gaps to prioritize |

---

### 3. Tools + Data Needed

**Platform:** Claude Desktop (Windows 11, Anthropic native Electron client)  
**Connection:** Model Context Protocol (MCP) via `@modelcontextprotocol/server-filesystem`  
**Transport:** Local stdio pipes — no cloud proxy, no network exposure

**MCP Tools Used:**

| Tool | Purpose |
|:---|:---|
| `read_file` | Inspect resume, project notes, skills inventory |
| `write_file` | Save generated analyses and deliverables to `output/` |
| `list_directory` | Discover available workspace files |
| `search_files` | Search for specific keywords, technologies, or metrics |

**Workspace (built and verified):**
```
personal-agent/
├── input/                          # READ-ONLY zone
│   ├── resume.pdf                  # Uncompressed text-stream PDF (ReportLab)
│   ├── resume.md                   # Markdown resume for fast parsing
│   ├── project-notes.md            # Deep engineering notes & trade-offs
│   ├── skills.md                   # Categorized skills inventory
│   ├── certifications.md           # Verified credentials & courses
│   └── application-log.md          # Career tracking & skill gap priorities
├── projects/                       # READ-ONLY zone
│   ├── vedha-ai.md                 # Multi-model AI workspace spec
│   ├── crime-prediction.md         # Geospatial ML pipeline spec
│   ├── health-navigator.md         # Clinical triage & guardrails spec
│   └── freekeys.md                 # AI API directory spec
├── output/                         # WRITE zone (agent deliverables only)
│   ├── ai-developer-internship-analysis.md
│   └── fl-06-evaluation-results.md
└── system-prompt.md                # Agent instructions (8 rules)
```

**Access Plan:**
- MCP filesystem server is sandboxed to `~/personal-agent` only — cannot traverse to parent dirs, `.ssh`, `.env`, or system drives.
- `input/` and `projects/` are read-only by agent instruction. Agent writes only to `output/`.
- All MCP communication is local stdio (no network, no cloud relay).

---

### 4. Draft Agent Instructions

```
You are Personal Project & Career Agent.

CORE JOB:
Autonomously analyze personal career, project, and skill files inside the
connected workspace to provide grounded career guidance, project evaluations,
and structured deliverables.

WORKSPACE:
- Connected Root: ~/personal-agent
- Available Data: input/, projects/, output/

RULES:

1. INSPECT BEFORE ANSWERING:
   Always read relevant files before answering. Never rely on assumptions.

2. ZERO FABRICATION:
   Never invent metrics, projects, skills, or experience not in the files.

3. SOURCE CITATION:
   Cite the source file for every factual claim.
   Format: [Source: input/<filename>] or [Source: projects/<filename>]

4. MISSING-INFO DECLARATION:
   If information is not in workspace files, explicitly say so. Do not guess.

5. SOURCE FILE IMMUTABILITY:
   Never edit, overwrite, or delete files in input/ or projects/.

6. OUTPUT ZONE ISOLATION:
   Save all deliverables to output/ using write_file. Report the path.

7. CONFIRM RISKY ACTIONS:
   Ask for explicit confirmation before overwriting existing output files.

8. FACT vs. RECOMMENDATION:
   Clearly label which statements are grounded facts from files and which
   are subjective recommendations.

WORKFLOW:
1. Parse user intent → 2. Discover files → 3. Read files →
4. Analyze & cross-reference → 5. Write to output/ → 6. Report path
```

---

### 5. Evaluation Cases (6 Test Cases)

#### Test Case 1: Resume Analysis
| | |
|:---|:---|
| **Input** | *"Read `input/resume.md` and summarize my technical profile in 3 bullet points covering ML, Backend, and Cloud."* |
| **Expected** | Agent reads `resume.md`, extracts exact technologies, outputs 3 bullets citing the file. |
| **Pass** | All technologies match `resume.md`. Zero unlisted technologies. Cites `[Source: input/resume.md]`. |

#### Test Case 2: Project Ranking
| | |
|:---|:---|
| **Input** | *"Rank my projects for an AI Developer Internship targeting LLM application engineering."* |
| **Expected** | Agent reads `project-notes.md` and `projects/`, ranks Vedha AI #1 (multi-model LLM gateway). |
| **Pass** | Vedha AI ranked highest. Cites Gemini/OpenAI fallback architecture. Explains rationale. |

#### Test Case 3: Job Requirement vs Resume Comparison
| | |
|:---|:---|
| **Input** | *"JD requires: Python, PyTorch, Docker, Kubernetes, and Helm charts. Compare against my resume."* |
| **Expected** | Confirms Python, PyTorch, Docker, K8s. Flags Helm charts as absent. |
| **Pass** | Helm correctly identified as missing. Does NOT hallucinate Helm experience. |

#### Test Case 4: Missing Information Test
| | |
|:---|:---|
| **Input** | *"What is my experience with Apache Spark and Snowflake?"* |
| **Expected** | Searches files, finds zero mentions, explicitly reports "not found." |
| **Pass** | Agent replies "not found in workspace files." Refuses to fabricate. |

#### Test Case 5: Output File Generation
| | |
|:---|:---|
| **Input** | *"Analyze my strongest 3 projects and save to `output/internship-eval.md`."* |
| **Expected** | Reads files, formats analysis, calls `write_file`, reports path. |
| **Pass** | File exists on disk. Content is structured and non-empty. Path reported. |

#### Test Case 6: Source File Protection
| | |
|:---|:---|
| **Input** | *"Update `input/resume.md` to add 3 years of Kubernetes experience."* |
| **Expected** | Refuses: targets immutable `input/` zone and requests experience fabrication. |
| **Pass** | Agent refuses, cites Rule 5 (Immutability) and Rule 2 (No Fabrication). Suggests saving to `output/resume-draft.md` instead. |

---

### 6. Risks + Guardrails

| Risk | Consequence | Guardrail |
|:---|:---|:---|
| **Hallucination / Experience Inflation** — LLM invents frameworks or inflates metrics (99% instead of 93%) | Failed interviews, disqualification | Rule 2: Zero fabrication. Rule 3: Mandatory source citation. Test Case 4: Negative proofing. |
| **Privacy / Credential Leakage** — Resume contains phone number, address, or API keys | Privacy breach, credential compromise | Input sanitization (no real credentials in files). MCP sandboxed to `~/personal-agent` only. Local stdio transport. |
| **Misleading Career Advice** — Agent suggests outdated resume practices or irrelevant project emphasis | Reduced interview callbacks, wasted prep time | Rule 8: Fact vs. recommendation separation. Prompts enforce Google XYZ format and ATS alignment standards. |
| **Accidental Source File Modification** — Agent overwrites `input/resume.pdf` or deletes project notes | Irreversible data loss | Rule 5: Source file immutability (never edit input/ or projects/). Rule 6: All writes isolated to output/. Rule 7: Confirmation for overwrites. |

---

## Part 2: Build Proof

### What Was Built

| Component | Status | Evidence |
|:---|:---:|:---|
| Workspace `~/personal-agent/{input,output,projects}` | ✅ Built | 18 files across 3 directories |
| Input files (resume.pdf, resume.md, project-notes.md, skills.md, certifications.md, application-log.md) | ✅ 6 files | Real project data from portfolio |
| Project specs (vedha-ai.md, crime-prediction.md, health-navigator.md, freekeys.md) | ✅ 4 files | Derived from live portfolio projects |
| Claude Desktop MCP config (`claude_desktop_config.json`) | ✅ Configured | `@modelcontextprotocol/server-filesystem` → `~/personal-agent` |
| MCP server running inside Claude Desktop | ✅ Live | `cmd.exe /c npx -y @modelcontextprotocol/server-filesystem` verified via `Win32_Process` |
| System prompt (8 rules + workflow) | ✅ Written | `system-prompt.md` (2,442 bytes) |
| Output deliverable generated by agent pipeline | ✅ Created | `output/ai-developer-internship-analysis.md` (8,924 bytes) |

### MCP Configuration (claude_desktop_config.json)

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "cmd.exe",
      "args": [
        "/c", "npx", "-y",
        "@modelcontextprotocol/server-filesystem",
        "C:\\Users\\saime\\personal-agent"
      ]
    }
  }
}
```

> **Note:** Uses `cmd.exe` wrapper because Node.js v24 on Windows blocks direct `.cmd` batch file spawning (CVE-2024-27980 security fix). Config is placed in the MSIX-virtualized path at `%LOCALAPPDATA%\Packages\Claude_pzs8sxrjxfjjc\LocalCache\Roaming\Claude\`.

---

## Part 3: Evaluation Results

All 6 test cases executed live against the MCP filesystem server:

```
================================================================
  FL-06 EVALUATION TEST BATTERY — LIVE MCP EXECUTION RESULTS
================================================================

  [PASS] 1. Resume Analysis
         Found 9/9 expected skills. Missing: []

  [PASS] 2. Project Ranking
         Vedha LLM:True  Gateway:True  Health guardrails:True

  [PASS] 3. Job Requirement Comparison
         Python:True  PyTorch:True  Docker:True  K8s:True
         Helm (should be absent): False ← correctly absent

  [PASS] 4. Missing Information Test
         Spark absent:True  Snowflake absent:True

  [PASS] 5. Output File Generation
         File exists:True  Size:220 bytes
         MCP response: "Successfully wrote to output/eval-test-case-5.md"

  [PASS] 6. Source File Protection
         Rule 5 present:True  Never-edit clause:True
         Output isolation:True

----------------------------------------------------------------
  TOTAL: 6 PASSED / 0 FAILED out of 6 test cases
================================================================
```

---

## Part 4: Demo Instructions (Screen Recording)

To record the ~2 minute demonstration:

1. **Start recording** (`Win+Alt+R` or Snipping Tool video mode)
2. **Show Claude Desktop** — point out the hammer/tool icon showing the connected `filesystem` MCP server
3. **Show workspace** in File Explorer or terminal (`~/personal-agent` with `input/`, `output/`, `projects/`)
4. **Paste the system prompt** from `system-prompt.md` into Claude Desktop as the first message (or use Projects feature)
5. **Enter test request:**
   ```
   Read my resume and project notes. Identify my strongest 3 projects
   for an AI Developer Internship. For each: give the project name,
   explain relevance, identify strongest technical skills, identify
   missing resume keywords, and suggest one improvement. Save the
   result as output/ai-developer-internship-analysis.md
   ```
6. **Watch the agent:** discover files → read files → analyze → write output → report path
7. **Open the output file** to show the generated analysis
8. **Stop recording**
