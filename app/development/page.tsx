import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Development | Jeff Holcomb",
  description:
    "Web development and software systems. Building scalable applications with modern tooling.",
};

export default function DevelopmentPage() {
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

      {/* Under construction */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
        <h1 className="text-5xl sm:text-6xl font-light tracking-wide">
          Development
        </h1>
        <p className="mt-8 text-xl text-zinc-400 max-w-md">
          This section is under construction. Check back soon.
        </p>
      </section>
    </div>
  );
}
