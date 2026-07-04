import {
  Boxes,
  Briefcase,
  Code2,
  FolderGit2,
  GraduationCap,
  Heart,
  Languages,
  Mail,
  MapPin,
  Printer,
  Send,
  Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { asset } from '@/shared/lib/Asset'

/**
 * A print-optimized, single-page resume rendered on the `/pdf` route.
 *
 * It deliberately does NOT reuse the dark marketing theme: HR reviewers print
 * on white paper, so this view is a self-contained light document built from
 * explicit colors. Use the browser's "Save as PDF" (or the Print button, which
 * is hidden in the printout) to export it. Content mirrors the live site.
 */

interface Job {
  title: string
  org: string
  period: string
  bullets: string[]
}

const jobs: Job[] = [
  {
    title: 'Senior Frontend Engineer',
    org: 'Yandex Infrastructure — Nirvana Platform',
    period: 'May 2024 — Present',
    bullets: [
      'Drove the platform-wide Lit → React migration — built the React-in-Lit bridge that made it possible, a shared dialog manager the whole team relies on, and rebuilt Nirvana’s most tangled legacy UI in clean React.',
      'Modernized build & CI (Webpack → Rspack + SWC, ESLint → oxlint): roughly 4× faster builds, 6× faster linting and 3× faster CI for every engineer on the team.',
      'Split a giant Nirvana / Reactor / Domains / Layers monorepo into four focused repos — one a shared library — each shipping independently.',
      'Designed lazy Redux Toolkit modules that self-register on first use, killing a class of production bugs; maintain @yandex-data-ui/nirvana-common and contribute to open-source @gravity-ui (Palette, Reactions, Notifications).',
    ],
  },
  {
    title: 'Middle Frontend Developer',
    org: 'Yandex Infrastructure — Nirvana Platform',
    period: '2021 — May 2024',
    bullets: [
      'Ported Nirvana’s most complex, dreaded option components from Lit to React — a brutal piece of legacy turned into something the team could build on.',
      'Built features for workflow orchestration and scheduling (Reactor).',
      'Raised code quality and developer experience across the platform.',
    ],
  },
  {
    title: 'Frontend Engineer Intern',
    org: 'Yandex',
    period: 'Dec 2020 — 2021',
    bullets: [
      'Joined as an intern; learned a large internal platform from the inside and shipped real changes to internal tools and UI.',
      'Absorbed Yandex engineering practices and culture.',
    ],
  },
]

const techStack: { label: string; items: string[] }[] = [
  { label: 'Core', items: ['TypeScript', 'React', 'Redux Toolkit', 'Node.js'] },
  { label: 'Build & CI', items: ['Rspack', 'SWC', 'oxlint', 'Webpack', 'Vite', 'Vitest'] },
  { label: 'Libraries', items: ['Express', 'Electron', 'Gravity UI', 'Lit'] },
  { label: 'Styling', items: ['SCSS', 'CSS Modules', 'Tailwind CSS'] },
  { label: 'Tools', items: ['Git', 'Docker', 'PM2'] },
]

const about = [
  '5+ years at Yandex — grew from intern to senior, now mentors mid-level engineers and interns.',
  'Builds infrastructure products used by thousands of engineers, focused on scalable architecture and developer experience.',
  'Loves clean code, thoughtful architecture and untangling hard legacy.',
]

const languages = [
  { name: 'Russian', level: 'Native' },
  { name: 'English', level: 'B2 · Professional working' },
  { name: 'Japanese', level: 'JLPT N4 · Elementary' },
]

const interests = ['Table tennis', 'Speed cubing', 'Web development', 'Gaming', 'Languages']

const sideProjects = [
  {
    name: 'MooDuck',
    period: '2025',
    blurb: 'Telegram mood-journal app — React client, bot, and Express + Drizzle backend on Turso.',
  },
  {
    name: 'Cube Shrine',
    period: '2025',
    blurb: 'Rubik’s Cube algorithm browser — a TypeScript notation parser with isometric 3D previews on 2D canvas.',
  },
  {
    name: 'Kitchen Madness',
    period: '2025',
    blurb: 'Top-down arena survivor game built in Godot 4 with GDScript.',
  },
  {
    name: 'Lyra',
    period: '2016',
    blurb: 'Cross-platform Electron music player with an audio visualizer and playlists.',
  },
]

const education = [
  {
    degree: 'Master’s — Corporate Information Systems Management',
    period: '2020 — 2022',
  },
  {
    degree: 'Bachelor’s — Software Engineering & Information Systems Administration',
    period: '2016 — 2020',
  },
]

const contacts = [
  { icon: Mail, text: 'vlad.furman.ae@gmail.com', href: 'mailto:vlad.furman.ae@gmail.com' },
  { icon: MapPin, text: 'St. Petersburg, Russia', href: null },
  { icon: Code2, text: 'github.com/Ruminat', href: 'https://github.com/Ruminat' },
  { icon: Send, text: 't.me/Ruminat', href: 'https://t.me/Ruminat' },
]

const printStyles = `
  @page { size: A4; margin: 0; }
  @media print {
    html, body { background: #ffffff !important; }
  }
  .pdf-root {
    color-scheme: light;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-3 break-inside-avoid">
      <div className="mb-2 flex items-center gap-2">
        <span className="flex size-6 items-center justify-center rounded-full bg-orange-500/12 text-orange-600">
          <Icon className="size-3.5" />
        </span>
        <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-neutral-800">
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-neutral-200 bg-neutral-50 px-2 py-[3px] text-[10.5px] font-medium text-neutral-700">
      {children}
    </span>
  )
}

export function PdfResume() {
  return (
    <div className="pdf-root min-h-screen bg-neutral-100 py-8 text-neutral-800 print:min-h-0 print:bg-white print:py-0">
      <style>{printStyles}</style>

      <button
        type="button"
        onClick={() => {
          window.print()
        }}
        className="fixed right-6 top-6 z-10 inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:bg-neutral-700 print:hidden"
      >
        <Printer className="size-4" />
        Save as PDF
      </button>

      <div className="mx-auto w-[210mm] min-h-[297mm] bg-white p-[9mm] shadow-xl print:min-h-0 print:shadow-none">
        {/* Header */}
        <header className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <h1 className="text-[34px] font-extrabold leading-none tracking-tight text-neutral-900">
              Vlad <span className="gradient-text">Furman</span>
            </h1>
            <p className="mt-1.5 text-lg font-medium text-neutral-500">
              Senior Frontend Engineer
            </p>
            <p className="mt-2 max-w-md text-[11.5px] leading-relaxed text-neutral-600">
              Senior Frontend Engineer with 5+ years at Yandex, building
              infrastructure products used by thousands of engineers. Focused on
              React, TypeScript, scalable architecture and developer experience.
            </p>
          </div>
          <div className="shrink-0 rounded-full bg-gradient-to-br from-brand-orange via-brand-pink to-brand-purple p-[3px]">
            <img
              src={asset('vlad-portrait.png')}
              alt="Vlad Furman"
              className="size-28 rounded-full object-cover ring-2 ring-white"
            />
          </div>
        </header>

        {/* Contacts */}
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-[11.5px] text-neutral-600">
          {contacts.map((c) => {
            const Icon = c.icon
            const inner = (
              <span className="inline-flex items-center gap-1.5">
                <Icon className="size-3.5 text-orange-600" />
                {c.text}
              </span>
            )
            return c.href ? (
              <a key={c.text} href={c.href} className="hover:text-neutral-900">
                {inner}
              </a>
            ) : (
              <span key={c.text}>{inner}</span>
            )
          })}
        </div>

        <hr className="my-3 border-neutral-200" />

        {/* Two columns */}
        <div className="grid grid-cols-[1.55fr_1fr] gap-8">
          {/* Left */}
          <div>
            <Section icon={Briefcase} title="Experience">
              {jobs.map((job) => (
                <div key={job.title} className="mb-2 break-inside-avoid">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-[13px] font-semibold text-neutral-900">
                      {job.title}
                    </h3>
                    <span className="shrink-0 text-[10.5px] font-medium text-neutral-400">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-[11px] font-semibold text-orange-600">
                    {job.org}
                  </p>
                  <ul className="mt-1.5 space-y-1">
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-2 text-[11px] leading-snug text-neutral-600"
                      >
                        <span className="mt-[6px] size-[3px] shrink-0 rounded-full bg-orange-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Section>

            <Section icon={GraduationCap} title="Education">
              <p className="text-[12px] font-semibold text-neutral-900">
                Peter the Great St. Petersburg Polytechnic University
              </p>
              <ul className="mt-1.5 space-y-1.5">
                {education.map((e) => (
                  <li
                    key={e.degree}
                    className="flex items-baseline justify-between gap-3 text-[11px] text-neutral-600"
                  >
                    <span>{e.degree}</span>
                    <span className="shrink-0 text-[10.5px] text-neutral-400">
                      {e.period}
                    </span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section icon={Languages} title="Languages">
              <ul className="space-y-1.5">
                {languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-baseline justify-between gap-3 border-b border-neutral-100 pb-1.5 text-[11.5px] last:border-0 last:pb-0"
                  >
                    <span className="font-semibold text-neutral-800">{l.name}</span>
                    <span className="text-neutral-500">{l.level}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section icon={Heart} title="Interests">
              <div className="flex flex-wrap gap-1.5">
                {interests.map((i) => (
                  <Pill key={i}>{i}</Pill>
                ))}
              </div>
            </Section>
          </div>

          {/* Right */}
          <div>
            <Section icon={Sparkles} title="About Me">
              <ul className="space-y-2">
                {about.map((a) => (
                  <li
                    key={a}
                    className="flex gap-2 text-[11px] leading-snug text-neutral-600"
                  >
                    <span className="mt-[6px] size-[3px] shrink-0 rounded-full bg-orange-500" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section icon={Boxes} title="Tech Stack">
              <div className="space-y-1">
                {techStack.map((g) => (
                  <div key={g.label}>
                    <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wide text-neutral-500">
                      {g.label}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {g.items.map((i) => (
                        <Pill key={i}>{i}</Pill>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section icon={FolderGit2} title="Side Projects">
              <ul className="space-y-2">
                {sideProjects.map((p) => (
                  <li key={p.name}>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-[11.5px] font-semibold text-neutral-800">
                        {p.name}
                      </span>
                      <span className="shrink-0 text-[10px] text-neutral-400">
                        {p.period}
                      </span>
                    </div>
                    <p className="text-[10.5px] leading-snug text-neutral-500">
                      {p.blurb}
                    </p>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </div>
      </div>
    </div>
  )
}
