import type { ProjectEntry } from "../types";

export const projects: ProjectEntry[] = [
  {
    name: "Integration Platform Consolidation",
    slug: "integration-platform-consolidation",
    description:
      "A shared platform layer that reduced duplicated integration logic and made delivery teams less dependent on bespoke point-to-point connections.",
    problem:
      "Multiple teams were solving the same integration problems in slightly different ways, which increased maintenance cost and made failures harder to diagnose.",
    stack: [".NET", "Azure Service Bus", "MSSQL", "Docker"],
    highlights: [
      "Standardized message handling and retry patterns across internal services.",
      "Introduced clearer ownership boundaries for adapters and orchestration components.",
      "Made telemetry and operational triage part of the platform rather than an afterthought.",
    ],
    outcome:
      "Lower integration drift, fewer one-off solutions, and faster onboarding for new delivery work.",
  },
  {
    name: "Operational Control Surface",
    slug: "operational-control-surface",
    description:
      "Internal tooling for support and operations teams to inspect jobs, replay flows, and intervene safely when integrations got stuck.",
    problem:
      "Operational staff depended on developer intervention for routine diagnostics and recoveries because system visibility was spread across logs and custom scripts.",
    stack: ["React", ".NET", "Application Insights", "Azure AD"],
    highlights: [
      "Unified operational context from multiple services into a single interface.",
      "Added guardrails around replay and retry flows so operators could act without introducing new failure modes.",
      "Reduced time-to-diagnosis by exposing domain-specific status signals instead of raw implementation details.",
    ],
    outcome:
      "Support work became faster, safer, and less dependent on tribal knowledge.",
  },
  {
    name: "Hybrid Cloud Service Boundary Refresh",
    slug: "hybrid-cloud-service-boundary-refresh",
    description:
      "A restructuring effort that separated unstable legacy dependencies from newer service surfaces without forcing a risky full rewrite.",
    problem:
      "A growing system mixed modern cloud services with brittle on-prem dependencies, making every change expensive and operationally risky.",
    stack: ["Azure", "REST APIs", "Docker", "CI/CD"],
    highlights: [
      "Introduced adapter boundaries that isolated legacy volatility from newer delivery work.",
      "Improved deployment confidence by narrowing change scope and surfacing dependency health earlier.",
      "Created a path for iterative modernization instead of all-or-nothing migration pressure.",
    ],
    outcome:
      "The system became easier to evolve incrementally while keeping existing operations stable.",
  },
  {
    name: "Connected Device Telemetry Side Project",
    slug: "connected-device-telemetry-side-project",
    description:
      "A small IoT-oriented experiment to collect, normalize, and visualize device readings in a way that stayed understandable over time.",
    problem:
      "Raw device data was easy to capture but difficult to interpret consistently once readings, thresholds, and operational history started to accumulate.",
    stack: ["C#", "Azure Functions", "React", "Time-series storage"],
    highlights: [
      "Normalized inconsistent event payloads into a simpler domain model.",
      "Built a lightweight UI that favored diagnostics and trend reading over decorative charts.",
      "Used the project as a testbed for practical event processing and observability patterns.",
    ],
    outcome:
      "A compact but useful system for validating data pipelines, alerts, and visualization choices before applying them to larger work.",
  },
];
