import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PdfResume } from '@/features/PdfResume/PdfResume'
import { ProfilePage } from '@/features/ProfilePage/ProfilePage'
import '@/app/Globals.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element #root was not found.')
}

// Minimal path-based routing (no router dependency). BASE_URL is "/cv/" on the
// GitHub Pages build and "/" elsewhere; strip it before matching the route.
const base = import.meta.env.BASE_URL
const route = window.location.pathname
  .slice(window.location.pathname.startsWith(base) ? base.length : 0)
  .replace(/^\/+|\/+$/g, '')

createRoot(rootElement).render(
  <StrictMode>{route === 'pdf' ? <PdfResume /> : <ProfilePage />}</StrictMode>,
)
