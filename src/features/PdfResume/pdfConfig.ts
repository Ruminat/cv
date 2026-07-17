export interface Bullet {
  lead: string;
  text: string;
}

export interface Job {
  title: string;
  period: string;
  bullets: Bullet[];
}

export interface SideProject {
  name: string;
  period: string;
  href: string;
  desc: string;
  tags: string[];
}

export interface TechStackGroup {
  label: string;
  items: string[];
}

export interface PdfContent {
  headline: string;
  locationLine: string;
  summary: string;
  jobs: Job[];
  techStack: TechStackGroup[];
  sideProjects: SideProject[];
  /** Optional accent color (hex) for the role line and location pin. Falls back to the default orange when unset. */
  accentColor?: string;
}

/** Preset keys for `?location=` — any other value is treated as a custom place name. */
export const LOCATION_PRESETS = {
  "uae-europe": "Open to relocation to the UAE / Europe",
  uae: "Open to relocation to the UAE",
  germany: "Open to relocation to Germany",
  poland: "Open to relocation to Poland",
  stockholm: "Open to relocation to Stockholm",
  sweden: "Open to relocation to Sweden",
  "abu-dhabi": "Open to relocation to Abu Dhabi, UAE",
} as const;

export type LocationPreset = keyof typeof LOCATION_PRESETS;

export const DEFAULT_LOCATION_PRESET: LocationPreset = "uae-europe";

export function resolveLocationLine(locationParam: string | null): string {
  if (!locationParam) {
    return LOCATION_PRESETS[DEFAULT_LOCATION_PRESET];
  }

  if (locationParam in LOCATION_PRESETS) {
    return LOCATION_PRESETS[locationParam as LocationPreset];
  }

  return `Open to relocation to ${locationParam}`;
}

/** Preset keys for `?summary=` — use `summary=custom text` for a fully custom paragraph. */
export const SUMMARY_PRESETS = {
  default:
    "Senior Frontend Engineer with 6+ years of experience at Yandex, building infrastructure products used by thousands of engineers. I specialize in large-scale React and TypeScript platforms, frontend architecture, legacy-to-modern migrations, and developer productivity.",
  product:
    "Senior Frontend Developer with 6+ years of experience at Yandex, shipping large-scale React and TypeScript products for thousands of users. I specialize in component architecture, design-system workflows, performance optimization, and accessible responsive interfaces — from legacy migrations to greenfield Next.js apps.",
  miral:
    "Senior Frontend Developer with 5+ years of experience at Yandex, shipping large-scale React and TypeScript products for thousands of users. I specialize in component architecture, design-system workflows, performance optimization, and responsive interfaces with attention to accessibility — from legacy migrations to modern React applications, with hands-on Next.js experience in side projects.",
  nilo:
    "Senior Frontend Engineer with 5+ years at Yandex building large-scale React and TypeScript products. I specialize in frontend architecture, Redux Toolkit state management, performance, CI/CD, and shared UI infrastructure — with a focus on maintainable, accessible, and secure interfaces.",
  spotify:
    "Senior Frontend Engineer with 5+ years at Yandex, building large-scale React and TypeScript platforms used by thousands of engineers daily. Experienced in complex application state, data-heavy interfaces, multi-step workflows, API-driven products, and legacy modernization — comfortable owning features end to end, from design through production.",
  "d4-insight":
    "Senior Frontend Engineer with nearly 6 years at Yandex, building large-scale React and TypeScript platforms used by thousands of engineers. Experienced in complex enterprise workflows, scalable frontend architecture, Redux Toolkit, reusable UI infrastructure, and Node.js REST APIs, with strong ownership from design to production. Open to relocating to Abu Dhabi.",
} as const;

export type SummaryPreset = keyof typeof SUMMARY_PRESETS;

export const DEFAULT_SUMMARY_PRESET: SummaryPreset = "default";

export function resolveSummary(summaryParam: string | null): string {
  if (!summaryParam) {
    return SUMMARY_PRESETS[DEFAULT_SUMMARY_PRESET];
  }

  if (summaryParam in SUMMARY_PRESETS) {
    return SUMMARY_PRESETS[summaryParam as SummaryPreset];
  }

  return summaryParam;
}

export const DEFAULT_HEADLINE = "Senior Frontend Engineer";

