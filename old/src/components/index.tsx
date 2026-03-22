import { render } from "preact";
import { ThemeProvider } from "../context/theme";
import { UrlProvider, useUrl } from "../context/url";
import { TopMenu } from "./TopMenu";
import { CvEducation } from "./cv/CvEducation";
import { CvExperience } from "./cv/CvExperience";
import { CvHeader } from "./cv/CvHeader";
import { CvProjects } from "./cv/CvProjects";
import { CvSidebar } from "./cv/CvSidebar";
import { CvSkills } from "./cv/CvSkills";
import "./index.scss";

function Content() {
  const { isPdfMode } = useUrl();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {isPdfMode ? null : (
        <>
          <div className="pointer-events-none fixed inset-0 z-50 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.03)_2px,rgba(0,0,0,0.03)_4px)]" />
          <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </>
      )}

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 md:px-8 md:py-12">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-border pb-4">
          <div className="flex min-w-0 items-center gap-2">
            <div className="h-3 w-3 bg-destructive" />
            <div className="h-3 w-3 bg-chart-4" />
            <div className="h-3 w-3 bg-primary" />
            <span className="ml-4 truncate text-xs text-muted-foreground">~/resume/vlad-furman.tsx</span>
          </div>
          {isPdfMode ? null : <TopMenu />}
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_300px]">
          <div className="space-y-8">
            <CvHeader />
            <CvExperience />
            <CvProjects />
            <CvSkills />
            <CvEducation />
          </div>
          <CvSidebar />
        </div>

        <footer className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <span className="text-primary">{">"}</span> console.log
          <span className="text-muted-foreground">(</span>
          <span className="text-chart-4">&quot;Thanks for reading!&quot;</span>
          <span className="text-muted-foreground">)</span>
        </footer>
      </main>
    </div>
  );
}

export function renderContent() {
  render(
    <UrlProvider>
      <ThemeProvider>
        <Content />
      </ThemeProvider>
    </UrlProvider>,
    document.querySelector(".content")!,
  );
}
