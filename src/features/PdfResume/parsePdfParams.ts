import {
  DEFAULT_HEADLINE,
  DEFAULT_LOCATION_PRESET,
  DEFAULT_SUMMARY_PRESET,
  PDF_PRESETS,
  applyCoreSkillsOverride,
  applyJobBulletPatches,
  jobs,
  orderSideProjects,
  resolveLocationLine,
  resolveSummary,
  sideProjects,
  techStack,
  type PdfContent,
} from "@/features/PdfResume/pdfConfig";

export interface PdfQueryParams {
  location: string | null;
  headline: string | null;
  summary: string | null;
  preset: string | null;
  projects: string | null;
}

export function readPdfQueryParams(
  search = typeof window !== "undefined" ? window.location.search : "",
): PdfQueryParams {
  const params = new URLSearchParams(search);

  return {
    location: params.get("location"),
    headline: params.get("headline"),
    summary: params.get("summary"),
    preset: params.get("preset"),
    projects: params.get("projects"),
  };
}

function parseProjectNames(projectsParam: string | null): string[] | undefined {
  if (!projectsParam) {
    return undefined;
  }

  const names = projectsParam
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean);

  return names.length > 0 ? names : undefined;
}

export function resolvePdfContent(query: PdfQueryParams): PdfContent {
  const preset = query.preset ? PDF_PRESETS[query.preset] : undefined;

  const locationLine = resolveLocationLine(
    query.location ?? preset?.location ?? DEFAULT_LOCATION_PRESET,
  );
  const headline = query.headline ?? preset?.headline ?? DEFAULT_HEADLINE;
  const summary = resolveSummary(
    query.summary ?? preset?.summary ?? DEFAULT_SUMMARY_PRESET,
  );
  const projectNames = parseProjectNames(query.projects) ?? preset?.projects;

  return {
    headline,
    locationLine,
    summary,
    jobs: applyJobBulletPatches(jobs, preset?.jobBulletPatches),
    techStack: applyCoreSkillsOverride(techStack, preset?.coreSkills),
    sideProjects: orderSideProjects(sideProjects, projectNames),
  };
}

export function resolvePdfContentFromSearch(search: string): PdfContent {
  return resolvePdfContent(readPdfQueryParams(search));
}
