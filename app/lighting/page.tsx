import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lighting Design | Jeff Holcomb",
  description:
    "Lighting designer and timecode programmer. Creating precise, musical, tour-ready lighting systems.",
};

const galleryImages = [
  { artist: "Artist Name", tour: "Tour 2024", role: "Lighting Design & Programming" },
  { artist: "Artist Name", tour: "Tour 2024", role: "Lighting Design & Programming" },
  { artist: "Artist Name", tour: "Tour 2024", role: "Lighting Design & Programming" },
  { artist: "Artist Name", tour: "Tour 2024", role: "Lighting Design & Programming" },
  { artist: "Artist Name", tour: "Tour 2024", role: "Lighting Design & Programming" },
  { artist: "Artist Name", tour: "Tour 2024", role: "Lighting Design & Programming" },
];

const selectedClients = [
  "Plini",
  "Animals As Leaders",
  "Periphery",
  "Thy Art Is Murder",
];

const selectedTours = [
  "Plini — North America 2023",
  "Animals As Leaders — EU 2022",
];

export default function LightingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back link */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-white transition-colors"
        >
          ← Back
        </Link>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
        <h1 className="text-5xl sm:text-6xl font-light tracking-wide">
          Jeff Holcomb
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-zinc-400">
          Lighting Designer & Timecode Programmer
        </p>
        <p className="mt-4 text-lg text-zinc-500 max-w-xl">
          Creating precise, musical, tour-ready lighting systems.
        </p>
      </section>

      {/* Bio */}
      <section className="max-w-2xl mx-auto px-6 py-24">
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-12">
          Bio
        </h2>
        <div className="space-y-6 text-zinc-300 leading-relaxed">
          <p>
            Jeff is a lighting designer and programmer with over a decade of
            experience in touring and live production.
          </p>
          <p>
            His work blends musical sensitivity with technical precision,
            specializing in timecoded systems, MA3 programming, and scalable
            touring rigs.
          </p>
          <p>
            Based in the US, Jeff works across tours, one-off productions, and
            custom show programming.
          </p>
        </div>
      </section>

      {/* Selected Work */}
      <section className="px-6 py-24">
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-12 text-center">
          Selected Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((item, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] bg-zinc-800 overflow-hidden"
            >
              {/* Placeholder - replace with next/image when you add real images */}
              <div className="absolute inset-0 bg-zinc-700 group-hover:bg-zinc-600 transition-all duration-300 scale-100 group-hover:scale-105 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
                <span className="font-medium text-white">{item.artist}</span>
                <span className="text-sm text-zinc-300">{item.tour}</span>
                <span className="text-xs text-zinc-400 mt-1">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="px-6 py-24">
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-12 text-center">
          Showreel
        </h2>
        <div className="max-w-4xl mx-auto aspect-video bg-zinc-900 flex items-center justify-center border border-zinc-800">
          <p className="text-zinc-500 text-lg">Showreel Coming Soon</p>
        </div>
      </section>

      {/* Clients & Tours */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-8">
              Selected Clients
            </h2>
            <ul className="space-y-2 text-zinc-300">
              {selectedClients.map((client) => (
                <li key={client}>{client}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-8">
              Selected Tours
            </h2>
            <ul className="space-y-2 text-zinc-300">
              {selectedTours.map((tour) => (
                <li key={tour}>{tour}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-24 border-t border-zinc-800">
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-8 text-center">
          Contact
        </h2>
        <div className="max-w-xl mx-auto text-center space-y-4">
          <p className="text-zinc-300">
            <a
              href="mailto:hello@jeff-holcomb.com"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              hello@jeff-holcomb.com
            </a>
          </p>
          <p className="text-sm text-zinc-500">
            Available for touring, programming, and custom timecoded show
            development.
          </p>
        </div>
      </section>
    </div>
  );
}
