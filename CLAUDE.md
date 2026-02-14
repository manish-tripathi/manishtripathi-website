# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev          # Start Vite dev server (http://localhost:5173)
npm run build        # Production build to dist/
npm run preview      # Preview production build locally
npm run lint         # ESLint (v8 flat config)
npm run typecheck    # TypeScript type checking (tsc --noEmit)
```

## Architecture

This is a **static portfolio website** — React 18 + TypeScript + Vite + Tailwind CSS. No backend or API calls. All content lives in `constants.ts`.

### Data Flow

`constants.ts` is the single source of truth for all displayed content (profile, experience, education, skills, projects, social links). Types are defined in `types.ts`. Components import data directly from constants — there is no state management library or data fetching.

### Routing

`App.tsx` uses **HashRouter** with three routes:
- `/` → `HomePage` (Hero + Skills sidebar + Experience/Education) wrapped in `MainLayout`
- `/projects` → `ProjectsGrid` wrapped in `MainLayout`
- `/resume` → `ResumeView` (standalone, no navbar/footer — optimized for print)

`MainLayout` provides the Navbar, content outlet, and Footer. Dark/light mode state lives in `App.tsx` and is passed down via props.

### File Organization

Source files are at the **project root** (no `src/` directory). Components in `components/`, hooks in `hooks/`.

### Animation System

Scroll-triggered animations use a custom `hooks/useInView.ts` (IntersectionObserver wrapper) and `components/AnimateIn.tsx` (reusable wrapper). CSS keyframes and animation classes are defined in `index.css`. All animations are disabled in `@media print`.

### Styling Conventions

- Tailwind CSS with class-based dark mode (`dark:` prefix)
- Every visual element must have both light and dark mode styles
- Color-coded sections: blue (Experience), violet (Skills), emerald (Education)
- Gradient utilities defined as CSS custom properties in `index.css`
- `.gradient-text` utility class for gradient text effects

### Key Constraints

- `ResumeView.tsx` must remain print-safe — no animations, A4-optimized layout
- ESLint is pinned to **v8** (v9 breaks plugin compatibility)
- Zero animation dependencies — all animations are CSS + IntersectionObserver
- The `Projects.tsx` component is unused (replaced by `ProjectsGrid.tsx`)
