# The Absaroka State Archives

An independent, 1920s-inspired archive for the fictional **Absaroka** RedM political roleplay server. Built with **Astro**, **GitHub Pages**, **Pages CMS**, and **Pagefind**.

## What is included

- Period-themed public homepage, roster, people and organizations directories, archive index, laws, timeline, record pages, and full-text search.
- **56 starter entries** in five editable content collections, including dated public-source summaries and clearly marked uncertainties.
- Eight optimized copies of player-provided original posters and public statements (see `SOURCES.md`).
- `.pages.yml` ready for the hosted Pages CMS browser editor, including a government roster editor.
- GitHub Pages deployment workflow, with automatic rebuild on every merge or commit to `main`.
- Related-record navigation, status labels, mobile navigation, accessible semantic sections, and client-side index filters.

## Publish on GitHub Pages (beginner guide)

1. Create a free **public** GitHub repository named `absaroka-state-archives`. Keep it empty (don't generate a README during creation).
2. Unzip this project on your computer.
3. In the unzipped project folder, run:

   ```sh
   git init
   git add .
   git commit -m "Launch Absaroka State Archives"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/absaroka-state-archives.git
   git push -u origin main
   ```

   Replace `YOUR-USERNAME` with your actual GitHub username. GitHub Desktop is also an option if you prefer not to use the terminal.
4. Open GitHub repository **Settings → Pages → Build and deployment → Source: GitHub Actions**.
5. Open **Actions** and inspect the `Deploy Absaroka State Archives` workflow. It runs `npm install`, `npm run build` (Astro + Pagefind), and publishes the compiled `dist/` directory.
6. Your published address will be `https://YOUR-USERNAME.github.io/absaroka-state-archives/` (assuming the repository name above).

GitHub Pages deploys a public static site; **you do not need a personal server**. The workflow infers the repository name and username in GitHub Actions and calculates the appropriate Astro `base` path automatically. If you rename the repository, it will adapt after redeployment.

### Root-domain and custom-domain hosting

If you use a special GitHub repo named `YOUR-USERNAME.github.io`, the site base is `/`. To publish at a purchased custom domain, set `SITE_URL` and `SITE_BASE=/` in the workflow environment and configure GitHub Pages custom-domain DNS. Normal free GitHub Pages does not require a domain purchase.

## Turn on browser editing (Pages CMS)

1. Visit https://app.pagescms.org/ and sign in with GitHub.
2. Approve the Pages CMS GitHub App for your archive repository (install/authorize when prompted).
3. Choose your repository and `main` branch. Pages CMS finds `.pages.yml` at the root.
4. Choose the collection you want to update: **People**, **Organizations**, **Statements & newspapers**, **Legislation**, **Timeline events**, or **Government roster snapshot**.
5. Create an entry, add a summary, date label, source classification, image, tags, related record IDs, and rich-text content. Click **Save**.
6. Pages CMS commits your changes to GitHub. When committed to `main`, GitHub Actions rebuilds the site and Pagefind search index.

**Owners and approved editors only:** Use GitHub repository access or Pages CMS collaborator invitations for trusted contributors. Editing is not public. The public website has no login or submission form.

### What to enter in fields

- **Display date:** Use `October 1922`, `1923 (exact date unknown)`, or `Undated` as appropriate.
- **Sorting date:** Optional `YYYY-MM-DD`. If only a month is known, use day `01` *for sorting* but keep the display date month-only. If no year is known, leave it empty.
- **Source classification:** `Official record`, `Original document`, `Attributed claim`, `Disputed / unverified`, or `Proposal / experimental`.
- **Related record slugs:** Enter the filename without `.md`, such as `henry-whitcombe` or `vargas-class-not-color`. Cross-collection links work as long as the ID is unique. Do not reuse slugs in another collection.
- **Published:** Unchecking hides a record from the generated website, but **does not make it confidential** in a public Git repository.
- **Image:** Upload a scan through the browser media picker. Files are stored under `public/media` and appear on the public site.
- **Body:** Include the claims, their attribution, missing evidence, and the document's historical context. Source scans are preserved separately.

## Local development

Install Node.js **20 or newer**, then run:

```sh
npm install
npm run dev
```

Open the local Astro URL shown by the command. To test the complete production site and real Pagefind search index:

```sh
npm run build
npm run preview
```

Pagefind indexes the compiled `dist/` HTML after Astro builds. Full-text search **does not work during `npm run dev`** until a production build exists.

## Project layout

```text
.pages.yml                      Pages CMS editor schema
astro.config.mjs                Static build + GitHub base URL handling
.github/workflows/deploy.yml   Automatic GitHub Pages publish
src/content.config.ts          Astro/Zod schemas for the five collections
src/content/people/           Politician and citizen biographies
src/content/organizations/    Party and association profiles
src/content/publications/     Scanned statements, letters, newspapers
src/content/legislation/      Bills, acts, resolutions, procedural manual
src/content/events/           Time-indexed historical events
src/data/roster.json           Dated officeholder snapshot, CMS-editable
src/pages/                     Public pages and individual record routes
src/styles/global.css          1920s theme and responsive styling
public/media/                  Optimized player-supplied source images
```

## Important editorial rules

**Never present an opponent's propaganda as a proven crime.** Always keep the original publication, date, issuer, allegations, and gaps in evidence separate. Distinguish player-confirmed character background from AI-created experimental backstory. The project is fictional and does not claim to represent a real government.

See `CONTENT_GUIDE.md` for workflows, and `SOURCES.md` for the initial poster attribution.

## Notes about limitations

- The initial collection is **sample populated**, not a full import of all earlier Discord media, broadcasts, or legislative files.
- A GitHub Pages site is static: no real user accounts, server-side database, or private information storage. Pages CMS handles authorized editing *outside* the public site.
- Source image uploads must be yours to publish or otherwise authorized.
- Very large audio and video files are better linked from an appropriate external host than stored in the repository.
