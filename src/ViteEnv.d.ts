/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Absolute or relative URL the "Let's talk" form posts to. Defaults to `/api/contact`. */
  readonly VITE_CONTACT_API_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
