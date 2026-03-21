import { LINK } from "../Link/LINK";
import { Text, bold, code } from "../Typography";
import { SectionHeader } from "./SectionHeader";

const responsibilities = [
  {
    title: "Strategic Migration",
    body: (
      <>
        Leading the architectural transition from {LINK.lit} to {LINK.react}. Designed and implemented a custom bridge to
        render {LINK.react} components within the legacy {LINK.lit} environment, allowing for a seamless, incremental
        migration of complex pages and dialogs without service disruption.
      </>
    ),
  },
  {
    title: "Infrastructure & Modularization",
    body: (
      <>
        Successfully decoupled the monolithic &quot;Nirvana&quot; frontend into independent, domain-specific services
        (Layers, Domain Constructor). Established standalone repositories and CI/CD pipelines, significantly improving
        delivery speed and team autonomy.
      </>
    ),
  },
  {
    title: "Architectural Solutions",
    body: (
      <>
        Engineered a global Dialog Manager capable of rendering into the document body to bypass legacy CSS/DOM
        constraints, ensuring consistent UI behavior across both {LINK.lit} and {LINK.react} contexts.
      </>
    ),
  },
  {
    title: "State Management",
    body: (
      <>
        Developed lazy-loading Redux Toolkit modules that maintain backward compatibility with custom legacy Redux
        implementations, enhancing the developer experience and improving application stability and significantly reducing
        production regressions caused by legacy state conflicts.
      </>
    ),
  },
  {
    title: "Shared Tooling",
    body: (
      <>
        Created and currently maintain {code("@yandex-data-ui/nirvana-common")} (internal npm package), standardizing
        business logic and UI patterns across the Nirvana services ecosystem.
      </>
    ),
  },
  {
    title: "Growth",
    body: (
      <>
        Rapidly promoted from Intern to Senior Engineer within 4 years, consistently delivering high-impact solutions for{" "}
        <Text color="yandex">Y</Text>andex&apos;s internal cloud and developer tools.
      </>
    ),
  },
];

export function CvExperience() {
  return (
    <section className="relative">
      <SectionHeader title="Experience" />

      <div className="border border-border bg-card p-6">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="text-2xl font-bold">
            <span className="text-[#fc3f1d]">Y</span>andex
          </span>
          <span className="text-muted-foreground">|</span>
          <span className="text-sm text-muted-foreground">2020 — Present</span>
        </div>

        <div className="cv-prose mb-6 space-y-4 text-sm">
          <div className="flex items-start gap-2">
            <span className="shrink-0 text-primary">{">"}</span>
            <div>
              <span className="font-semibold text-foreground">Project:</span>{" "}
              <span className="text-muted-foreground">
                {LINK.nirvana} — a mission-critical internal infrastructure platform used by 2,000+ developers daily for
                ML pipelines and data processing.
              </span>
            </div>
          </div>

          <div>
            <p className="mb-2 font-semibold text-foreground">{bold("Tech Stack in Nirvana team")}:</p>
            <ul>
              <li>
                {LINK.typescript}, {LINK.lit} (migrating to {LINK.react}), {LINK.reduxToolkit}, {LINK.scss}.
              </li>
              <li>
                Leveraging and contributing to the {LINK.gravityUi} ecosystem.
              </li>
              <li>
                BFF on {LINK.nodeJS} utilizing {LINK.gravityCore}.
              </li>
            </ul>
          </div>

        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-foreground">{bold("Key Responsibilities:")}</p>
          <div className="space-y-4">
            {responsibilities.map((item) => (
              <div key={item.title} className="group relative pl-6">
                <div className="absolute left-0 top-0 h-full w-px bg-border transition-colors group-hover:bg-primary" />
                <div className="absolute -left-1 top-1 h-2 w-2 border border-border bg-card transition-colors group-hover:border-primary group-hover:bg-primary" />
                <h4 className="mb-1 text-sm font-semibold text-foreground">{item.title}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
