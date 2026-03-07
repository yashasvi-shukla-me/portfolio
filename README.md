# Portfolio

A minimal, responsive portfolio site built with Next.js and TypeScript. Showcases projects, technical skills, and background—deployed as a static-friendly SPA.

**Live:** [portfolio-yashasvishukla.netlify.app](https://portfolio-yashasvishukla.netlify.app)

---

## Tech Stack

| Category   | Technologies                          |
| --------- | ------------------------------------- |
| Framework | Next.js 14 (App Router)                |
| Language  | TypeScript                            |
| Styling   | Tailwind CSS, MUI (Material UI)       |
| Deployment| Netlify                               |

---

## Features

- **Responsive layout** — Single-column on mobile, two-column on desktop with fixed sidebar
- **Project showcase** — Featured work with tech tags and live/demo links
- **Technical summary** — Skills grouped by languages, backend, databases, and MLOps
- **Optimized** — Next.js font optimization (Inter, Plus Jakarta Sans), minimal runtime deps

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Clone and install
git clone https://github.com/yashasvi-shukla-me/portfolio.git
cd portfolio
npm install

# Run in development
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Production build:**

```bash
npm run build
npm start
```

---

## Project Structure

```
app/
├── mainPage/Draken.tsx    # Main layout, projects, skills, about
├── ClientComponents/      # About, Project, Skills nav; Gradientdiv
├── assets/                # Project and UI images
├── layout.tsx
├── page.tsx
└── globals.css
```

---

## License

MIT.

---

**Yashasvi Shukla** — [LinkedIn](https://www.linkedin.com/in/yashasvi-shukla-me/) · [GitHub](https://github.com/yashasvi-shukla-me)
