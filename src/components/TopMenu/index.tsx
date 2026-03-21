import classNames from "classnames";
import { useTheme } from "../../context/theme";
import { CodeIcon } from "../Icon";

export function TopMenu() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      <button
        type="button"
        onClick={toggleTheme}
        className="relative h-10 w-10 overflow-hidden border border-border bg-secondary text-lg transition-colors hover:border-primary"
        aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      >
        <span
          className={classNames(
            "absolute inset-0 flex items-center justify-center transition-all duration-300",
            theme === "light" ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-8",
          )}
        >
          🌝
        </span>
        <span
          className={classNames(
            "absolute inset-0 flex items-center justify-center transition-all duration-300",
            theme === "dark" ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-8",
          )}
        >
          🌚
        </span>
      </button>
      <a
        href="https://github.com/Ruminat/cv"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-border bg-secondary px-3 py-2 text-sm transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
      >
        <CodeIcon size={18} fill="currentColor" />
        Code
      </a>
    </div>
  );
}
