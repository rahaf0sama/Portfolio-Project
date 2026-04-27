import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Github, Linkedin, Send, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ali Yasser Mohammed Ali" },
      {
        name: "description",
        content:
          "Get in touch with Ali Yasser for software development, embedded systems, AI projects, or collaboration opportunities.",
      },
      { property: "og:title", content: "Contact — Ali Yasser Mohammed Ali" },
      {
        property: "og:description",
        content: "Open to opportunities in software development, web development, and embedded systems.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="relative mx-auto max-w-5xl px-4 sm:px-6 pb-12">
      <p className="text-sm font-mono text-[var(--accent-purple)] animate-fade-up">
        / contact
      </p>
      <h1
        className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight animate-fade-up"
        style={{ animationDelay: "60ms" }}
      >
        Let's <span className="gradient-text">talk.</span>
      </h1>
      <p
        className="mt-4 max-w-xl text-lg text-muted-foreground animate-fade-up"
        style={{ animationDelay: "120ms" }}
      >
        Got an opportunity, project, or idea? I'm eager to connect and discuss
        potential collaborations. Let's build something great together.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-3">
          <a
            href="mailto:a.fathalbab5666@su.edu.eg"
            className="group flex items-center gap-4 rounded-2xl glass p-5 transition-all hover:bg-white/[0.06] hover:-translate-y-0.5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Email
              </p>
              <p className="text-sm font-medium text-foreground">
                a.fathalbab5666@su.edu.eg
              </p>
            </div>
          </a>
          <a
            href="https://github.com/aliyassermahmoud"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-2xl glass p-5 transition-all hover:bg-white/[0.06] hover:-translate-y-0.5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
              <Github className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                GitHub
              </p>
              <p className="text-sm font-medium text-foreground">
                @aliyassermahmoud
              </p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/ali-yasser-mohammed-127116375"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-2xl glass p-5 transition-all hover:bg-white/[0.06] hover:-translate-y-0.5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
              <Linkedin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                LinkedIn
              </p>
              <p className="text-sm font-medium text-foreground">
                Ali Yasser Mohammed
              </p>
            </div>
          </a>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 4000);
          }}
          className="glass-strong rounded-3xl p-6 sm:p-8 space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" id="name" placeholder="Your name" />
            <Field
              label="Email"
              id="email"
              type="email"
              placeholder="you@example.com"
            />
          </div>
          <Field label="Subject" id="subject" placeholder="What's this about?" />
          <div>
            <label
              htmlFor="message"
              className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder="Tell me a bit about it…"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:outline-none focus:border-[var(--accent-purple)]/60 focus:bg-white/[0.05]"
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="inline-flex items-center justify-center gap-2 w-full rounded-full gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:scale-[1.01] disabled:opacity-80"
          >
            {sent ? (
              <>
                <Check className="h-4 w-4" /> Message sent
              </>
            ) : (
              <>
                Send message <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:outline-none focus:border-[var(--accent-purple)]/60 focus:bg-white/[0.05]"
      />
    </div>
  );
}