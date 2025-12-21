import { createContext, type ComponentChildren } from "preact";
import { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState } from "preact/hooks";

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
  const [theme, setTheme] = useState(fromSystem(getSystem()));

  useLayoutEffect(() => {
    updateThemeIfNeeded(theme);
  }, [theme]);

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
      setTheme(fromSystem(event));
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      return current === "dark" ? "light" : "dark";
    });
  }, []);

  return useMemo(() => ({ theme, toggleTheme }), [theme]);
}

function updateThemeIfNeeded(theme: "dark" | "light") {
  if (document.body.className !== theme) {
    document.body.className = theme;
  }
}

function getSystem() {
  return window.matchMedia?.("(prefers-color-scheme: dark)") ?? { matches: false };
}

function fromSystem(system: { matches: boolean }): "dark" | "light" {
  return system.matches ? "dark" : "light";
}
