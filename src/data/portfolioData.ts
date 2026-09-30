export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "AI & Agents" | "Systems & Go" | "Full-Stack & Impact";
  tags: string[];
  metrics?: string;
  githubUrl?: string;
  featured: boolean;
  architectureHighlights: string[];
}

export interface PhotoStory {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  tag: string;
  location?: string;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const PERSONAL_INFO = {
  name: "Emanuel Okoth",
  handle: "@14Emanuel",
  title: "AI Software Engineer & Agentic Systems Architect",
  location: "Kisumu, Kenya",
  email: "emanuelokoth8@gmail.com",
  github: "https://github.com/14Emanuel",
  status: "Hopping between multi-agent cognitive loops & graph heuristics",
  bio: "I design and build autonomous agentic software, self-orchestrating multi-agent pipelines, and intelligent tools that bridge cognitive LLM decision-loops with systems-level algorithmic rigor.",
  subBio: "From architecting offline-first USSD/SMS matching agents for construction workers across East Africa to developing optimal graph pathfinding in Go at Zone01 Kisumu, I build AI systems designed for genuine utility, resilience, and scale.",
};

export const SPECIALIZATION_PILLARS = [
  {
    title: "Autonomous Agentic Systems",
    icon: "Bot",
    description: "Designing closed-loop cognitive pipelines, dynamic tool orchestration, recursive self-reflection, and goal-directed multi-agent collaboration.",
    keywords: ["Multi-Agent Swarms", "Tool Routing", "Memory & State DAGs", "Evaluation & Guardrails"],
    accent: "teal",
  },
  {
    title: "Systems-Level Algorithmic Rigor",
    icon: "Cpu",
    description: "Trained through Zone01 Kisumu's peer-to-peer low-level crucible. Implementing discrete network flows, stack sorting algorithms, and high-concurrency microservices in Go.",
    keywords: ["Go (Golang)", "Graph Pathfinding", "Memory Optimization", "Docker & Linux"],
    accent: "mint",
  },
  {
    title: "Frontier Impact & Physical Grounding",
    icon: "Sparkles",
    description: "Taking AI beyond web chatrooms into physical reality: telemetry for climate-smart agriculture, USSD/SMS construction labor dispatch, and computer vision retail analytics.",
    keywords: ["USSD/SMS Gateways", "Computer Vision Fit-Analysis", "Climate-Smart Ag", "Offline-First"],
    accent: "lotus",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "yaya-ai-engine",
    title: "Yaya AI Engine & Agent Pipeline",
    subtitle: "Agentic Candidate-Job Matching & Automated Growth Engine",
    description: "A specialized multi-agent recruitment and matching engine that analyzes worker proficiencies, validates site requirements, and autonomously dispatches real-time worker-employer opportunities.",
    category: "AI & Agents",
    tags: ["Agentic Workflows", "Python", "Vector Retrieval", "Prompt Chaining", "FastAPI"],
    metrics: "Real-time matching & automated content synthesis",
    githubUrl: "https://github.com/14Emanuel/yaya-ai-engine",
    featured: true,
    architectureHighlights: [
      "Multi-agent intent parser for unstructured worker profiles",
      "Dynamic scoring heuristic combining trade certifications and proximity",
      "Automated LinkedIn and multi-channel content generation subagent",
    ],
  },
  {
    id: "kitabu-digital",
    title: "Kitabu Digital (MealCreditTracker)",
    subtitle: "Construction Site Workforce Meal Credit & Ledger System",
    description: "A mission-critical financial ledger and meal-credit tracking system deployed for construction job sites, preventing wage leakage and ensuring transparent daily sustenance for field crews.",
    category: "Full-Stack & Impact",
    tags: ["Full-Stack", "TypeScript", "Database Ledger", "Construction Tech", "USSD Ready"],
    metrics: "Active daily meal reconciliation across job sites",
    githubUrl: "https://github.com/14Emanuel/kitabu-digital",
    featured: true,
    architectureHighlights: [
      "Double-entry ledger model ensuring zero-discrepancy meal balances",
      "Low-bandwidth mobile web UI optimized for field foremen and kiosk vendors",
      "Audit trail logging with role-based access control",
    ],
  },
  {
    id: "lem-in",
    title: "lem-in — Discrete Graph Flow Engine",
    subtitle: "Digital Ant-Colony Network Flow & Pathfinding in Go",
    description: "A high-performance algorithmic simulation in Go that models an ant colony traversing a complex network of rooms and tunnels. Discovers disjoint shortest paths to route hundreds of agents with optimal turn latency and zero collisions.",
    category: "Systems & Go",
    tags: ["Go (Golang)", "Graph Theory", "Edmonds-Karp / Dinic Flow", "Algorithms"],
    metrics: "O(V * E^2) optimal multi-path throughput",
    githubUrl: "https://github.com/14Emanuel",
    featured: true,
    architectureHighlights: [
      "Custom BFS & residual graph pipeline for multi-source flow routing",
      "Collision-free turn scheduling engine handling complex bottleneck graphs",
      "Zero external runtime dependencies; pure Go standard library",
    ],
  },
  {
    id: "fabric-match-ai",
    title: "Fabric Match AI Algorithm",
    subtitle: "Computer Vision & Fit/Opacity Evaluation for Apparel",
    description: "A computer vision and attribute reasoning algorithm helping women evaluate dress fits online by dissecting photo opacity, drape characteristics, front/back/macro views, and structural size reality beyond promotional marketing fluff.",
    category: "AI & Agents",
    tags: ["Computer Vision", "Python", "Image Heuristics", "E-Commerce AI"],
    metrics: "Multi-angle opacity and texture breakdown",
    githubUrl: "https://github.com/14Emanuel/fabric-match-ai-algo",
    featured: true,
    architectureHighlights: [
      "Pixel density and luminance histogram analysis for fabric sheer detection",
      "Multi-perspective image alignment for true silhouette profiling",
      "Explainable fit scorecard for non-technical shoppers",
    ],
  },
  {
    id: "powersmart-kenya",
    title: "PowerSmart Kenya & KijaniSpace",
    subtitle: "Climate-Smart IoT Telemetry & Energy Monitoring",
    description: "Telemetry interfaces and monitoring infrastructure built in collaboration with innovators at Zone01 Kisumu, providing solar energy tracking and climate-smart agricultural sensor insights in the Lake Victoria basin.",
    category: "Full-Stack & Impact",
    tags: ["IoT Telemetry", "Next.js", "CleanTech", "Zone01 Kisumu"],
    metrics: "Lake Victoria basin climate and energy telemetry",
    githubUrl: "https://github.com/14Emanuel",
    featured: false,
    architectureHighlights: [
      "Streamed sensor metric dashboards with real-time alerting",
      "Low-power edge data aggregation and offline caching",
      "Participated in regional climate-smart hackathons and cohort showcases",
    ],
  },
  {
    id: "push-swap",
    title: "push-swap — Stack Sorting Optimizer",
    subtitle: "Strict Instruction-Set Algorithmic Sorting",
    description: "An optimization challenge in Go to sort arbitrarily sized numeric stacks using an ultra-restricted set of atomic push/swap/rotate commands with minimal operation counts.",
    category: "Systems & Go",
    tags: ["Go", "Stack Optimization", "Radix & Chunking Sort", "Zone01"],
    metrics: "Top-tier operation efficiency scores",
    githubUrl: "https://github.com/14Emanuel/push-swap",
    featured: false,
    architectureHighlights: [
      "Hybrid chunking sort algorithm paired with lookahead index positioning",
      "Operation reduction optimizer pruning redundant rotations",
      "Strict memory footprint with zero allocations during sort cycles",
    ],
  },
];

export const PHOTO_STORIES: PhotoStory[] = [
  {
    id: "lake-victoria",
    src: `${basePath}/images/lake-victoria-emanuel.jpeg`,
    alt: "Emanuel Okoth at Lake Victoria waters at sunset",
    title: "Serenity by Lake Victoria",
    caption: "Standing in the waters of Kisumu. The stillness of the lake and the calm ecosystem of water lilies inspire how I architect software: decentralized, patient, yet capable of extraordinary depth.",
    tag: "Roots & Philosophy",
    location: "Lake Victoria, Kisumu",
  },
  {
    id: "pitching-africas-talking",
    src: `${basePath}/images/pitch-africas-talking.jpeg`,
    alt: "Emanuel presenting Yaya Construction Labor at Africa's Talking Hackathon",
    title: "Pitching Construction Labor Tech",
    caption: "Presenting 'Yaya! Construction Labor Matching' at Africa's Talking Hackathon—demonstrating real-time SMS & USSD job matching for informal construction artisans.",
    tag: "Field Pitch & Demo",
    location: "Africa's Talking Hackathon",
  },
  {
    id: "hackathon-presentation",
    src: `${basePath}/images/hackathon-presentation.jpeg`,
    alt: "Emanuel addressing a packed tech hall of developers and judges",
    title: "Commanding the Technical Floor",
    caption: "Taking the stage to break down system architecture, token limits, and offline resiliency before fellow developers, engineers, and judges.",
    tag: "Keynote & Defense",
    location: "Kisumu Tech Hub",
  },
  {
    id: "collaborative-engineering",
    src: `${basePath}/images/collaborative-engineering.jpeg`,
    alt: "Emanuel deeply engaged in pair programming at a laptop with teammates",
    title: "Crucible of Collaboration",
    caption: "Hacking side-by-side with teammates. True engineering happens in the trenches—debugging race conditions, optimizing latency, and shipping under pressure.",
    tag: "Engineering In Action",
    location: "Hackathon Sprint",
  },
  {
    id: "zone01-kisumu-cohort",
    src: `${basePath}/images/zone01-kisumu-cohort.jpeg`,
    alt: "Zone01 Kisumu Cohort group photo - Build the Future",
    title: "Zone01 Kisumu: Building the Future",
    caption: "Alongside brilliant peers and innovators in the KijaniSpace / Zone01 Kisumu ecosystem. Rooted in peer learning, low-level mastery, and climate-smart innovation.",
    tag: "Ecosystem & Community",
    location: "Zone01 Kisumu Campus",
  },
  {
    id: "celebration-bold",
    src: `${basePath}/images/celebration-bold.jpeg`,
    alt: "50 Years Bold celebration moment",
    title: "50 Years Bold & Resilient",
    caption: "Marking milestones with high energy. Every breakthrough in code is an exercise in grit, audacious goals, and bold execution.",
    tag: "Milestone",
    location: "Celebration Arena",
  },
];

export const SKILL_GROUPS = [
  {
    group: "AI & Agentic Architectures",
    items: [
      "Multi-Agent Swarms & DAGs",
      "Agent Development Kit (ADK)",
      "LangGraph & LangChain",
      "Cognitive Loops & Self-Reflection",
      "Tool Calling & Function Orchestration",
      "RAG & Vector Retrieval",
      "Computer Vision Fit Analysis",
    ],
  },
  {
    group: "Systems & Backend",
    items: [
      "Go (Golang)",
      "Python (FastAPI, asyncio)",
      "TypeScript & Node.js",
      "Next.js (App Router)",
      "REST & Microservices",
      "SQLite / PostgreSQL",
      "Docker & Linux Environments",
    ],
  },
  {
    group: "Algorithmic Foundations",
    items: [
      "Network Flow (Edmonds-Karp / Dinic)",
      "Graph Pathfinding (BFS/DFS/Dijkstra)",
      "Memory & Pointer Semantics",
      "Stack Optimization",
      "Double-Entry Financial Ledgers",
      "SMS & USSD Telecom Gateways",
    ],
  },
];
