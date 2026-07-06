import { MapPin, Printer } from 'lucide-react'
import { asset } from '@/shared/lib/Asset'

/**
 * A print-optimized résumé rendered on the `/pdf` route.
 *
 * Deliberately minimal: HR reviewers print on white paper, so this is a
 * self-contained light document — near-monochrome with one restrained accent,
 * thin rules instead of decoration. It mirrors the HR-relevant content of the
 * live site (experience, skills, education, languages, side projects). Export
 * via the browser's "Save as PDF" or the Print button (hidden in the printout).
 */

interface Bullet {
  lead: string
  text: string
}

interface Job {
  title: string
  period: string
  bullets: Bullet[]
}

const jobs: Job[] = [
  {
    title: 'Senior Frontend Engineer',    period: 'May 2024 — Present',
    bullets: [
      {
        lead: 'Drove the Lit → React migration',
        text: ', building the React-in-Lit bridge and shared dialog infrastructure now used across the team.',
      },
      {
        lead: 'Cut build & CI times',
        text: ' with Rspack + SWC and oxlint — ~4× faster builds, ~6× faster linting, ~3× faster CI.',
      },
      {
        lead: 'Split a monorepo into four repositories',
        text: ' (Nirvana/Reactor, Domains, Layers and a shared library), cutting Layers release time 2–3×.',
      },
      {
        lead: 'Eliminated a recurring class of production bugs',
        text: ' with self-registering Redux Toolkit modules that load on first use, removing fragile manual wiring.',
      },
      {
        lead: 'Authored frontend engineering guidelines',
        text: ' used for onboarding, code reviews and AI-assisted development; contribute to open-source @gravity-ui.',
      },
    ],
  },
  {
    title: 'Middle Frontend Developer',    period: '2021 — May 2024',
    bullets: [
      {
        lead: 'Rewrote high-risk legacy components',
        text: ', migrating Nirvana’s most complex option components from Lit to React into a reusable foundation for future work.',
      },
      {
        lead: 'Rebuilt Layers as a standalone service',
        text: ', extracting it from the Nirvana monolith onto our infrastructure team’s shared stack and adding an internal Docker registry with a new image-browsing UI.',
      },
    ],
  },
  {
    title: 'Frontend Engineer Intern',    period: 'Dec 2020 — 2021',
    bullets: [
      {
        lead: 'Joined as a frontend intern',
        text: ' and shipped production changes to internal infrastructure tools.',
      },
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

const languages = [
  { name: 'Russian', level: 'Native' },
  { name: 'English', level: 'B2 · Professional' },
  { name: 'Japanese', level: 'JLPT N4 · Elementary' },
]

const interests = ['Table tennis', 'Speed cubing', 'Web development', 'Gaming', 'Languages']

const sideProjects = [
  {
    name: 'MooDuck',
    period: '2025',
    href: 'https://mooduck.shrek-labs.dev',
    desc: 'An AI bot you vent to — it listens and thoughtfully replies.',
    tags: ['Telegram', 'React', 'Express', 'Turso'],
  },
  {
    name: 'Cube Shrine',
    period: '2025',
    href: 'https://cs.shrek-labs.dev',
    desc: 'A Rubik’s Cube site with a custom 3D cube renderer on 2D canvas.',
    tags: ['Next.js', 'Canvas 2D', 'TypeScript', 'Library'],
  },
  {
    name: 'Kitchen Madness',
    period: '2026',
    href: 'https://github.com/Ruminat/Kitchen-Madness',
    desc: 'A survivors-like arena game — my gamedev hobby project.',
    tags: ['Godot 4', 'GDScript', 'Game Dev'],
  },
  {
    name: 'Lyra',
    period: '2016',
    href: 'https://github.com/Ruminat/Lyra',
    desc: 'My first big project — a music player I actually used daily.',
    tags: ['Electron', 'JavaScript', 'Desktop App'],
  },
]

const contacts: { icon: string; text: string; href: string }[] = [
  {
    icon: 'contact-icons/gmail.svg',
    text: 'vlad.furman.ae@gmail.com',
    href: 'mailto:vlad.furman.ae@gmail.com',
  },
  {
    icon: 'contact-icons/github.svg',
    text: 'Ruminat',
    href: 'https://github.com/Ruminat',
  },
  {
    icon: 'contact-icons/linkedin.svg',
    text: 'Ruminat',
    href: 'https://www.linkedin.com/in/ruminat',
  },
  {
    icon: 'contact-icons/telegram.svg',
    text: 'Ruminat',
    href: 'https://t.me/Ruminat',
  },
  {
    icon: 'favicon.png',
    text: 'cv.shrek-labs.dev',
    href: 'https://cv.shrek-labs.dev',
  },
]

const printStyles = `
  @page { size: A4; margin: 0; }
  @media print {
    html, body { background: #ffffff !important; }
  }
  .pdf-root {
    color-scheme: light;
    font-family: 'Roboto', ui-sans-serif, system-ui, sans-serif;
    font-weight: 300;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`

function Section({
  title,
  children,
}: {
  title: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <section className="mb-3.5 break-inside-avoid last:mb-0">
      <h2 className="mb-2 border-b border-neutral-200 pb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
        {title}
      </h2>
      {children}
    </section>
  )
}

export function PdfResume() {
  return (
    <div className="pdf-root min-h-screen bg-neutral-100 py-8 text-neutral-800 print:min-h-0 print:bg-white print:py-0">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
      />
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

      <div className="mx-auto w-[210mm] min-h-[297mm] bg-white p-[10mm] text-neutral-800 shadow-xl print:min-h-0 print:shadow-none">
        {/* Header */}
        <header className="flex items-start justify-between gap-8">
          <div className="min-w-0">
            <h1 className="text-[32px] font-bold leading-none tracking-tight text-neutral-900">
              Vlad Furman
            </h1>
            <p className="mt-1.5 text-[15px] font-medium text-orange-600">
              Senior Frontend Engineer
            </p>
            <p className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-medium text-neutral-500">
              <MapPin className="size-3.5 text-orange-500" />
              Open to relocation from St. Petersburg
            </p>
            <p className="mt-2.5 max-w-xl text-[13px] leading-relaxed text-neutral-600">
              Senior Frontend Engineer with 5+ years at Yandex, building
              infrastructure products used by thousands of engineers. Specializes
              in large-scale React &amp; TypeScript platforms, legacy-to-modern
              migrations and developer productivity.
            </p>
          </div>
          <img
            src={asset('photo-pdf.png')}
            alt="Vlad Furman"
            className="size-40 shrink-0 rounded-full object-cover ring-1 ring-neutral-200"
          />
        </header>

        {/* Contact line */}
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-neutral-500">
          {contacts.map((c) => (
            <a
              key={c.text}
              href={c.href}
              className="inline-flex items-center gap-1.5 hover:text-neutral-900"
            >
              <img src={asset(c.icon)} alt="" className="size-3.5 object-contain" />
              {c.text}
            </a>
          ))}
        </div>

        <hr className="my-3 border-neutral-200" />

        {/* Two columns: experience (wide) + sidebar (narrow) */}
        <div className="grid grid-cols-[1.7fr_1fr] gap-9">
          {/* Main */}
          <div>
            <Section
              title={
                <>
                  Experience —{' '}
                  <span className="text-neutral-700">
                    <span className="text-[#f8604a]">Y</span>andex Infrastructure
                  </span>
                </>
              }
            >
              {jobs.map((job) => (
                <div key={job.title} className="mb-3.5 break-inside-avoid last:mb-0">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-[15px] font-semibold text-neutral-900">
                      {job.title}
                    </h3>
                    <span className="shrink-0 text-[11px] font-medium text-neutral-400">
                      {job.period}
                    </span>
                  </div>
                  <ul className="mt-1.5 space-y-1">
                    {job.bullets.map((b) => (
                      <li
                        key={b.lead}
                        className="flex gap-2 text-[13px] leading-snug text-neutral-600"
                      >
                        <span className="text-neutral-300">–</span>
                        <span>
                          <span className="font-semibold text-neutral-800">
                            {b.lead}
                          </span>
                          {b.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Section>

            <Section title="Side Projects">
              <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                {sideProjects.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-baseline justify-between gap-2">
                      <a
                        href={p.href}
                        className="text-[13px] font-semibold text-neutral-800 hover:text-neutral-950"
                      >
                        {p.name}
                      </a>
                      <span className="shrink-0 text-[11px] font-medium text-neutral-400">
                        {p.period}
                      </span>
                    </div>
                    <p className="text-[13px] leading-snug text-neutral-600">{p.desc}</p>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded border border-neutral-200 bg-neutral-50 px-1.5 py-px text-[11px] text-neutral-500"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Sidebar */}
          <div>
            <Section title="Skills">
              <div className="space-y-1.5">
                {techStack.map((g) => (
                  <p key={g.label} className="text-[13px] leading-snug">
                    <span className="font-semibold text-neutral-700">{g.label}: </span>
                    <span className="text-neutral-500">{g.items.join(', ')}</span>
                  </p>
                ))}
              </div>
            </Section>

            <Section title="Education">
              <p className="text-[13px] font-semibold text-neutral-800">
                Peter the Great St. Petersburg Polytechnic University
              </p>
              <ul className="mt-1.5 space-y-1.5">
                {education.map((e) => (
                  <li key={e.degree} className="text-[13px] leading-snug text-neutral-600">
                    <p>{e.degree}</p>
                    <p className="text-[11px] text-neutral-400">{e.period}</p>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Languages">
              <ul className="space-y-1">
                {languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-baseline justify-between gap-2 text-[13px]"
                  >
                    <span className="font-medium text-neutral-700">{l.name}</span>
                    <span className="text-neutral-500">{l.level}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Interests">
              <ul className="flex flex-col gap-1 text-[13px] text-neutral-500">
                {interests.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </Section>
          </div>
        </div>
      </div>
    </div>
  )
}
