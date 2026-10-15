# Spec Kit - Project Operating Rules & Constitution

> **CRITICAL DIRECTIVE FOR ALL AI AGENTS & SESSIONS:**
> This repository is strictly governed by **GitHub Spec Kit (Specification-Driven Development)**.
> You MUST automatically adhere to this framework from the very start of every conversation without requiring the user to remind you.

---

## 1. Project Architecture & Layout

- **Workspace Root**: Current directory (`angelas-project/` or parent `angela-project/`)
- **Application Code**: `src/` (Vite + React 18 + Vanilla CSS Design System)
- **Spec Kit System**:
  - Memory & Constitution: `.specify/memory/constitution.md`
  - Integration Config: `.specify/integration.json` & `.specify/init-options.json`
  - Active Specifications: `specs/001-academic-portfolio/`
    - `spec.md` (Formal feature requirements & structure)
    - `plan.md` (Architecture & implementation plan)
    - `tasks.md` (Task tracking & execution breakdown)
  - Customization Skills: `.agents/skills/speckit-*` (10 official Spec Kit skills)

---

## 2. Mandatory Rules for All Chat Sessions

1. **Always Recognize Spec Kit**:
   - Never assume this is an unguided or ad-hoc project.
   - The project constitution in `.specify/memory/constitution.md` is the supreme law of design and architecture for this repository.

2. **Core Principles from Constitution**:
   - **Academic Rigor & Semantic Structure**: Terminology must reflect university-level educational quality (RED, Modelos de Calidad, Criterios de Evaluación, UDES).
   - **Minimalist, Clean & Accessible Design**: High contrast, readable typography, generous spacing, zero clutter.
   - **Static-First & Zero Heavy Backend**: Pure static client-side React + Vite architecture.
   - **Component Modularity & Maintainability**: Clean, decoupled components and centralized structured data in `portfolioData.js`.

3. **Feature & Code Evolution**:
   - When modifying or adding features, always respect the 5 primary pages and 2 subpages defined in `specs/001-academic-portfolio/spec.md`:
     1. *Inicio* (`Home.jsx`)
     2. *Modelos de evaluación y RED* (`ModelsOverview.jsx`)
        - Subpágina 2.1: *Seleccionando modelos* (`ModelSelection.jsx`)
        - Subpágina 2.2: *Recursos educativos digitales* (`DigitalResources.jsx`)
     3. *Rediseño* (`Redesign.jsx` — Modelo PERT-RED)
     4. *Aplicación de Modelos de Evaluación* (`EvaluationApplication.jsx` — Presentación PPTX y documento DOCX)
     5. *Referencias* (`References.jsx`)
   - Keep `specs/001-academic-portfolio/tasks.md` updated as tasks progress.

4. **Use Spec Kit Skills When Appropriate**:
   - Utilize `/speckit-specify`, `/speckit-plan`, `/speckit-tasks`, `/speckit-implement`, `/speckit-analyze`, `/speckit-clarify` for structured spec-driven tasks.
