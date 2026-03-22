import { Badge } from "@/components/ui/badge"

export function CVExperience() {
  const responsibilities = [
    {
      title: "Strategic Migration",
      description:
        "Leading the architectural transition from Lit to React. Designed and implemented a custom bridge to render React components within the legacy Lit environment, allowing for a seamless, incremental migration of complex pages and dialogs without service disruption.",
    },
    {
      title: "Infrastructure & Modularization",
      description:
        'Successfully decoupled the monolithic "Nirvana" frontend into independent, domain-specific services (Layers, Domain Constructor). Established standalone repositories and CI/CD pipelines, significantly improving delivery speed and team autonomy.',
    },
    {
      title: "Architectural Solutions",
      description:
        "Engineered a global Dialog Manager capable of rendering into the document body to bypass legacy CSS/DOM constraints, ensuring consistent UI behavior across both Lit and React contexts.",
    },
    {
      title: "State Management",
      description:
        "Developed lazy-loading Redux Toolkit modules that maintain backward compatibility with custom legacy Redux implementations, enhancing the developer experience and improving application stability.",
    },
    {
      title: "Shared Tooling",
      description:
        "Created and currently maintain @yandex-data-ui/nirvana-common (internal npm package), standardizing business logic and UI patterns across the Nirvana services ecosystem.",
    },
    {
      title: "Growth",
      description:
        "Rapidly promoted from Intern to Senior Engineer within 4 years, consistently delivering high-impact solutions for Yandex's internal cloud and developer tools.",
    },
  ]

  const techStack = [
    "TypeScript",
    "Lit",
    "React",
    "Redux Toolkit",
    "SCSS",
    "Node.js",
    "Gravity UI",
  ]

  return (
    <section className="relative">
      <SectionHeader title="Experience" />

      <div className="border border-border bg-card p-6">
        {/* Company header */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="text-2xl font-bold">
            <span className="text-[#FC3F1D]">Y</span>andex
          </span>
          <span className="text-muted-foreground">|</span>
          <span className="text-sm text-muted-foreground">2020 — Present</span>
        </div>

        {/* Project info */}
        <div className="mb-6 space-y-4">
          <div className="flex items-start gap-2">
            <span className="shrink-0 text-primary">{">"}</span>
            <div>
              <span className="font-semibold">Project:</span>{" "}
              <span className="text-muted-foreground">
                Nirvana — a mission-critical internal infrastructure platform used by 2,000+ 
                developers daily for ML pipelines and data processing.
              </span>
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold">
              <span className="text-primary">$</span> tech_stack:
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-border bg-secondary text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div>
          <p className="mb-4 text-sm font-semibold">
            <span className="text-primary">$</span> key_responsibilities:
          </p>
          <div className="space-y-4">
            {responsibilities.map((item, index) => (
              <div key={index} className="group relative pl-6">
                <div className="absolute left-0 top-0 h-full w-px bg-border group-hover:bg-primary transition-colors" />
                <div className="absolute -left-1 top-1 h-2 w-2 border border-border bg-card group-hover:border-primary group-hover:bg-primary transition-colors" />
                <h4 className="mb-1 text-sm font-semibold text-foreground">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-4 flex items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
        [{title}]
      </h2>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  )
}
