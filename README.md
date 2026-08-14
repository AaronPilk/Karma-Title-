# Karma Title — Website

Modern rebuild of [karmatitle.com](https://www.karmatitle.com) with an Apple-inspired
aesthetic, floating dynamic cards, and smooth scroll animations. All original copy,
brand colors, and logo are preserved.

## Stack
Plain static **HTML / CSS / JS** — no build step, no dependencies. Host anywhere
(GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static host).

## Structure
```
site/
├── index.html          # Home (single-scroll)
├── services.html       # Services
├── homeowners.html     # Homeowners (title-insurance education)
├── contact.html        # Contact + form
└── assets/
    ├── css/styles.css  # Design system
    ├── js/main.js      # Scroll reveal, nav, parallax, accordion, form
    └── img/            # Optimized logo + photos (WebP + JPG)
```

## Brand
- Primary purple `#790079` (from logo wordmark & roofline)
- Ink `#0b0b0f`, white, soft grey `#f6f4f7`

## Run locally
```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy on GitHub Pages
Settings → Pages → Deploy from branch → `main` → `/root` (or move `site/` contents to root).

---
© Karma Title, LLC — Title Insurance, North & South Carolina
