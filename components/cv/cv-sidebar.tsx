export function CVSidebar() {
  const languages = [
    { name: "Russian", level: "Native", flag: "🇷🇺", percent: 100 },
    { name: "English", level: "~B2", flag: "🇬🇧", percent: 70 },
    { name: "Japanese", level: "~N4", flag: "🇯🇵", percent: 35 },
  ]

  const hobbies = [
    { icon: "🏓", label: "Table tennis" },
    { icon: "👨🏻‍💻", label: "Web dev" },
    { icon: "🎮", label: "Gaming" },
    { icon: "⛩️", label: "Languages" },
  ]

  return (
    <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
      {/* Languages */}
      <div className="border border-border bg-card p-4">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          {"// Languages"}
        </h3>
        <div className="space-y-4">
          {languages.map((lang) => (
            <div key={lang.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <span>{lang.flag}</span>
                  {lang.name}
                </span>
                <span className="text-xs text-muted-foreground">{lang.level}</span>
              </div>
              <div className="h-1 w-full bg-secondary">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${lang.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hobbies */}
      <div className="border border-border bg-card p-4">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          {"// Hobbies"}
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {hobbies.map((hobby) => (
            <div
              key={hobby.label}
              className="flex items-center gap-2 border border-border bg-secondary p-2 text-sm transition-colors hover:border-primary"
            >
              <span>{hobby.icon}</span>
              <span className="text-xs">{hobby.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Status indicator */}
      {/* <div className="border border-border bg-card p-4">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          {"// Status"}
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="relative h-2 w-2">
              <div className="absolute inset-0 animate-ping bg-primary opacity-75" />
              <div className="relative h-2 w-2 bg-primary" />
            </div>
            <span className="text-sm">Available for opportunities</span>
          </div>
          <div className="text-xs text-muted-foreground">
            <span className="text-primary">$</span> location: St. Petersburg
            <br />
            <span className="text-primary">$</span> relocation: Open
          </div>
        </div>
      </div> */}

      {/* Terminal-style decoration */}
      {/* <div className="border border-border bg-card p-4 text-xs text-muted-foreground">
        <p>
          <span className="text-primary">$</span> whoami
        </p>
        <p className="mt-1">vlad-furman</p>
        <p className="mt-2">
          <span className="text-primary">$</span> cat experience.txt
        </p>
        <p className="mt-1">5+ years @ Yandex</p>
        <p className="mt-2">
          <span className="text-primary">$</span> echo $STACK
        </p>
        <p className="mt-1">React, TypeScript, Node</p>
        <p className="mt-2">
          <span className="text-primary">$</span>{" "}
          <span className="animate-pulse">_</span>
        </p>
      </div> */}
    </aside>
  )
}
