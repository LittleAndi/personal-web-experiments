import type { ProfileData } from "../types";

export const profile: ProfileData = {
  name: "Lars Nyström",
  title: "Full-stack developer / Solution architect",
  tagline: "Building systems that actually survive production",
  shortBio:
    "Full-stack developer with a strong backend and architecture focus, experienced in building integration-heavy systems across hybrid cloud and on-prem environments.",
  longBio: [
    "I work best where software meets operational reality: internal platforms, integration-heavy systems, and architecture decisions that have to hold up under real production pressure. Most of the value tends to come from reducing fragility, clarifying boundaries, and making the next change cheaper than the last one.",
    "My background is full-stack, but most of my leverage comes from backend design, systems thinking, and translating messy constraints into maintainable solutions. I am comfortable moving between code, architecture, cloud concerns, and the practical compromises required in organisations that run both modern services and long-lived internal systems.",
    "I care less about novelty than about fit. The work is usually about finding the right level of abstraction, choosing the right integration pattern, and leaving behind something a team can operate and extend without heroics.",
  ],
  homeHighlights: [
    {
      title: "Backend development",
      description:
        "Service boundaries, APIs, data flows, and the kinds of failure modes that show up after launch.",
    },
    {
      title: "System architecture",
      description:
        "Practical structure for systems that need to evolve without collapsing under incidental complexity.",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Azure-centric delivery with observability, deployment discipline, and operational awareness built in.",
    },
    {
      title: "Integrations",
      description:
        "Reliable links between internal systems, external services, identity layers, and legacy surfaces.",
    },
  ],
  philosophy: [
    {
      title: "Pragmatic over theoretical",
      description:
        "Design decisions should survive budget limits, staffing constraints, and awkward legacy realities.",
    },
    {
      title: "Build vs buy awareness",
      description:
        "Not everything should be custom. The real work is knowing where bespoke code creates leverage and where it creates drag.",
    },
    {
      title: "Maintainability as a feature",
      description:
        "A clean handoff, clear boundaries, and predictable operations matter as much as the first release.",
    },
  ],
  ctas: [
    { label: "View Projects", path: "/projects", variant: "primary" },
    { label: "Contact", path: "/contact", variant: "secondary" },
  ],
};
