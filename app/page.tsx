import { CVHeader } from "@/components/cv/cv-header"
import { CVExperience } from "@/components/cv/cv-experience"
import { CVProjects } from "@/components/cv/cv-projects"
import { CVSkills } from "@/components/cv/cv-skills"
import { CVEducation } from "@/components/cv/cv-education"
import { CVSidebar } from "@/components/cv/cv-sidebar"
import { content } from "@/content"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Scan lines overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.03)_2px,rgba(0,0,0,0.03)_4px)]" />

      {/* Grid pattern background */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <main className="relative z-10 mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
        {/* Terminal-style top bar */}
        <div className="mb-8 flex items-center gap-2 border-b border-border pb-4">
          <div className="h-3 w-3 bg-destructive" />
          <div className="h-3 w-3 bg-chart-4" />
          <div className="h-3 w-3 bg-primary" />
          <span className="ml-4 text-xs text-muted-foreground">
            {content.page.fileLabel}
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          <div className="space-y-8">
            <CVHeader />
            <CVSkills />
            <CVExperience />
            <CVProjects />
            <CVEducation />
          </div>
          <CVSidebar />
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <span className="text-primary">{">"}</span> console.log
          <span className="text-muted-foreground">(</span>
          <span className="text-chart-4">{`"${content.page.footerMessage}"`}</span>
          <span className="text-muted-foreground">)</span>
        </footer>
      </main>
    </div>
  )
}
