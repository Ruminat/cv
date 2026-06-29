'use client'

import { motion } from 'framer-motion'
import {
  GitBranch,
  Network,
  Workflow,
  Database,
  Package,
  TrendingUp,
} from 'lucide-react'
import { Reveal } from '@/shared/ui/Reveal'

const stack = [
  'TypeScript',
  'Lit',
  'React',
  'Redux Toolkit',
  'SCSS',
  'Node.js',
  'Gravity UI',
]

const achievements = [
  {
    icon: GitBranch,
    title: 'Strategic Migration',
    description:
      'Leading the architectural transition from Lit to React. Designed a custom bridge to render React components within the legacy Lit environment, enabling seamless incremental migration.',
  },
  {
    icon: Network,
    title: 'Infrastructure & Modularization',
    description:
      'Decoupled the monolithic “Nirvana” frontend into independent domain-specific services with separate repositories and CI/CD pipelines, improving delivery speed and team autonomy.',
  },
  {
    icon: Workflow,
    title: 'Architectural Solutions',
    description:
      'Engineered a global Dialog Manager that renders into the document body to bypass legacy CSS/DOM constraints, ensuring consistent UI behavior across Lit and React contexts.',
  },
  {
    icon: Database,
    title: 'State Management',
    description:
      'Developed lazy-loading Redux Toolkit modules with backward compatibility to custom legacy Redux implementations, enhancing DX and application stability.',
  },
  {
    icon: Package,
    title: 'Shared Tooling',
    description:
      'Created and maintain @yandex-data-ui/nirvana-common, an internal npm package standardizing business logic and UI patterns across the Nirvana ecosystem.',
  },
  {
    icon: TrendingUp,
    title: 'Fast Growth',
    description:
      'Promoted from Intern to Senior Engineer within 3.5 years by delivering high-impact solutions for Yandex’s internal cloud and developer tools.',
  },
]

export function YandexInfrastructure() {
  return (
    <section id="experience" className="py-12 md:py-16">
      <Reveal className="overflow-hidden rounded-3xl border border-border glass">
        {/* header */}
        <div className="grid gap-6 p-6 md:grid-cols-[0.85fr_1.15fr] md:gap-10 md:p-10">
          {/* illustration */}
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-background/40 md:aspect-auto">
            <img
              src="/yandex-infra.png"
              alt="Abstract illustration of the Yandex Nirvana infrastructure platform"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          {/* text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              <span className="text-destructive">Yandex</span> Infrastructure
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Dec 2020 — Present
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-foreground/90">
              <span className="font-semibold text-foreground">
                Project: Nirvana
              </span>{' '}
              — a mission-critical internal infrastructure platform used by
              <span className="font-semibold text-foreground">
                {' '}
                2,000+ engineers
              </span>{' '}
              daily for ML pipelines and data processing.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">
                Stack:
              </span>
              {stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border bg-card/60 px-2.5 py-1 text-xs font-medium text-foreground/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* achievements */}
        <div className="grid gap-px border-t border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="group relative bg-card/60 p-6 transition-colors hover:bg-card"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent" />
              </div>
              <span className="flex size-10 items-center justify-center rounded-xl border border-brand-orange/25 bg-brand-orange/10 text-brand-orange transition-transform duration-300 group-hover:scale-110">
                <a.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {a.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
