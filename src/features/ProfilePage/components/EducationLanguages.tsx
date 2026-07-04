import {
  Cuboid,
  GraduationCap,
  Languages,
  Trophy,
  CodeXml,
  Gamepad2,
  BookOpenText,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Reveal } from '@/shared/ui/Reveal'
import { SectionHeading } from '@/shared/ui/SectionHeading'

const degrees = [
  {
    level: "Bachelor's",
    period: '2016 — 2020',
    field: 'Software Engineering and Information Systems Administration',
    accent: 'text-brand-orange',
  },
  {
    level: "Master's",
    period: '2020 — 2022',
    field: 'Corporate Information Systems Management',
    accent: 'text-brand-purple',
  },
]

const languages = [
  { name: 'Russian', level: 'Native' },
  { name: 'English', level: 'B2' },
  { name: 'Japanese', level: 'N4' },
]

const interests = [
  {
    icon: Trophy,
    label: 'Table tennis',
    tone: 'from-brand-orange/25 to-brand-orange/5 text-brand-orange ring-brand-orange/25',
  },
  {
    icon: CodeXml,
    label: 'Web development',
    tone: 'from-brand-pink/25 to-brand-pink/5 text-brand-pink ring-brand-pink/25',
  },
  {
    icon: Cuboid,
    label: 'Speed cubing',
    tone: 'from-brand-purple/25 to-brand-orange/10 text-brand-purple ring-brand-purple/25',
  },
  {
    icon: Gamepad2,
    label: 'Gaming',
    tone: 'from-brand-orange/20 to-brand-purple/10 text-brand-orange ring-brand-orange/25',
  },
  {
    icon: BookOpenText,
    label: 'Languages',
    tone: 'from-brand-purple/25 to-brand-purple/5 text-brand-purple ring-brand-purple/25',
  },
]

interface InterestIconProps {
  icon: LucideIcon
  tone: string
}

function InterestIcon({ icon: Icon, tone }: InterestIconProps) {
  return (
    <span
      className={`relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br ring-1 ${tone}`}
    >
      <span className="absolute inset-x-1 top-1 h-px bg-white/30" />
      <Icon className="relative size-4 drop-shadow-[0_0_10px_currentColor]" />
    </span>
  )
}

export function EducationLanguages() {
  return (
    <section id="education" className="py-12 md:py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Education */}
        <div>
          <SectionHeading icon={GraduationCap} title="Education" />
          <Reveal className="rounded-2xl border border-border glass p-6">
            <p className="text-sm font-medium text-foreground">
              Peter the Great St. Petersburg Polytechnic University
            </p>
            <ul className="mt-5 space-y-5">
              {degrees.map((d) => (
                <li key={d.level}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <h3
                      className={`flex items-center gap-2 font-semibold ${d.accent}`}
                    >
                      <span className="size-2 shrink-0 rounded-full bg-current" />
                      {d.level}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {d.period}
                    </span>
                  </div>
                  <p className="mt-1 pl-4 text-sm text-muted-foreground">
                    {d.field}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Languages & Interests */}
        <div>
          <SectionHeading icon={Languages} title="Languages & Interests" />
          <Reveal className="grid gap-5 rounded-2xl border border-border glass p-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                Languages
              </h3>
              <ul className="space-y-3">
                {languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-center justify-between border-b border-border/60 pb-2 text-sm last:border-0 last:pb-0"
                  >
                    <span className="font-medium">{l.name}</span>
                    <span className="text-muted-foreground">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-purple">
                Interests
              </h3>
              <ul className="space-y-3">
                {interests.map((it) => (
                  <li key={it.label} className="flex items-center gap-3 text-sm">
                    <InterestIcon icon={it.icon} tone={it.tone} />
                    <span>{it.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
