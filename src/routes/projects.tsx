import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Ahmed Hassan" },
      {
        name: "description",
        content:
          "Selected frontend projects: production React apps, dashboards, and open-source contributions by Ahmed Hassan.",
      },
      { property: "og:title", content: "Projects — Ahmed Hassan" },
      {
        property: "og:description",
        content:
          "A curated selection of frontend projects showcasing engineering and design craft.",
      },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  demo?: string;
  repo?: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: "Nimbus Analytics",
    tagline: "Real-time SaaS dashboard",
    description:
      "Built a multi-tenant analytics dashboard with virtualized tables, streaming charts, and role-based access. Reduced first paint from 3.4s to 0.9s through code-splitting and edge caching.",
    stack: ["React", "TypeScript", "Tailwind", "Recharts"],
    demo: "https://example.com",
    repo: "https://github.com/",
    accent: "from-[var(--accent-blue)] to-[var(--accent-purple)]",
  },
  {
    title: "Verba — AI Notes",
    tagline: "AI-powered note-taking",
    description:
      "A minimal note app with semantic search and AI summarization. Designed an offline-first sync layer and a keyboard-first command palette for power users.",
    stack: ["Next.js", "tRPC", "Postgres", "OpenAI"],
    demo: "https://example.com",
    repo: "https://github.com/",
    accent: "from-[var(--accent-purple)] to-pink-400",
  },
  {
    title: "Pixel Portfolio Kit",
    tagline: "Open-source UI kit",
    description:
      "An accessible, themeable component library used by 200+ developers. Includes 40+ components, dark mode, and full TypeScript types.",
    stack: ["React", "Radix UI", "Tailwind", "Storybook"],
    repo: "https://github.com/",
    accent: "from-cyan-400 to-[var(--accent-blue)]",
  },
  {
    title: "Ledgerly",
    tagline: "Personal finance tracker",
    description:
      "Privacy-focused finance app with category insights and budget alerts. Implemented an offline IndexedDB cache and a custom virtualized transaction list.",
    stack: ["React", "Vite", "IndexedDB", "Chart.js"],
    demo: "https://example.com",
    repo: "https://github.com/",
    accent: "from-[var(--accent-blue)] to-emerald-400",
  },
];

function ProjectsPage() {
  return (
    <div className="relative">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-8">
        <p className="text-sm font-mono text-[var(--accent-purple)] animate-fade-up">
          / projects
        </p>
        <h1
          className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight animate-fade-up"
          style={{ animationDelay: "60ms" }}
        >
          Selected <span className="gradient-text">work.</span>
        </h1>
        <p
          className="mt-4 max-w-xl text-lg text-muted-foreground animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          A few projects I'm proud of — each solving a real problem with care
          for performance and detail.
        </p>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06] animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div
                className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40`}
              />

              <div className="relative">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  {p.tagline}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full gradient-primary px-4 py-2 text-xs font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
                    >
                      Live demo <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-white/10"
                    >
                      <Github className="h-3 w-3" /> Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}