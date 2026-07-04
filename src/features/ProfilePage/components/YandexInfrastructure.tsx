'use client'

import { motion } from 'framer-motion'
import {
  GitBranch,
  Network,
  Zap,
  Database,
  Package,
  Layers,
  BookOpen,
  GraduationCap,
  Blocks,
} from 'lucide-react'
import { asset } from '@/shared/lib/Asset'
import { Reveal } from '@/shared/ui/Reveal'

const stack = [
  'TypeScript',
  'React',
  'Lit',
  'Redux Toolkit',
  'Rspack',
  'Node.js',
  'Gravity UI',
]

const achievements = [
  {
    icon: GitBranch,
    title: 'Lit → React Migration',
    description:
      'Drove the platform-wide Lit → React migration. Built the React-in-Lit bridge that made it possible, a React dialog manager the whole team now relies on, and rebuilt some of Nirvana’s most tangled legacy UI in clean React.',
  },
  {
    icon: Network,
    title: 'Service Decomposition',
    description:
      'Broke one giant Nirvana / Reactor / Domains / Layers monorepo into four focused repos — one a shared library — each shipping on its own. Upgrades got painless and Layers releases roughly 3× faster.',
  },
  {
    icon: Zap,
    title: 'Build & CI Acceleration',
    description:
      'Rebuilt our tooling — Webpack to Rspack + SWC, ESLint to oxlint — for roughly 4× faster builds, 6× faster linting, and 3× faster CI. Faster feedback for every engineer on the team.',
  },
  {
    icon: BookOpen,
    title: 'Driving Standards',
    description:
      'I don’t just raise ideas and drop them — I push our engineering bar higher: tightening linting and conventions for a cleaner, more consistent codebase, aligning the team through open votes, and turning my own prototypes into tools everyone ends up using.',
  },
  {
    icon: Package,
    title: 'Shared Tooling',
    description:
      'Created and maintain @yandex-data-ui/nirvana-common, the shared library behind every Nirvana service. It keeps our React components, hooks, and utils free of service logic — cleaner code that’s genuinely easy to test.',
  },
  {
    icon: Database,
    title: 'State Management',
    description:
      'Designed lazy Redux Toolkit modules that wire themselves up on first use — killing a whole class of production bugs and making our state layer far cleaner to work with.',
  },
  {
    icon: Layers,
    title: 'Layers, Rebuilt',
    description:
      'Rebuilt Layers, our internal container registry, from the ground up — including a brand-new UI that makes a huge, messy set of images and repositories simple to browse and manage.',
  },
  {
    icon: GraduationCap,
    title: 'Mentorship',
    description:
      'Mentored two mid-level engineers and an intern, with a second intern starting soon. I grew from intern to senior here — now I help others climb the same way.',
  },
  {
    icon: Blocks,
    title: 'Open-Source Contribution',
    description:
      'Contribute to @gravity-ui, our open-source component ecosystem — I authored the Palette, Reactions, and Notifications components now used across Yandex products.',
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
              src={asset('yandex-infra.jpg')}
              alt="Abstract illustration of the Yandex Nirvana infrastructure platform"
              className="size-full object-cover"
            />
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
              — a mission-critical workflow-orchestration platform used by{' '}
              <span className="font-semibold text-foreground">
                2,000+ engineers
              </span>{' '}
              daily to compose computational graphs for ML model training and
              large-scale data processing, spanning scheduling (Reactor), a
              container-layer registry (Layers), and self-service execution
              (Domains).
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
