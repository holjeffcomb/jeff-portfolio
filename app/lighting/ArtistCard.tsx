"use client";

import Image from "next/image";
import { useState } from "react";

type ArtistCategory = {
  name: string;
  image: string;
  logo: string;
  tours: string[];
};

export function ArtistCard({ artist }: { artist: ArtistCategory }) {
  const [imageError, setImageError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <article className="space-y-6">
      <div className="relative aspect-[16/9] bg-zinc-800 overflow-hidden group">
        {!imageError ? (
          <Image
            src={artist.image}
            alt={artist.name}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            sizes="(max-width: 1280px) 100vw, 1536px"
            quality={95}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-zinc-700 grayscale group-hover:grayscale-0 transition-all duration-500" />
        )}
        <div className="absolute bottom-6 left-6">
          {!logoError ? (
            <div className="relative h-14 w-32 md:h-16 md:w-40">
              <Image
                src={artist.logo}
                alt={`${artist.name} logo`}
                fill
                className="object-contain object-left-bottom"
                sizes="320px"
                quality={95}
                onError={() => setLogoError(true)}
              />
            </div>
          ) : (
            <div className="h-14 w-32 md:h-16 md:w-40 bg-zinc-800/90 border border-zinc-600 flex items-center justify-center">
              <span className="text-zinc-500 text-xs">Logo</span>
            </div>
          )}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-light text-white mb-4">{artist.name}</h3>
        <ul className="space-y-1 text-zinc-400">
          {artist.tours.map((tour) => (
            <li key={tour}>{tour}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
