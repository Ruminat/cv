import type { LucideIcon } from 'lucide-react'
import { Reveal } from '@/shared/ui/Reveal'

interface SectionHeadingProps {
  icon: LucideIcon
  title: string
  meta?: string
}

export function SectionHeading({ icon: Icon, title, meta }: SectionHeadingProps) {
  return (
    <Reveal className="mb-8 flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between md:gap-4">
      <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight md:text-3xl">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-brand-orange/25 bg-brand-orange/10 text-brand-orange">
          <Icon className="size-5" />
        </span>
        {title}
      </h2>
      {meta ? (
        <span className="shrink-0 text-sm font-medium text-brand-purple">
          {meta}
        </span>
      ) : null}
    </Reveal>
  )
}
