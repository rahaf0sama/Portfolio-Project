import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github, Sparkles, Code2, Zap, Layers } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ahmed Hassan — Frontend Developer & CS Student" },
      {
        name: "description",
        content:
          "Computer Science student building modern, accessible, and high-performance web interfaces with React, TypeScript, and Next.js.",
      },
      { property: "og:title", content: "Ahmed Hassan — Frontend Developer" },
      {
        property: "og:description",
        content:
          "Portfolio showcasing projects, skills, and engineering mindset of a Computer Science student.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="absolute inset-0 grid-bg pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-32 sm:pt-24 sm:pb-40">
          <div
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-muted-foreground animate-fade-in"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-purple)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-purple)]" />
            </span>
            Available for internships & freelance
          </div>

          <h1
            className="mt-6 text-5xl sm:text-7xl font-bold tracking-tight leading-[1.05] animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Building thoughtful
            <br />
            <span className="gradient-text">interfaces</span> for the web.
          </h1>

          <p
            className="mt-6 max-w-xl text-lg text-muted-foreground animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            I'm Ahmed — a Computer Science student at the Faculty of Computers
            and Information, focused on frontend engineering, performance, and
            clean code.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              View projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
            >
              Contact me
            </Link>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>

          {/* Floating tech badges */}
          <div
            className="mt-20 flex flex-wrap gap-2 animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            {["React", "TypeScript", "Next.js", "Tailwind", "Node.js", "Git"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full glass px-3 py-1 text-xs font-mono text-muted-foreground"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-24">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Code2,
              title: "Clean code",
              body: "Maintainable, typed, and tested. Architecture that scales with the team.",
            },
            {
              icon: Zap,
              title: "Performance first",
              body: "Lighthouse-driven workflow. Every byte and every paint matters.",
            },
            {
              icon: Layers,
              title: "Design sense",
              body: "Pixel-perfect UI with accessibility, motion, and detail in mind.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-12">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-12">
          <div
            className="absolute -top-1/2 left-1/2 -translate-x-1/2 h-[300px] w-[600px] pointer-events-none"
            style={{ background: "var(--gradient-glow)" }}
          />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-md">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-purple)]">
                <Sparkles className="h-3.5 w-3.5" />
                Let's build something
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
                Have a project in mind?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                I'm currently open to internships, junior roles, and select
                freelance work.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
