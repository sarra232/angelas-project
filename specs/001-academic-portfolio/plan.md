# Technical Architecture & Implementation Plan

**Feature ID**: `001-academic-portfolio`  
**Phase**: `Plan`  
**Date**: `2026-09-11`  

---

## 1. Technical Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Core** | React 18 / 19 | Declarative component UI and state management |
| **Bundler & Build Tool** | Vite 6 | Lightning-fast HMR, optimized static rollup distribution |
| **Styling & Design System** | Modern Vanilla CSS & CSS Variables | Minimalist, clean academic design with total control and no bulky frameworks |
| **Icons** | Lucide React | Lightweight, consistent SVGs for academic UI elements |
| **Containerization** | Docker & Docker Compose | Containerized local execution on custom port (`8085:80` for Nginx or `3030:5173` for Vite dev) |
| **Hosting & CI/CD** | GitHub Pages & GitHub Actions | Automated build and static deployment on git push |

---

## 2. Directory Structure

```text
angelas-project/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions CI/CD to GitHub Pages
├── .specify/                       # GitHub Spec Kit core configurations
│   ├── memory/
│   │   └── constitution.md         # Project constitution
│   └── feature.json                # Active feature pointer
├── specs/
│   └── 001-academic-portfolio/
│       ├── spec.md                 # Functional specification
│       ├── plan.md                 # Technical plan
│       └── tasks.md                # Task breakdown
├── public/
│   └── favicon.svg                 # Academic site icon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Responsive header and navigation with dropdowns
│   │   ├── Footer.jsx              # Academic footer
│   │   ├── PageHeader.jsx          # Semantic page title and subtitle block
│   │   └── ScoreCard.jsx           # Evaluative metrics badge component
│   ├── pages/
│   │   ├── Home.jsx                # Page 1: Inicio (Portada)
│   │   ├── ModelsOverview.jsx      # Page 2: Modelos de evaluación y RED
│   │   ├── ModelSelection.jsx      # Subpage 2.1: Seleccionando modelos
│   │   ├── DigitalResources.jsx    # Subpage 2.2: Recursos educativos digitales
│   │   ├── Redesign.jsx            # Page 3: Rediseño
│   │   ├── EvaluationApplication.jsx # Page 4: Aplicación de modelo de evaluación
│   │   └── References.jsx          # Page 5: Referencias
│   ├── App.jsx                     # Top-level application shell with route state
│   ├── main.jsx                    # React bootstrap entry point
│   └── index.css                   # Minimalist academic CSS design system
├── index.html                      # HTML5 template with Google Fonts (Inter / Outfit)
├── vite.config.js                  # Vite configuration with relative base support
├── Dockerfile                      # Multi-stage production Nginx & Dev Dockerfile
├── docker-compose.yml              # Docker Compose service with custom port mapping
├── .dockerignore
└── package.json
```

---

## 3. Design System Principles

- **Typography**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `sans-serif`. Clean, readable line height (`1.6`), crisp heading hierarchy.
- **Palette**:
  - Background: `#f8fafc` (Soft off-white / light slate)
  - Surface/Cards: `#ffffff` with subtle border `#e2e8f0` and soft shadow `rgba(0, 0, 0, 0.04)`
  - Primary Accent: `#2563eb` (Academic Sapphire Blue) / Dark slate `#0f172a`
  - Text Primary: `#1e293b` (Deep Slate)
  - Text Secondary: `#64748b` (Muted Slate)
  - Success/Badge: `#059669` / `#dcfce7`
- **Component Patterns**:
  - Clean metadata summary cards for Author, Professor, University.
  - Interactive tabbed / card matrix for Quality Models (McCall, Boehm, LORI, etc.).
  - Evaluated RED showcase cards with external link buttons and badges.
  - Interactive comparison tables for Redesign (Before vs. After).
  - Scorecard rubric with visual calculation bars for Evaluation Application.

---

## 4. Docker & Local Execution Strategy

- **Custom Port**: By default, mapped to `http://localhost:8085` (can be customized via `.env` or compose file).
- **Multi-Stage Build**:
  - Stage 1: Node Alpine image compiles static assets with `npm run build`.
  - Stage 2: Nginx Alpine image serves the static assets with optimized gzip and caching headers on port 80 (mapped to host port `8085`).
  - Option 2: Live dev compose service running Vite HMR on host port `3030`.

---

## 5. Deployment Strategy (GitHub Pages)

- In `vite.config.js`, `base: './'` ensures assets resolve properly both in root deployments and subdirectory paths like `https://sarra232.github.io/angelas-project/`.
- GitHub Actions workflow `.github/workflows/deploy.yml` checks out repository, sets up Node 20+, runs `npm ci && npm run build`, and publishes artifact to GitHub Pages environment.
