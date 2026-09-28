# techover.pro

Marketing site for SME web development services, built with Astro and Tailwind CSS 4. It includes service/pricing sections, a data-driven project showcase, WhatsApp contact links, and a TikTok profile link in the footer.

## Requirements

- Node.js 22.12 or newer
- pnpm 11.5.2 (see `packageManager` in `package.json`)

## Development

```sh
pnpm install
pnpm dev
```

Astro serves the site at `http://localhost:4321`. Run `pnpm check` for Astro and TypeScript diagnostics, `pnpm test:e2e` to build the production site and run browser smoke tests, and `pnpm build` to create the production site in `dist/`. Use `pnpm preview` to inspect a production build locally.

## Project Structure

- `src/pages/index.astro` composes the single-page site.
- `src/components/` contains reusable page sections and cards.
- `src/data/` holds showcase project and contact data.
- `src/assets/` contains images processed by Astro during the build.
- `public/` contains static files copied without transformation.
- `tests/` contains Playwright browser smoke tests.
- `wrangler.json` configures Cloudflare Workers static assets from `dist/`.

## Editing the Showcase

Add or update project entries in `src/data/showcaseProjects.ts`. Store local showcase images under `src/assets/showcase/`; Astro generates responsive AVIF/WebP variants for the cards. Keep descriptive alt text and a valid live-site URL for each project.

## Deployment

GitHub is connected to Cloudflare Workers for deployment. A successful `pnpm build` must produce `dist/`, which Wrangler serves as static assets. Keep runtime requirements compatible with the static asset configuration.