export interface JobBulletPatch {
  jobTitle: string;
  bulletLead: string;
  bullet: Bullet;
}

export interface JobBulletsOverride {
  jobTitle: string;
  bullets: Bullet[];
}

/** Tweaks a single side project (by name) — e.g. to re-emphasize it for a specific role. */
export interface SideProjectPatch {
  name: string;
  desc?: string;
  tags?: string[];
}

export interface PdfPreset {
  location?: LocationPreset;
  headline?: string;
  summary?: SummaryPreset;
  /** Comma-separated project names in `?projects=` — only these are shown, in this order. */
  projects?: string[];
  /** Replaces the Core skills line when set. */
  coreSkills?: string[];
  /** Replaces the entire Skills section when set (takes precedence over `coreSkills`). */
  techStack?: TechStackGroup[];
  /** Swaps individual experience bullets by job title and bullet lead. */
  jobBulletPatches?: JobBulletPatch[];
  /** Replaces all bullets for matching jobs — allows reordering and rewording. */
  jobBullets?: JobBulletsOverride[];
  /** Restrained accent color (hex) for the role line and location pin — layout is untouched. */
  accentColor?: string;
  /** Re-emphasizes individual side projects (by name) without touching the shared list. */
  sideProjectPatches?: SideProjectPatch[];
}

/**
 * Named bundles for `?preset=`. Individual query params override preset fields.
 *
 * Example for Miral Experiences:
 *   /pdf?preset=miral
 *   /pdf?location=uae&headline=Senior%20Frontend%20Developer&summary=miral
 *
 * Example for nilo (Senior Frontend Engineer, Berlin):
 *   /pdf?preset=nilo
 *
 * Example for Spotify (tailored for Rights Systems, Stockholm — title stays
 * Senior Frontend Engineer):
 *   /pdf?preset=spotify
 *
 * Example for D4 Insight (UI Engineer, Abu Dhabi — title stays Senior Frontend
 * Engineer; frontend-first with Node.js/Express emphasis):
 *   /pdf?preset=d4-insight
 */
