import { createContext, type ComponentChildren } from "preact";
import { useContext, useMemo } from "preact/hooks";

const Url = createContext<ReturnType<typeof getValue> | null>(null);

export function UrlProvider({ children }: { children: ComponentChildren }) {
  const value = useMemo(() => getValue(), []);

  return <Url.Provider value={value}>{children}</Url.Provider>;
}

export function useUrl() {
  const value = useContext(Url);

  if (!value) {
    throw new Error("useUrl must be used within a UrlProvider");
  }

  return value;
}

function getValue() {
  const url = new URL(window.location.href);
  const searchParams = url.searchParams;

  return {
    isPdfMode: searchParams.has("pdf"),
  };
}
