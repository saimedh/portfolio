# Frame It as Cases — Portfolio Deliverable

**Author:** Saimedh Porandla  
**Role:** AI Software Engineer / AI & ML Developer  
**Target Audience:** Engineering hiring managers, tech recruiters, startup founders  

---

## STEP 1 — Voice Card

```
Direct · Technical · Practical · Clear · Curious · No-buzzwords
```

* **Rules:**
  * No marketing fluff or corporate filler (*"spearheaded"*, *"leveraged"*, *"cutting-edge"*, *"seamless"*).
  * State what broke, why decisions were made, and what actually works.
  * Every case study must describe *my* specific decisions—not swappable with anyone else's.

---

## STEP 2 & 3 — Case Studies (The Three Beats)

---

### Case 1: FreeKeys (Free AI API & MCP Directory)
* **Live Demo:** [api-emporium.lovable.app](https://api-emporium.lovable.app)
* **Stack:** React, TypeScript, Tailwind CSS, Vite, Lovable

#### Beat 1: The Problem
Finding which AI APIs are actually free to test is exhausting. Providers scatter rate limits, token allowances, and credit card requirements across dozens of pricing and documentation pages. Developers frequently spend 20 minutes setting up an account only to discover a card is mandatory or the free quota is too small to build a prototype.

#### Beat 2: What I Did (+ Key Decisions)
I built FreeKeys—a searchable catalog and side-by-side comparison engine for 90+ free AI APIs, LLM routers, and Model Context Protocol (MCP) servers.
* **Key Decisions:**
  * **Surfaced hard constraints first:** Made "Credit Card Required vs. No Card" and "Requests Per Minute (RPM)" the primary filter criteria instead of generic marketing descriptions.
  * **Indexed 40+ MCP tools:** Added dedicated integration guides and schemas for standard MCP servers (GitHub, Supabase, Google Workspace, Playwright) so developers can connect agent workflows immediately.
  * **Side-by-side limit comparisons:** Built comparison tables contrasting Gemini, Groq, Mistral, and Cerebras on token quotas and latency.

#### Beat 3: What Came Of It
A live directory cataloging 90+ free tiers and 40+ MCP servers. Developers can identify no-card API keys and rate limits in seconds without digging through provider documentation.

---

### Case 2: Vedha.AI (Conversational AI Assistant)
* **Live Demo:** [vedhai.lovable.app](https://vedhai.lovable.app)
* **Stack:** React, TypeScript, Tailwind CSS, Vite, AI APIs

#### Beat 1: The Problem
Many chat interfaces are bogged down by complex settings, noisy sidebars, or laggy token rendering. When people want to brainstorm, write code, or test prompts, they need an interface that opens instantly, responds with minimal latency, and stays out of the way.

#### Beat 2: What I Did (+ Key Decisions)
I built Vedha.AI, a conversational assistant designed around speed, clean typography, and distraction-free dialogue.
* **Key Decisions:**
  * **Minimal UI layout:** Stripped away decorative chrome to focus entirely on message readability and chat history flow.
  * **Optimized multi-turn state:** Kept state transitions client-side for immediate input availability between prompts.
  * **Mobile-first viewport:** Engineered touch targets and responsive message bubbles that feel like a native messaging application.

#### Beat 3: What Came Of It
A live web application at `vedhai.lovable.app` delivering fast, fluid conversational responses across mobile and desktop devices.

---

### Case 3: MatchCine (Movie Discovery & Taste-Matching Engine)
* **Live Demo:** [matchcine.lovable.app](https://matchcine.lovable.app)
* **Stack:** React, TypeScript, Tailwind CSS, Vite, Movie Metadata APIs

#### Beat 1: The Problem
Finding what to watch often turns into 20 minutes of decision paralysis. Streaming platforms push the same sponsored titles in endless horizontal rows, while standard genre filters (like "Action" or "Drama") fail to match how viewers actually pick movies based on specific mood, era, and taste.

#### Beat 2: What I Did (+ Key Decisions)
I built MatchCine, a movie discovery web application that replaces infinite scrolling with structured, mood-based taste matching.
* **Key Decisions:**
  * **Decision-first card UI:** Condensed movie cards to show only what matters for picking a movie (poster, synopsis summary, runtime, and ratings) without requiring separate modal clicks.
  * **Instant client-side filtering:** Enabled instant genre and mood combinations without full-page reloads.
  * **Curated suggestions:** Structured recommendation filters to surface lesser-known quality films alongside mainstream options.

#### Beat 3: What Came Of It
A live web app at `matchcine.lovable.app` that cuts down browsing fatigue and helps users find films matching their criteria in under 30 seconds.

---

### Case 4: STYLEHUB (Editorial Fashion Marketplace)
* **Live Demo:** [gentle-renders.lovable.app](https://gentle-renders.lovable.app)
* **Stack:** React, TypeScript, Tailwind CSS, Vite, Lovable

#### Beat 1: The Problem
Most fashion e-commerce stores are cluttered with popups, aggressive deal countdowns, and dense product grids that ruin the visual presentation of clothing and make browsing feel exhausting.

#### Beat 2: What I Did (+ Key Decisions)
I built STYLEHUB, an editorial-style fashion marketplace blending high-contrast visual storytelling with responsive e-commerce navigation.
* **Key Decisions:**
  * **Editorial framing:** Used high-whitespace layouts and large photography frames to emphasize tailoring and garment textures.
  * **Instant department routing:** Created clean category pathways for Women, Men, Kids, and Seasonal Edits with instant client-side transitions.
  * **Integrated account & wishlist state:** Built intuitive wishlist saving and order tracking without heavy multi-step navigation.

#### Beat 3: What Came Of It
A live marketplace web app at `gentle-renders.lovable.app` delivering an editorial browsing experience across mobile and desktop.

---

### Case 5: Paverasa AI (Multi-Tool AI Platform MVP)
* **Status:** Operational MVP
* **Stack:** Flutter, FastAPI, PostgreSQL, Redis, Gemini API, OpenAI API, Docker, AWS

#### Beat 1: The Problem
Using AI for daily work usually means opening 5 different tabs—one for chat, one for OCR, one for resume drafting, and another for PDF analysis. Juggling multiple subscriptions and disjointed tools wastes time and fragments workflows.

#### Beat 2: What I Did (+ Key Decisions)
I built the MVP for Paverasa AI, integrating 10+ core AI tools (Chat, Resume Builder, PDF Chat, OCR Scanner, Voice Assistant, Code Generator, and Workflows) into a unified platform.
* **Key Decisions:**
  * **Unified backend abstraction:** Built a centralized FastAPI service layer to normalize different API response formats and rate limits behind one clean endpoint contract.
  * **Redis caching:** Added caching for frequent embedding lookups and repeated prompts to lower costs and reduce latency.
  * **Containerized services:** Wrapped services in Docker to keep the API server, worker queues, and database modular and reproducible.

#### Beat 3: What Came Of It
A functioning prototype combining 10+ AI tools behind a single authentication and billing structure, proving the feasibility of unified multi-model architectures.

---

### Case 6: Crime Prediction System (Spatiotemporal ML Pipeline)
* **Status:** Deployed Research Model
* **Stack:** Python, scikit-learn, XGBoost, Pandas, GeoPandas, FastAPI, Streamlit

#### Beat 1: The Problem
Civic safety and patrol teams often assign resources reactively after incidents happen, rather than using historical incident trends and spatial density data to position patrols where risk is elevated.

#### Beat 2: What I Did (+ Key Decisions)
I built a spatiotemporal prediction pipeline that analyzes historical crime records, temporal patterns, and geographic clusters to forecast hotspot probabilities for district-level planning.
* **Key Decisions:**
  * **Spatial aggregation:** Cleaned and binned raw coordinate data using GeoPandas into spatial grids to avoid point-overfitting.
  * **Interpretable ML models:** Chose gradient boosted decision trees (XGBoost) over black-box deep learning architectures so planners can inspect feature importances (e.g. time of day, rolling 30-day frequency).
  * **Interactive risk map:** Built an interactive dashboard where operators can adjust time windows and view predicted risk density.

#### Beat 3: What Came Of It
A working predictive pipeline with interactive mapping that validates spatial hotspot forecasts against baseline distributions with cross-validation.

---

## STEP 4 — Bio + CTA

### Bio
> **Saimedh Porandla**  
> I'm an AI/ML and software developer based in Hyderabad, India. I build practical tools—from AI API directories and conversational assistants to recommendation systems and machine learning models. I care about clean code, reliable backends, and making tools that are simple and fast to use.

### Contact / CTA Line
> **Building an AI product or looking for an AI/ML developer?**  
> Reach out by email at **saimedhp@gmail.com** or connect on **[LinkedIn](https://www.linkedin.com/in/sai-medh/)**—let's talk.

---

## STEP 5 — Before / After Proof

| ❌ Generic / AI-Sounding | ✅ Voice-True / Plain & Specific |
| :--- | :--- |
| *"I leveraged state-of-the-art LLM architectures and cutting-edge paradigms to deliver an innovative, seamless AI experience that empowers users to unlock transformative productivity gains."* | *"I built one web app that brings 10 common AI tools into one place behind a single FastAPI backend with Redis caching."* |
| *"Spearheaded a robust, game-changing movie recommendation engine utilizing sophisticated algorithmic synergy."* | *"I built MatchCine to stop endless streaming search loops by filtering movies through mood and concise metadata cards."* |

---

## STEP 6 — Line-by-Line Edit Pass (Audit)

| Flagged Word / Phrase | Why It Was Cut | Plain Replacement Used |
| :--- | :--- | :--- |
| **"Leveraged"** | Corporate filler; obscures what was actually built | *"Used"*, *"Built"*, *"Integrated"* |
| **"Cutting-edge / Innovative"** | Empty hype word; every project claims this | Specific stack details (*"XGBoost"*, *"FastAPI with Redis"*) |
| **"Seamless user experience"** | Vague marketing claim | Concrete description (*"Instant client-side filtering without reloads"*) |
| **"Empowering developers"** | Buzzword | *"Helps developers find free keys in seconds without digging through docs"* |
| **"Game-changing synergy"** | Meaningless buzzword | *"Standardized multiple AI APIs behind one backend contract"* |

---
