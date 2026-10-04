# Neeshan Ismath — Portfolio

A local portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Motion. No backend, database, or paid service is required.

## Run in VS Code / CMD

```cmd
cd /d "C:\ChatGPT Projects\My portfolio\portfolio"
npm install
npm run dev -- --hostname 127.0.0.1 --port 3000
```

Visit http://127.0.0.1:3000. Keep the terminal open. Ctrl+C stops the server. A restart of the PC stops it too.

## Production check

```cmd
npm run build
npm start -- --hostname 127.0.0.1 --port 3000
```

Stop the development server before starting production on the same port.

## Edit content

- `src/app/projects.ts`: selected project details, technologies, source links.
- `src/app/page.tsx`: homepage, experience, skills, contact links, and project dialogs.
- `src/app/globals.css`: theme, layouts, responsive styles, and CSS motion.
- `src/app/layout.tsx`: page title and description.
- `public/Neeshan-Ismath-CV.pdf`: downloadable original CV.
- `public/images/clip-studio.png`: screenshot from the local Clip Generator project.

Content is based on the supplied CV and the Clip Generator README/chat context. Clip Studio is labelled as an in-development local prototype. Other project visuals are conceptual diagrams, not product screenshots or measured results. Its case study describes AI-assisted development.

Contact uses email links and clipboard copy; no form submission service is configured. GitHub and LinkedIn link to the profiles in the CV. Projects without public URLs have a case study and email contact rather than a fabricated demo link.

Motion can be paused in the footer and respects the operating system's reduced-motion preference. Project dialogs support Escape, backdrop closing, native focus trapping, and keyboard controls.

## Before publishing later

This work has not modified the old repository, Vercel project, or domain. Review copy and CV download before publication. When ready, back up the old site, choose whether to replace the existing repository/deployment or create a new one, then configure a chosen domain. The old URL from the CV is a Vercel subdomain; changing that differs from buying a custom domain. No migration or domain change has been performed.

## Dependency audit

The initial registry audit reports five high-severity entries in the development-only ESLint dependency chain (`eslint-config-next` → `fast-glob` → `micromatch` → `braces`). The reported root issue is deeply nested pattern stack exhaustion. The offered automated fix downgrades Next.js lint configuration across major versions, so it was not applied. Production dependencies were not flagged in that audit. Recheck for a compatible upstream fix before publishing or changing development tooling.

## Validation completed

- Production build and TypeScript compilation pass.
- Browser reviewed at desktop, 768px tablet, and 390px mobile widths, with no page-level horizontal overflow.
- All project filter and AI/full-stack filter states checked; case study opening and Escape closing verified.
- In-page navigation targets, email copying, and motion pause/resume controls checked.
- CV URL returns a PDF and its SHA-256 matches the supplied original.
- Browser reported no runtime errors during the checks.
