import type {
  AboutPageCopy,
  ContactPageCopy,
  ExperiencePageCopy,
  HomePageCopy,
  ProjectsPageCopy,
  SkillsPageCopy,
} from "../types";

export const homePageCopy: HomePageCopy = {
  heroEyebrow: "Full-stack developer / Solution architect",
  heroNote:
    "I build the parts that need to stay dependable when the surrounding system gets complicated.",
  strengths: {
    eyebrow: "Core strengths",
    title: "Where I tend to add the most leverage",
    intro:
      "Most of my work sits at the intersection of backend implementation, architecture, and system integration.",
  },
  featuredProjects: {
    eyebrow: "Selected projects",
    title:
      "Representative work across platforms, operations, and integration surfaces",
    intro:
      "A sample of the kinds of problems I enjoy most: high consequence, integration-heavy, and shaped by real operational constraints.",
  },
  approach: {
    eyebrow: "Working style",
    title: "Technical decisions anchored in real constraints",
    intro:
      "I prefer solutions that are clear to operate, straightforward to extend, and honest about the tradeoffs they make.",
  },
  contactPrompt: {
    title: "Need someone who can bridge architecture and implementation?",
    body: "If the work involves internal platforms, cloud integration, or untangling brittle delivery paths, I am interested.",
    primaryLabel: "Start a conversation",
    secondaryLabel: "Read experience",
  },
};

export const aboutPageCopy: AboutPageCopy = {
  hero: {
    eyebrow: "About",
    title:
      "A full-stack profile with a backend and architecture center of gravity",
    intro:
      "I am most useful when the job is not just shipping a feature, but making sure the surrounding system becomes clearer and more durable as a result.",
  },
  philosophy: {
    eyebrow: "Work philosophy",
    title: "Principles that hold up in production",
    intro:
      "The recurring theme is simple: favor decisions that remain sensible when teams change, requirements shift, and systems age.",
  },
};

export const experiencePageCopy: ExperiencePageCopy = {
  hero: {
    eyebrow: "Experience",
    title:
      "Platform, integration, and architecture work across complex delivery environments",
    intro:
      "The pattern across roles has been consistent: clarify systems, reduce operational drag, and make integration-heavy environments more maintainable.",
  },
};

export const skillsPageCopy: SkillsPageCopy = {
  hero: {
    eyebrow: "Skills",
    title:
      "A technical toolkit shaped by backend work, cloud delivery, and integration realities",
    intro:
      "I go deep where systems become expensive to change: APIs, boundaries, delivery pipelines, identity, and reliability.",
  },
};

export const projectsPageCopy: ProjectsPageCopy = {
  hero: {
    eyebrow: "Projects",
    title:
      "Examples of pragmatic engineering across internal platforms and connected systems",
    intro:
      "These projects are intentionally realistic. They represent the kind of business-critical work where the real challenge is operational fit, not novelty.",
  },
};

export const contactPageCopy: ContactPageCopy = {
  hero: {
    eyebrow: "Contact",
    title:
      "Reach out if the work needs systems thinking as much as implementation",
    intro:
      "The best fit is usually architecture-heavy product work, internal platforms, or integration landscapes that need simplifying without oversimplifying the reality.",
  },
  methodsTitle: "Direct channels",
  form: {
    title: "Leave a short note",
    intro:
      "This form stays local. It is here to shape the conversation, not to submit data to a backend.",
    fields: {
      name: "Name",
      email: "Email",
      message: "What are you trying to solve?",
    },
    submitLabel: "Prepare message",
    successTitle: "Message drafted locally",
    successBody:
      "The details are captured in the interface. Hook this up to email or a form backend whenever you want to make it live.",
    validation: {
      name: "Please enter your name so I know who the message is from.",
      email: "Please enter a valid email address with an @ symbol.",
      message: "Please describe the project or problem you want to discuss.",
    },
  },
};
