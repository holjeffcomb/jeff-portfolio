import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArtistCard } from "./ArtistCard";
import { PlotImage } from "./PlotImage";

export const metadata: Metadata = {
  title: "Lighting Design | Jeff Holcomb",
  description:
    "Lighting designer and timecode programmer. Creating precise, musical, tour-ready lighting systems.",
};

const vectorworksPlots = ["/vectorworks-1.jpg", "/vectorworks-2.jpg", "/vectorworks-3.jpg"];
const depencePlots = ["/depence-1.jpg", "/depence-2.jpg", "/depence-3.jpg"];

const artistCategories = [
  {
    name: "Cannibal Corpse",
    image: "/cannibal-corpse.jpg",
    logo: "/cannibal-corpse-logo.png",
    tours: ["North America 2024", "EU 2023"],
  },
  {
    name: "Periphery",
    image: "/periphery.jpg",
    logo: "/periphery-logo.png",
    tours: ["North America 2023", "EU 2022"],
  },
  {
    name: "Plini",
    image: "/plini.jpg",
    logo: "/plini-logo.png",
    tours: ["Summer Tour 2023", "North America 2022"],
  },
  {
    name: "Thy Art Is Murder",
    image: "/thy-art-is-murder.jpg",
    logo: "/thy-art-is-murder-logo.png",
    tours: ["North America 2024", "Australia 2023"],
  },
  {
    name: "Steel Panther",
    image: "/steel-panther.jpg",
    logo: "/steel-panther-logo.png",
    tours: ["North America 2024", "EU 2023"],
  },
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
        <Image
          src="/me1.jpg"
          alt="Jeff Holcomb"
          width={360}
          height={360}
          className="rounded-full object-cover mb-8 border-2 border-zinc-700"
        />
        <h1 className="text-5xl sm:text-6xl font-light tracking-wide">
          Jeff Holcomb
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-zinc-400">
          Lighting Designer & Timecode Programmer
        </p>
        <p className="mt-4 text-lg text-zinc-500 max-w-xl">
          Tours • Festivals • Live production
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

      {/* Selected Work — Artist categories */}
      <section className="px-6 py-24">
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-12 text-center">
          Selected Work
        </h2>
        <div className="max-w-3xl mx-auto mb-20 overflow-hidden border border-zinc-950">
          <Image
            src="/me.jpg"
            alt="Jeff Holcomb at the lighting console"
            width={1024}
            height={683}
            className="w-full aspect-[3/2] object-cover contrast-[1.06] brightness-[0.98]"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>
        <div className="max-w-7xl mx-auto space-y-24">
          {artistCategories.map((artist) => (
            <ArtistCard key={artist.name} artist={artist} />
          ))}
        </div>
      </section>

      {/* Vectorworks & Depence */}
      <section className="px-6 py-24 border-t border-zinc-800">
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-16 text-center">
          Vectorworks & Depence
        </h2>
        <div className="max-w-6xl mx-auto space-y-20">
          <div>
            <h3 className="text-lg text-zinc-400 mb-6">Vectorworks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vectorworksPlots.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-video bg-zinc-800 overflow-hidden rounded-lg"
                >
                  <PlotImage src={src} alt={`Vectorworks plot ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg text-zinc-400 mb-6">Depence</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {depencePlots.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-video bg-zinc-800 overflow-hidden rounded-lg"
                >
                  <PlotImage src={src} alt={`Depence plot ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
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

      {/* Contact */}
      <section className="px-6 py-24 border-t border-zinc-800">
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-8 text-center">
          Contact
        </h2>
        <div className="max-w-xl mx-auto text-center space-y-4">
          <p className="text-zinc-300">
            <a
              href="mailto:jeffholcomb@proton.me"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              jeffholcomb@proton.me
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
