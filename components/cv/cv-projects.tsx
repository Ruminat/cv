import { Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    icon: "🦆",
    title: "MooDuck",
    date: "2025 — Present",
    githubLink: "https://github.com/Ruminat/MooDuck",
    description:
      "An experimental AI-driven Telegram bot for mood tracking. Features real-time sentiment analysis using OpenAI API and a Node.js backend with a Turso database.",
    tags: ["AI", "Node.js", "Telegram Bot"],
  },
  {
    icon: "㊀",
    title: "Chi",
    date: "2019",
    githubLink: "https://github.com/kit-software-development/exam-Ruminat",
    description:
      "A full-stack app for language learning using flashcards, similar to Anki, developed in the University.",
    tags: ["Full-Stack", "Education"],
  },
  {
    icon: "♪",
    title: "Lyra",
    date: "2016",
    githubLink: "https://github.com/Ruminat/Lyra",
    description:
      "A music player built with Electron, developed during high school to explore desktop JS.",
    tags: ["Electron", "Desktop App"],
  },
]

export function CVProjects() {
  return (
    <section className="relative">
      <div className="mb-4 flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
          [Side Projects]
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group relative border border-border bg-card p-4 transition-all hover:border-primary"
          >
            {/* Corner accent */}
            <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-primary opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-border bg-secondary text-lg">
                  {project.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-xs text-muted-foreground">{project.date}</p>
                </div>
              </div>
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-4 w-4" />
              </Link>
            </div>

            <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
              {project.description}
            </p>

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
  )
}
