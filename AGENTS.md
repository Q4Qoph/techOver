# Repository Guidelines

## Project Structure

This is a single-page Astro site. `src/pages/index.astro` composes the homepage; reusable Astro components live in `src/components/`, the document shell is `src/layouts/BaseLayout.astro`, and global Tailwind CSS starts in `src/styles/global.css`. Put public images, icons, and manifests in `public/`. There is no separate test directory or content collection.

## Development and Build

- `pnpm install` installs dependencies. Use Node.js 22.12 or newer and pnpm 11.5.2.
- Start the local server in background mode with `astro dev --background`; manage it with `astro dev status`, `astro dev logs`, and `astro dev stop`.
- `pnpm build` creates the production site in `dist/`; `pnpm preview` serves that build locally.

## Code Style

Use Astro components for page sections and keep reusable UI in `src/components/`. Follow the existing two-space indentation, descriptive PascalCase component filenames (for example, `PricingCard.astro`), and Tailwind utility classes. Keep page content and component inputs explicit; use typed `Props` interfaces when a component accepts props. Tailwind CSS 4 is integrated through Vite.

## Testing

No test framework, test files, or test script are currently configured. For changes, run `pnpm build` to check Astro compilation. For visual changes, review the affected section at mobile and desktop widths in the local preview.

## Commits and Pull Requests

Recent commits use short action-oriented subjects, with a mix of plain and `chore:` prefixes. Use a concise imperative summary, such as `Add vehicle showcase card`. Pull requests should describe the user-facing change, note how it was checked, and include before/after screenshots for visual updates.

## Deployment and Documentation

The site deploys to Cloudflare Workers through the repository's GitHub connection. `wrangler.json` serves the generated `dist/` assets. Keep changes compatible with that static asset deployment. Consult the [Astro documentation](https://docs.astro.build), especially its guides for [routing](https://docs.astro.build/en/guides/routing/), [components](https://docs.astro.build/en/basics/astro-components/), and [styling](https://docs.astro.build/en/guides/styling/).
