import { Github, Send } from "lucide-react"
import Link from "next/link"

export function CVHeader() {
  return (
    <section className="relative">
      {/* Decorative corner brackets */}
      <div className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-primary" />
      <div className="absolute -right-2 -top-2 h-6 w-6 border-r-2 border-t-2 border-primary" />
      
      <div className="bg-card p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
          {/* Avatar placeholder with glitch effect */}
          <div className="relative h-32 w-32 shrink-0 overflow-hidden border-2 border-primary bg-secondary">
            <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary">
              VF
            </div>
            {/* Decorative lines */}
            <div className="absolute bottom-2 left-2 right-2 h-px bg-primary/30" />
            <div className="absolute bottom-4 left-2 right-4 h-px bg-primary/20" />
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <p className="mb-1 text-xs uppercase tracking-widest text-primary">
                {"// SENIOR ENGINEER"}
              </p>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                <span className="text-primary">{">"}</span> Vlad Furman
              </h1>
            </div>

            <p className="border-l-2 border-primary pl-4 text-sm text-muted-foreground">
              Senior Frontend Engineer | Frontend Architecture | React & TypeScript
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="https://t.me/Ruminat"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 border border-border bg-secondary px-3 py-2 text-sm transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Send className="h-4 w-4" />
                <span>@Ruminat</span>
              </Link>
              <Link
                href="https://github.com/Ruminat"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 border border-border bg-secondary px-3 py-2 text-sm transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="h-4 w-4" />
                <span>Ruminat</span>
              </Link>
            </div>

            <p className="text-xs text-muted-foreground">
              <span className="text-primary">📍</span> Open to relocation from St. Petersburg
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-6 border-t border-border pt-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="text-primary">{"/**"}</span>
            <br />
            <span className="pl-4 block">
              Senior Frontend Engineer with 5+ years of experience at Yandex, specializing in 
              large-scale infrastructure platforms. Expert in React and TypeScript with a strong 
              focus on system architecture, legacy-to-modern migrations, and developer experience (DX).
            </span>
            <span className="text-primary">{"*/"}</span>
          </p>
        </div>
      </div>

      {/* Bottom decorative brackets */}
      <div className="absolute -bottom-2 -left-2 h-6 w-6 border-b-2 border-l-2 border-primary" />
      <div className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-primary" />
    </section>
  )
}
