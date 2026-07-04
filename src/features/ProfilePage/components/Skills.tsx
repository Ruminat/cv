import type { LucideIcon } from "lucide-react";
import { Boxes, Code2, Paintbrush, Star, Wrench } from "lucide-react";
import { Reveal } from "@/shared/ui/Reveal";
import { asset } from "@/shared/lib/Asset";
import { cn } from "@/shared/lib/Cn";

interface Skill {
  name: string;
  icon?: string;
  iconClassName?: string;
  core?: boolean;
}

interface SkillGroup {
  label: string;
  description: string;
  icon: LucideIcon;
  tone: "orange" | "purple";
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    label: "Core",
    description: "Essential technologies",
    icon: Star,
    tone: "orange",
    skills: [
      { name: "TypeScript", icon: "/skill-icons/typescript.svg", core: true },
      { name: "React", icon: "/skill-icons/react.svg", core: true },
      { name: "Node.js", icon: "/skill-icons/nodejs.svg", core: true },
    ],
  },
  {
    label: "Tools",
    description: "Developer productivity",
    icon: Wrench,
    tone: "purple",
    skills: [
      { name: "Git", icon: "/skill-icons/git.svg" },
      { name: "Docker", icon: "/skill-icons/docker.svg" },
      { name: "Vite", icon: "/skill-icons/vite.svg" },
      { name: "Rspack", icon: "/skill-icons/rspack.svg" },
      { name: "Webpack", icon: "/skill-icons/webpack.svg" },
      { name: "SWC", icon: "/skill-icons/swc.svg" },
      { name: "oxlint", icon: "/skill-icons/oxlint.svg" },
      { name: "Vitest", icon: "/skill-icons/vitest.svg" },
      { name: "PM2", icon: "/skill-icons/pm2.svg" },
    ],
  },
  {
    label: "Libraries",
    description: "Libraries and frameworks",
    icon: Boxes,
    tone: "purple",
    skills: [
      { name: "Redux Toolkit", icon: "/skill-icons/redux.svg" },
      { name: "Express", icon: "/skill-icons/express.svg" },
      { name: "Electron", icon: "/skill-icons/electron.svg" },
      { name: "Gravity UI", icon: "/skill-icons/gravityui.svg" },
    ],
  },
  {
    label: "Styling",
    description: "Styles and design systems",
    icon: Paintbrush,
    tone: "purple",
    skills: [
      { name: "SCSS", icon: "/skill-icons/sass.svg" },
      {
        name: "CSS Modules",
        icon: "/skill-icons/cssmodules.svg",
        iconClassName:
          "[filter:invert(74%)_sepia(79%)_saturate(1011%)_hue-rotate(165deg)_brightness(98%)_contrast(92%)]",
      },
      { name: "Tailwind CSS", icon: "/skill-icons/tailwindcss.svg" },
    ],
  },
];

interface SkillCardProps extends Skill {
  className?: string;
}

function SkillCard({
  name,
  icon,
  iconClassName,
  core = false,
  className,
}: SkillCardProps) {
  return (
    <li
      className={cn(
        "group flex h-18 min-w-0 items-center gap-3 rounded-xl border bg-card/35 px-4 text-base font-medium text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-brand-purple/45 hover:bg-card/55 sm:h-20 sm:gap-4 sm:px-5",
        core
          ? "border-brand-orange/70 bg-[linear-gradient(135deg,rgba(255,126,49,0.12),rgba(151,71,255,0.12)_85%)] shadow-[0_0_34px_-18px_rgba(255,126,49,0.9),inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-brand-orange"
          : "border-border/90",
        className,
      )}
    >
      {icon ? (
        <img
          src={asset(icon)}
          alt=""
          className={cn("size-6 shrink-0 object-contain", iconClassName)}
          loading="lazy"
        />
      ) : null}
      <span className="min-w-0 truncate">{name}</span>
    </li>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-12 md:py-16">
      <Reveal className="mb-8 flex flex-col gap-3">
        <h2 className="flex items-center gap-4 text-3xl font-bold tracking-tight md:text-4xl">
          <span className="glow-ring flex size-14 items-center justify-center rounded-full border border-brand-orange/25 bg-brand-orange/10 text-brand-orange">
            <Code2 className="size-7" />
          </span>
          Skills
        </h2>
        <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
          Technologies I use to build scalable frontend infrastructure.
        </p>
      </Reveal>

      <Reveal
        delay={0.08}
        className="rounded-3xl border border-border/90 bg-card/25 px-5 py-2 shadow-[0_22px_80px_-56px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl sm:px-6 lg:px-8"
      >
        {skillGroups.map((group, index) => (
          <SkillGroupRow
            key={group.label}
            group={group}
            isLast={index === skillGroups.length - 1}
          />
        ))}
      </Reveal>
    </section>
  );
}

interface SkillGroupRowProps {
  group: SkillGroup;
  isLast: boolean;
}

function SkillGroupRow({ group, isLast }: SkillGroupRowProps) {
  const Icon = group.icon;
  const isOrange = group.tone === "orange";

  return (
    <div
      className={cn(
        "grid gap-5 py-8 md:grid-cols-[260px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)]",
        !isLast && "border-b border-border/80",
      )}
    >
      <div className="flex items-center gap-4 md:items-start">
        <span
          className={cn(
            "flex size-14 shrink-0 items-center justify-center rounded-full border bg-card/55",
            isOrange
              ? "border-brand-orange/20 text-brand-orange shadow-[0_0_32px_-18px_rgba(255,126,49,0.8)]"
              : "border-brand-purple/25 text-brand-purple shadow-[0_0_32px_-18px_rgba(151,71,255,0.8)]",
          )}
        >
          <Icon className="size-7" />
        </span>
        <div className="min-w-0 pt-0.5">
          <h3
            className={cn(
              "text-sm font-bold uppercase tracking-wide",
              isOrange ? "text-brand-orange" : "text-brand-purple",
            )}
          >
            {group.label}
          </h3>
          <p className="mt-3 max-w-44 text-base leading-relaxed text-muted-foreground">
            {group.description}
          </p>
        </div>
      </div>

      <ul className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-[repeat(auto-fit,minmax(170px,1fr))]">
        {group.skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </ul>
    </div>
  );
}
