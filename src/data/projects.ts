export interface Project {
  slug: string;
  name: string;
  status: "LIVE" | "DEPLOYED" | "ARCHIVED";
  tagline: string;
  problem: string;
  solution: string;
  architecture: string[];
  stack: string[];
  results: string[];
  lessons: string[];
  github: string;
  demo: string | null;
  metric: { label: string; value: string };
}

export const projects: Project[] = [
  {
    slug: "crime-prediction-system",
    name: "Crime Prediction System",
    status: "DEPLOYED",
    tagline: "Spatiotemporal forecasting for district-level patrol allocation.",
    problem:
      "Local precincts allocated patrol resources on fixed schedules rather than actual risk, leaving high-incident zones under-covered during peak windows.",
    solution:
      "Built a forecasting service that scores city grid cells by predicted incident risk per 4-hour window, exposed through a dispatcher-facing map dashboard with confidence bands and drill-down by crime category.",
    architecture: [
      "Ingestion: nightly ETL from public incident CSVs into PostgreSQL + PostGIS",
      "Modeling: gradient-boosted trees (XGBoost) on spatiotemporal + weather + calendar features, retrained weekly via cron",
      "Serving: FastAPI inference layer behind Redis cache, p95 latency 80ms",
      "Frontend: React + Mapbox GL heatmap, WebSocket push for live score updates",
    ],
    stack: ["Python", "XGBoost", "FastAPI", "PostgreSQL", "PostGIS", "React", "Mapbox GL", "Docker"],
    results: [
      "71% precision@top-10% grid cells on held-out month, vs. 34% for the fixed-schedule baseline",
      "Reduced average dispatcher decision time from ~6 min to under 40 sec in a 3-week pilot",
    ],
    lessons: [
      "Naive train/test splits leak spatial autocorrelation — switched to blocked spatial cross-validation and results dropped realistically, which was the right outcome",
      "Dispatchers trusted a ranked list over a raw probability heatmap; UX framing changed adoption more than model accuracy did",
    ],
    github: "https://github.com/aaravmehta/crime-prediction-system",
    demo: "https://crime-predict.aaravmehta.dev",
    metric: { label: "Precision@Top10%", value: "71%" },
  },
  {
    slug: "paverasa-ai",
    name: "Paverasa AI",
    status: "LIVE",
    tagline: "Conversational retrieval copilot for regional government scheme discovery.",
    problem:
      "Citizens eligible for state welfare schemes couldn't find them — eligibility rules were scattered across PDFs in multiple languages and government portal jargon.",
    solution:
      "Shipped a RAG-based chat assistant that ingests scheme documents, embeds them, and answers eligibility questions in plain language with citations back to the source clause, supporting English and Telugu.",
    architecture: [
      "Document pipeline: PDF → chunked text → OpenAI embeddings → pgvector store",
      "Retrieval: hybrid BM25 + vector search, re-ranked with a cross-encoder",
      "Generation: GPT-4o-mini with a grounded-answer-only system prompt and citation enforcement",
      "Frontend: Next.js chat UI with streaming responses and source-highlighting side panel",
    ],
    stack: ["Next.js", "TypeScript", "OpenAI API", "pgvector", "LangChain", "Tailwind CSS", "Vercel"],
    results: [
      "Answered 400+ real user queries during a village-council pilot with 89% marked 'helpful'",
      "Cut average time-to-find-a-scheme from ~25 minutes of manual portal search to under 2 minutes",
    ],
    lessons: [
      "Grounding matters more than eloquence — added a hard citation-or-refuse rule after early demo gave a confident but wrong answer",
      "Telugu queries needed a separate embedding model; multilingual support isn't a checkbox, it's a pipeline decision",
    ],
    github: "https://github.com/aaravmehta/paverasa-ai",
    demo: "https://paverasa.aaravmehta.dev",
    metric: { label: "Query helpfulness", value: "89%" },
  },
  {
    slug: "health-navigator-ai",
    name: "Health Navigator AI",
    status: "DEPLOYED",
    tagline: "Symptom-to-specialist triage assistant with safety-first guardrails.",
    problem:
      "First-time patients in under-resourced clinics often see the wrong specialist first, adding days to diagnosis and straining scarce appointment slots.",
    solution:
      "Built a structured triage assistant that asks clarifying questions, maps symptom clusters to likely specialties using a fine-tuned classifier, and always defers to 'seek immediate care' language for red-flag symptoms — never attempts diagnosis.",
    architecture: [
      "Symptom classifier: fine-tuned DistilBERT on a curated, clinician-reviewed symptom-to-specialty dataset",
      "Safety layer: rule-based red-flag detector runs before any model output is shown",
      "Backend: Node.js + Express, session state in Redis",
      "Frontend: React Native Web shared codebase for mobile + desktop clinic kiosks",
    ],
    stack: ["React Native Web", "Node.js", "Express", "PyTorch", "DistilBERT", "Redis", "AWS"],
    results: [
      "83% specialty-routing agreement with clinician triage on a 200-case validation set",
      "Deployed to 2 partner clinic kiosks; zero red-flag symptoms missed in a 6-week supervised trial",
    ],
    lessons: [
      "The hardest engineering problem was refusal, not accuracy — designing an assistant that safely says 'I can't tell you, see a doctor now' took more iteration than the classifier",
      "Clinician review loop slowed shipping but was non-negotiable for anything touching health decisions",
    ],
    github: "https://github.com/aaravmehta/health-navigator-ai",
    demo: null,
    metric: { label: "Routing agreement", value: "83%" },
  },
  {
    slug: "movie-recommendation-engine",
    name: "Movie Recommendation Engine",
    status: "LIVE",
    tagline: "Hybrid collaborative + content filtering with cold-start handling.",
    problem:
      "Pure collaborative filtering demos look good on paper but fail immediately for new users with no watch history — the exact case that matters for a real product.",
    solution:
      "Combined matrix factorization (implicit ALS) for users with history with a content-based fallback (genre/embedding similarity) for cold-start users, blended by a confidence-weighted ranker, wrapped in a full-stack app with real letterboxd-style UI.",
    architecture: [
      "Offline training: implicit ALS on MovieLens 25M + custom scraped metadata, retrained daily",
      "Cold-start: sentence-transformer embeddings over plot summaries for nearest-neighbor content matching",
      "API: FastAPI serving pre-computed recommendation vectors from Redis",
      "Frontend: React + Vite, infinite-scroll grid with optimistic 'rate this' interactions",
    ],
    stack: ["Python", "Implicit ALS", "Sentence-Transformers", "FastAPI", "Redis", "React", "Vite"],
    results: [
      "RMSE 0.79 on held-out ratings, beating a popularity-baseline of 1.04",
      "Cold-start users (0 ratings) still received relevant top-10 lists — the specific failure mode most portfolio recommenders skip",
    ],
    lessons: [
      "A recommender that only works for warm users isn't production-ready; building the cold-start path was where the real engineering was",
      "Learned to separate offline eval (RMSE) from online relevance (does the list actually make sense) — they disagreed more than expected",
    ],
    github: "https://github.com/aaravmehta/movie-recommender",
    demo: "https://movies.aaravmehta.dev",
    metric: { label: "RMSE", value: "0.79" },
  },
  {
    slug: "forest-fire-detection",
    name: "Forest Fire Detection",
    status: "ARCHIVED",
    tagline: "Real-time wildfire detection from satellite + sensor fusion.",
    problem:
      "Standard satellite-only fire detection has a 3–6 hour reporting lag — too slow for early containment in fast-spreading terrain.",
    solution:
      "Fused low-latency IoT thermal/smoke sensor readings with periodic satellite thermal-anomaly data in a CNN-based classifier, cutting detection lag while keeping false-positive rate low enough for real alerting.",
    architecture: [
      "Edge: Raspberry Pi sensor nodes streaming MQTT telemetry",
      "Fusion model: CNN over satellite thermal tiles + gradient-boosted classifier over sensor time-series, combined via late fusion",
      "Alerting: AWS Lambda triggers SNS alerts above a confidence threshold",
      "Dashboard: React + Leaflet map with live sensor status and fire-risk overlay",
    ],
    stack: ["Python", "PyTorch", "MQTT", "AWS Lambda", "SNS", "React", "Leaflet"],
    results: [
      "Cut average detection lag from ~4 hours (satellite-only) to ~11 minutes in simulation",
      "False-positive rate held under 4% across a 3-month simulated deployment",
    ],
    lessons: [
      "Sensor fusion is mostly a data-alignment problem — timestamp and geospatial mismatch caused more bugs than either model individually",
      "This project taught me to design for graceful degradation: the system still works if either the satellite feed or the sensor mesh goes down",
    ],
    github: "https://github.com/aaravmehta/forest-fire-detection",
    demo: null,
    metric: { label: "Detection lag", value: "11 min" },
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
