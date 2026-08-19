# DnR Dispatch Research

Independent market research site — US Equities · Macro · Strategy. Built with
[Astro](https://astro.build), no framework runtime, static output.

This is the **Fase Training** build per the PRD: every article is fully open,
there's no login, no paywall, no payment integration. The `tier` field on each
article is stored for future-proofing only and is not enforced anywhere in
this codebase.

## Stack

- **Framework:** Astro (static output, no client-side JS framework)
- **Content:** Markdown with frontmatter, Astro content collections
- **Styling:** hand-written CSS, no utility framework — design tokens in
  `src/styles/global.css`
- **Hosting:** Cloudflare Pages (connect the GitHub repo, auto-deploy on push)
- **Email capture:** Buttondown embed form
- **Analytics:** Cloudflare Web Analytics

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Before going live — things that still need real values

1. **Buttondown username** — `src/site.config.ts` has `buttondownUsername:
   'dnrdispatch'` as a placeholder. Create the free Buttondown account first,
   then swap in the real username (used in the embed form and the footer
   link).
2. **About page bio** — `src/pages/about.astro` has a bracketed editor's note
   where the real author bio should go. Nothing invented here on purpose —
   fill it in with real, verifiable background before publishing, since it's
   the credibility anchor for a financial-research site.
3. **Cloudflare Web Analytics** — once the Pages project is connected, turn
   this on from the Cloudflare dashboard (Analytics & Logs → Web Analytics).
   It auto-injects for the domain — no code change needed. A comment marking
   where to add a manual snippet instead is in `src/layouts/BaseLayout.astro`
   if you'd rather not use the dashboard toggle.
4. **Domain** — deploys fine on the free `*.pages.dev` subdomain first;
   attach `dnrdispatch.com` in Cloudflare Pages once you're ready (per the
   roadmap, this can wait until there's real signal).

Favicon, apple-touch-icon, and og:image are done — derived from the real
`DnR-Dispatch-Research-Brand.pdf` you provided (see `brand/README.md` for
how). When more brand components arrive, drop the source file(s) in
`brand/` and re-derive whatever they should replace in `public/`.

## Content

Articles live in `src/content/articles/*.md`. Frontmatter:

```yaml
title: string
section: "markets" | "macro" | "earnings-watch" | "strategy-notes"
format: "brief" | "essay"   # not in the original PRD table — added so the
                            # homepage can separate The Brief from long-form
tier: "free" | "premium"    # stored only, not enforced in this build
author: string
dateline: string
excerpt: string
date: YYYY-MM-DD
```

`format: brief` renders as a compact wire-style row on the homepage and
section pages. `format: essay` renders as a card with an excerpt. Both use
the same article template (`src/layouts/ArticleLayout.astro`) once opened.

Five seed articles are included (3 briefs, 2 essays) across all four
sections, mixing `free` and `premium` tags, so the site isn't empty on first
deploy and both feeds have something to show.

## Deploying

1. Push this repo to GitHub (already done if you're reading this from the
   repo).
2. In Cloudflare Pages: **Create a project → Connect to Git** → select this
   repo.
3. Build command: `npm run build`. Build output directory: `dist`.
4. Deploy. Every push to the main branch redeploys automatically.

## Explicitly not built (by design)

Per the PRD, this build excludes: login/auth, a subscriber database, paywall
gating, and payment integration. Those come in a separate PRD once the
3-month training period produces a clear signal to move to Tahap B.
