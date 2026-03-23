const skillCategories = [
  {
    name: "Core",
    skills: ["TypeScript", "React", "Node.js", "Electron"],
  },
  {
    name: "Styling",
    skills: ["SCSS", "CSS Modules", "Tailwind"],
  },
  {
    name: "Tools",
    skills: ["Git", "Docker", "Vite", "Webpack", "CI/CD"],
  },
  {
    name: "Libraries",
    skills: ["Lit", "Redux Toolkit", "Express", "Gravity UI"],
  },
]

export function CVSkills() {
  return (
    <section className="relative">
      <div className="mb-4 flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
          [Skills]
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="border border-border bg-card p-6">
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <div className="mb-3 flex items-center gap-2">
                <span className="text-primary">{">"}</span>
                <span className="text-sm font-semibold">{category.name}</span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="flex flex-wrap gap-2 pl-4">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="group relative border border-border bg-secondary px-3 py-1 text-sm transition-colors hover:border-primary"
                  >
                    <span className="absolute -left-px -top-px h-2 w-2 border-l border-t border-primary opacity-0 transition-opacity group-hover:opacity-100" />
                    {skill}
                    <span className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
