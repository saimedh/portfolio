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
    tagline: "Conversational retrieval copilot for regional government scheme discovery.",
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
