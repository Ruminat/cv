import { Badge } from "@/components/ui/badge"
import { content } from "@/content"

export function CVExperience() {
  const responsibilityContent = content.experience.responsibilities
  const responsibilities = [
    {
      title: "Strategic Migration",
      description: responsibilityContent.strategicMigration,
    },
    {
      title: "Infrastructure & Modularization",
      description: responsibilityContent.infrastructureAndModularization,
    },
    {
      title: "Architectural Solutions",
      description: responsibilityContent.architecturalSolutions,
    },
    {
      title: "State Management",
      description: responsibilityContent.stateManagement,
    },
    {
      title: "Shared Tooling",
      description: responsibilityContent.sharedTooling,
    },
    {
      title: "Growth",
      description: responsibilityContent.growth,
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
          <span className="text-sm text-muted-foreground">{content.experience.companyPeriod}</span>
        </div>

        {/* Project info */}
        <div className="mb-6 space-y-4">
          <div className="flex items-start gap-2">
            <span className="shrink-0 text-primary">{">"}</span>
            <div>
              <span className="font-semibold">Project:</span>{" "}
              <span className="text-muted-foreground">
                {content.experience.projectDescription}
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
