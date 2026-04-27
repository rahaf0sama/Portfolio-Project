import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ali Yasser Mohammed Ali" },
      {
        name: "description",
        content:
          "About Ali Yasser: IT and Computer Science student with expertise in software development, embedded systems, and artificial intelligence.",
      },
      { property: "og:title", content: "About — Ali Yasser Mohammed Ali" },
      {
        property: "og:description",
        content:
          "Background, skills, and education of an IT and CS student building practical solutions.",
      },
    ],
  }),
  component: AboutPage,
});

const skills = {
  "Programming Languages": [
    { name: "C++", level: 85 },
    { name: "C", level: 80 },
    { name: "Python", level: 78 },
    { name: "JavaScript", level: 80 },
    { name: "C#", level: 75 },
  ],
  "Web Development": [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 88 },
    { name: "Node.js", level: 75 },
    { name: "ASP.NET", level: 70 },
  ],
  Concepts: [
    { name: "Object-Oriented Programming", level: 85 },
    { name: "Embedded Systems", level: 82 },
    { name: "Problem Solving", level: 88 },
    { name: "Data Structures", level: 80 },
  ],
} as const;

const timeline = [
  {
    icon: GraduationCap,
    title: "B.Sc. Information Technology",
    org: "IT and Computer Science Program",
    period: "2023 — Present",
    body: "Coursework in software development, embedded systems, artificial intelligence, data structures, and system design.",
  },
  {
    icon: Briefcase,
    title: "Solar Tracking System Project",
    org: "Embedded Systems Portfolio",
    period: "2024",
    body: "Designed and built a smart solar panel tracking system using microcontrollers, sensors, and servo motors for optimal energy efficiency.",
  },
  {
    icon: Award,
    title: "AI & Machine Learning Initiative",
    org: "Continuous Learning",
    period: "2025 — Present",
    body: "Developing expertise in machine learning and AI applications, including predictive modeling and neural networks for real-world problems.",
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
          Developer & Innovator with a <span className="gradient-text">passion for problem-solving.</span>
        </h1>
        <p
          className="mt-6 text-lg leading-relaxed text-muted-foreground animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          I'm a passionate IT and Computer Science student with a strong interest in
          software development, embedded systems, and artificial intelligence. I enjoy
          building practical solutions that combine both hardware and software to solve
          real-world problems.
        </p>
        <p
          className="mt-4 text-lg leading-relaxed text-muted-foreground animate-fade-up"
          style={{ animationDelay: "180ms" }}
        >
          I am continuously developing my skills through both academic coursework and
          personal projects. I seek opportunities to apply my knowledge, collaborate with
          talented teams, and grow as a developer while creating impactful solutions.
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

      {/* What I'm Looking For */}
      <section className="relative mx-auto max-w-4xl px-4 sm:px-6 pt-16">
        <div className="glass rounded-3xl p-8 md:p-10">
          <p className="text-sm font-mono text-[var(--accent-purple)]">
            / looking for
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
            What I'm Looking For
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            I am currently seeking opportunities in software development, web development, or embedded systems where I can apply my skills and gain practical experience. I'm eager to:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-[var(--accent-purple)] flex-shrink-0" />
              <span>Collaborate with experienced teams on meaningful projects</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-[var(--accent-purple)] flex-shrink-0" />
              <span>Apply and expand my knowledge in software architecture and system design</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-[var(--accent-purple)] flex-shrink-0" />
              <span>Work on real-world problems in embedded systems or AI applications</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-[var(--accent-purple)] flex-shrink-0" />
              <span>Contribute to impactful projects that make a difference</span>
            </li>
          </ul>
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