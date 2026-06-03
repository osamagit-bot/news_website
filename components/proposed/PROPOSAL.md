This folder contains a non-destructive proposal to consolidate related component code and data into single files per feature.

Files created:
- `Hero.tsx` — combines hero data and the hero slider UI into one file (client component).
- `FeaturedPosts.tsx` — combines featured-posts data and UI into one file.
- `index.ts` — barrel export for the proposed components.

Notes:
- These files live under `components/proposed/` so your current imports remain unchanged. If you like the changes, I can move/rename them to replace existing files and update imports.
- Next steps: create other consolidated feature files, run a global import-update, and run lint/type-check.
