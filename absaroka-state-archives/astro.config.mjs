import { defineConfig } from 'astro/config';

// GitHub Actions supplies GITHUB_REPOSITORY as "owner/repo".
// Inferring base here means project sites work without hard-coded usernames.
const [owner, repo] = (process.env.GITHUB_REPOSITORY || '').split('/');
const isRootSite = repo && owner && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const base = process.env.SITE_BASE || (repo && !isRootSite ? `/${repo}` : '/');
const site = process.env.SITE_URL || (owner ? `https://${owner}.github.io` : 'https://example.github.io');

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  markdown: { syntaxHighlight: 'shiki' },
});
