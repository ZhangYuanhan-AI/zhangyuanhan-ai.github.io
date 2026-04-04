# Yuanhan Zhang — Personal Academic Website

Personal website for [Yuanhan (John) Zhang](https://zhangyuanhan-ai.github.io), built with **Astro**, **Tailwind CSS**, and vanilla JS.

## Features

- Morandi color palette with dark/light mode (system preference + manual toggle)
- Neural network particle canvas (interactive, mouse-reactive)
- Glitch text animation on name + typing effect
- Publication cards with year filtering and mouse-tracking glow
- Calendly integration for booking office hours
- Fully static — deploys to GitHub Pages with zero JS frameworks

## Tech Stack

- [Astro](https://astro.build/) — static site generator
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [Inter](https://fonts.google.com/specimen/Inter) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — fonts via Google Fonts
- Vanilla JS — dark mode, scroll animations, particle canvas, typing effect, publication filtering

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- npm (comes with Node.js)

### Install

```bash
git clone https://github.com/ZhangYuanhan-AI/zhangyuanhan-ai.github.io.git
cd zhangyuanhan-ai.github.io
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:4321`. Hot-reloads on file changes.

### Build

```bash
npm run build
```

Outputs static files to `dist/`. Preview locally:

```bash
npm run preview
```

### Deploy

The site auto-deploys to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`/`master`.

To deploy manually:

```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

## Project Structure

```
├── src/
│   ├── layouts/BaseLayout.astro     # HTML shell, meta tags, dark mode, particle canvas
│   ├── components/
│   │   ├── Navbar.astro             # Fixed nav: name, Research link, Chat, Dark/Light toggle
│   │   ├── Hero.astro               # Name, bio, news highlights, social links, photo
│   │   ├── PublicationsSection.astro # Year filter bar + publication list
│   │   ├── PublicationCard.astro     # Individual paper card
│   │   └── Footer.astro             # Activities, credits
│   ├── data/publications.json       # Structured publication data
│   ├── styles/global.css            # Tailwind + custom Morandi tokens + animations
│   └── pages/index.astro            # Page assembly
├── public/images/                   # Static images
├── legacy/                          # Original site (index.html + stylesheet.css)
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── .github/workflows/deploy.yml
```

## Editing Content

### Publications

Edit `src/data/publications.json`. Each entry:

```json
{
  "id": "paper-id",
  "title": "Paper Title",
  "authors": [
    { "name": "Yuanhan Zhang", "self": true },
    { "name": "Co-Author", "url": "https://..." }
  ],
  "venue": "ICCV",
  "year": 2025,
  "venueNote": "Oral",
  "image": "/images/teaser.png",
  "projectUrl": "https://project-page.com",
  "pdfUrl": "https://arxiv.org/abs/...",
  "links": [
    { "label": "Project", "url": "https://..." },
    { "label": "Code", "url": "https://..." }
  ],
  "starsUrl": "https://img.shields.io/github/stars/user/repo?style=social",
  "description": "One-sentence description.",
  "topics": ["multimodal", "video"]
}
```

### News / Bio

Edit `src/components/Hero.astro` directly.

### Activities / Footer

Edit `src/components/Footer.astro`.

## Legacy

The original single-file website (based on [Jon Barron's template](https://github.com/jonbarron/jonbarron_website)) is preserved in `legacy/`.

## Credits

Built with [Claude Code](https://claude.ai/code).
