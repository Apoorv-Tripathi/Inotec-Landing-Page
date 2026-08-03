# INOTEC Corporate Website

React + Vite rebuild of the INOTEC site — original design, real company content.

## Setup

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build → dist/
```

## Images you need to add

Drop real photos into `src/assets/images/` using these exact filenames
(referenced directly from `src/data/siteData.js`):

- `hero-tyre-inflator.jpg`
- `hero-nitrogen.jpg`
- `hero-government.jpg`
- `hero-engineers.jpg`
- `hero-calibration.jpg`
- `about-facility.jpg`
- `product-di-3000.jpg`
- `product-wm-2100.jpg`
- `product-ac-500.jpg`
- `gallery-01.jpg` … `gallery-06.jpg`

Until real images are added, those `<img>` tags will show broken-image icons —
the layout itself does not depend on the images being present.

## Editing content

All copy (products, specs, certifications, stats, contact details) lives in
one place: `src/data/siteData.js`. Edit that file rather than the JSX when
updating text.
