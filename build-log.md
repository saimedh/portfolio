# FL-07 Build Log

## Goal

Build a Personal Project Agent in Claude Desktop that connects to a live local workspace via the Model Context Protocol (MCP) Filesystem server, reads resume and project notes, performs career and project analysis, and autonomously writes structured deliverables into the workspace `output/` directory without manual copy/pasting.

## Platform

- **Platform:** Claude Desktop (Windows MSIX / Native Electron App `Claude_pzs8sxrjxfjjc`)
- **Runtime:** Node.js v24.13.0, Python 3.13.14
- **OS:** Windows 11 (PowerShell / Windows Terminal)

## Live Connection

- **Protocol:** Model Context Protocol (MCP)
- **Server:** `@modelcontextprotocol/server-filesystem`
- **Connected Workspace:** `~/personal-agent` (`C:\Users\saime\personal-agent`)
- **Exposed MCP Tools:**
  - `read_file` (and `read_text_file`)
  - `write_file`
  - `list_directory`
  - `search_files`
  - `directory_tree`, `get_file_info`, `create_directory`

---

## Workspace Setup

Initialized workspace structure:
```
~/personal-agent/
├── input/
│   ├── resume.pdf          # Uncompressed text-stream PDF generated via ReportLab
│   ├── resume.md           # Markdown version of full CV
│   ├── project-notes.md    # Detailed engineering notes & architectural trade-offs
│   └── skills.md           # Technical skills inventory & domain competencies
├── projects/
│   ├── vedha-ai.md         # Full specification for Vedha AI multi-model platform
│   ├── crime-prediction.md # Geospatial ML pipeline specification
│   └── health-navigator.md # Clinical triage & safety guardrail architecture
├── output/
│   └── ai-developer-internship-analysis.md # Autonomous deliverable
├── system-prompt.md        # Personal Project Agent instructions
└── build-log.md            # Engineering build log & real iteration history
```

---

## Real Iteration History

### Iteration 1: Discovering Claude Desktop AppData Virtualization on Windows

- **Goal:** Configure `claude_desktop_config.json` with `@modelcontextprotocol/server-filesystem` pointing to `C:\Users\saime\personal-agent`.
- **Problem:**
  Initial inspection of standard `%APPDATA%\Claude` showed that the directory did not exist. Investigation revealed that Claude Desktop was installed as a Windows MSIX / Store package (`Claude_pzs8sxrjxfjjc`). Windows virtualized its Roaming profile into:
  `%LOCALAPPDATA%\Packages\Claude_pzs8sxrjxfjjc\LocalCache\Roaming\Claude\claude_desktop_config.json`.
- **Change:**
  Wrote the MCP server configuration to the virtualized MSIX package location while mirroring to `%APPDATA%\Claude\claude_desktop_config.json` to ensure compatibility across app versions and updates.

### Iteration 2: Node.js Child Process Security & `EINVAL` on Windows

- **Goal:** Launch the filesystem MCP server using `npx.cmd` in the Claude config.
- **Problem:**
  When configuring `"command": "npx.cmd"` (or direct batch files) in Node.js 20+ on Windows, `child_process.spawn` fails with `Error: spawn EINVAL` due to Node's security fix for CVE-2024-27980 preventing raw batch file spawning without a shell.
- **Change:**
  Configured Claude Desktop to invoke `cmd.exe` with arguments:
  `["/c", "npx", "-y", "@modelcontextprotocol/server-filesystem", "C:\\Users\\saime\\personal-agent"]`.
  Verified via process monitoring (`Win32_Process`) that `cmd.exe` and `node.exe` successfully initialize the MCP server on stdio and output:
  `Secure MCP Filesystem Server running on stdio`.

### Iteration 3: Binary PDF Ingestion vs. MCP Text Tools

- **Goal:** Allow the agent to read `input/resume.pdf` using MCP filesystem tools.
- **Problem:**
  The `@modelcontextprotocol/server-filesystem` tool `read_file` reads files strictly as UTF-8 text strings (`fs.readFile(path, 'utf-8')`). Standard binary PDFs compressed with `FlateDecode` yield unreadable binary escape sequences when decoded as UTF-8 text, preventing Claude from extracting text via raw MCP tool calls.
- **Change:**
  Generated `resume.pdf` using Python's `reportlab` with `pageCompression=0`. This emits uncompressed text streams (`BT ... (SAI MEDH) Tj ... ET`) where every word is fully readable by text-based MCP tools while simultaneously remaining a 100% valid PDF that opens in any browser or viewer. Additionally provided `resume.md` to ensure zero file-type friction.

### Iteration 4: Source Attribution and Deterministic Output Writing

- **Goal:** Run test request to identify the top 3 projects for an AI Developer Internship and save to `output/ai-developer-internship-analysis.md`.
- **Problem:**
  Early agent tests had two issues:
  1. The agent occasionally summarized project points without citing which file the information originated from.
  2. Output was returned in the chat conversation rather than written into the workspace `output/` directory.
- **Change:**
  Refined system rules:
  - Rule 3: Mandatory citation of source filename (`[Source: input/project-notes.md]`, `[Source: input/resume.pdf]`).
  - Rule 6: Mandatory saving of requested deliverables inside `output/`.
  - Rule 7: Strict read-only policy on `input/` and `projects/` source files.
  Verified that the full pipeline executes seamlessly:
  `Read files` → `Analyze` → `Generate analysis` → `Write output file` (`output/ai-developer-internship-analysis.md`) → `Return result`.

---

## Scope Cuts

1. **Email & Notification Integrations:**
   - *Cut:* Outlook / Gmail API hooks.
   - *Reason:* Unnecessary for core MVP file analysis; focused on clean local filesystem MCP operation.
2. **External Web Scraping within Workspace Agent:**
   - *Cut:* Dynamic internet scraping during project analysis.
   - *Reason:* Kept agent grounded strictly in workspace data to enforce Rule 2 ("Never invent information missing from files").
3. **Multi-Agent Orchestration Swarms:**
   - *Cut:* Separate researcher, writer, and editor agent instances.
   - *Reason:* Single Claude Desktop agent with well-defined sequential workflow (Discover → Read → Analyze → Write → Report) is faster, deterministic, and easier to debug.

---

## Final MVP Architecture

```
User Request
     ↓
File Discovery (list_directory / search_files on ~/personal-agent)
     ↓
File Reading (read_file on input/resume.pdf, input/project-notes.md, input/skills.md)
     ↓
Analysis & Synthesis (Evaluate top 3 projects for AI Developer Internship)
     ↓
Deliverable Generation (Format with citations, skills, missing keywords, improvements)
     ↓
File Writing (write_file on output/ai-developer-internship-analysis.md)
     ↓
Result Delivery (Report output path to user)
```

---

## Known Limitations & Next Steps

1. **Connected Workspace Boundary:** The agent's access is strictly restricted by the MCP filesystem server to `~/personal-agent` and its subdirectories. Files outside this root cannot be read or modified (by design for security).
2. **Next Step - Vector Embeddings:** In future iterations, add an MCP server for vector search (e.g. SQLite-VSS or ChromaDB) to enable hybrid semantic search across hundreds of large project markdown files.
