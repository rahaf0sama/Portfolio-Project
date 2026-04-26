import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ahmed Hassan" },
      {
        name: "description",
        content:
          "About Ahmed Hassan: Computer Science student, frontend developer, with a focus on clean code, performance, and modern UI engineering.",
      },
      { property: "og:title", content: "About — Ahmed Hassan" },
      {
        property: "og:description",
        content:
          "Background, skills, and education of a CS student building modern web interfaces.",
      },
    ],
  }),
  component: AboutPage,
});

const skills = {
  Frontend: [
    { name: "React", level: 92 },
    { name: "TypeScript", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "HTML / CSS", level: 96 },
  ],
  "Backend basics": [
    { name: "Node.js", level: 70 },
    { name: "REST APIs", level: 78 },
    { name: "SQL", level: 65 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 88 },
    { name: "Figma", level: 75 },
    { name: "Vite", level: 82 },
    { name: "VS Code", level: 95 },
  ],
} as const;

const timeline = [
  {
    icon: GraduationCap,
    title: "B.Sc. Computer Science",
    org: "Faculty of Computers and Information",
    period: "2022 — Present",
    body: "Coursework in algorithms, data structures, databases, software engineering, and web development.",
  },
  {
    icon: Briefcase,
    title: "Frontend Developer Intern",
    org: "Self-directed & open-source",
    period: "2024 — Present",
    body: "Building production-grade React applications, contributing to open source, and shipping client projects.",
  },
  {
    icon: Award,
    title: "ITI — Frontend Track",
    org: "Information Technology Institute",
    period: "2024",
    body: "Intensive training in modern frontend stack: React, state management, performance, and best practices.",
  },
];

function AboutPage() {
  return (
    <div className="relative">
      <section className="relative mx-auto max-w-4xl px-4 sm:px-6 pb-12">
        <p className="text-sm font-mono text-[var(--accent-purple)] animate-fade-up">
          / about
        </p>
        <h1
          className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight animate-fade-up"
          style={{ animationDelay: "60ms" }}
        >
          Engineer first, <span className="gradient-text">designer at heart.</span>
        </h1>
        <p
          className="mt-6 text-lg leading-relaxed text-muted-foreground animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          I'm a Computer Science student passionate about building products that
          feel fast, look polished, and stay maintainable. My approach blends
          strong fundamentals — algorithms, data structures, and clean
          architecture — with a sharp eye for UI craft. I care about the small
          details: motion, spacing, accessibility, and the way an interface
          responds to a user's intent.
        </p>
        <p
          className="mt-4 text-lg leading-relaxed text-muted-foreground animate-fade-up"
          style={{ animationDelay: "180ms" }}
        >
          Outside of class, I ship side projects, contribute to open source, and
          study patterns from teams I admire. My goal: write code that future-me
          and my teammates will thank me for.
        </p>
      </section>

      {/* Skills */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-sm font-mono text-[var(--accent-purple)]">
              / skills
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              What I work with
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="glass rounded-2xl p-6 transition-all hover:bg-white/[0.06]"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {category}
              </h3>
              <div className="mt-5 space-y-4">
                {items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-xs font-mono text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full gradient-primary transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education / Experience */}
      <section className="relative mx-auto max-w-4xl px-4 sm:px-6 pt-24">
        <p className="text-sm font-mono text-[var(--accent-purple)]">
          / experience
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">
          Education & training
        </h2>

        <div className="mt-10 relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--accent-blue)]/40 via-[var(--accent-purple)]/40 to-transparent" />
          <div className="space-y-8">
            {timeline.map(({ icon: Icon, title, org, period, body }) => (
              <div key={title} className="relative pl-14">
                <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="glass rounded-2xl p-5 transition-all hover:bg-white/[0.06]">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-foreground">
                      {title}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground">
                      {period}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--accent-blue)] mt-0.5">{org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}