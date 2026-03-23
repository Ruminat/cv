export const content = {
  page: {
    fileLabel: "~/resume/vlad-furman.tsx",
    footerMessage: "Thanks for reading!",
  },
  header: {
    fullName: "Vlad Furman",
    titleLine:
      "Senior Frontend Engineer | Frontend Architecture | React & TypeScript",
    relocation: "Open to relocation from St. Petersburg",
    summary:
      "Senior Frontend Engineer with 5+ years of experience at Yandex, specializing in large-scale infrastructure platforms. Expert in React and TypeScript with a strong focus on system architecture, legacy-to-modern migrations, and developer experience.",
  },
  experience: {
    companyPeriod: "2020 — Present",
    projectDescription:
      "Nirvana — a mission-critical internal infrastructure platform used by 2,000+ developers daily for ML pipelines and data processing.",
    responsibilities: {
      strategicMigration:
        "Leading the architectural transition from Lit to React. Designed and implemented a custom bridge to render React components within the legacy Lit environment, allowing for a seamless, incremental migration of complex pages and dialogs without service disruption.",
      infrastructureAndModularization:
        'Successfully decoupled the monolithic "Nirvana" frontend into independent, domain-specific services (Layers, Domain Constructor). Established standalone repositories and CI/CD pipelines, significantly improving delivery speed and team autonomy.',
      architecturalSolutions:
        "Engineered a global Dialog Manager capable of rendering into the document body to bypass legacy CSS/DOM constraints, ensuring consistent UI behavior across both Lit and React contexts.",
      stateManagement:
        "Developed lazy-loading Redux Toolkit modules that maintain backward compatibility with custom legacy Redux implementations, enhancing the developer experience and improving application stability.",
      sharedTooling:
        "Created and currently maintain @yandex-data-ui/nirvana-common (internal npm package), standardizing business logic and UI patterns across the Nirvana services ecosystem.",
      growth:
        "Rapidly promoted from Intern to Senior Engineer within 4 years, consistently delivering high-impact solutions for Yandex's internal cloud and developer tools.",
    },
  },
  projects: {
    sectionTitle: "Side Projects",
    mooDuckDate: "2025 — Present",
    mooDuckDescription:
      "An experimental AI-driven Telegram bot for mood tracking. Features real-time sentiment analysis using OpenAI API and a Node.js backend with a Turso database.",
    mooDuckTags: ["Node.js", "Telegram Bot"],
    chiDescription:
      "A full-stack app for language learning using flashcards, similar to Anki, developed in the University.",
    lyraDescription:
      "A music player built with Electron, developed during high school to explore desktop JS.",
    lyraTags: ["Desktop App"],
  },
  education: {
    universityLine1: "Peter the Great St. Petersburg",
    universityLine2: "Polytechnic University",
    bachelorsPeriod: "2016 — 2020",
    bachelorsSpecialty: "Software Engineering and Information Systems Administration",
    mastersPeriod: "2020 — 2022",
    mastersSpecialty: "Corporate Information Systems Management",
  },
  sidebar: {
    languagesTitle: "// Languages",
    hobbiesTitle: "// Hobbies",
    hobbies: {
      tableTennis: "Table tennis",
      webDev: "Web dev",
      gaming: "Gaming",
      languages: "Languages",
    },
  },
} as const
