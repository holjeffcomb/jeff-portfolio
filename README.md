# Jeff Holcomb Portfolio

Personal portfolio at [jeff-holcomb.com](https://jeff-holcomb.com) — lighting design and web development.

## Structure

- **/** — Homepage with positioning and links to both sections
- **/lighting** — Lighting design bio, gallery, showreel placeholder, clients/tours, contact
- **/development** — Web dev bio, projects, tech stack, GitHub

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

### Adding artist images (Lighting page)

Add to `public/` with these names (or update paths in `artistCategories`):

- Main photo: `cannibal-corpse.jpg`, `periphery.jpg`, `plini.jpg`, `thy-art-is-murder.jpg`, `steel-panther.jpg`
- Band logos: `cannibal-corpse-logo.png`, `periphery-logo.png`, etc.

The site uses placeholders until the files exist. When images load, they display; otherwise a gray placeholder shows.

### Adding videos

Replace the "Showreel Coming Soon" block in `app/lighting/page.tsx` with embedded YouTube/Vimeo iframes or a video element.

### Updating content

- **Bio**: Edit the paragraphs in `app/lighting/page.tsx` and `app/development/page.tsx`
- **Clients/Tours**: Update the `selectedClients` and `selectedTours` arrays in `app/lighting/page.tsx`
- **Projects**: Update the `projects` array in `app/development/page.tsx`
- **Tech stack**: Update the `techStack` array in `app/development/page.tsx`
- **GitHub**: Update the GitHub URL in `app/development/page.tsx` (currently `https://github.com/jeffholcomb`)

### Domain setup (Namecheap → Vercel)

1. Deploy to Vercel and import this repo
2. In Vercel: Project → Settings → Domains → Add `jeff-holcomb.com`
3. In Namecheap: Domain → Advanced DNS → Add the A/CNAME records Vercel provides

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
