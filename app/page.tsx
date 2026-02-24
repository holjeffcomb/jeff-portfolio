import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white text-center px-6">
      <h1 className="text-5xl sm:text-6xl font-light tracking-wide">
        Jeff Holcomb
      </h1>

      <p className="mt-4 text-lg sm:text-xl text-zinc-400">
        Technical Creative
      </p>

      <p className="mt-2 text-base sm:text-lg text-zinc-500 max-w-md">
        Designing systems for live and digital experiences
      </p>

      <div className="mt-14 flex flex-col sm:flex-row gap-5">
        <Link
          href="/lighting"
          className="border border-zinc-600 px-8 py-4 text-lg tracking-wide hover:bg-white hover:text-black hover:border-white transition-all duration-200"
        >
          Explore Lighting
        </Link>
        <Link
          href="/development"
          className="border border-zinc-600 px-8 py-4 text-lg tracking-wide hover:bg-white hover:text-black hover:border-white transition-all duration-200"
        >
          Explore Development
        </Link>
      </div>
    </main>
  );
}
