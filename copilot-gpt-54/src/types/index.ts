export interface NavItem {
  label: string;
  path: string;
}

export interface SiteMeta {
  monogram: string;
  availability: string;
  footerNote: string;
  footerLocation: string;
  skipLinkLabel: string;
  themeToggleLabel: {
    dark: string;
    light: string;
  };
  mobileMenuLabel: {
    open: string;
    close: string;
  };
}

export interface SectionCopy {
  eyebrow: string;
  title: string;
  intro: string;
}

export interface CallToAction {
  label: string;
  path: string;
  variant: "primary" | "secondary" | "ghost";
}

export interface Highlight {
  title: string;
  description: string;
}

export interface PhilosophyItem {
  title: string;
  description: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  shortBio: string;
  longBio: string[];
  homeHighlights: Highlight[];
  philosophy: PhilosophyItem[];
  ctas: CallToAction[];
}

export interface ExperienceEntry {
  period: string;
  role: string;
  company: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillGroup {
  title: string;
  summary: string;
  skills: string[];
}

export interface ProjectEntry {
  name: string;
  slug: string;
  description: string;
  problem: string;
  stack: string[];
  highlights: string[];
  outcome: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface HomePageCopy {
  heroEyebrow: string;
  heroNote: string;
  strengths: SectionCopy;
  featuredProjects: SectionCopy;
  approach: SectionCopy;
  contactPrompt: {
    title: string;
    body: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
}

export interface AboutPageCopy {
  hero: SectionCopy;
  philosophy: SectionCopy;
}

export interface ExperiencePageCopy {
  hero: SectionCopy;
}

export interface SkillsPageCopy {
  hero: SectionCopy;
}

export interface ProjectsPageCopy {
  hero: SectionCopy;
}

export interface ContactPageCopy {
  hero: SectionCopy;
  methodsTitle: string;
  form: {
    title: string;
    intro: string;
    fields: {
      name: string;
      email: string;
      message: string;
    };
    submitLabel: string;
    successTitle: string;
    successBody: string;
    validation: {
      name: string;
      email: string;
      message: string;
    };
  };
}
