import { contactLinks } from '@/features/ProfilePage/models/ContactLinks'
import { cn } from '@/shared/lib/Cn'

export function ContactLinks({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {contactLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-3 py-2 text-sm font-medium text-foreground/85 transition-colors hover:border-brand-orange/40 hover:text-foreground"
        >
          <link.icon className="size-4 text-brand-orange" />
          {link.label}
        </a>
      ))}
    </div>
  )
}
