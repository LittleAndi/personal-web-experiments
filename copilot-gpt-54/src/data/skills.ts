import type { SkillGroup } from "../types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    summary:
      "Designing APIs, services, and integration layers that stay understandable under production pressure.",
    skills: [
      "C#",
      ".NET",
      "REST APIs",
      "SOAP integrations",
      "Authentication (OAuth2, Azure AD)",
    ],
  },
  {
    title: "Frontend",
    summary:
      "Building focused interfaces where structure, maintainability, and delivery discipline matter more than novelty.",
    skills: ["Vue (Quasar)", "React", "SPA architecture"],
  },
  {
    title: "Cloud & DevOps",
    summary:
      "Azure-first delivery with observability, deployment hygiene, and operational awareness built into the workflow.",
    skills: [
      "Azure",
      "Azure App Registrations",
      "Application Insights",
      "CI/CD",
      "Docker",
    ],
  },
  {
    title: "Architecture",
    summary:
      "Translating constraints into systems that teams can operate, evolve, and reason about without unnecessary ceremony.",
    skills: ["System design", "Scalability", "Integration patterns"],
  },
];
