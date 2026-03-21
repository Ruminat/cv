import { useUrl } from "../../context/url";

const languages = [
  { name: "Russian", level: "Native", icon: "/flags/RU.png", percent: 100 },
  { name: "English", level: "Fluent (C1)", icon: "/flags/UK.png", percent: 92 },
  { name: "Japanese", level: "Elementary (JLPT N4)", icon: "/flags/JP.png", percent: 40 },
];

const interests = [
  { icon: "🏓", label: "Table tennis" },
  { icon: "👨🏻‍💻", label: "Personal web projects" },
  { icon: "🎮", label: "Co-op gaming" },
  { icon: "⛩️", label: "Language learning" },
];

export function CvSidebar() {
  const { isPdfMode } = useUrl();

  return (
    <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
      <div className="border border-border bg-card p-4">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">{"// Languages"}</h3>
        <div className="space-y-4">
          {languages.map((lang) => (
            <div key={lang.name} className="space-y-2">
              <div className="flex items-center justify-between gap-2 text-sm">
                <span className="flex min-w-0 items-center gap-2">
                  <img src={lang.icon} alt="" width={16} height={16} className="shrink-0" />
                  <span className="truncate">{lang.name}</span>
                </span>
                <span className="shrink-0 text-xs text-muted-foreground">{lang.level}</span>
              </div>
              <div className="h-1 w-full bg-secondary">
                <div className="h-full bg-primary transition-all" style={{ width: `${lang.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-border bg-card p-4">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">{"// Interests"}</h3>
        <div className="grid grid-cols-2 gap-2">
          {interests.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 border border-border bg-secondary p-2 text-sm transition-colors hover:border-primary"
            >
              <span>{item.icon}</span>
              <span className="text-xs leading-tight">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-border bg-card p-4">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">{"// Status"}</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            {isPdfMode ? (
              <div className="h-2 w-2 bg-primary" />
            ) : (
              <div className="relative h-2 w-2">
                <div className="absolute inset-0 animate-ping bg-primary opacity-75" />
                <div className="relative h-2 w-2 bg-primary" />
              </div>
            )}
            <span className="text-sm">Available for opportunities</span>
          </div>
          <div className="text-xs text-muted-foreground">
            <span className="text-primary">$</span> location: St. Petersburg
            <br />
            <span className="text-primary">$</span> relocation: Open
          </div>
        </div>
      </div>

      {isPdfMode ? null : (
        <div className="border border-border bg-card p-4 text-xs text-muted-foreground">
          <p>
            <span className="text-primary">$</span> whoami
          </p>
          <p className="mt-1">vlad_furman</p>
          <p className="mt-2">
            <span className="text-primary">$</span> cat experience.txt
          </p>
          <p className="mt-1">5+ years @ Yandex</p>
          <p className="mt-2">
            <span className="text-primary">$</span> echo $STACK
          </p>
          <p className="mt-1">React, TypeScript, Node</p>
          <p className="mt-2">
            <span className="text-primary">$</span> <span className="animate-pulse">_</span>
          </p>
        </div>
      )}
    </aside>
  );
}
