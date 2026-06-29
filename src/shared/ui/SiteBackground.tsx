export function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base */}
      <div className="absolute inset-0 bg-background" />
      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(1 0 0 / 6%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 6%) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)',
        }}
      />
      {/* glows */}
      <div className="absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-brand-orange/15 blur-[140px]" />
      <div className="absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-brand-purple/15 blur-[150px]" />
      <div className="absolute bottom-0 -left-32 h-[420px] w-[420px] rounded-full bg-brand-pink/10 blur-[150px]" />
    </div>
  )
}
