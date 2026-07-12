import path from 'node:path'

import { expect, test } from '@playwright/test'

// Regenerates the hero image embedded in README.md. Runs only on the desktop
// project so the framed capture has a stable size. The live profile page is
// loaded inside a mock browser window (traffic lights + URL bar) so the README
// gets a polished, on-brand shot instead of a raw viewport grab.
const outputPath = path.resolve(process.cwd(), 'docs/screenshot.png')

// Crisp 2× capture at a width that triggers the two-column desktop hero.
test.use({ viewport: { width: 1360, height: 1000 }, deviceScaleFactor: 2 })

const FRAME_WIDTH = 1200
const FRAME_HEIGHT = 760

function framePage(appUrl: string) {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      html, body { background: #000; }
      body {
        display: flex;
        justify-content: center;
        padding: 40px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }
      .window {
        width: ${String(FRAME_WIDTH)}px;
        border-radius: 14px;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: 0 40px 120px rgba(0, 0, 0, 0.6);
        background: #0a0a0b;
      }
      .titlebar {
        display: flex;
        align-items: center;
        gap: 14px;
        height: 46px;
        padding: 0 16px;
        background: #1b1b1d;
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      }
      .lights { display: flex; gap: 8px; }
      .lights span { width: 12px; height: 12px; border-radius: 50%; }
      .r { background: #ff5f57; }
      .y { background: #febc2e; }
      .g { background: #28c840; }
      .url {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        max-width: 420px;
        margin: 0 auto;
        height: 28px;
        border-radius: 8px;
        background: #2a2a2d;
        color: #d0d0d3;
        font-size: 13px;
      }
      .url svg { opacity: 0.7; }
      iframe {
        display: block;
        width: ${String(FRAME_WIDTH)}px;
        height: ${String(FRAME_HEIGHT)}px;
        border: 0;
      }
    </style>
  </head>
  <body>
    <div class="window">
      <div class="titlebar">
        <div class="lights"><span class="r"></span><span class="y"></span><span class="g"></span></div>
        <div class="url">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          cv.shrek-labs.dev
        </div>
      </div>
      <iframe src="${appUrl}" title="CV profile page"></iframe>
    </div>
  </body>
</html>`
}

test('generates the README hero screenshot', async ({ page, baseURL }, testInfo) => {
  // Desktop only — the committed asset must be deterministic, so it can't be
  // written by the mobile project (different UA / touch rendering) too.
  test.skip(testInfo.project.name !== 'chromium-desktop', 'desktop-only capture')

  const appUrl = new URL('/', baseURL ?? 'http://127.0.0.1:4173').toString()
  await page.setContent(framePage(appUrl))

  const app = page.frameLocator('iframe')
  await expect(app.getByRole('heading', { name: 'Vlad Furman', level: 1 })).toBeVisible()
  await expect(app.getByRole('img', { name: /Portrait of Vlad Furman/ })).toBeVisible()

  // Let the hero entrance animation settle before capturing.
  await page.waitForTimeout(1500)

  await page.locator('.window').screenshot({ path: outputPath })
})
