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

### Adding gallery images (Lighting page)

1. Add images to `public/` (e.g. `public/work-1.jpg`)
2. In `app/lighting/page.tsx`, replace the placeholder divs with `next/image`:

```tsx
import Image from "next/image";

// In the gallery map:
<Image
  src="/work-1.jpg"
  alt={item.artist}
  fill
  className="object-cover grayscale hover:grayscale-0 scale-100 hover:scale-105 transition-all duration-300"
/>
```

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
