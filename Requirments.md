This repository contains the source code for a modern developer portfolio website built using Next.js App Router, Tailwind CSS, and GSAP for animations.

The project is designed to be:

Scalable

Animation-friendly

AI-maintainable (components isolated for easy regeneration)

Clean and modular

Fast and SEO-friendly

This document defines the architecture, folder structure, component responsibilities, content sources, and requirements for contributors or AI systems generating new code.

📁 2. Folder Structure Specification
portfolio/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── api/
│       └── contact/route.ts
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   │
│   ├── animations/
│   │   ├── useHeroAnimation.ts
│   │   ├── useSectionReveal.ts
│   │   └── gsapConfig.ts
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SectionTitle.tsx
│   │
│   └── utils/
│       ├── cn.ts
│       └── constants.ts
│
├── public/
│   ├── images/
│   │   ├── hero-bg.png
│   │   ├── project1.png
│   │   └── project2.png
│   └── icons/
│       └── logo.svg
│
├── styles/
│   └── animations.css
│
├── lib/
│   └── email.ts
│
├── hooks/
│   └── useMediaQuery.ts
│
├── data/
│   ├── services.ts
│   ├── projects.ts
│   └── skills.ts
│
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js

📌 3. Functional Requirements
3.1 Pages / Routes
Path	Description
/	Home page containing all sections
/api/contact	(Optional) Route handler for sending contact form messages
📌 4. Component & Folder Responsibilities
4.1 app/
layout.tsx

Root wrapper for all pages

Includes global metadata, fonts, and <html>/<body> structure

page.tsx

Home page entry

Imports and renders all section components in order

globals.css

Tailwind directives, base styles, resets

api/contact/route.ts

Optional server route to handle form submissions

Connected to lib/email.ts

4.2 components/layout/
Header.tsx

Contains site logo, navigation links

Sticky behavior optional

Navbar.tsx

Mobile navigation menu

Smooth scroll to sections

Footer.tsx

Social links, copyright, contact info

4.3 components/sections/

Each file is a top-level page section.

Component	Purpose
Hero.tsx	Main landing section, GSAP intro animations
Services.tsx	Grid of service offerings, uses data/services.ts
Projects.tsx	Project showcase, uses ProjectCard & data/projects.ts
Skills.tsx	Skills & tech stack grid
About.tsx	Personal bio section
Contact.tsx	Contact form UI

All sections use SectionTitle and GSAP reveal animations.

4.4 components/animations/
File	Description
useHeroAnimation.ts	GSAP timeline for hero text and image animations
useSectionReveal.ts	ScrollTrigger-based section entrance animation
gsapConfig.ts	Registers GSAP plugins and default configs

All GSAP logic is centralized for clarity.

4.5 components/ui/

Reusable, atomic UI elements.

Component	Purpose
Button.tsx	Standard button component with variants
ProjectCard.tsx	Displays project image, title, tags
SectionTitle.tsx	Shared title/subtitle wrapper for sections

These components allow you or AI to maintain consistency.

4.6 components/utils/
cn.ts

Utility to merge Tailwind class names

Based on clsx or a custom implementation

constants.ts

Static site-wide strings (taglines, headings, etc.)

Can be replaced dynamically

4.7 public/

Contains static assets:

images/ → project screenshots, hero background

icons/ → SVG logos & social media icons

These files do not require imports due to Next.js static handling.

4.8 styles/
animations.css

Fallback CSS animations

Used for minimal animations that do not require GSAP

4.9 lib/
email.ts

Helper for sending email via SMTP, Resend, SendGrid, etc.

Used by /api/contact

4.10 hooks/
useMediaQuery.ts

Custom hook to detect breakpoints (mobile, desktop)

Great for animation conditions

4.11 data/

Stores structured content separated from UI.

File	Contains
projects.ts	Project data array used by Projects.tsx
services.ts	List of services shown in Services section
skills.ts	Skills list used by Skills.tsx

This allows AI to modify portfolio content without touching UI code.

📌 5. Technical Requirements
5.1 Framework

Next.js 13/14+ (App Router)

TypeScript enabled

5.2 Styling

TailwindCSS for:

Layout

Colors

Typography

Responsive design

5.3 Animations

GSAP (GreenSock)

Plugins:

ScrollTrigger

EasePack

Used for:

Hero intro animation

Section reveal animations

Smooth staggering effects

Optional:

Framer Motion for subtle UI transitions

5.4 Performance Requirements

Images must use <Image /> with optimized formats

Lazy-load GSAP-heavy elements

No blocking scripts

Maintain CLS < 0.1, LCP < 2.5s

📌 6. Content Requirements

Data-driven files (projects.ts, services.ts, skills.ts) must include:

Example project format:
{
  id: 1,
  title: "My Project",
  description: "Short description...",
  image: "/images/project1.png",
  tags: ["Next.js", "Tailwind", "GSAP"],
  url: "https://example.com"
}

📌 7. Development Guidelines
Code Style

Use TypeScript everywhere

Each component:

Default export

Functional component

Minimal state

AI Code Generation Rules

Do NOT merge unrelated logic

Modify only the file requested

Use existing folder structure

Keep animations inside /animations folder

Keep all content editable in /data folder

📌 8. Deployment Requirements

Deploy using Vercel

Build command: next build

Environment variables stored in .env.local

Ensure GSAP SSR compatibility using useEffect or dynamic imports

📌 9. Future Enhancements

Dark/Light mode

Blog or case studies page

Animating transitions between pages

Add 3D models using Three.js (optional)