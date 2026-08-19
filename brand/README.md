# Brand assets

Two source files, both supplied directly by the brand owner:

- `DnR-Dispatch-Research-Brand.pdf` (v1.0) — the full portrait brand sheet:
  mark + "DnR" wordmark + "Dispatch Research" subtitle + tagline.
- `DnR-Logo-Mark-landscape.pdf` — a dedicated, more tightly-composed export
  of the mark alone (no wordmark), on a landscape card. This is the
  **current source of truth for the mark** — cleaner crop than pulling it
  out of the full poster, so everything mark-only is derived from this one.

Derived files kept here for reference:

- `dnr-dispatch-research-brand.png` — full brand sheet rasterized at
  2480×3508 (the sheet's own labeled size).
- `lockup-crop.png` — full vertical lockup (mark + wordmark + subtitle +
  tagline), cropped from the brand sheet PDF.
- `logo-mark-master.png` — the mark alone, cropped square (2184×2184) from
  the landscape PDF. This is the master every `public/` icon asset is
  resized from.

This folder isn't served by the site (only `public/` is) — it's kept so
future crops/exports don't need to go back to the PDFs.

## What's in public/, and how it maps back here

| `public/` file | Derived from | Notes |
|---|---|---|
| `logo-mark.png` | `logo-mark-master.png` (512×512) | Used by `CompassMark.astro` — the in-page nav/masthead/drawer icon |
| `favicon.png` / `favicon-32.png` / `apple-touch-icon.png` | `logo-mark-master.png` | Browser tab + home-screen icons |
| `og-image.png` | `logo-mark-master.png` + a text crop of the wordmark/subtitle/tagline from the brand sheet PDF | Recomposed as a 1200×630 landscape card (source is portrait) on the brand's own navy, `#080D1C` — matches the site's `--ink` token exactly |

`CompassMark.astro` used to be a hand-drawn SVG approximation (the PDFs
turned out to be flattened raster images, not vector paths, so there was
no vector source to trace). It now renders the real `logo-mark.png`
instead.

## Pending

More brand components may still arrive. When they do, drop the source
file(s) here and re-derive whatever `public/` assets they should replace,
following the mapping above.
