import { GraduationCap } from "lucide-react"

export function CVEducation() {
  const education = [
    {
      period: "2016 — 2020",
      degree: "Bachelor's",
      specialty: "Software Engineering and Information Systems Administration",
    },
    {
      period: "2020 — 2022",
      degree: "Master's",
      specialty: "Corporate Information Systems Management",
    },
  ]

  return (
    <section className="relative">
      <div className="mb-4 flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
          [Education]
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="border border-border bg-card p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-border bg-secondary">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold">
              Peter the Great St. Petersburg
            </p>
            <p className="text-xs text-muted-foreground">Polytechnic University</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative border-l-2 border-border pl-4 transition-colors hover:border-primary"
            >
              <div className="mb-1 flex items-center gap-2">
                <span className="bg-secondary px-2 py-0.5 text-xs text-primary">
                  {edu.degree}
                </span>
                <span className="text-xs text-muted-foreground">{edu.period}</span>
              </div>
              <p className="text-sm text-muted-foreground">{edu.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
