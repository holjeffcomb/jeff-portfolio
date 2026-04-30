# Jeff Holcomb — Lighting Designer

Personal portfolio at [jeff-holcomb.com](https://jeffholcomblights.com). One-page site focused on lighting design, programming, and operation work.

## Sections

- **Hero** — Name, tagline, status indicator
- **About** — Bio with console photo
- **Visualizations** — YouTube embeds of pre-visualized programming
- **Selected Clients** — Past artist/tour collaborations as a thumbnail grid
- **Inquiries** — Email CTA for booking work

## Getting Started

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Updating Content

All content lives in `app/page.tsx`:

- **`visualizations`** — Add YouTube videos by adding objects with `id`, `artist`, `title`, and optional `note`
- **`clients`** — Add/remove past clients (image, name, photographer)
- **Bio** — Edit the paragraphs in the About section
- **Inquiries** — Update the booking copy and email address

## Adding Images

Drop JPG/PNG files into `public/` and reference them as `/filename.jpg` in `page.tsx`.

## Domain Setup (Namecheap → Vercel)

1. Deploy this repo to Vercel
2. Vercel: Project → Settings → Domains → add `jeff-holcomb.com`
3. Namecheap: Domain → Advanced DNS → add the records Vercel provides

## Stack

- Next.js (App Router)
- Tailwind CSS v4
- Deployed on Vercel
