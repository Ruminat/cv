// Resolve a path to a file in /public against Vite's configured base URL.
// GitHub Pages serves this repo under /cv/, so absolute paths like
// "/vlad-portrait.png" would 404. BASE_URL is "/cv/" in the Pages build and
// "/" everywhere else, and always ends with a slash.
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
