import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Ali Yasser Mohammed Ali" },
      {
        name: "description",
        content:
          "Selected projects: embedded systems, AI applications, OOP systems, and web applications by Ali Yasser.",
      },
      { property: "og:title", content: "Projects — Ali Yasser Mohammed Ali" },
      {
        property: "og:description",
        content:
          "A curated selection of projects showcasing software development, embedded systems, and AI expertise.",
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
    title: "Solar Tracking System",
    tagline: "Embedded Systems",
    description:
      "A smart system that automatically adjusts the position of a solar panel to follow the sun throughout the day, maximizing energy efficiency. Uses microcontrollers, light sensors, and servo motors with real-time data analysis.",
    stack: ["Embedded C", "Arduino", "Sensors", "Servo Motors"],
    accent: "from-[var(--accent-blue)] to-[var(--accent-purple)]",
  },
  {
    title: "Heart Attack Prediction System",
    tagline: "AI & Machine Learning",
    description:
      "An AI-based system that predicts the likelihood of heart attacks using medical data and machine learning techniques for early detection. Implements data preprocessing, feature engineering, and model training pipelines.",
    stack: ["Python", "Machine Learning", "Data Analysis", "TensorFlow"],
    accent: "from-[var(--accent-purple)] to-pink-400",
  },
  {
    title: "Bank Management System",
    tagline: "C++ / OOP",
    description:
      "A console application that handles account creation, deposits, withdrawals, and transactions using Object-Oriented Programming principles. Demonstrates clean code, encapsulation, and robust data management.",
    stack: ["C++", "OOP", "File Management", "Data Structures"],
    accent: "from-cyan-400 to-[var(--accent-blue)]",
  },
  {
    title: "Furniture Company Management System",
    tagline: "System Design",
    description:
      "A comprehensive system for managing products, orders, and company operations to improve workflow and organization. Handles inventory tracking, customer management, and order processing with efficient data structures.",
    stack: ["C#", "ASP.NET", "Database", "System Design"],
    accent: "from-[var(--accent-blue)] to-emerald-400",
  },
  {
    title: "Interactive Web Game",
    tagline: "Web Development",
    description:
      "A simple and engaging interactive web game focused on user interface design and user experience. Built with vanilla technologies to ensure smooth gameplay and responsive design across all devices.",
    stack: ["HTML", "CSS", "JavaScript", "Game Logic"],
    accent: "from-yellow-400 to-orange-400",
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
          Featured <span className="gradient-text">projects.</span>
        </h1>
        <p
          className="mt-4 max-w-xl text-lg text-muted-foreground animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          A selection of projects I'm proud of — each demonstrating problem-solving
          skills across software development, embedded systems, and artificial intelligence.
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