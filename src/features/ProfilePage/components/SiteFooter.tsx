import { Mail, Code2, Briefcase, Send } from 'lucide-react'
import { Reveal } from '@/shared/ui/Reveal'

const links = [
  { icon: Mail, label: 'Email', href: 'mailto:vlad.furman@example.com' },
  { icon: Code2, label: 'GitHub', href: 'https://github.com' },
  { icon: Briefcase, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Send, label: 'Telegram', href: 'https://t.me' },
]

export function SiteFooter() {
  return (
    <footer className="py-12 md:py-16">
      <Reveal className="rounded-3xl border border-border glass p-8 text-center md:p-12">
        <h2 className="mx-auto max-w-2xl text-balance text-2xl font-bold tracking-tight md:text-3xl">
          Always open to{' '}
          <span className="gradient-text">exciting projects</span> and
          opportunities.
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-4 py-2.5 text-sm font-medium text-foreground/85 transition-colors hover:border-brand-orange/40 hover:text-foreground"
            >
              <l.icon className="size-4 text-brand-orange" />
              {l.label}
            </a>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vlad Furman — Senior Frontend Engineer
        </p>
      </Reveal>
    </footer>
  )
}