export const PDF_PRESETS: Record<string, PdfPreset> = {
  miral: {
    location: "uae",
    headline: "Senior Frontend Developer",
    summary: "miral",
    projects: ["Cube Shrine", "MooDuck"],
    coreSkills: ["TypeScript", "React", "Next.js", "Redux Toolkit", "Node.js"],
    jobBulletPatches: [
      {
        jobTitle: "Middle Frontend Developer",
        bulletLead: "Rebuilt Layers as a standalone service",
        bullet: {
          lead: "Rebuilt Layers as a standalone service",
          text: ", including a responsive React UI for browsing Docker images and repositories in an internal registry.",
        },
      },
    ],
  },
  nilo: {
    location: "germany",
    headline: "Senior Frontend Engineer",
    summary: "nilo",
    projects: ["Cube Shrine", "MooDuck", "Kitchen Madness", "Lyra"],
    techStack: [
      {
        label: "Core",
        items: ["TypeScript", "React", "Redux Toolkit", "Node.js"],
      },
      {
        label: "Frontend",
        items: ["HTML5", "CSS3", "SCSS", "CSS Modules", "Tailwind CSS", "Lit"],
      },
      {
        label: "Build & CI",
        items: [
          "Vite",
          "Webpack",
          "Rspack",
          "SWC",
          "oxlint",
          "Vitest",
          "Docker",
        ],
      },
      {
        label: "Quality",
        items: [
          "Testing Library",
          "CI/CD",
          "code review",
          "performance optimization",
          "accessibility basics",
          "frontend security awareness",
        ],
      },
      {
        label: "Libraries",
        items: ["Gravity UI", "Express", "Electron"],
      },
      {
        label: "Tools",
        items: ["Git", "PM2"],
      },
    ],
    jobBullets: [
      {
        jobTitle: "Senior Frontend Engineer",
        bullets: [
          {
            lead: "Led a Lit → React migration",
            text: ", building a React-in-Lit bridge and shared dialog infrastructure now used across the team.",
          },
          {
            lead: "Improved frontend state architecture",
            text: " with self-registering Redux Toolkit modules that load on first use, removing fragile wiring and a recurring class of production bugs.",
          },
          {
            lead: "Cut build and CI feedback time",
            text: " with Rspack + SWC and oxlint — ~5× faster builds, ~8× faster linting, ~3× faster CI checks.",
          },
          {
            lead: "Helped scale frontend delivery",
            text: " by decomposing a monorepo into four independently released repos and a shared library, cutting release time for one area by 2.5×.",
          },
          {
            lead: "Raised frontend engineering standards",
            text: " through team guidelines, technical discussions, tooling prototypes, and contributions to @gravity-ui.",
          },
          {
            lead: "Mentor mid-level engineers and interns",
            text: ", supporting code quality, architectural thinking, and growth toward broader ownership.",
          },
        ],
      },
      {
        jobTitle: "Middle Frontend Developer",
        bullets: [
          {
            lead: "Rebuilt complex legacy UI",
            text: ", migrating high-risk Lit option components to React and turning them into a reusable foundation for future work.",
          },
          {
            lead: "Built infrastructure-facing React interfaces",
            text: ", including a responsive internal Docker registry UI for browsing images and repositories.",
          },
        ],
      },
      {
        jobTitle: "Frontend Engineer Intern",
        bullets: [
          {
            lead: "Shipped production changes",
            text: " to internal infrastructure tools, growing from intern into a full-time engineer.",
          },
        ],
      },
    ],
  },
  spotify: {
    location: "stockholm",
    summary: "spotify",
    accentColor: "#1DB954",
    projects: ["MooDuck", "Cube Shrine", "Lyra"],
    techStack: [
      {
        label: "Core",
        items: ["TypeScript", "React", "Redux Toolkit", "Node.js"],
      },
      {
        label: "Frontend",
        items: [
          "Frontend architecture",
          "State management",
          "Responsive UI",
          "Accessibility",
        ],
      },
      {
        label: "APIs & Data",
        items: ["REST APIs", "API integration", "Large datasets"],
      },
      {
        label: "Quality",
        items: ["Testing Library", "Vitest", "CI/CD", "Performance"],
      },
      {
        label: "Build & CI",
        items: ["Rspack", "SWC", "oxlint", "Webpack", "Vite"],
      },
      {
        label: "Libraries & Tools",
        items: ["Gravity UI", "Lit", "Express", "Git", "Docker"],
      },
    ],
    jobBullets: [
      {
        jobTitle: "Senior Frontend Engineer",
        bullets: [
          {
            lead: "Build and evolve a complex React & TypeScript platform",
            text: " for internal ML/data workflows, used by 2,000+ engineers every day.",
          },
          {
            lead: "Architect application state and async data flows",
            text: " across large, multi-entity interfaces with long-running operations and multi-step workflows.",
          },
          {
            lead: "Drove a gradual Lit → React migration",
            text: ", building a React-in-Lit interoperability layer so new features ship without a disruptive rewrite.",
          },
          {
            lead: "Eliminated a recurring class of state bugs",
            text: " with self-registering Redux Toolkit modules that load on first use, removing fragile manual wiring.",
          },
          {
            lead: "Built reusable frontend infrastructure",
            text: ", including shared dialog components now used across the team.",
          },
          {
            lead: "Cut build & CI times",
            text: " with Rspack + SWC and oxlint — ~5× faster builds, ~8× faster linting, ~3× faster CI checks.",
          },
        ],
      },
    ],
  },
  "d4-insight": {
    location: "abu-dhabi",
    summary: "d4-insight",
    accentColor: "#0F4C81",
    projects: ["MooDuck", "Cube Shrine"],
    techStack: [
      {
        label: "Core",
        items: ["TypeScript", "React", "Redux Toolkit", "JavaScript", "Node.js"],
      },
      {
        label: "Frontend",
        items: [
          "Frontend architecture",
          "Component libraries",
          "State management",
          "Responsive UI",
          "Next.js",
        ],
      },
      {
        label: "Backend & APIs",
        items: ["Express", "REST APIs", "API integration"],
      },
      {
        label: "Styling & UI",
        items: ["HTML", "CSS", "SCSS", "CSS Modules", "Gravity UI"],
      },
      {
        label: "Quality",
        items: ["Vitest", "Playwright", "CI/CD", "Performance", "Accessibility"],
      },
      {
        label: "Build & Tools",
        items: ["Rspack", "SWC", "oxlint", "Webpack", "Vite", "Docker", "Git"],
      },
    ],
    jobBullets: [
      {
        jobTitle: "Senior Frontend Engineer",
        bullets: [
          {
            lead: "Build and evolve complex React & TypeScript interfaces",
            text: " for an enterprise infrastructure platform used by 2,000+ engineers every day.",
          },
          {
            lead: "Design scalable frontend architecture",
            text: " for asynchronous workflows, complex application state, reusable dialogs, and independently loaded product modules.",
          },
          {
            lead: "Led a gradual Lit → React migration",
            text: ", introducing a React-in-Lit interoperability layer that enabled incremental modernization without a disruptive rewrite.",
          },
          {
            lead: "Eliminated a recurring class of state initialization bugs",
            text: " with self-registering Redux Toolkit modules that load on first use, removing fragile manual wiring.",
          },
          {
            lead: "Partnered with backend engineers on API integration",
            text: ", wiring frontend workflows to internal REST services and asynchronous operations.",
          },
          {
            lead: "Cut build, lint & CI times",
            text: " by migrating to Rspack, SWC, and oxlint — ~5× faster builds, ~8× faster linting, ~3× faster CI checks.",
          },
        ],
      },
    ],
    sideProjectPatches: [
      {
        name: "MooDuck",
        desc: "Full-stack Telegram mood journal I built solo — a React app and bot on an Express + Drizzle REST backend, in a TypeScript pnpm/Turborepo monorepo.",
        tags: ["TypeScript", "Node.js", "Express", "REST API", "Turso", "AI"],
      },
    ],
  },
};

