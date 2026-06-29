import { expect, test } from '@playwright/test'

async function getHorizontalOverflow(page: import('@playwright/test').Page) {
  return page.evaluate(() => {
    const root = document.documentElement
    const body = document.body
    const viewportWidth = window.innerWidth
    const scrollWidth = Math.max(root.scrollWidth, body.scrollWidth)

    return {
      viewportWidth,
      scrollWidth,
      overflow: scrollWidth - viewportWidth,
    }
  })
}

test.describe('profile page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: 'Vlad Furman' })).toBeVisible()
  })

  test('matches the platform screenshot', async ({ page }, testInfo) => {
    await expect(page).toHaveScreenshot(`profile-page-${testInfo.project.name}.png`, {
      fullPage: true,
      animations: 'disabled',
      mask: [page.getByTestId('hero-avatar')],
      timeout: 15_000,
    })
  })

  test('does not create horizontal scroll while the avatar is animating', async ({ page }) => {
    await expectNoHorizontalOverflow(page)

    await page.waitForTimeout(750)
    await expectNoHorizontalOverflow(page)
  })

  test('keeps the avatar interaction inside the viewport', async ({ page }) => {
    const avatar = page.getByTestId('hero-avatar')
    await expect(avatar).toBeVisible()

    await avatar.hover({ position: { x: 12, y: 12 } })
    await page.waitForTimeout(250)
    await expectNoHorizontalOverflow(page)

    const box = await avatar.boundingBox()
    expect(box).not.toBeNull()
    if (box) {
      await page.mouse.move(box.x + box.width - 12, box.y + box.height - 12)
    }
    await page.waitForTimeout(250)
    await expectNoHorizontalOverflow(page)
  })
})

async function expectNoHorizontalOverflow(page: import('@playwright/test').Page) {
  const metrics = await getHorizontalOverflow(page)

  expect(metrics.overflow, JSON.stringify(metrics)).toBeLessThanOrEqual(0)
}
