import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArtistCard } from "./ArtistCard";

export const metadata: Metadata = {
  title: "Lighting Design | Jeff Holcomb",
  description:
    "Lighting designer and timecode programmer. Creating precise, musical, tour-ready lighting systems.",
};

const artistCategories = [
  {
    name: "Periphery",
    image: "/periphery.jpg",
    logo: "/periphery-logo.png",
    tours: [
      "2010 — Debut album tour",
      "2011 — North America",
      "2012 — Periphery II touring",
      "2013 — North America & EU",
      "2014 — Clear / Juggernaut touring",
      "2015 — Juggernaut: Alpha & Omega",
      "2016 — North America",
      "2017 — Select the Difficulty touring",
      "2018 — North America & EU",
      "2019 — Dance Gavin Dance co-headline",
      "2020 — Hail Stan touring",
      "2022 — EU tour",
      "2023 — North America",
      "2024 — The Wildfire Tour / EU",
    ],
    photographer: "Randy Edwards",
  },
  {
    name: "Plini",
    image: "/plini.jpg",
    logo: "/plini-logo.png",
    tours: [
      "2023 — North America",
      "2023 — EU / Australia",
      "2024 — Summer EU tour",
      "2024 — North America",
      "2025 — North America / EU",
    ],
    photographer: "Devin Barnes",
  },
  {
    name: "Cannibal Corpse",
    image: "/cannibal-corpse.jpg",
    logo: "/cannibal-corpse-logo.png",
    tours: [
      "Late 2024 — North America (w/ Meshuggah)",
      "2024 — EU tour",
      "Fall 2025 — North America (w/ Municipal Waste)",
    ],
    photographer: "Jonathan Jarrell",
  },
  {
    name: "Steel Panther",
    image: "/steelpanther.jpg",
    logo: "/steel-panther-logo.png",
    tours: [
      "2018 — Late fall US (w/ Wilson)",
      "2019 — Heavy Metal Mardi Gras Tour",
      "2019 — Heavy Metal Rules Tour",
    ],
    photographer: "Sami Hankinnen",
  },
  {
    name: "Thy Art Is Murder",
    image: "/taim.jpg",
    logo: "/thy-art-is-murder-logo.png",
    tours: [
      "2017 — The Double Homicide Tour (w/ Decapitated)",
      "2018 — Death Dealers EU Tour",
      "2018 — Australian tour",
      "2019 — North American headliner",
    ],
    photographer: "Thomas Savage",
  },
  {
    name: "Devin Townsend",
    image: "/dtp-rah.jpg",
    logo: "/devin-townsend-logo.png",
    tours: ["Royal Albert Hall"],
    photographer: "Alex Markides",
  },
];

export default function LightingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#252a30] via-[#1a1e22] to-[#0d0f12] text-white">
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
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 overflow-hidden">
        {/* Background: three images with angled separators */}
        <div className="absolute inset-0 flex [mask-image:linear-gradient(to_bottom,black_0%,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_60%,transparent_100%)]">
          <div className="flex-1 relative min-w-0 overflow-hidden border-r border-white/20">
            <Image
              src="/plini.jpg"
              alt=""
              fill
              className="object-cover brightness-[0.4]"
              sizes="33vw"
            />
          </div>
          <div className="flex-1 relative min-w-0 overflow-hidden border-r border-white/20">
            <Image
              src="/periphery.jpg"
              alt=""
              fill
              className="object-cover brightness-[0.4]"
              sizes="33vw"
            />
          </div>
          <div className="flex-1 relative min-w-0 overflow-hidden">
            <Image
              src="/dtp-rah.jpg"
              alt=""
              fill
              className="object-cover brightness-[0.4]"
              sizes="33vw"
            />
          </div>
        </div>
        {/* Foreground content */}
        <div className="relative z-10 flex flex-col items-center w-full">
          <Image
            src="/me1.jpg"
            alt="Jeff Holcomb"
            width={360}
            height={360}
            className="rounded-full object-cover mb-8 border-2 border-zinc-700 mx-auto block"
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
        </div>
      </section>

      {/* Bio */}
      <section className="max-w-2xl mx-auto px-6 py-24">
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-12">
          Bio
        </h2>
        <div className="mb-12 overflow-hidden rounded-[2.5rem] shadow-[0_0_60px_30px_rgba(0,0,0,0.5)] max-w-xl mx-auto">
          <Image
            src="/me.jpg"
            alt="Jeff Holcomb at the lighting console"
            width={1024}
            height={683}
            className="w-full aspect-[3/2] object-cover"
            sizes="(max-width: 768px) 100vw, 576px"
          />
        </div>
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
        <div className="max-w-7xl mx-auto space-y-24">
          {artistCategories.map((artist) => (
            <ArtistCard key={artist.name} artist={artist} />
          ))}
          <div className="max-w-4xl mx-auto overflow-hidden rounded-lg [clip-path:inset(50px_50px_0_20px)]">
            <Image
              src="/FatDrac-2.gif"
              alt="Fat Drac"
              width={800}
              height={600}
              className="w-full object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-6 py-24">
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-2 text-center">
          Sample of Work
        </h2>
        <p className="text-center text-zinc-400 text-sm mb-8 max-w-xl mx-auto">
          Visual render of Periphery&apos;s &quot;Dracul Gras&quot; visualized
          in Depence
        </p>
        <div className="max-w-4xl mx-auto aspect-video overflow-hidden rounded-lg">
          <iframe
            src="https://www.youtube.com/embed/jQauAIx29_Q?rel=0"
            title="Lighting programming sample"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
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
