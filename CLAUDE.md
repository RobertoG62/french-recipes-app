# CLAUDE.md — המטבח הצרפתי

## Project Overview
Hebrew (RTL) French recipe web application. Vanilla HTML/JS/CSS SPA with hash-based routing. No build step — deploys to GitHub Pages.

## Tech Stack
- **Styling**: Tailwind CSS v4 (CDN)
- **Fonts**: Heebo (Hebrew), Playfair Display (decorative)
- **Icons**: Font Awesome 6.5
- **Routing**: Hash-based (`#/` home, `#/recipe/:id` detail)
- **Direction**: RTL Hebrew (`dir="rtl"`, `lang="he"`)

## Design Tokens
| Token | Value |
|-------|-------|
| Primary | `#8B1A1A` (Burgundy) |
| Primary Light | `#C4A484` (Warm Tan) |
| Primary Dark | `#6B1010` (Deep Burgundy) |
| Cream | `#FAFAFA` |
| Charcoal | `#1A1A1A` |
| Navy | `#0A1628` |
| CSS prefix | `--fr-` |

## File Structure
```
index.html          ← Single-page app shell
css/style.css       ← Custom styles (glassmorphism, cards, pills)
js/data.js          ← Data layer (fetch, search, filter)
js/ui.js            ← UI layer (DOM rendering)
js/app.js           ← Router and orchestration
data/recipes.json   ← Recipe database (10 recipes)
images/             ← Recipe and hero images (user-added)
```

## Recipe Categories
| Category | Icon |
|----------|------|
| מרקים | fa-bowl-food |
| מנות עיקריות | fa-plate-wheat |
| מאפים ולחמים | fa-bread-slice |
| קינוחים | fa-cake-candles |
| רטבים ותוספות | fa-jar |

## Run Locally
```bash
python -m http.server 8000
# Open http://localhost:8000
```
