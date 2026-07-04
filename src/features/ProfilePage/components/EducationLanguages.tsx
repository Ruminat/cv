import { GraduationCap, Languages } from 'lucide-react'
import { asset } from '@/shared/lib/Asset'
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
  'Table tennis',
  'Web development',
  'Speed cubing',
  'Gaming',
  'Languages',
]

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
          <Reveal className="relative overflow-hidden grid gap-5 rounded-2xl border border-border glass p-6 sm:grid-cols-2">
            <img
              src={asset('hobbies-bg.png')}
              alt=""
              aria-hidden="true"
              className="hobbies-illustration pointer-events-none absolute bottom-0 right-0 max-h-full max-w-full origin-bottom-right sm:scale-[1.3]"
            />
            <div className="relative">
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
            <div className="relative">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-purple">
                Interests
              </h3>
              <ul className="space-y-3">
                {interests.map((interest) => (
                  <li key={interest} className="text-sm">
                    {interest}
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