export const jobs: Job[] = [
  {
    title: "Senior Frontend Engineer",
    period: "May 2024 — Present",
    bullets: [
      {
        lead: "Drove the Lit → React migration",
        text: ", building the React-in-Lit bridge and shared dialog infrastructure now used across the team.",
      },
      {
        lead: "Cut build & CI times",
        text: " with Rspack + SWC and oxlint — ~5× faster builds, ~8× faster linting, ~3× faster CI code checks.",
      },
      {
        lead: "Decomposed a frontend monorepo",
        text: " into four independently released repositories and a shared library, reducing release time for one product area by 2.5×",
      },
      {
        lead: "Eliminated a recurring class of production bugs",
        text: " with self-registering Redux Toolkit modules that load on first use, removing fragile manual wiring.",
      },
      {
        lead: "Raised frontend standards",
        text: " through team guidelines, open technical votes, adopted tooling prototypes, and contributions to @gravity-ui.",
      },
      {
        lead: "Mentor mid-level engineers and interns",
        text: ", helping teammates grow the way I did from intern to senior.",
      },
    ],
  },
  {
    title: "Middle Frontend Developer",
    period: "2021 — May 2024",
    bullets: [
      {
        lead: "Rewrote high-risk legacy components",
        text: ", migrating a heavy piece of Nirvana’s legacy option components from Lit to React into a reusable foundation for future work.",
      },
      {
        lead: "Rebuilt Layers as a standalone service",
        text: " with a new internal Docker registry UI for browsing images and repositories.",
      },
    ],
  },
  {
    title: "Frontend Engineer Intern",
    period: "Dec 2020 — 2021",
    bullets: [
      {
        lead: "Joined as a frontend intern",
        text: " and shipped production changes to internal infrastructure tools.",
      },
    ],
  },
];

export const techStack: TechStackGroup[] = [
  { label: "Core", items: ["TypeScript", "React", "Redux Toolkit", "Node.js"] },
  {
    label: "Build & CI",
    items: ["Rspack", "SWC", "oxlint", "Webpack", "Vite", "Vitest"],
  },
  { label: "Libraries", items: ["Express", "Electron", "Gravity UI", "Lit"] },
  { label: "Styling", items: ["SCSS", "CSS Modules", "Tailwind CSS"] },
  { label: "Tools", items: ["Git", "Docker", "PM2"] },
];

export const education = [
  {
    degree: "Master’s — Corporate Information Systems Management",
    period: "2020 — 2022",
  },
  {
    degree:
      "Bachelor’s — Software Engineering & Information Systems Administration",
    period: "2016 — 2020",
  },
];

