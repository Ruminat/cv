import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  // Served from the VPS web root (nginx), so assets live at the root path.
  base: '/',
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
    // Forward the "Let's talk" form to the local contact relay (see server/).
    // In production nginx does this; in dev Vite needs to proxy it itself.
    proxy: {
      '/api': 'http://127.0.0.1:8787',
    },
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
    },
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
})
