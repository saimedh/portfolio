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
      "[NEEDS MY INPUT: What problem were you solving? Who experienced it? Why did it matter? Why did you build this?]",
    solution:
      "[NEEDS MY INPUT: What did you personally build? What were the main features?]",
    architecture: [
      "[NEEDS MY INPUT: Describe your architecture components, e.g., 'Data ingestion pipeline', 'Model training approach', 'API layer', 'Frontend']",
    ],
    stack: ["[NEEDS MY INPUT: List actual technologies you used]"],
    results: [
      "[NEEDS MY INPUT: What currently works? Any real outcomes or feedback? What did you learn? NO invented metrics]",
    ],
    lessons: [
      "[NEEDS MY INPUT: Challenges you faced and how you solved them. Important technical decisions. What you'd improve next.]",
    ],
    github: "[NEEDS MY INPUT: Your actual GitHub URL or empty string]",
    demo: null,
    metric: { label: "[METRIC NAME]", value: "[VALUE]" },
  },
  {
    slug: "paverasa-ai",
    name: "Paverasa AI",
    status: "LIVE",
    tagline: "AI-powered SaaS app combining chat, image generation, resume building, PDF chat, voice assistant, code generation, translation, OCR, automation, and more in one platform.",
    problem:
      "AI tools are scattered across many apps, forcing users to switch platforms, manage multiple subscriptions, and repeat workflows. I built Paverasa AI to bring common AI tools into one app, reduce tool switching, save time, and make AI workflows simpler for students, creators, and professionals.",
    solution:
      "I built the core Paverasa AI app and its main modules: AI Chat using Gemini/OpenAI APIs, Image Generator from prompts, Resume Builder, PDF Chat, Voice Assistant, Code Generator, Website Generator, AI Translator, Meeting Summarizer, OCR Scanner, Prompt Library, and AI Automation that connects tasks into workflows.",
    architecture: [
      "Authentication with JWT + OAuth login, protected routes, RBAC",
      "Backend built with FastAPI REST APIs, PostgreSQL, and Redis",
      "Deployed with Docker, Kubernetes, AWS, and Nginx",
      "CI/CD using GitHub Actions for automated testing and deployment",
      "Admin dashboard and analytics for usage tracking, user management, and platform metrics",
      "Notifications and storage using Firebase",
    ],
    stack: ["Flutter", "FastAPI", "PostgreSQL", "Redis", "Gemini API", "OpenAI API", "Supabase", "Firebase", "Docker", "Kubernetes", "AWS", "Nginx", "GitHub Actions", "JWT", "OAuth"],
    results: [
      "Built and working MVP, moving toward public launch",
      "Core architecture and major AI modules built",
      "Prototype available for demonstration",
      "Next focus: polish UX, improve reliability, deploy stable version, collect real user feedback",
    ],
    lessons: [
      "Learned that adding AI features is easy. Making them work reliably together is hard",
      "Hardest challenge: managing multiple AI services while keeping the app fast and reliable. Different AI APIs had different response times, limits, errors, and request formats",
      "Solved it by building a FastAPI service layer that standardized AI requests, added Redis caching and rate limiting, handled API failures with fallbacks, and moved heavy tasks into background jobs. Docker + Kubernetes helped scale services independently",
      "Result: cleaner architecture, fewer API failures, better response performance, easier future model integration",
      "Key lessons: Design backend architecture before adding features. Standardize different AI APIs behind one service layer. Use caching and background jobs for expensive operations. Handle API failures, rate limits, and long-running tasks early. Keep UX simple despite having many features. Build MVP first, validate with users, then expand",
      "If I rebuilt it: Start with 3–4 core features instead of 15+. Test with real users earlier. Add monitoring and error tracking from day one. Design microservices only where scaling requires them. Measure usage, latency, failures, and retention before adding more features",
    ],
    github: "",
    demo: null,
    metric: { label: "Status", value: "MVP" },
  },
  {
    slug: "health-navigator-ai",
    name: "Health Navigator AI",
    status: "DEPLOYED",
    tagline: "Symptom-to-specialist triage assistant with safety-first guardrails.",
    problem:
      "[NEEDS MY INPUT: What problem were you solving? Who experienced it? Why did it matter? Why did you build this?]",
    solution:
      "[NEEDS MY INPUT: What did you personally build? What were the main features?]",
    architecture: [
      "[NEEDS MY INPUT: Describe your architecture components]",
    ],
    stack: ["[NEEDS MY INPUT: List actual technologies you used]"],
    results: [
      "[NEEDS MY INPUT: What currently works? Any real outcomes or feedback? What did you learn? NO invented metrics]",
    ],
    lessons: [
      "[NEEDS MY INPUT: Challenges you faced and how you solved them. Important technical decisions. What you'd improve next.]",
    ],
    github: "[NEEDS MY INPUT: Your actual GitHub URL or empty string]",
    demo: null,
    metric: { label: "[METRIC NAME]", value: "[VALUE]" },
  },
  {
    slug: "movie-recommendation-engine",
    name: "Movie Recommendation Engine",
    status: "LIVE",
    tagline: "Hybrid collaborative + content filtering with cold-start handling.",
    problem:
      "[NEEDS MY INPUT: What problem were you solving? Who experienced it? Why did it matter? Why did you build this?]",
    solution:
      "[NEEDS MY INPUT: What did you personally build? What were the main features?]",
    architecture: [
      "[NEEDS MY INPUT: Describe your architecture components]",
    ],
    stack: ["[NEEDS MY INPUT: List actual technologies you used]"],
    results: [
      "[NEEDS MY INPUT: What currently works? Any real outcomes or feedback? What did you learn? NO invented metrics]",
    ],
    lessons: [
      "[NEEDS MY INPUT: Challenges you faced and how you solved them. Important technical decisions. What you'd improve next.]",
    ],
    github: "[NEEDS MY INPUT: Your actual GitHub URL or empty string]",
    demo: null,
    metric: { label: "[METRIC NAME]", value: "[VALUE]" },
  },
  {
    slug: "forest-fire-detection",
    name: "Forest Fire Detection",
    status: "ARCHIVED",
    tagline: "Real-time wildfire detection from satellite + sensor fusion.",
    problem:
      "[NEEDS MY INPUT: What problem were you solving? Who experienced it? Why did it matter? Why did you build this?]",
    solution:
      "[NEEDS MY INPUT: What did you personally build? What were the main features?]",
    architecture: [
      "[NEEDS MY INPUT: Describe your architecture components]",
    ],
    stack: ["[NEEDS MY INPUT: List actual technologies you used]"],
    results: [
      "[NEEDS MY INPUT: What currently works? Any real outcomes or feedback? What did you learn? NO invented metrics]",
    ],
    lessons: [
      "[NEEDS MY INPUT: Challenges you faced and how you solved them. Important technical decisions. What you'd improve next.]",
    ],
    github: "[NEEDS MY INPUT: Your actual GitHub URL or empty string]",
    demo: null,
    metric: { label: "[METRIC NAME]", value: "[VALUE]" },
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
