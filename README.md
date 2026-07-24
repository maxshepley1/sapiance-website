# Sapiance Capital — website

Static marketing site for Sapiance Capital Ltd. Plain HTML, CSS and a small
vanilla-JS file — **no WordPress, no build step, no database, no third-party
runtime dependencies, and no external network requests** (fonts are self-hosted).

This rebuild replaces the previous WordPress site, which had been compromised
with a malicious redirect. All page content was recovered from clean pre-infection
archives and then edited.

## Pages

| File | Page |
|------|------|
| `index.html` | Home |
| `about.html` | About |
| `strategies.html` | Strategies |
| `investment-rationale.html` | Investment Rationale (linked from Strategies) |
| `team.html` | Team |
| `contact.html` | Contact |
| `disclaimer.html` | Disclaimer (linked from every footer) |
| `404.html` | Not-found page |

## Structure

```
.
├── *.html            # pages (see table above)
├── styles.css        # all styling
├── app.js            # header shadow + scroll-reveal (progressive enhancement)
├── README.md
└── assets/
    ├── sapiance-logo.jpg
    ├── sapiance-favicon.jpg
    ├── london-example-*.jpg   # hero banner images
    └── fonts/                 # self-hosted Roboto (woff2)
```

## Editing

Everything is hand-editable HTML — open a file and change the text. Shared
pieces (header, nav, footer) are repeated in each page, so update them in every
file if you change them. Colours, fonts and spacing live in `styles.css`
(see the `:root` variables at the top; brand colour is `--accent: #315271`).

## Running locally

No build required. Serve the folder with any static server, e.g.:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploying

The site is a static folder, so it can be hosted anywhere. Recommended:
**Cloudflare Pages** or **Netlify**, connected to this GitHub repo.

- **Framework preset:** None
- **Build command:** *(leave empty)*
- **Output / publish directory:** `/` (repository root)

Push to the default branch and the host auto-deploys. Both platforms serve
`404.html` automatically for unknown paths.

## Notes

- Fonts are self-hosted in `assets/fonts/` (Roboto). Nothing is loaded from a CDN.
- Motion effects (parallax, fade-in) respect the visitor's
  `prefers-reduced-motion` setting and degrade gracefully with JavaScript disabled.
