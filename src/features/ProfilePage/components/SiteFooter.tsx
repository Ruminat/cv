import { ContactLinks } from '@/features/ProfilePage/components/ContactLinks'
import { asset } from '@/shared/lib/Asset'
import { Reveal } from '@/shared/ui/Reveal'

export function SiteFooter() {
  return (
    <footer className="py-12 md:py-16">
      <Reveal className="relative overflow-hidden rounded-3xl border border-border glass p-8 text-center md:p-12">
        <img
          src={asset('footer-bg.jpg')}
          alt=""
          aria-hidden="true"
          className="footer-illustration pointer-events-none absolute inset-y-0 right-0 h-full w-auto opacity-40 md:opacity-60 lg:opacity-80"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-balance text-2xl font-bold tracking-tight md:text-3xl">
            Always open to{' '}
            <span className="gradient-text">exciting projects</span> and
            opportunities
          </h2>
          <ContactLinks className="mt-8 justify-center gap-3 [&_a]:px-4 [&_a]:py-2.5" />
          <p className="mt-10 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vlad Furman — Senior Frontend
            Engineer
          </p>
        </div>
      </Reveal>
    </footer>
  )
}
