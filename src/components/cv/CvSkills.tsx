import type { ComponentChildren } from "preact";
import { LINK } from "../Link/LINK";
import { SectionHeader } from "./SectionHeader";

function SkillChip({ children }: { children: ComponentChildren }) {
  return (
    <span className="group relative border border-border bg-secondary px-3 py-1 text-sm transition-colors hover:border-primary">
      <span className="absolute -left-px -top-px h-2 w-2 border-l border-t border-primary opacity-0 transition-opacity group-hover:opacity-100" />
      {children}
      <span className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-primary opacity-0 transition-opacity group-hover:opacity-100" />
    </span>
  );
}

function Category({ title, children }: { title: string; children: ComponentChildren }) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <span className="text-primary">{">"}</span>
        <span className="text-sm font-semibold">{title}</span>
        <div className="h-px flex-1 bg-border" />
      </div>
      <div className="flex flex-wrap gap-2 pl-4">{children}</div>
    </div>
  );
}

export function CvSkills() {
  return (
    <section className="relative">
      <SectionHeader title="Skills" />

      <div className="border border-border bg-card p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Category title="Core">
            <SkillChip>{LINK.typescript}</SkillChip>
            <SkillChip>{LINK.react}</SkillChip>
            <SkillChip>{LINK.nodeJS}</SkillChip>
            <SkillChip>{LINK.electron}</SkillChip>
          </Category>

          <Category title="Styling">
            <SkillChip>{LINK.scss}</SkillChip>
            <SkillChip>CSS Modules</SkillChip>
          </Category>

          <Category title="Tools">
            <SkillChip>{LINK.git}</SkillChip>
            <SkillChip>{LINK.docker}</SkillChip>
            <SkillChip>{LINK.vite}</SkillChip>
            <SkillChip>{LINK.webpack}</SkillChip>
            <SkillChip>CI/CD</SkillChip>
          </Category>

          <Category title="Libraries">
            <SkillChip>{LINK.lit}</SkillChip>
            <SkillChip>{LINK.reduxToolkit}</SkillChip>
            <SkillChip>{LINK.express}</SkillChip>
            <SkillChip>{LINK.gravityUi}</SkillChip>
          </Category>
        </div>
      </div>
    </section>
  );
}
