# Academic Portfolio Project Constitution

## Core Principles

### I. Academic Rigor & Semantic Structure
All content must follow high educational standards, clear academic terminology (RED - Recursos Educativos Digitales, Modelos de Calidad de Software, Criterios de Evaluación), and clear hierarchical structure (5 main pages and 2 subpages).

### II. Minimalist, Clean & Accessible Design
The user interface must prioritize readability, low cognitive load, and subtle modern aesthetics (clean typography, thoughtful spacing, soft neutral tones with indigo/slate accents, WCAG AA contrast). No visual clutter or unnecessary animations that detract from academic content.

### III. Static-First & Zero Heavy Backend
The application is entirely static and client-side, ensuring lightning-fast load times, complete portability, zero runtime server dependencies, and smooth deployment to GitHub Pages or local Docker containers.

### IV. Component Modularity & Content Maintainability
Each section, page, subpage, evaluation rubric, and reference item is structured as a clear, maintainable React component. Content blocks (authors, teacher, university, models, evaluation matrices) should be easy for educators and students to customize.

### V. Containerization & Reproducibility
The project must include complete Docker and Docker Compose configuration allowing anyone to spin up the local development or production preview environment instantly on custom ports without dependency friction.

---

## Technical Architecture & Constraints

- **Core Framework**: React 18+ with Vite (lightweight, rapid HMR).
- **Styling**: Vanilla CSS / CSS Design System with CSS variables for clean theming and total flexibility.
- **Icons**: Lucide React for consistent, lightweight iconography.
- **Deployment**: Static build targeting GitHub Pages (`gh-pages` / GitHub Actions workflow).
- **Local Runtime**: Docker Compose containerized environment with custom port binding (e.g. `8085:80` for Nginx production build or `3030:5173` for Vite dev mode).

---

## Governance & Quality Gates

- **Structure Compliance**: The 5 pages and 2 subpages specified in the requirements must always be accessible and clearly mapped in the navigation menu.
- **Spec-Driven Consistency**: Any major architectural addition or feature must be preceded by a corresponding specification update in `specs/`.
- **Responsive Layout**: The website must render cleanly on mobile phones, tablets, and desktop displays.

**Version**: 1.0.0 | **Ratified**: 2026-09-11 | **Status**: Active
