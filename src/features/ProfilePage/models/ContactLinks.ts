import { Briefcase, Code2, Mail, Send, type LucideIcon } from 'lucide-react'

export interface ContactLink {
  icon: LucideIcon
  label: string
  href: string
}

export const contactLinks: ContactLink[] = [
  { icon: Mail, label: 'Email', href: 'mailto:vlad.furman.ae@gmail.com' },
  { icon: Code2, label: 'GitHub', href: 'https://github.com/Ruminat' },
  { icon: Briefcase, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ruminat' },
  { icon: Send, label: 'Telegram', href: 'https://t.me/Ruminat' },
]
