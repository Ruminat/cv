import { createContext, type ComponentChildren } from "preact";
import { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState } from "preact/hooks";
import { useUrl } from "./url";

const Theme = createContext<ReturnType<typeof useValue> | null>(null);

export function ThemeProvider({ children }: { children: ComponentChildren }) {
  return <Theme.Provider value={useValue()}>{children}</Theme.Provider>;
}

export function useTheme() {
  const value = useContext(Theme);

  if (!value) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return value;
}

function useValue() {
  const { isPdfMode } = useUrl();
  const [theme, setTheme] = useState(isPdfMode ? "light" : fromSystem(getSystem()));

  useLayoutEffect(() => {
    updateThemeIfNeeded(theme);
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      setTheme(isPdfMode ? "light" : fromSystem(event));
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [isPdfMode]);

  const toggleTheme = useCallback(() => {
    if (isPdfMode) {
      return;
    }

    setTheme((current) => {
      return current === "dark" ? "light" : "dark";
    });
  }, [isPdfMode]);

  return useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
}

function updateThemeIfNeeded(theme: "dark" | "light") {
  if (document.documentElement.className !== theme) {
    document.documentElement.className = theme;
  }
}

function getSystem() {
  return window.matchMedia?.("(prefers-color-scheme: dark)") ?? { matches: false };
}

function fromSystem(system: { matches: boolean }): "dark" | "light" {
  return system.matches ? "dark" : "light";
}
