import type { NavItem, SiteMeta } from "../types";

export const navigation: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Experience", path: "/experience" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export const siteMeta: SiteMeta = {
  monogram: "LN",
  availability: "Available for architecture-heavy product and platform work.",
  footerNote: "Building systems that actually survive production.",
  footerLocation:
    "Based in Sweden, working across cloud and hybrid environments.",
  skipLinkLabel: "Skip to main content",
  themeToggleLabel: {
    dark: "Switch to dark mode",
    light: "Switch to light mode",
  },
  mobileMenuLabel: {
    open: "Open navigation",
    close: "Close navigation",
  },
};
