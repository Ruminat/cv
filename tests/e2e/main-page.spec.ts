import { expect, test } from '@playwright/test'

test.describe('main page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: 'Vlad Furman', level: 1 })).toBeVisible()
  })

  test('renders the hero identity and key stats', async ({ page }) => {
    await expect(page.getByText('Senior Frontend Engineer').first()).toBeVisible()
    await expect(page.getByText('Open to relocation from St. Petersburg')).toBeVisible()

    // Info stats (scoped to the hero stat list to avoid matching prose)
    const stats = page.locator('dl').first()
    await expect(stats).toContainText('Company')
    await expect(stats).toContainText('Yandex')
    await expect(stats).toContainText('Infrastructure')

    // Focus tags
    for (const tag of ['Frontend Architecture', 'React & TypeScript', 'Developer Experience']) {
      await expect(page.getByText(tag, { exact: true })).toBeVisible()
    }
  })

  test('renders every main content section', async ({ page }) => {
    for (const id of ['journey', 'experience', 'skills', 'projects', 'education']) {
      await expect(page.locator(`#${id}`)).toBeVisible()
    }
  })

  test('links the résumé download to the PDF surface', async ({ page }) => {
    const downloadCv = page.getByRole('link', { name: 'Download CV' })
    await expect(downloadCv).toBeVisible()
    await expect(downloadCv).toHaveAttribute('href', '/pdf')
  })

  test('opens and closes the "Let\'s talk" contact dialog', async ({ page }) => {
    await page.getByRole('button', { name: "Let's talk" }).click()

    const dialog = page.getByRole('dialog')
    await expect(dialog).toBeVisible()
    await expect(dialog.getByText('Or reach me directly')).toBeVisible()
    await expect(dialog.getByRole('link', { name: 'Email' })).toBeVisible()
    await expect(dialog.getByRole('textbox', { name: 'Message' })).toBeVisible()

    await dialog.getByRole('button', { name: 'Cancel' }).click()
    await expect(dialog).toBeHidden()
  })
})
