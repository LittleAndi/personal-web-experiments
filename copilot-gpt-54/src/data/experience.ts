import type { ExperienceEntry } from "../types";

export const experience: ExperienceEntry[] = [
  {
    period: "2022 – Present",
    role: "Developer / Architect",
    company: "Enterprise platform and integration environments",
    summary:
      "Designing and implementing internal platforms and business-critical services where cloud services, internal systems, and identity concerns all have to work together predictably.",
    responsibilities: [
      "Designed internal platform capabilities that reduced duplicated integration logic across teams.",
      "Shaped service boundaries and deployment flows for integration-heavy systems spanning Azure and on-prem infrastructure.",
      "Worked close to delivery teams to turn architectural direction into maintainable implementation patterns.",
    ],
    technologies: [".NET", "Azure", "MSSQL", "Docker"],
  },
  {
    period: "2019 – 2022",
    role: "Full-stack developer",
    company: "Internal product and operations tooling",
    summary:
      "Built internal applications and integration surfaces that connected operational workflows, business systems, and observability across teams with different constraints.",
    responsibilities: [
      "Implemented API-driven tooling for internal operations and support workflows.",
      "Improved release confidence by tightening telemetry, deployment paths, and diagnostics.",
      "Balanced frontend delivery with backend and integration work in systems that changed frequently.",
    ],
    technologies: ["C#", "REST APIs", "Vue", "Application Insights"],
  },
  {
    period: "2016 – 2019",
    role: "Systems-oriented developer",
    company: "Hybrid business systems and connected hardware initiatives",
    summary:
      "Worked on systems where software delivery had to account for external devices, long-lived integrations, and operational workflows that could not afford brittle assumptions.",
    responsibilities: [
      "Connected software workflows to hardware and external service dependencies.",
      "Built maintainable adapters around legacy surfaces instead of pushing complexity into the rest of the stack.",
      "Improved stability by clarifying ownership, boundaries, and failure handling across connected systems.",
    ],
    technologies: ["SOAP", "OAuth2", "Azure AD", "CI/CD"],
  },
];
