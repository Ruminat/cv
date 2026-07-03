'use client'

import { motion } from 'framer-motion'
import { FolderGit2, Music, GraduationCap, Bot, Box } from 'lucide-react'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { asset } from '@/shared/lib/Asset'

const projects = [
  {
    icon: Bot,
    logo: 'mooduck.png',
    name: 'MooDuck',
    link: 'https://mooduck.shrek-labs.dev/',
    period: '2025 — Present',
    description:
      'A personal Telegram mood journal for quick 1–10 check-ins, short notes, and history review. Built as a practical side project with a React app, Telegram bot, and Express + Drizzle backend on Turso.',
    tags: ['Telegram', 'React', 'Express', 'Turso'],
    accent: 'from-brand-orange/20 to-brand-pink/10',
    iconColor: 'text-brand-orange',
  },
  {
    icon: Box,
    logo: 'cube-shrine.png',
    name: 'Cube Shrine',
    link: 'https://ruminat.github.io/Cube-Shrine/',
    period: '2025',
    description:
      'A Rubik’s Cube algorithm browser built around the fun part: a TypeScript library that parses notation, models cubie state, and renders isometric 3D cube previews on a plain 2D canvas. Wrapped in a static Next.js app.',
    tags: ['Next.js', 'Canvas 2D', 'TypeScript', 'Library'],
    accent: 'from-sky-500/20 to-cyan-500/10',
    iconColor: 'text-sky-400',
  },
  {
    icon: GraduationCap,
    logo: null,
    name: 'Chi',
    link: null,
    period: '2019',
    description:
      'A full-stack app for language learning using flashcards, similar to Anki, with spaced-repetition scheduling.',
    tags: ['Full-Stack', 'Education'],
    accent: 'from-emerald-500/20 to-teal-500/10',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Music,
    logo: null,
    name: 'Lyra',
    link: null,
    period: '2016',
    description:
      'A music player built with Electron, exploring cross-platform desktop JavaScript and native OS integrations.',
    tags: ['Electron', 'Desktop App'],
    accent: 'from-brand-purple/20 to-brand-pink/10',
    iconColor: 'text-brand-purple',
  },
]

export function SideProjects() {
  return (
    <section id="projects" className="py-12 md:py-16">
      <SectionHeading icon={FolderGit2} title="Side Projects" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((p, i) => {
          const MotionCard = p.link ? motion.a : motion.article

          return (
            <MotionCard
              key={p.name}
              href={p.link ?? undefined}
              target={p.link ? '_blank' : undefined}
              rel={p.link ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, rotateX: 3, rotateY: -3 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border glass p-6 transition-shadow hover:border-brand-orange/30 hover:shadow-[0_20px_60px_-20px] hover:shadow-brand-orange/30 focus:outline-none focus-visible:border-brand-orange/40 focus-visible:ring-2 focus-visible:ring-brand-orange/40"
            >
              <div
                className={`pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-gradient-to-br ${p.accent} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="flex items-center gap-3">
                <span
                  className={`flex size-11 items-center justify-center rounded-xl border border-border bg-card/80 ${p.iconColor}`}
                >
                  {p.logo ? (
                    <img
                      src={asset(p.logo)}
                      alt={`${p.name} logo`}
                      className="size-8 object-contain"
                    />
                  ) : (
                    <p.icon className="size-5" />
                  )}
                </span>
                <div>
                  <h3 className="font-semibold leading-none transition-colors group-hover:text-brand-orange group-focus-visible:text-brand-orange">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{p.period}</p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-border bg-card/60 px-2 py-1 text-xs font-medium text-foreground/75"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </MotionCard>
          )
        })}
      </div>
    </section>
  )
}