export const languages = [
  { name: "Russian", level: "Native" },
  { name: "English", level: "C1 · Advanced" },
  { name: "Japanese", level: "JLPT N4 · Elementary" },
];

export const interests = [
  "Table tennis",
  "Speed cubing",
  "Web development",
  "Gaming",
  "Languages",
];

export const pdfContacts: { icon: string; text: string; href: string }[] = [
  {
    icon: "contact-icons/gmail.svg",
    text: "vlad.furman.ae@gmail.com",
    href: "mailto:vlad.furman.ae@gmail.com",
  },
  {
    icon: "contact-icons/github.svg",
    text: "github.com/Ruminat",
    href: "https://github.com/Ruminat",
  },
  {
    icon: "contact-icons/linkedin.svg",
    text: "linkedin.com/in/Ruminat",
    href: "https://www.linkedin.com/in/ruminat",
  },
  {
    icon: "favicon.png",
    text: "cv.shrek-labs.dev",
    href: "https://cv.shrek-labs.dev",
  },
];

export const sideProjects: SideProject[] = [
  {
    name: "MooDuck",
    period: "2025",
    href: "https://mooduck.shrek-labs.dev",
    desc: "AI-assisted Telegram mood journal for quick check-ins, notes, and replies.",
    tags: ["Telegram", "React", "Express", "Turso"],
  },
  {
    name: "Cube Shrine",
    period: "2025",
    href: "https://cs.shrek-labs.dev",
    desc: "A Rubik’s Cube site with a custom 3D cube renderer on 2D canvas.",
    tags: ["Next.js", "Canvas 2D", "TypeScript", "Library"],
  },
  {
    name: "Kitchen Madness",
    period: "2026",
    href: "https://github.com/Ruminat/Kitchen-Madness",
    desc: "A kitchen-themed top-down arena survivor game built in Godot 4.",
    tags: ["Godot 4", "GDScript", "Game Dev"],
  },
  {
    name: "Lyra",
    period: "2016",
    href: "https://github.com/Ruminat/Lyra",
    desc: "My first big project — a music player I actually used daily.",
    tags: ["Electron", "JavaScript", "Desktop App"],
  },
];

export function applyCoreSkillsOverride(
  stack: TechStackGroup[],
  coreSkills: string[] | undefined,
): TechStackGroup[] {
  if (!coreSkills) {
    return stack;
  }

  return stack.map((group) =>
    group.label === "Core" ? { ...group, items: coreSkills } : group,
  );
}

export function applyJobBulletPatches(
  sourceJobs: Job[],
  patches: JobBulletPatch[] | undefined,
): Job[] {
  if (!patches?.length) {
    return sourceJobs;
  }

  return sourceJobs.map((job) => ({
    ...job,
    bullets: job.bullets.map((bullet) => {
      const patch = patches.find(
        (candidate) =>
          candidate.jobTitle === job.title &&
          candidate.bulletLead === bullet.lead,
      );

      return patch ? patch.bullet : bullet;
    }),
  }));
}

export function applyJobBulletsOverride(
  sourceJobs: Job[],
  overrides: JobBulletsOverride[] | undefined,
): Job[] {
  if (!overrides?.length) {
    return sourceJobs;
  }

  return sourceJobs.map((job) => {
    const override = overrides.find(
      (candidate) => candidate.jobTitle === job.title,
    );

    return override ? { ...job, bullets: override.bullets } : job;
  });
}

export function applySideProjectPatches(
  projects: SideProject[],
  patches: SideProjectPatch[] | undefined,
): SideProject[] {
  if (!patches?.length) {
    return projects;
  }

  return projects.map((project) => {
    const patch = patches.find((candidate) => candidate.name === project.name);

    if (!patch) {
      return project;
    }

    return {
      ...project,
      ...(patch.desc ? { desc: patch.desc } : {}),
      ...(patch.tags ? { tags: patch.tags } : {}),
    };
  });
}

export function orderSideProjects(
  projects: SideProject[],
  names: string[] | undefined,
): SideProject[] {
  if (!names?.length) {
    return projects;
  }

  const byName = new Map(projects.map((project) => [project.name, project]));
  const ordered = names
    .map((name) => byName.get(name))
    .filter((project): project is SideProject => project !== undefined);

  if (ordered.length === 0) {
    return projects;
  }

  return ordered;
}
