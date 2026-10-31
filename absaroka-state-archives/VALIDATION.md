# Build and Validation Notes

## Checks completed in the creation environment

- 56 Markdown records parsed with YAML frontmatter.
- Astro shared content-schema fields matched by Pages CMS editor fields.
- All 56 cross-record references resolved to record filenames (no missing IDs).
- All eight imported source-image paths resolved under `public/media`.
- `.pages.yml`, `src/data/roster.json`, `package.json` parsed successfully.
- TypeScript source and Astro frontmatter were parsed syntactically using the TypeScript compiler; no syntax diagnostics.
- A standalone static preview was generated from the exact same content and CSS, resulting in 65 HTML pages.
- All root-relative local links and images in that preview were checked (no broken paths).
- The preview's inline JavaScript was syntax-checked (no errors).

## What was NOT run here

**The Astro production build and live Pages CMS authentication were not executed.** The artifact creation container could not resolve the public npm registry, preventing dependency installation. The included GitHub Actions workflow will install the pinned package dependencies on GitHub's runners and run `npm run build`, including the Pagefind index.

If GitHub Actions detects a build error after upload, use the full error message to correct the source. The separate static preview is visual validation, not a substitute for testing Astro + Pagefind on a network-enabled runner.

## Publication review

The site is an initial *curated sample* assembled from the player's supplied history, not a full original Discord archive. Some entries are source summaries without an accompanying original image. Review rights to post original images and any unresolved lore before public launch.
