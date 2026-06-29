'use client'

import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react'
import { SectionHeading } from '@/shared/ui/SectionHeading'

const milestones = [
  {
    period: 'Dec 2020',
    title: 'Intern',
    description:
      'Started as an intern, learned the product, built internal tools and shipped my first features.',
    highlight: false,
  },
  {
    period: '2021 — May 2024',
    title: 'Middle Frontend Developer',
    description:
      'Built scalable internal applications and reusable components. Worked on performance, architecture and automation.',
    highlight: false,
  },
  {
    period: 'May 2024 — Present',
    title: 'Senior Frontend Engineer',
    description:
      'Leading frontend development in the infrastructure platform. Focused on architecture, technical leadership and high-impact solutions.',
    highlight: true,
  },
]

export function CareerJourney() {
  return (
    <section id="journey" className="py-12 md:py-16">
      <SectionHeading
        icon={Rocket}
        title="Career Journey at Yandex Infrastructure"
        meta="Dec 2020 — Present"
      />

      <div className="rounded-3xl border border-border glass p-6 md:p-10">
        {/* line */}
        <div className="relative">
          <div className="absolute left-0 top-2 hidden h-px w-full bg-border md:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            style={{ transformOrigin: 'left' }}
            className="absolute left-0 top-2 hidden h-px w-full bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple md:block"
          />

          <ol className="grid gap-8 md:grid-cols-3 md:gap-6">
            {milestones.map((m, i) => (
              <motion.li
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.25 }}
                className="relative md:pt-8"
              >
                <span
                  className={`absolute -left-0.5 top-2 hidden size-4 -translate-y-1/2 rounded-full border-2 border-background md:block ${
                    m.highlight
                      ? 'bg-brand-purple shadow-[0_0_16px_3px] shadow-brand-purple/60'
                      : 'bg-brand-orange shadow-[0_0_12px_2px] shadow-brand-orange/50'
                  }`}
                />
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {m.period}
                </p>
                <h3
                  className={`mt-1 text-lg font-semibold ${
                    m.highlight ? 'gradient-text' : ''
                  }`}
                >
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {m.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
