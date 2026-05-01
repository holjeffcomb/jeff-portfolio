import Image from "next/image";
import { EmailCopy } from "./EmailCopy";

const visualizations = [
  {
    id: "jQauAIx29_Q",
    artist: "Periphery",
    title: "Dracul Gras",
    note: "Programmed in MA3, Visualized in Depence",
  },
  {
    id: "C9Vv3baTGQI",
    artist: "Periphery",
    title: "Follow Your Ghost",
    note: "Programmed in MA3, Visualized in Depence",
  },
  {
    id: "UUOMvxMNICU",
    artist: "Periphery",
    title: "Atropos",
    note: "Programmed in MA3, Visualized in Depence",
  },
];

const clients = [
  {
    name: "Periphery",
    image: "/periphery.jpg",
    photographer: "Randy Edwards",
  },
  {
    name: "Plini",
    image: "/plini.jpg",
    photographer: "Devin Barnes",
  },
  {
    name: "Cannibal Corpse",
    image: "/cannibal-corpse.jpg",
    photographer: "Jonathan Jarrell",
  },
  {
    name: "Steel Panther",
    image: "/steelpanther.jpg",
    photographer: "Sami Hankinnen",
  },
  {
    name: "Thy Art Is Murder",
    image: "/taim.jpg",
    photographer: "Thomas Savage",
  },
  {
    name: "Devin Townsend",
    image: "/dtp-rah.jpg",
    photographer: "Alex Markides",
  },
];

const sectionLabel = "text-[11px] uppercase tracking-[0.25em] text-[#8a857a]";

export default function Home() {
  return (
    <main className="bg-[#0f0e0c] text-[#ece7da] min-h-screen">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0f0e0c]/70 border-b border-[#26221c]/60">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <a href="#top" className="text-base font-medium tracking-tight">
            Jeff Holcomb
          </a>
          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#8a857a]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#b89968] opacity-60 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#b89968]" />
              </span>
              Open for work
            </span>
            <a
              href="#contact"
              className="text-xs uppercase tracking-[0.2em] text-[#ece7da] border border-[#26221c] hover:border-[#b89968] hover:text-[#b89968] px-4 py-2 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="min-h-screen flex items-center px-6 md:px-10 pt-28 pb-24"
      >
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid md:grid-cols-[5fr_auto_7fr] gap-10 md:gap-16 items-center">
            {/* Left: name & info */}
            <div className="space-y-8">
              <Image
                src="/me1.jpg"
                alt="Jeff Holcomb"
                width={280}
                height={280}
                className="rounded-full object-cover border border-[#26221c] w-40 h-40 md:w-[280px] md:h-[280px] mx-auto md:mx-0"
                priority
              />
              <div>
                <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-normal tracking-[-0.02em] leading-[0.95]">
                  Jeff Holcomb
                </h1>
                <p className="mt-8 text-lg md:text-xl text-[#c9c2b3] font-light">
                  Lighting design, programming, and operation.
                </p>
                <p className="mt-3 text-base text-[#8a857a] font-light">
                  Tours, festivals, and live production.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#8a857a]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#b89968] opacity-60 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#b89968]" />
                </span>
                Open for work
              </div>
            </div>

            {/* Subtle vertical divider */}
            <div
              aria-hidden
              className="hidden md:block w-px self-stretch bg-gradient-to-b from-transparent via-[#26221c] to-transparent"
            />

            {/* Right: stacked videos */}
            <div className="space-y-10">
              {visualizations.map((v) => (
                <figure key={v.id}>
                  <div className="aspect-video bg-[#1a1815] overflow-hidden border border-[#26221c] shadow-[0_8px_40px_rgba(0,0,0,0.55)] ring-1 ring-inset ring-white/[0.03]">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}?rel=0`}
                      title={`${v.artist} · ${v.title}`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                    <h3 className="text-sm md:text-base shrink-0 tracking-tight font-medium">
                      {v.artist}
                      <span className="text-[#8a857a] font-light"> · {v.title}</span>
                    </h3>
                    {v.note && (
                      <span className="text-[11px] uppercase tracking-wider text-[#8a857a] text-right">
                        {v.note}
                      </span>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-[#26221c]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-28 md:py-36">
          <p className={`${sectionLabel} mb-12`}>About</p>
          <div className="grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-16 items-center">
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src="/me.jpg"
                alt="Jeff Holcomb at the lighting console"
                width={1024}
                height={768}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-5 text-[#c9c2b3] leading-relaxed">
              <p className="text-2xl md:text-3xl text-[#ece7da] leading-snug tracking-[-0.02em] font-light">
                I work with touring artists on lighting design, programming,
                and operation.
              </p>
              <p>
                Most shows are timecoded and run on grandMA3.
              </p>
              <p>
                Some projects are programming only. Others include designing
                the rig and operating front of house.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Clients */}
      <section className="border-t border-[#26221c]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-28 md:py-36">
          <p className={`${sectionLabel} mb-12`}>Selected Clients</p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {clients.map((c) => (
              <li key={c.name} className="group">
                <div className="relative aspect-square overflow-hidden bg-[#1a1815]">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <span className="absolute bottom-2 right-2 text-[10px] uppercase tracking-wider text-white/60 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 px-2 py-1">
                    {c.photographer}
                  </span>
                </div>
                <p className="mt-3 text-sm text-[#ece7da] tracking-tight font-medium">
                  {c.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Inquiries / Contact */}
      <section id="contact" className="border-t border-[#26221c]">
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-28 md:py-36 text-center">
          <p className={`${sectionLabel} mb-6`}>Contact</p>
          <h2 className="font-display text-5xl md:text-7xl font-normal leading-[1.05] tracking-[-0.02em]">
            Get in touch.
          </h2>
          <p className="mt-8 text-[#c9c2b3] leading-relaxed max-w-xl mx-auto">
            Available for tours, festivals, one-offs, and programming work.
            Send the dates and details, and I&apos;ll get back to you.
          </p>
          <div className="mt-12 flex flex-col items-center gap-6">
            <EmailCopy />
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#5a554c]">
              Based in the US · Available worldwide
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#26221c]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 text-center text-[11px] uppercase tracking-[0.2em] text-[#5a554c]">
          © {new Date().getFullYear()} Jeff Holcomb
        </div>
      </footer>
    </main>
  );
}
