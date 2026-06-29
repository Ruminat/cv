import { Code2 } from 'lucide-react'
import { Reveal } from '@/shared/ui/Reveal'
import { SectionHeading } from '@/shared/ui/SectionHeading'

const groups = [
  { label: 'Frontend', skills: ['React', 'TypeScript', 'JavaScript'] },
  {
    label: 'Architecture',
    skills: ['Frontend Architecture', 'Modularization', 'DX'],
  },
  { label: 'Tools', skills: ['Git', 'Docker', 'Vite', 'Webpack', 'CI/CD'] },
  { label: 'Backend', skills: ['Node.js', 'Express'] },
]

export function Skills() {
  return (
    <section id="skills" className="py-12 md:py-16">
      <SectionHeading icon={Code2} title="Skills" />
      <div className="grid gap-5 sm:grid-cols-2">
        {groups.map((group, i) => (
          <Reveal
            key={group.label}
            delay={i * 0.08}
            className="rounded-2xl border border-border glass p-6 transition-colors hover:border-brand-orange/30"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-orange">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-border bg-card/60 px-3 py-1.5 text-sm font-medium text-foreground/85"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
