# Adam Wilson — Portfolio

Plain HTML, CSS, and JavaScript. No Node, no npm, no build step.

## Run it
Double-click `index.html`. That's it.

(Optional) If you want a local server instead: `python3 -m http.server` in this folder, then open http://localhost:8000.

## Structure
```
index.html        Home — hero canvas, Under Armour spotlight, skills, timeline, contact
projects.html     Project cards + detail modal
about.html        Bio, experience, education, links
resume.html       Embedded resume viewer + download
css/style.css     All styles (colors are variables at the top)
js/main.js        Nav, scroll progress, reveal animations, easter eggs
js/hero.js        Particle canvas + typewriter (home only)
js/projects.js    Project data — edit the PROJECTS array to add/change projects
assets/resume.pdf Your resume — replace this file to update the Resume page
assets/images/    All images
```

## Update your resume
Drop your new PDF into `assets/` named `resume.pdf` (overwrite the old one).

## Deploy to GitHub Pages
Push these files to the root of a repo, then Settings → Pages → Deploy from branch → `main` / root.

## Easter eggs
- Click "Adam Wilson" in the nav 5 times.
- Type ↑ ↑ ↓ ↓ ← → ← → B A.
