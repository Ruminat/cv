'use client'

import { motion } from 'framer-motion'
import { FolderGit2, Music, GraduationCap, Bot } from 'lucide-react'
import { SectionHeading } from '@/shared/ui/SectionHeading'

const projects = [
  {
    icon: Bot,
    name: 'MooDuck',
    period: '2025 — Present',
    description:
      'AI-driven Telegram bot for mood tracking. Real-time sentiment analysis with the OpenAI API and a Node.js backend powered by Turso DB.',
    tags: ['AI', 'Node.js', 'Telegram Bot'],
    accent: 'from-brand-orange/20 to-brand-pink/10',
    iconColor: 'text-brand-orange',
  },
  {
    icon: GraduationCap,
    name: 'Chi',
    period: '2019',
    description:
      'A full-stack app for language learning using flashcards, similar to Anki, with spaced-repetition scheduling.',
    tags: ['Full-Stack', 'Education'],
    accent: 'from-emerald-500/20 to-teal-500/10',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Music,
    name: 'Lyra',
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
      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, rotateX: 3, rotateY: -3 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border glass p-6 transition-shadow hover:border-brand-orange/30 hover:shadow-[0_20px_60px_-20px] hover:shadow-brand-orange/30"
          >
            <div
              className={`pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-gradient-to-br ${p.accent} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
            />
            <div className="flex items-center gap-3">
              <span
                className={`flex size-11 items-center justify-center rounded-xl border border-border bg-card/80 ${p.iconColor}`}
              >
                <p.icon className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold leading-none">{p.name}</h3>
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
          </motion.article>
        ))}
      </div>
    </section>
  )
}
