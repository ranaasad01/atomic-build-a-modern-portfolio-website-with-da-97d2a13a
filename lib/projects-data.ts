export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "nexus-ai-platform",
    title: "Nexus AI Platform",
    shortDescription: "A full-stack AI-powered SaaS platform for intelligent document analysis and summarization.",
    description: "An enterprise-grade AI platform that leverages GPT-4 and custom ML models to analyze, summarize, and extract insights from large document collections.",
    longDescription: `Nexus AI Platform is a comprehensive SaaS solution built to help enterprises unlock the value hidden in their document repositories. The platform ingests PDFs, Word documents, spreadsheets, and plain text files, then applies a multi-stage AI pipeline to extract key insights, generate summaries, and answer natural language queries.

The backend is powered by a FastAPI microservices architecture deployed on AWS ECS with auto-scaling. The AI pipeline uses OpenAI's GPT-4 for language understanding, combined with a custom fine-tuned BERT model for domain-specific entity recognition. Vector embeddings are stored in Pinecone for lightning-fast semantic search across millions of documents.

The frontend is a Next.js 14 application with real-time updates via WebSockets, a rich text editor for annotation, and an interactive dashboard with D3.js visualizations showing document analytics and usage metrics.

Key engineering challenges included optimizing the chunking strategy for large documents, implementing a robust retry mechanism for API rate limits, and building a multi-tenant architecture that ensures complete data isolation between customers.`,
    image: "https://mynexusai.com/wp-content/uploads/nexus-dashboard.jpg",
    tags: ["AI/ML", "SaaS", "Full Stack"],
    category: "AI/ML",
    techStack: ["Next.js", "TypeScript", "Python", "FastAPI", "OpenAI", "Pinecone", "PostgreSQL", "Redis", "AWS", "Docker"],
    liveUrl: "https://nexus-ai.demo",
    githubUrl: "https://github.com/alexdev/nexus-ai",
    featured: true,
    year: 2024,
    highlights: [
      "Processes 10,000+ documents per day with 99.9% uptime",
      "Reduced document review time by 75% for enterprise clients",
      "Multi-tenant architecture supporting 50+ organizations",
      "Real-time collaboration with WebSocket-powered live updates",
    ],
  },
  {
    id: "2",
    slug: "aurora-ecommerce",
    title: "Aurora E-Commerce",
    shortDescription: "A high-performance e-commerce platform with real-time inventory, AI recommendations, and seamless checkout.",
    description: "A modern e-commerce solution built for scale, featuring AI-powered product recommendations, real-time inventory management, and a frictionless checkout experience.",
    longDescription: `Aurora E-Commerce is a production-ready online retail platform designed to handle high traffic loads while delivering a premium shopping experience. Built with performance as a first-class concern, the platform achieves sub-100ms page loads through aggressive caching, edge deployment, and optimized database queries.

The recommendation engine uses collaborative filtering and content-based algorithms to surface personalized product suggestions, resulting in a 35% increase in average order value during A/B testing. The inventory system uses optimistic locking and event sourcing to prevent overselling even during flash sales with thousands of concurrent users.

Payment processing integrates Stripe with support for 15+ payment methods including Apple Pay, Google Pay, and BNPL options. The admin dashboard provides real-time analytics, inventory alerts, and customer segmentation tools built with Recharts and React Query.

The platform is deployed on Vercel with a PostgreSQL database on Supabase, Redis for session management and caching, and Cloudinary for image optimization and delivery.`,
    image: "https://help.hcl-software.com/commerce/9.1.0/aurora-starterstore/images/locale/screensnap/smauroraLayoutCustomization.png",
    tags: ["E-Commerce", "Full Stack", "React"],
    category: "Full Stack",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Redis", "Tailwind CSS", "Vercel", "Supabase"],
    liveUrl: "https://aurora-shop.demo",
    githubUrl: "https://github.com/alexdev/aurora-ecommerce",
    featured: true,
    year: 2024,
    highlights: [
      "Sub-100ms page loads with edge caching and ISR",
      "35% increase in AOV through AI recommendations",
      "Handles 10,000+ concurrent users during peak sales",
      "Integrated with 15+ payment methods globally",
    ],
  },
  {
    id: "3",
    slug: "devflow-dashboard",
    title: "DevFlow Dashboard",
    shortDescription: "A developer productivity dashboard aggregating GitHub, Jira, and Slack metrics into actionable insights.",
    description: "A unified developer experience platform that pulls data from GitHub, Jira, Linear, and Slack to give engineering teams a single pane of glass for productivity metrics.",
    longDescription: `DevFlow Dashboard solves the problem of fragmented developer tooling by creating a unified workspace that aggregates data from the tools engineers use every day. Instead of context-switching between GitHub, Jira, Slack, and Linear, teams get a single dashboard with the metrics that matter.

The platform tracks cycle time, deployment frequency, change failure rate, and mean time to recovery — the four DORA metrics — and presents them with historical trends and team comparisons. Custom alerts notify team leads when metrics deviate from baselines, enabling proactive intervention before small issues become big problems.

The integration layer uses OAuth 2.0 for secure connections to third-party services, with webhook listeners for real-time updates. Data is normalized into a unified schema and stored in TimescaleDB for efficient time-series queries. The frontend uses React Query for intelligent caching and background refetching, ensuring the dashboard always shows fresh data without unnecessary API calls.

A standout feature is the AI-powered sprint retrospective generator, which analyzes the past sprint's data and produces a structured retrospective document highlighting wins, blockers, and improvement opportunities.`,
    image: "https://dev-flow.tech/screenshots/flows.png",
    tags: ["Developer Tools", "Dashboard", "Analytics"],
    category: "Tools",
    techStack: ["React", "TypeScript", "Node.js", "GraphQL", "TimescaleDB", "Redis", "OAuth 2.0", "Docker", "Kubernetes"],
    liveUrl: "https://devflow.demo",
    githubUrl: "https://github.com/alexdev/devflow",
    featured: true,
    year: 2023,
    highlights: [
      "Tracks DORA metrics across 100+ engineering teams",
      "Integrates with GitHub, Jira, Linear, and Slack",
      "AI-powered sprint retrospective generation",
      "Real-time alerts for metric deviations",
    ],
  },
  {
    id: "4",
    slug: "lumina-design-system",
    title: "Lumina Design System",
    shortDescription: "A comprehensive React component library with 80+ accessible components, dark mode, and Figma integration.",
    description: "An open-source design system and component library built for modern React applications, featuring full accessibility compliance, dark mode support, and a companion Figma kit.",
    longDescription: `Lumina is a production-grade design system that bridges the gap between design and engineering. The library ships 80+ React components built on Radix UI primitives, ensuring full WAI-ARIA compliance and keyboard navigation out of the box.

Every component supports dark mode through CSS custom properties, making it trivial to implement theme switching in any application. The theming system is highly customizable — teams can override any design token to match their brand without forking the library.

The documentation site is built with Next.js and MDX, featuring live interactive examples, copy-paste code snippets, and a visual component playground. Storybook integration provides isolated component development and visual regression testing via Chromatic.

The companion Figma kit mirrors every component with auto-layout, component properties, and design tokens, ensuring pixel-perfect handoff between designers and developers. The library has been adopted by 12 internal teams and has 2,400+ GitHub stars.`,
    image: "https://cdn.prod.website-files.com/5fc71849eca5b2f0ede06e46/668dfa42a27c15aa6b343773_Lumina-thumbnail%202.png",
    tags: ["Open Source", "Design System", "React"],
    category: "Frontend",
    techStack: ["React", "TypeScript", "Radix UI", "Tailwind CSS", "Storybook", "Chromatic", "MDX", "Figma"],
    liveUrl: "https://lumina-ds.demo",
    githubUrl: "https://github.com/alexdev/lumina",
    featured: false,
    year: 2023,
    highlights: [
      "80+ accessible components with WAI-ARIA compliance",
      "2,400+ GitHub stars and growing community",
      "Companion Figma kit with design tokens",
      "Visual regression testing with Chromatic",
    ],
  },
  {
    id: "5",
    slug: "pulse-health-tracker",
    title: "Pulse Health Tracker",
    shortDescription: "A cross-platform mobile health app with wearable integration, AI coaching, and personalized wellness plans.",
    description: "A React Native health and fitness application that syncs with Apple Health, Google Fit, and popular wearables to deliver AI-personalized wellness coaching.",
    longDescription: `Pulse is a holistic health tracking application that goes beyond step counting. By integrating with Apple Health, Google Fit, Garmin, and Fitbit, Pulse aggregates data from all your devices into a unified health profile that powers personalized AI coaching.

The AI coach analyzes sleep patterns, activity levels, heart rate variability, and nutrition logs to generate weekly wellness plans tailored to each user's goals and current fitness level. The recommendations adapt in real-time based on progress, setbacks, and user feedback.

The app features a beautiful data visualization layer built with Victory Native, showing trends across all health metrics with interactive charts and weekly/monthly summaries. Social features allow friends to share workouts, compete in step challenges, and celebrate milestones together.

The backend uses a HIPAA-compliant architecture with end-to-end encryption for all health data. A Node.js API gateway routes requests to specialized microservices for nutrition, activity, sleep, and social features, all deployed on AWS with strict data residency controls.`,
    image: "https://pulsehealthinc.com/wp-content/uploads/2025/07/Iphone-with-pulse-screen.webp",
    tags: ["Mobile", "Health Tech", "React Native"],
    category: "Mobile",
    techStack: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "AWS", "HealthKit", "TensorFlow Lite"],
    liveUrl: "https://pulse-health.demo",
    githubUrl: "https://github.com/alexdev/pulse",
    featured: false,
    year: 2023,
    highlights: [
      "HIPAA-compliant architecture with E2E encryption",
      "Integrates with 10+ wearable devices and health platforms",
      "AI coaching adapts to real-time user progress",
      "50,000+ active monthly users",
    ],
  },
  {
    id: "6",
    slug: "codelab-ide",
    title: "CodeLab Browser IDE",
    shortDescription: "A browser-based collaborative IDE with real-time pair programming, AI code completion, and 30+ language support.",
    description: "A fully-featured browser IDE supporting 30+ programming languages with real-time collaboration, AI-powered code completion, and integrated terminal.",
    longDescription: `CodeLab is a browser-based integrated development environment that brings the power of a desktop IDE to any device with a web browser. Built on Monaco Editor (the engine behind VS Code), CodeLab supports syntax highlighting, IntelliSense, and code formatting for 30+ programming languages.

The real-time collaboration feature uses Operational Transformation (OT) to enable multiple developers to edit the same file simultaneously without conflicts — similar to Google Docs but for code. Presence indicators show where each collaborator's cursor is, and an integrated chat sidebar keeps communication in context.

AI code completion is powered by a fine-tuned Codex model that understands the project's codebase context, not just the current file. The AI can complete multi-line functions, suggest refactors, and explain code snippets in plain English.

Code execution happens in isolated Docker containers spun up on-demand, ensuring security and preventing resource abuse. The integrated terminal gives full shell access within the sandbox environment. Projects can be deployed to Vercel, Netlify, or Railway with a single click.`,
    image: "https://help.pluralsight.com/hc/article_attachments/45488580243732",
    tags: ["Developer Tools", "Collaboration", "Web App"],
    category: "Tools",
    techStack: ["React", "TypeScript", "Monaco Editor", "WebSockets", "Docker", "Kubernetes", "Redis", "Go"],
    liveUrl: "https://codelab-ide.demo",
    githubUrl: "https://github.com/alexdev/codelab",
    featured: false,
    year: 2022,
    highlights: [
      "Real-time collaboration with Operational Transformation",
      "30+ programming languages with full IntelliSense",
      "Isolated Docker containers for secure code execution",
      "One-click deployment to major hosting platforms",
    ],
  },
];

export const categories = ["All", "AI/ML", "Full Stack", "Frontend", "Mobile", "Tools"];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter((p) => p.category === category);
}
