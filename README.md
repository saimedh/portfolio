# Aarav Mehta — AI Engineer Portfolio

React 19 + TypeScript + Vite + Tailwind CSS + Framer Motion + React Router.

## Run

```
npm install
npm run dev       # dev server
npm run build     # production build -> dist/
npm run preview   # preview the build
```

## Structure

```
src/
  components/  ui/ layout/ shared/    reusable primitives, navbar, footer
  features/    home/ projects/ contact/  page-specific sections
  pages/       route-level components
  data/        projects.ts, profile.ts — all content lives here
  hooks/       useDocumentMeta (per-page SEO)
```

## Before deploying

- Replace `public/resume.pdf` with a real resume file (referenced from About/Contact/Footer).
- Swap GitHub/LinkedIn/email URLs in `src/data/*.ts` and `Footer.tsx`/`ContactPage.tsx` for real ones.
- Add real project screenshots if desired (dashboard-style placeholder currently ships in each project card).
- Point `og:image` / `twitter:image` in `index.html` at a real cover image.
