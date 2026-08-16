export interface Project {
  slug: string;
  name: string;
  status: "LIVE" | "DEPLOYED" | "ARCHIVED";
  tagline: string;
  goal: string;
  problem: string;
  solution: string;
  process: string[];
  architecture: string[];
  stack: string[];
  results: string[];
  lessons: string[];
  github: string;
  demo: string | null;
  metric: { label: string; value: string };
  image: string | null;
  imageLabel: string;
  realScreenshotsAvailable: boolean;
}

export const projects: Project[] = [
  {
    slug: "paverasa-ai",
    name: "Paverasa AI",
    status: "LIVE",
    tagline: "All-in-one AI platform combining chat, image generation, resume building, OCR, and automation.",
    goal: "Consolidate scattered AI tools into one unified platform to save time and reduce subscription fatigue.",
    problem:
      "AI tools are scattered across many apps, forcing users to switch platforms, manage multiple subscriptions, and repeat workflows. I built Paverasa AI to bring common AI tools into one app, reduce tool switching, save time, and make AI workflows simpler for students, creators, and professionals.",
    solution:
      "I built the core Paverasa AI app and its main modules: AI Chat using Gemini/OpenAI APIs, Image Generator from prompts, Resume Builder, PDF Chat, Voice Assistant, Code Generator, Website Generator, AI Translator, Meeting Summarizer, OCR Scanner, Prompt Library, and AI Automation that connects tasks into workflows.",
    process: [
      "Benchmarked disparate AI tools to map common workflow friction points",
      "Designed unified schema contracts for multi-model REST endpoints",
      "Implemented asynchronous task queues and Redis caching for heavy AI calls",
      "Developed cross-platform client with role-based auth and unified workspace",
    ],
    architecture: [
      "Authentication with JWT + OAuth login, protected routes, RBAC",
      "Backend built with FastAPI REST APIs, PostgreSQL, and Redis",
      "Standardized AI service layer handling rate limits, caching, and API fallbacks",
      "Deployed with Docker, Kubernetes, AWS, and Nginx reverse proxy",
      "CI/CD using GitHub Actions for automated testing and deployment",
    ],
    stack: ["Flutter", "FastAPI", "PostgreSQL", "Redis", "Gemini API", "OpenAI API", "Supabase", "Firebase", "Docker", "Kubernetes", "AWS", "Nginx", "GitHub Actions"],
    results: [
      "Built working MVP combining 10+ core AI capabilities in a single interface",
      "Standardized backend handles upstream rate limits, caching, and model fallbacks",
      "Core architecture and major AI modules operational for demonstration",
    ],
    lessons: [
      "Adding AI features is easy; making them work reliably together behind one backend is the hard part",
      "Built a FastAPI service layer that standardized AI requests, added Redis caching and rate limiting, and handled API failures with fallbacks",
      "Design backend architecture before adding features; keep the UX focused even with multiple capabilities",
    ],
    github: "https://github.com/saimedh",
    demo: null,
    metric: { label: "Architecture", value: "10+ AI Tools" },
    image: null,
    imageLabel: "App Dashboard & Multi-tool Chat Screens",
    realScreenshotsAvailable: false,
  },
  {
    slug: "crime-prediction-system",
    name: "Crime Prediction System",
    status: "DEPLOYED",
    tagline: "Spatiotemporal forecasting for district-level patrol allocation.",
    goal: "Predict high-probability crime hotspot zones using historical incident data to assist proactive patrol allocation.",
    problem:
      "Patrol units and civic safety teams often respond to incidents reactively after they occur, rather than having data-driven forecasts to deploy resources where risk is highest.",
    solution:
      "I developed a spatiotemporal prediction pipeline that analyzes historical crime incident patterns, time of day, and location clusters to forecast high-risk areas for patrol planning.",
    process: [
      "Cleaned and harmonized 3,600 historical incident records across 20 cities and 16 crime categories",
      "Engineered 37 spatial and temporal features including rolling density and time-of-day bins",
      "Trained and tuned XGBoost classification and regression models with spatial cross-validation",
      "Built interactive Streamlit/React map dashboard for scenario testing and visual patrol routing",
    ],
    architecture: [
      "Data cleaning and spatial aggregation pipeline using Pandas and GeoPandas",
      "Time-series and spatial feature engineering (37 features across 20 cities)",
      "Gradient boosted decision tree models (XGBoost / Random Forest) for hotspot prediction",
      "Interactive map dashboard for visualizing high-probability zones",
    ],
    stack: ["Python", "scikit-learn", "XGBoost", "Pandas", "GeoPandas", "FastAPI", "Streamlit"],
    results: [
      "3,600 records processed across 20 cities with 37 engineered features and 16 crime types",
      "~93% risk classification accuracy achieved on held-out validation zones",
      "R² ≈ 0.92 regression score for temporal incident frequency forecasting",
      "Interactive map dashboard deployed for real-time scenario testing",
    ],
    lessons: [
      "Spatial data requires careful handling of reporting biases and missing location tags",
      "Simple, interpretable models with clear risk thresholds are more actionable for planners than opaque black boxes",
    ],
    github: "https://github.com/saimedh",
    demo: null,
    metric: { label: "Model Accuracy", value: "~93% Accuracy (R²≈0.92)" },
    image: null,
    imageLabel: "Spatiotemporal Heatmap & Risk Forecast Analytics",
    realScreenshotsAvailable: false,
  },
  {
    slug: "api-emporium",
    name: "FreeKeys — Free AI API Directory",
    status: "LIVE",
    tagline: "Curated directory and comparison tool for 90+ free AI APIs, routers, and MCP servers.",
    goal: "Eliminate developer friction when finding and testing genuinely free AI APIs without credit cards.",
    problem:
      "Finding which AI APIs are actually free is frustrating. Providers bury their free tiers, rate limits, token quotas, and credit card requirements across dozens of pricing and docs pages. Developers waste hours signing up just to find out a card is required or limits are too restrictive.",
    solution:
      "I built FreeKeys to give developers one fast, searchable directory for free AI APIs, routers, and MCP servers. It features side-by-side limit comparisons, key filtering (no card required, rate limits, supported models), and direct links to get keys.",
    process: [
      "Audited pricing and rate-limit documentation across 90+ AI model providers and routers",
      "Designed structured JSON schema categorizing token allowances, RPM limits, and card requirements",
      "Built client-side search and instant comparison matrix in React and Tailwind CSS",
      "Curated 40+ Model Context Protocol (MCP) server endpoints for tool integration",
    ],
    architecture: [
      "Search and filtering engine for 90+ providers and MCP tools",
      "Side-by-side comparison tables for rate limits, token caps, and card requirements",
      "Categorized directories for LLMs, Speech, Image, Search, Embeddings, and Routers",
      "Direct API key and MCP documentation links",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lovable"],
    results: [
      "Live and indexed at api-emporium.lovable.app",
      "Catalogs 90+ free AI tiers, routers, and 40+ MCP servers",
      "Helps developers find working free API keys in seconds without digging through docs",
    ],
    lessons: [
      "Provider rate limits and free tier terms change frequently, requiring structured data schemas that are easy to update",
      "Developers care most about practical constraints (card required vs. no card, RPM limits, free credit expiries) rather than marketing overviews",
    ],
    github: "https://github.com/saimedh",
    demo: "https://api-emporium.lovable.app",
    metric: { label: "Free Tiers", value: "90+ Listed" },
    image: null,
    imageLabel: "Live FreeKeys Directory & Provider Comparison Table",
    realScreenshotsAvailable: false,
  },
  {
    slug: "forest-fire-detection",
    name: "Forest Fire Detection System",
    status: "ARCHIVED",
    tagline: "Wildfire risk detection from satellite imagery and multispectral sensor fusion.",
    goal: "Detect early-stage wildfire hotspots and environmental risk zones through satellite sensor data.",
    problem:
      "Early wildfire detection is crucial for mitigating widespread destruction, but manual monitoring across vast wilderness regions is slow and prone to missed alerts.",
    solution:
      "I developed a sensor fusion model combining satellite multispectral imagery with ground-level weather sensor metrics (temperature, humidity, wind velocity) to detect wildfire risk early.",
    process: [
      "Preprocessed satellite infrared and optical data channels with OpenCV and NumPy",
      "Integrated meteorological sensor feeds to calculate Canadian Fire Weather Index (FWI)",
      "Trained classification model for rapid fire pixel segmentation",
      "Documented detection latency benchmarks and environmental false-positive edge cases",
    ],
    architecture: [
      "Multispectral satellite image preprocessing and spectral index calculation",
      "Environmental sensor data fusion pipeline (temperature, humidity, wind vectors)",
      "Ensemble classification model identifying high-risk thermal anomalies",
      "Evaluation suite for false-positive smoke/cloud discrimination",
    ],
    stack: ["Python", "OpenCV", "scikit-learn", "Pandas", "NumPy", "TensorFlow"],
    results: [
      "Working prototype pipeline detecting thermal anomalies from multispectral inputs",
      "Validated against benchmark forest fire datasets with cross-channel correlation",
      "Documented environmental limitations and false-positive edge cases during high humidity",
    ],
    lessons: [
      "Cloud cover and solar reflection produce optical false positives, requiring infrared cross-validation",
      "Sensor fusion significantly outperforms standalone optical detection in low-visibility conditions",
    ],
    github: "https://github.com/saimedh",
    demo: null,
    metric: { label: "Sensor Fusion", value: "Satellite + Weather" },
    image: null,
    imageLabel: "Forest Fire Detection Interface & Satellite Output",
    realScreenshotsAvailable: false,
  },
  {
    slug: "matchcine",
    name: "Movie Recommendation System (MatchCine)",
    status: "LIVE",
    tagline: "Movie discovery and taste-matching app to eliminate search fatigue.",
    goal: "Cut down search fatigue by matching films based on nuanced mood and concise metadata cards.",
    problem:
      "Finding movies to watch usually leads to endless scrolling. Mainstream platforms repeat the same trending titles, while basic genre tags fail to match how people actually choose films based on mood and taste.",
    solution:
      "I built MatchCine, a movie discovery and matching app that helps users quickly find films tailored to their taste without scrolling through endless recommendation rows.",
    process: [
      "Analyzed movie discovery UX bottlenecks on streaming platforms",
      "Engineered taste-matching filters based on mood, era, genre, and critic ratings",
      "Designed card-based discovery interface displaying vital decision criteria at a glance",
      "Optimized client-side cache and transitions for instant search response",
    ],
    architecture: [
      "Intuitive movie matching and filtering engine based on genre, mood, and ratings",
      "Visual movie card layout displaying synopses, ratings, and key metadata at a glance",
      "Fast, client-side filtering and search with instantaneous updates",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Movie Metadata APIs"],
    results: [
      "Live web app deployed at matchcine.lovable.app",
      "Cuts down movie decision fatigue with fast, focused discovery in under 30 seconds",
      "Smooth interactive UI with instant card previews across devices",
    ],
    lessons: [
      "Presenting clear, concise metadata cards makes movie selection much faster than long text overviews",
      "Fast interactive filtering keeps users engaged without breaking their browsing flow",
    ],
    github: "https://github.com/saimedh",
    demo: "https://matchcine.lovable.app/",
    metric: { label: "Status", value: "Live Web App" },
    image: null,
    imageLabel: "MatchCine Discovery UI & Filter Flow",
    realScreenshotsAvailable: false,
  },
  {
    slug: "vedha-ai",
    name: "Vedha.AI",
    status: "LIVE",
    tagline: "Fast, distraction-free conversational AI assistant with clean typography.",
    goal: "Provide a low-latency, distraction-free conversational assistant for rapid text workflows.",
    problem:
      "Many AI chat interfaces are overloaded with unnecessary features or slow to respond. Users need a clean, responsive assistant they can open on any device to brainstorm, write, and answer questions without friction.",
    solution:
      "I built Vedha.AI, a conversational assistant focused on speed, clean typography, and simplicity. It provides multi-turn dialogue with instant rendering and minimal latency.",
    process: [
      "Designed distraction-free chat viewport focusing on typography and whitespace",
      "Implemented client-side conversation state management with zero latency",
      "Tuned streaming request handler for rapid token rendering",
      "Ensured touch-friendly responsive mobile experience",
    ],
    architecture: [
      "Responsive chat interface built with clean message stream rendering",
      "Lightweight client-side state management for fast message history and session handling",
      "Optimized API request handling for fast multi-turn responses",
      "Mobile-first responsive layout matching native messaging app feel",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "AI APIs"],
    results: [
      "Live web app deployed at vedhai.lovable.app",
      "Handles real-time conversation flows smoothly across mobile and desktop",
      "Clean, clutter-free user experience with zero setup required",
    ],
    lessons: [
      "Keeping the UI minimal significantly improves user focus and perceived performance",
      "Handling stream errors and reconnection gracefully is critical for a pleasant chat experience",
    ],
    github: "https://github.com/saimedh",
    demo: "https://vedhai.lovable.app/",
    metric: { label: "Status", value: "Live Web App" },
    image: null,
    imageLabel: "Vedha.AI Conversational Interface",
    realScreenshotsAvailable: false,
  },
  {
    slug: "stylehub",
    name: "STYLEHUB",
    status: "LIVE",
    tagline: "Editorial fashion marketplace with catalog filtering and responsive shopping flows.",
    goal: "Deliver an editorial-quality fashion catalog with instantaneous client-side browsing.",
    problem:
      "Many fashion e-commerce platforms suffer from heavy clutter—aggressive banners, noisy layouts, and sluggish navigation that obscure product photography and garment details.",
    solution:
      "I built STYLEHUB, an editorial-inspired fashion marketplace combining clean editorial typography, fast multi-category browsing (Women, Men, Kids), curated seasonal stories, wishlists, and order management.",
    process: [
      "Designed editorial catalog layout emphasizing garment details and photography",
      "Built client-side category and deal filtering engine",
      "Integrated wishlist and order management flows",
      "Tested multi-device responsive performance",
    ],
    architecture: [
      "Modular product catalog with fast client-side category and deal filtering",
      "Editorial storytelling layout highlighting seasonal collections and tailoring details",
      "Integrated authentication, wishlist state management, and order tracking flows",
      "Mobile-first responsive design tailored for editorial visual browsing",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lovable"],
    results: [
      "Live web application deployed at gentle-renders.lovable.app",
      "Fast, fluid shopping experience with distraction-free product presentation",
      "Seamless multi-device responsiveness and quick navigation across departments",
    ],
    lessons: [
      "Prioritizing whitespace and high-quality image framing elevates perceived product value over dense grids",
      "Keeping navigation and filter transitions instant prevents bounce and shopping fatigue",
    ],
    github: "https://github.com/saimedh",
    demo: "https://gentle-renders.lovable.app",
    metric: { label: "Status", value: "Live Store" },
    image: null,
    imageLabel: "STYLEHUB Editorial Catalog & Storefront",
    realScreenshotsAvailable: false,
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
