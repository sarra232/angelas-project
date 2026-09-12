# Task Breakdown: Academic Portfolio Implementation

**Feature ID**: `001-academic-portfolio`  
**Status**: `Completed`  

---

## Phase 1: Spec Kit & Project Scaffolding
- [x] **TASK-01**: Initialize GitHub Spec Kit (`.specify/`) and configure project constitution.
- [x] **TASK-02**: Author formal specification (`spec.md`), technical architecture (`plan.md`), and task breakdown (`tasks.md`).
- [x] **TASK-03**: Create base `package.json`, `vite.config.js`, `index.html` and install core dependencies (`react`, `react-dom`, `lucide-react`, `vite`).

## Phase 2: Design System & Shared Components
- [x] **TASK-04**: Implement minimalist academic design system in `src/index.css` (variables, typography, cards, badges, tables, responsive utilities).
- [x] **TASK-05**: Build responsive navigation component (`Navbar.jsx`) with mobile drawer and subpage dropdown/pill selector.
- [x] **TASK-06**: Build academic header (`PageHeader.jsx`) and footer (`Footer.jsx`).

## Phase 3: Page Implementation (All 5 Pages & 2 Subpages)
- [x] **TASK-07**: Implement **Página 1: Inicio** (`Home.jsx`) — Cover section with activity title, author(s), professor, university metadata cards, and quick navigation modules.
- [x] **TASK-08**: Implement **Página 2: Modelos de evaluación y RED** (`ModelsOverview.jsx`) — Theoretical foundations, quality dimensions, and links to subpages.
- [x] **TASK-09**: Implement **Subpágina 2.1: Seleccionando modelos** (`ModelSelection.jsx`) — Comparative model cards (McCall, Boehm, FURPS, LORI, COdA) and selection justification.
- [x] **TASK-10**: Implement **Subpágina 2.2: Recursos educativos digitales** (`DigitalResources.jsx`) — Concepts, standards, and inventory cards of evaluated REDs.
- [x] **TASK-11**: Implement **Página 3: Rediseño** (`Redesign.jsx`) — Pedagogical/technical enhancement proposals and before-vs-after comparison tables.
- [x] **TASK-12**: Implement **Página 4: Aplicación de modelo de evaluación** (`EvaluationApplication.jsx`) — Evaluation matrix, scored criteria, progress bars, and synthesis.
- [x] **TASK-13**: Implement **Página 5: Referencias** (`References.jsx`) — APA 7th edition formatted bibliographic references and external repository links.

## Phase 4: Docker Containerization (Custom Port)
- [x] **TASK-14**: Create multi-stage `Dockerfile` with Nginx Alpine static serving.
- [x] **TASK-15**: Create `docker-compose.yml` with configurable custom port mapping (`8085:80` for web and `3030:5173` for dev) and `.dockerignore`.

## Phase 5: GitHub Actions & Pages Deployment
- [x] **TASK-16**: Create `.github/workflows/deploy.yml` for automated GitHub Pages static deployment on push.
- [x] **TASK-17**: Verify local build (`npm run build`) and Docker container execution (`docker compose up` -> `http://localhost:8085`).
