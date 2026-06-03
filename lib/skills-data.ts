export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    color: "#6366f1",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 82 },
      { name: "GraphQL", level: 78 },
    ],
  },
  {
    category: "Backend",
    color: "#8b5cf6",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "Python / FastAPI", level: 84 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Docker / Kubernetes", level: 75 },
    ],
  },
  {
    category: "AI & Cloud",
    color: "#a5b4fc",
    skills: [
      { name: "OpenAI / LLMs", level: 82 },
      { name: "AWS / Vercel", level: 80 },
      { name: "Vector Databases", level: 74 },
      { name: "CI/CD Pipelines", level: 78 },
      { name: "System Design", level: 85 },
    ],
  },
];

export const techIcons = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Redis", icon: "🔴" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "GraphQL", icon: "◈" },
  { name: "Tailwind", icon: "🌊" },
  { name: "Git", icon: "🔀" },
];
