'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Download, Globe, MapPin, Briefcase } from 'lucide-react'
import type { MouseEvent, ReactNode } from 'react'
import { formatExperienceDuration } from '@/features/ProfilePage/models/ExperienceDuration'
import { asset } from '@/shared/lib/Asset'
import { Button } from '@/shared/ui/Button'

const tags = ['Frontend Architecture', 'React & TypeScript', 'Developer Experience']
const yandexStartDate = new Date('2020-12-01T00:00:00.000Z')

export function Hero() {
  const experienceLabel = formatExperienceDuration(yandexStartDate, new Date())
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 80, damping: 18 })
  const sy = useSpring(my, { stiffness: 80, damping: 18 })
  const rotateY = useTransform(sx, [-0.5, 0.5], [10, -10])
  const rotateX = useTransform(sy, [-0.5, 0.5], [-10, 10])
  const glowX = useTransform(sx, [-0.5, 0.5], ['40%', '60%'])
  const glowY = useTransform(sy, [-0.5, 0.5], ['40%', '60%'])

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  function handleLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="flex flex-col gap-8 lg:grid lg:items-center lg:gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left — `contents` on mobile so children reorder around the avatar */}
        <div className="contents lg:block">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-none"
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-orange" />
              </span>
              Open to relocation from St. Petersburg
            </p>
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <span className="gradient-text">Vlad Furman</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="order-3 lg:order-none lg:mt-3"
          >
            <p className="text-xl font-medium text-foreground/90 md:text-2xl">
              Senior Frontend Engineer
            </p>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
              Building infrastructure products for thousands of engineers.
              Senior Frontend Engineer with 5+ years at Yandex, specializing in
              large-scale platforms, React &amp; TypeScript architecture,
              legacy-to-modern migrations and developer productivity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-4 lg:order-none mt-0 flex flex-wrap gap-2 lg:mt-6"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-brand-orange/25 bg-brand-orange/10 px-3 py-1 text-sm font-medium text-brand-orange"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="order-5 lg:order-none mt-0 flex flex-wrap items-center gap-3 lg:mt-8"
          >
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-brand-orange to-brand-pink text-primary-foreground hover:opacity-90"
            >
              <a href="#projects" className="inline-flex items-center gap-2 whitespace-nowrap">
                View Projects
                <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border bg-card/40"
            >
              <a href="mailto:vlad.furman@example.com" className="inline-flex items-center gap-2 whitespace-nowrap">
                <Download className="size-4 shrink-0" />
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="order-6 lg:order-none mt-0 grid max-w-md grid-cols-3 divide-x divide-border rounded-2xl border border-border glass lg:mt-10"
          >
            <InfoStat icon={<Briefcase className="size-4" />} label="Experience" value={experienceLabel} />
            <InfoStat icon={<MapPin className="size-4" />} label="Location" value="Dubai, UAE" />
            <InfoStat icon={<Globe className="size-4" />} label="English" value="B2" />
          </motion.dl>
        </div>

        {/* Portrait composition — right column on lg, directly under the name on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          data-testid="hero-avatar"
          className="order-2 lg:order-none relative flex aspect-square w-full max-w-[440px] items-center justify-center overflow-hidden contain-paint lg:mx-auto"
          style={{ perspective: 1000 }}
        >
          {/* orbit rings */}
          <div className="absolute inset-0 animate-spin-slow rounded-full border border-brand-orange/15">
            <span className="absolute top-0 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange shadow-[0_0_12px_2px] shadow-brand-orange/60" />
          </div>
          <div className="absolute inset-[8%] animate-spin-reverse rounded-full border border-brand-purple/15">
            <span className="absolute top-1/2 right-0 size-1.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-purple shadow-[0_0_12px_2px] shadow-brand-purple/60" />
          </div>
          <div className="absolute inset-[16%] animate-spin-slow rounded-full border border-border" />

          {/* moving halo */}
          <motion.div
            className="absolute inset-[18%] rounded-full blur-2xl"
            style={{
              background:
                'radial-gradient(circle at var(--gx) var(--gy), color-mix(in oklch, var(--brand-orange) 60%, transparent), transparent 65%)',
              ['--gx' as string]: glowX,
              ['--gy' as string]: glowY,
            }}
          />

          {/* portrait */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            data-testid="hero-portrait-shell"
            className="relative size-[64%]"
          >
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative size-full overflow-hidden rounded-full border border-border glow-ring"
            >
              <img
                src={asset('vlad-portrait.png')}
                alt="Portrait of Vlad Furman, Senior Frontend Engineer"
                className="size-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function InfoStat({
  icon,
  label,
  value,
}: {
  icon: ReactNode
  label: string
  value: string
}) {
  return (
    <div className="px-4 py-3">
      <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <span className="text-brand-orange">{icon}</span>
        {label}
      </dt>
      <dd className="mt-1 text-sm font-semibold">{value}</dd>
    </div>
  )
}
