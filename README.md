# Arrows Go Astro Version

Standalone Astro website for **Arrows Go**, featuring **Remove All Arrows**, a free browser arrow puzzle game.

## Included

- Astro static site with home, play, games, blog, FAQ, about, contact, legal, sitemap, and support pages.
- Embedded Playgama Remove All Arrows wrapper at `public/game/index.html`.
- Main playable route loaded through `/game/index.html`.
- Related games directory under `/games/`.
- SEO metadata, canonical URLs, JSON-LD schema, robots, and XML/HTML sitemaps.
- Arrows Go favicon, apple touch icon, and Open Graph artwork.

## Setup

```bash
npm install
npm run dev
```

Set production values in `.env`. `SITE_URL` must be the final public origin so Astro can generate correct sitemap URLs:

```bash
SITE_URL=https://arrowsgo.com
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
PUBLIC_GTM_ID=GTM-XXXXXXX
```

Core site identity lives in `src/data/siteConfig.ts`.
Page copy and page-level SEO live in `src/data/pageContent.ts`.
Route SEO and schema helpers live in `src/data/seo.ts`.
Related games live in `src/data/externalGames.ts`.
Blog articles live in `src/data/articles.ts`.
