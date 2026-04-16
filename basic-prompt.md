You are an expert senior frontend engineer and UI/UX designer.

Your task is to generate a complete, production-ready personal portfolio website as a React + Vite SPA using TypeScript.

---

# 🎯 GOAL

Build a clean, modern, minimal personal website that presents:

- Who I am
- My competences
- My experience
- Selected projects
- Contact information

The site should feel professional, technical, and pragmatic — not flashy or gimmicky.

---

# ⚙️ TECH REQUIREMENTS

- Framework: React
- Bundler: Vite
- Language: TypeScript
- Styling: TailwindCSS
- Routing: react-router
- State management: React hooks only (no Redux or heavy libraries)
- Icons: lucide-react (or similar lightweight library)

---

# 📁 PROJECT STRUCTURE

Generate a complete project including:

- vite config
- tsconfig
- package.json
- Tailwind setup
- Folder structure:

/src
/components
/pages
/data
/types
/hooks
/layout

---

# 🧱 APP STRUCTURE

The app is a Single Page Application with routing.

Layout:

- Sticky Navbar
- Main content (router outlet)
- Minimal Footer

Routes:

- "/": Home
- "/about": About
- "/experience": Experience
- "/skills": Skills
- "/projects": Projects
- "/contact": Contact

---

# 🎨 DESIGN GUIDELINES

- Style: clean, modern, minimal
- Color scheme: neutral (gray/white/black) + one accent color
- Typography: sans-serif
- Spacing: generous whitespace
- Animations: subtle only (fade-in, hover effects)
- Fully responsive (mobile-first)

Avoid:

- Overly complex animations
- Heavy gradients
- "Startup landing page" clichés

---

# 🧩 COMPONENTS (REUSABLE)

Create reusable components:

- Navbar
- Footer
- SectionWrapper
- Card
- TimelineItem (for experience)
- SkillBadge
- ProjectCard
- Button

Components must be:

- Small
- Typed with TypeScript
- Reusable
- Cleanly separated

---

# 📄 PAGE DETAILS

## 🏠 Home

- Hero section:
  - Name: Lars Nyström
  - Title: Full-stack developer / Solution architect
  - Tagline: "Building systems that actually survive production"
  - CTA buttons: "View Projects", "Contact"

- Highlights:
  - Backend development
  - System architecture
  - Cloud & DevOps
  - Integrations

- Short bio:
  Full-stack developer with a strong backend and architecture focus, experienced in building integration-heavy systems across hybrid cloud and on-prem environments.

---

## 👤 About

Include:

- Longer bio (expand from short bio)
- Work philosophy:
  - Pragmatic over theoretical
  - Build vs buy awareness
  - Focus on maintainability and real-world constraints

---

## 💼 Experience

Create a timeline (latest first).

Example entries:

- Role: Developer / Architect
- Responsibilities:
  - Designing internal platforms
  - Integration-heavy systems
  - Hybrid cloud/on-prem solutions

- Tech:
  - .NET, Azure, MSSQL, Docker

Use reusable TimelineItem component.

---

## 🧠 Skills

Group skills into categories:

### Backend

- C#
- .NET
- REST APIs
- SOAP integrations
- Authentication (OAuth2, Azure AD)

### Frontend

- Vue (Quasar)
- React
- SPA architecture

### Cloud & DevOps

- Azure
- Azure App Registrations
- Application Insights
- CI/CD
- Docker

### Architecture

- System design
- Scalability
- Integration patterns

---

## 🚀 Projects

Create 3–5 example projects with realistic data:

Each project should include:

- Name
- Description
- Problem solved
- Tech stack
- Highlights

Example themes:

- Integration platform
- Internal tooling
- Hybrid cloud system
- Hardware/IoT side project

---

## 📬 Contact

Include:

- Email (placeholder)
- GitHub (placeholder)
- LinkedIn (placeholder)

Optional:

- Simple contact form (no backend required)

---

# 📊 DATA HANDLING

- Store all content in structured files under /data (JSON or TS objects)
- Do NOT hardcode content inside components
- Strong typing for all data structures

---

# 🧠 CODE QUALITY REQUIREMENTS

- Use functional components only
- Use TypeScript properly (no "any")
- Clean folder structure
- Avoid duplication
- Follow best practices for React

---

# 🚀 OUTPUT REQUIREMENTS

You must:

1. Generate the FULL project code

2. Include all files (not snippets)

3. Ensure it runs with:
   npm install
   npm run dev

4. Include brief setup instructions at the end

---

# ⚠️ IMPORTANT

- Do NOT skip files
- Do NOT simplify structure
- Do NOT leave placeholders like "TODO"
- Make it realistic and usable immediately

---

# 🧩 BONUS (if time permits)

- Add dark mode toggle
- Add smooth scroll navigation
- Add simple animation using Framer Motion

---

Build the entire project now.
