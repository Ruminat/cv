import { IconGithub } from "../icons";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    icon: "/mooduck.png",
    title: "MooDuck",
    date: "2025 — Present",
    githubLink: "https://github.com/Ruminat/MooDuck",
    description:
      "AI-driven Telegram bot for mood tracking with real-time sentiment analysis. Built with Node.js and OpenAI API, using Turso for lightweight persistence.",
    tags: ["AI", "Node.js", "Telegram Bot"],
  },
  {
    icon: "/chi.png",
    title: "Chi",
    date: "2019",
    githubLink: "https://github.com/kit-software-development/exam-Ruminat",
    description:
      "Full-stack language learning app using spaced-repetition flashcards (Anki-style). Built to explore learning algorithms and full-stack architecture.",
    tags: ["Full-Stack", "Education"],
  },
  {
    icon: "/lyra.png",
    title: "Lyra",
    date: "2016",
    githubLink: "https://github.com/Ruminat/Lyra",
    description: "Desktop music player built with Electron as an early exploration of cross-platform JavaScript applications.",
    tags: ["Electron", "Desktop App"],
  },
];

export function CvProjects() {
  return (
    <section className="relative">
      <SectionHeader title="Side Projects" />

      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative border border-border bg-card p-4 transition-all hover:border-primary"
          >
            <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-primary opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="mb-3 flex items-center justify-between gap-2">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden border border-border bg-secondary">
                  {project.icon ? (
                    <img src={project.icon} alt="" width={40} height={40} className="h-full w-full object-cover" />
                  ) : null}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate font-semibold">{project.title}</h3>
                  <p className="text-xs text-muted-foreground">{project.date}</p>
                </div>
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
                aria-label={`${project.title} on GitHub`}
              >
                <IconGithub />
              </a>
            </div>

            <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{project.description}</p>

            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-secondary px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
