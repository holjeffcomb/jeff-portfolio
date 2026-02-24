import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Development | Jeff Holcomb",
  description:
    "Web development and software systems. Building scalable applications with modern tooling.",
};

const projects = [
  {
    title: "Project Name",
    description: "Brief description of the project, tech used, and your role.",
    link: "#",
  },
  {
    title: "Project Name",
    description: "Brief description of the project, tech used, and your role.",
    link: "#",
  },
  {
    title: "Project Name",
    description: "Brief description of the project, tech used, and your role.",
    link: "#",
  },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Headless CMS",
];

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
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
          Development
        </h1>
        <p className="mt-4 text-lg text-zinc-400 max-w-xl">
          Web development and software systems. Building scalable applications
          with modern tooling.
        </p>
      </section>

      {/* Bio */}
      <section className="max-w-2xl mx-auto px-6 py-24">
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-12">
          About
        </h2>
        <div className="space-y-6 text-zinc-300 leading-relaxed">
          <p>
            Jeff builds web applications and software systems with a focus on
            clean architecture and user experience.
          </p>
          <p>
            His development work spans full-stack applications, e-commerce,
            headless CMS integrations, and custom tools for production
            workflows.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-12">
          Selected Projects
        </h2>
        <div className="space-y-12">
          {projects.map((project, i) => (
            <article key={i} className="border-b border-zinc-800 pb-12">
              <h3 className="text-xl font-medium text-white">{project.title}</h3>
              <p className="mt-2 text-zinc-400">{project.description}</p>
              <a
                href={project.link}
                className="inline-block mt-4 text-sm text-zinc-500 hover:text-white transition-colors underline underline-offset-4"
              >
                View project →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-8">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-zinc-800/50 text-zinc-300 text-sm border border-zinc-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Contact & GitHub */}
      <section className="px-6 py-24 border-t border-zinc-800">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <p className="text-zinc-300">
            <a
              href="mailto:hello@jeff-holcomb.com"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              hello@jeff-holcomb.com
            </a>
          </p>
          <a
            href="https://github.com/jeffholcomb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-zinc-500 hover:text-white transition-colors"
          >
            GitHub →
          </a>
        </div>
      </section>
    </div>
  );
}
