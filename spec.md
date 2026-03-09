# Tru Bond Back Cleaning Perth

## Current State

The app has: Home, About, Contact, Services (overview), and 6 service detail pages (BondCleaningPage, CarpetSteamPage, OvenKitchenPage, WindowCleaningPage, BathroomToiletPage, WallWashingPage). Routes are defined in App.tsx. A shared `ServicePageLayout` component handles the hero + content + sidebar structure. A `useMetaTags` hook handles per-page SEO tags. Header and Footer are shared. WhatsApp button is floating on all pages.

## Requested Changes (Diff)

### Add
- 10 dedicated suburb pages, one per Perth suburb:
  1. Subiaco (`/suburbs/subiaco`)
  2. Fremantle (`/suburbs/fremantle`)
  3. Joondalup (`/suburbs/joondalup`)
  4. Rockingham (`/suburbs/rockingham`)
  5. Mandurah (`/suburbs/mandurah`)
  6. Armadale (`/suburbs/armadale`)
  7. Midland (`/suburbs/midland`)
  8. Osborne Park (`/suburbs/osborne-park`)
  9. Baldivis (`/suburbs/baldivis`)
  10. Clarkson (`/suburbs/clarkson`)
- Each suburb page must have:
  - Unique `<title>`, meta `description`, `keywords`, Open Graph tags, canonical URL via `useMetaTags`
  - ~400 words of SEO-optimised content written in Australian English, active voice, simple enough for a 10-year-old to understand, semantically skimmable (H2 subheadings, bullet lists)
  - A reusable `SuburbPageLayout` component (similar to `ServicePageLayout`) with: hero banner with suburb name, main content area (prose), sidebar with pricing guide + "Get Free Quote" CTA + WhatsApp link
  - An internal link from the Home page to each suburb page (a new "Areas We Serve" section between the Testimonials and FAQ sections, displayed as a grid of suburb links)
- Routes for all 10 suburb pages registered in `App.tsx`
- Footer updated to include suburb links under a new "Areas We Serve" column

### Modify
- `HomePage.tsx` — add a new "Areas We Serve" section with a grid of suburb links (internal links for SEO)
- `App.tsx` — register 10 new suburb routes
- `Footer.tsx` — add suburb links column

### Remove
- Nothing removed

## Implementation Plan

1. Create `src/frontend/src/components/SuburbPageLayout.tsx` — reusable layout for all suburb pages (hero, content, pricing sidebar, CTA)
2. Create `src/frontend/src/pages/suburbs/` directory and create one file per suburb (10 files total), each with unique content, SEO meta tags, and `SuburbPageLayout`
3. Update `App.tsx` — import all 10 suburb pages, create routes, add to routeTree
4. Update `HomePage.tsx` — add "Areas We Serve" section with grid of internal links to all 10 suburb pages (positioned between Testimonials and FAQ)
5. Update `Footer.tsx` — add "Areas We Serve" links column for additional SEO link equity
6. Validate and ensure no TypeScript or lint errors
