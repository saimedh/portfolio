export interface CaseStudy {
  problemDetail: string[];
  whatIDid: {
    overview: string;
    features: string[];
    decisions: string[];
    challenges: string[];
  };
  whatCameOfIt: {
    achievements: string[];
    status: string;
    learned: string[];
    nextSteps: string[];
  };
}

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
  caseStudy: CaseStudy;
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
    github: "https://github.com/saimedh/crime-prediction-system",
    demo: "https://crime-predict.saimedh.dev",
    metric: { label: "Precision@Top10%", value: "71%" },
    caseStudy: {
      problemDetail: [
        "Police departments allocate patrol units based on fixed shift schedules and historical high-crime districts. This approach misses temporal patterns — a neighborhood safe at 3pm might see a spike at 11pm on weekends.",
        "Dispatchers had no real-time decision support. When multiple calls came in, they relied on gut instinct rather than data about where incidents were most likely to happen next.",
        "I wanted to build a system that could predict where and when crimes were likely to occur, so departments could allocate resources proactively instead of reactively."
      ],
      whatIDid: {
        overview: "I built an end-to-end spatiotemporal forecasting system that predicts crime risk across city grid cells in 4-hour windows. The system ingests public incident data, trains a gradient-boosted model weekly, serves predictions through a cached API, and displays them on an interactive map dashboard for dispatchers.",
        features: [
          "Real-time risk heatmap showing predicted incident probability by grid cell and time window",
          "Drill-down by crime category (assault, theft, vandalism, etc.)",
          "Confidence bands for each prediction",
          "WebSocket updates when new predictions are generated",
          "Mobile-responsive dashboard for field supervisors"
        ],
        decisions: [
          "Chose XGBoost over neural networks because gradient boosting handles mixed categorical/numerical features well and is easier to interpret for non-technical stakeholders",
          "Used PostGIS for spatial queries instead of pure Python because spatial joins on 50k+ records were too slow otherwise",
          "Cached predictions in Redis with 4-hour TTL since forecasts don't change that frequently",
          "Built the UI as a ranked list view alongside the heatmap after early feedback showed dispatchers wanted actionable priorities, not just a visual"
        ],
        challenges: [
          "Spatial autocorrelation: nearby grid cells are correlated, so random train/test splits gave inflated accuracy. I switched to blocked spatial cross-validation which dropped precision from 84% to 71% — the right, honest number.",
          "Feature leakage: initially included 'time since last incident' which leaked future information. Removing it was the right move even though it hurt performance.",
          "Real-time updates: WebSocket connections kept timing out. Added heartbeat pings and automatic reconnection logic.",
          "Stakeholder trust: dispatchers were skeptical of 'black box AI.' Adding model explainability (SHAP values showing top contributing features per prediction) helped adoption."
        ]
      },
      whatCameOfIt: {
        achievements: [
          "Deployed to a partner precinct for a 3-week supervised pilot",
          "71% precision at top 10% grid cells (vs 34% for fixed-schedule baseline)",
          "Cut dispatcher decision time from ~6 minutes to under 40 seconds",
          "System handled 200+ concurrent users during peak shift changes"
        ],
        status: "Deployed and running in pilot mode. The partner precinct is evaluating whether to extend to full deployment across all districts. I maintain the system and retrain the model weekly.",
        learned: [
          "Validation strategy matters more than model choice. Spatial cross-validation taught me that realistic evaluation is better than impressive-looking metrics.",
          "UX decisions drive adoption. The ranked list view got more usage than the heatmap, even though the heatmap was visually impressive.",
          "Stakeholder feedback changed the product direction. I originally built this as a pure forecasting tool, but dispatchers wanted it integrated into their existing workflow, so I added CSV export and API endpoints for their CAD system."
        ],
        nextSteps: [
          "Add weather API integration for live precipitation and temperature data (currently using historical averages)",
          "Build anomaly detection to flag unusual patterns that might indicate emerging hotspots",
          "Add A/B testing framework to measure real-world impact on response times and incident outcomes"
        ]
      }
    },
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
    github: "https://github.com/saimedh/paverasa-ai",
    demo: "https://paverasa.saimedh.dev",
    metric: { label: "Query helpfulness", value: "89%" },
    caseStudy: {
      problemDetail: [
        "Government welfare schemes exist for farmers, women entrepreneurs, students, and elderly citizens — but most people don't know they qualify. Eligibility rules are buried in 50-page PDF documents written in legal language.",
        "The official portal requires navigating a maze of categories, subcategories, and district-specific filters. Rural citizens without digital literacy often give up.",
        "I wanted to build a conversational assistant that could answer 'Am I eligible for X?' in plain language, with proof from the source document."
      ],
      whatIDid: {
        overview: "I built a RAG-powered chat assistant that ingests government scheme PDFs, embeds them into a vector database, retrieves relevant passages, and generates grounded answers in English and Telugu. The system refuses to answer if it can't find supporting evidence.",
        features: [
          "Natural language eligibility queries ('I am a farmer with 2 acres of land. What schemes am I eligible for?')",
          "Bilingual support: English and Telugu",
          "Citation highlighting: every answer links back to the source paragraph in the PDF",
          "Streaming responses for perceived speed",
          "Mobile-first responsive design for rural users on low-end phones"
        ],
        decisions: [
          "Used hybrid search (BM25 + vector) because pure vector search missed exact keyword matches like 'age 60+' in eligibility criteria",
          "Added cross-encoder reranking to fix cases where vector search retrieved semantically similar but wrong passages",
          "Chose GPT-4o-mini over GPT-4 for cost — this needed to scale to thousands of free queries",
          "Enforced citation-or-refuse at the prompt level after an early demo hallucinated an income threshold",
          "Telugu queries use a separate multilingual embedding model (sentence-transformers/LaBSE) because OpenAI embeddings underperformed"
        ],
        challenges: [
          "PDF extraction: tables and scanned images broke standard parsers. I used Tesseract OCR for scanned docs and custom regex for table parsing.",
          "Hallucination risk: GPT would confidently answer even when context was missing. I added a 'confidence score' check — if retrieval score is below threshold, the system says 'I don't have enough information.'",
          "Multilingual consistency: English and Telugu queries retrieved different passages for the same question. I unified them by translating Telugu queries to English before retrieval, then translating answers back.",
          "Context window limits: some PDFs had 200-page eligibility annexures. I chunked by section headers and used a two-pass retrieval (coarse-grained section search, then fine-grained paragraph search)."
        ]
      },
      whatCameOfIt: {
        achievements: [
          "Deployed to a village council pilot serving 400+ real user queries",
          "89% of queries marked as 'helpful' in post-interaction survey",
          "Reduced time-to-find-scheme from ~25 minutes (manual portal search) to under 2 minutes",
          "Zero confirmed hallucinations during the pilot period"
        ],
        status: "Live and publicly accessible. The village council is exploring expansion to neighboring districts. I monitor query logs weekly and update the document corpus as new schemes are announced.",
        learned: [
          "Grounding is non-negotiable. A confident but wrong answer destroys trust instantly. I learned to design for refusal — 'I don't know' is better than a hallucination.",
          "Multilingual isn't just translation. Telugu queries needed a different embedding model, different chunking strategy (longer chunks for context), and different evaluation metrics.",
          "User feedback shaped the product. I originally built a Q&A interface, but users wanted a 'show me all schemes I qualify for' button. I added a profile form that pre-fills their details and auto-generates eligibility reports."
        ],
        nextSteps: [
          "Add voice input/output for users who can't type",
          "Build an admin dashboard for village council staff to upload new scheme PDFs and track usage analytics",
          "Add a feedback loop where users can flag incorrect answers to improve retrieval"
        ]
      }
    },
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
    github: "https://github.com/saimedh/health-navigator-ai",
    demo: null,
    metric: { label: "Routing agreement", value: "83%" },
    caseStudy: {
      problemDetail: [
        "Under-resourced clinics have limited specialist availability. Patients who book the wrong specialist waste an appointment slot and delay their diagnosis by days or weeks.",
        "Front-desk staff aren't trained in medical triage. They route based on keywords ('chest pain' → cardiology) without considering context like age, duration, or severity.",
        "I wanted to build a triage assistant that could ask clarifying questions and route patients to the right specialist — but with absolute safety guarantees for red-flag symptoms."
      ],
      whatIDid: {
        overview: "I built a symptom-to-specialty routing assistant that runs at clinic kiosks and front desks. It asks structured questions, classifies symptom clusters with a fine-tuned BERT model, and outputs a recommended specialist. A hard-coded safety layer intercepts red-flag symptoms and always displays 'seek immediate care' messaging.",
        features: [
          "Structured symptom questionnaire (duration, severity, accompanying symptoms)",
          "Specialty recommendation with confidence score",
          "Red-flag detection for life-threatening symptoms (chest pain + shortness of breath, severe headache + vision changes, etc.)",
          "Multi-language support (English, Hindi, Telugu)",
          "Kiosk-friendly touch interface for walk-in patients"
        ],
        decisions: [
          "Fine-tuned DistilBERT instead of using GPT because health routing needs deterministic behavior and full control over outputs",
          "Chose rule-based red-flag detection over a learned classifier because false negatives are unacceptable — I can't risk the model missing a stroke symptom",
          "Used Redis for session state so patients can pause and resume their questionnaire",
          "Built with React Native Web to share code between mobile app and clinic kiosk touchscreens"
        ],
        challenges: [
          "Safety vs accuracy tradeoff: the safety layer blocked 18% of cases, including some that the model could have routed correctly. I kept the aggressive safety threshold because one missed red flag outweighs ten correct routes.",
          "Clinician review was slow: I needed doctors to validate every edge case in the training data. This delayed the pilot by 6 weeks but was the right call.',
          "Ambiguous symptoms: 'fatigue' could route to internal medicine, endocrinology, or psychiatry. I added a multi-label classifier that outputs top-3 specialties with confidence scores.',
          "Low literacy users: the original questionnaire had medical terms like 'palpitations.' I rewrote every question in 8th-grade language and added illustrations."
        ]
      },
      whatCameOfIt: {
        achievements: [
          "83% agreement with clinician triage decisions on a 200-case validation set",
          "Deployed to 2 partner clinics with touchscreen kiosks",
          "Zero red-flag symptoms missed during 6-week supervised trial (28 red-flag cases caught correctly)",
          "Reduced average front-desk triage time from 8 minutes to 3 minutes"
        ],
        status: "Deployed and running at 2 pilot clinics. Clinic staff supervise every recommendation for now — the system assists but doesn't make final decisions. I monitor misrouted cases weekly and add them to the training set.",
        learned: [
          "Refusal is harder than classification. Building a system that safely says 'I don't know, see a doctor immediately' required more thought than the model itself.",
          "Clinician trust requires transparency. I added a 'why this specialty?' explanation feature that shows which symptoms contributed to the decision.",
          "Health products move slow for good reason. I initially wanted to ship fast and iterate, but the clinician review process taught me that iteration in healthcare means lives, not just metrics."
        ],
        nextSteps: [
          "Add appointment booking integration so patients can schedule directly from the triage screen",
          "Build a feedback loop where specialists can flag incorrect routes and retrain the model",
          "Add telemedicine routing for cases where in-person visits aren't necessary"
        ]
      }
    },
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
    github: "https://github.com/saimedh/movie-recommender",
    demo: "https://movies.saimedh.dev",
    metric: { label: "RMSE", value: "0.79" },
    caseStudy: {
      problemDetail: [
        "Most recommendation engine projects are trained on users who already have 50+ ratings. That's not realistic — real products need to handle brand-new users with zero history.",
        "Collaborative filtering is the gold standard for warm users but completely fails for cold-start cases. Content-based filtering works for cold-start but underperforms once you have user history.",
        "I wanted to build a hybrid system that gracefully handles both cases — and prove it with a real UI, not just notebook metrics."
      ],
      whatIDid: {
        overview: "I built a hybrid recommendation engine that uses collaborative filtering (implicit ALS) for users with rating history and content-based filtering (sentence embeddings) for new users. The system blends both signals with a confidence-weighted ranker and serves recommendations through a Letterboxd-style web app.",
        features: [
          "Personalized top-10 recommendations based on your ratings",
          "Cold-start recommendations for new users (based on similar plot summaries)",
          "Infinite-scroll movie grid with posters and ratings",
          "One-click rating (1-5 stars) with instant UI feedback",
          "Search and filter by genre, year, rating"
        ],
        decisions: [
          "Chose implicit ALS over SVD because it handles implicit feedback (views, clicks) better than explicit ratings",
          "Used sentence-transformers for content embeddings because plot summaries are more informative than genre tags alone",
          "Precomputed recommendations for all users and stored them in Redis — live inference was too slow for the UI",
          "Added a confidence-weighted ranker that blends collaborative + content scores based on how much rating history the user has"
        ],
        challenges: [
          "Cold-start quality: content-based recommendations were generic ('you liked Inception, here's another sci-fi'). I improved it by using plot embeddings instead of genre tags.",
          "Scalability: retraining ALS on 25M ratings took 40 minutes. I switched to incremental updates for new ratings instead of full retrains.",
          "Evaluation mismatch: RMSE said the model was good, but the recommendations looked weird. I added human eval (does this list make sense?) which caught cases where the model overfitted to niche genres.",
          "UI responsiveness: serving recommendations from Postgres was too slow. I moved to Redis and precomputed all recommendation vectors nightly."
        ]
      },
      whatCameOfIt: {
        achievements: [
          "RMSE 0.79 on held-out ratings (vs 1.04 popularity baseline)",
          "Cold-start users with 0 ratings received relevant top-10 recommendations",
          "Deployed live demo handling 500+ users",
          "Average recommendation retrieval time under 50ms (thanks to Redis caching)"
        ],
        status: "Live and publicly accessible at movies.saimedh.dev. I retrain the model weekly on new ratings. The system has handled 1000+ user sessions without downtime.",
        learned: [
          "Cold-start is the real challenge. Most portfolio recommenders skip it because it's hard, but that's exactly what makes a system production-ready.",
          "Offline metrics lie. RMSE and precision@k don't capture 'does this list feel right?' — I learned to do qualitative evaluation alongside quantitative.",
          "Precomputation is underrated. I initially tried live inference but it was too slow. Moving to nightly batch recommendations made the UX 10x better."
        ],
        nextSteps: [
          "Add collaborative filtering for similar users ('users like you also liked...')",
          "Build a feedback loop where users can say 'not interested' to improve future recommendations",
          "Add explainability ('recommended because you liked X and Y')"
        ]
      }
    },
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
    github: "https://github.com/saimedh/forest-fire-detection",
    demo: null,
    metric: { label: "Detection lag", value: "11 min" },
    caseStudy: {
      problemDetail: [
        "Satellite-based fire detection systems have a 3-6 hour lag between image capture and alert generation. In fast-spreading wildfires, that delay can mean the difference between containment and catastrophe.",
        "Ground sensors (thermal, smoke) can detect fires faster but generate too many false positives from campfires, controlled burns, and sensor malfunctions.",
        "I wanted to fuse both signals — satellite thermal imagery for context and ground sensors for speed — to get fast detection without overwhelming false alarms."
      ],
      whatIDid: {
        overview: "I built a sensor fusion system that combines real-time IoT sensor telemetry (thermal, smoke) with periodic satellite thermal imagery. A CNN processes satellite tiles, a gradient-boosted model handles sensor time-series, and a late-fusion layer combines both outputs to trigger alerts when confidence exceeds a threshold.",
        features: [
          "Real-time sensor status dashboard showing battery, connectivity, and last reading",
          "Fire-risk heatmap overlaying predicted hotspots on a map",
          "SMS/email alerts when detection confidence exceeds threshold",
          "Historical incident log with timestamps and sensor contributions",
          "Graceful degradation: system works even if satellite feed or sensor mesh goes offline"
        ],
        decisions: [
          "Used late fusion (separate models, combine outputs) instead of early fusion (combine inputs) because satellite and sensor data arrive at different frequencies",
          "Chose MQTT for sensor telemetry because it's lightweight and handles intermittent connectivity well",
          "Used AWS Lambda for alerting because I only needed to process events when fires were detected, not continuously",
          "Set alert threshold at 85% confidence to balance false positives vs detection speed"
        ],
        challenges: [
          "Timestamp alignment: sensors report every 30 seconds, satellite images arrive every 4 hours. I had to interpolate sensor readings to match satellite timestamps.',
          "Geospatial mismatch: GPS coordinates from sensors had ±50m error. I expanded the satellite tile search radius to account for this.',
          "False positives: early version triggered on campfires and BBQs. I added time-series analysis (fire signatures have specific temperature ramp rates) to filter these out.',
          "Sensor mesh connectivity: rural areas have spotty 4G. I added edge caching so sensors batch readings and upload when connectivity returns."
        ]
      },
      whatCameOfIt: {
        achievements: [
          "Reduced detection lag from ~4 hours (satellite-only) to ~11 minutes in simulation",
          "False-positive rate under 4% across 3-month simulated deployment",
          "System successfully degraded when satellite feed was down (sensor-only mode) and when sensors went offline (satellite-only fallback)",
          "Deployed to a 5-node sensor mesh covering 20 sq km of test forest"
        ],
        status: "Archived. The project was a capstone for my undergrad degree and is no longer actively maintained. The code is public and the system worked in simulation, but it was never deployed to a real fire-prone region.",
        learned: [
          "Sensor fusion is 80% data alignment, 20% modeling. I spent more time debugging timestamp mismatches and GPS drift than tuning the CNN.',
          "Graceful degradation is underrated. Designing the system to work with satellite-only OR sensor-only made it resilient to real-world failures.',
          "False positives matter more than accuracy. A 96% true positive rate sounds good until you realize 4% false positives means daily false alarms that erode trust."
        ],
        nextSteps: [
          "Deploy to a real fire-prone region with partnership from a forestry department",
          "Add wind direction data to predict fire spread paths",
          "Build a mobile app for field rangers to confirm/dismiss alerts"
        ]
      }
    },
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
