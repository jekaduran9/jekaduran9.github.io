import { test, expect } from '@playwright/test';

test.describe('Project detail pages', () => {
  test('clicking a project card opens the ES detail page', async ({ page }) => {
    await page.goto('/');

    const firstCard = page.locator('a.project-card').first();
    const href = await firstCard.getAttribute('href');
    expect(href).toMatch(/\/projects\/[a-z0-9-]+/);

    await firstCard.click();
    await expect(page).toHaveURL(/\/projects\/[a-z0-9-]+/);

    await expect(page.getByText('Rol', { exact: true }).first()).toBeVisible();
  });

  test('the EN equivalent project page resolves via -en slug', async ({ page }) => {
    await page.goto('/en/');

    const firstCard = page.locator('a.project-card').first();
    const href = await firstCard.getAttribute('href');
    expect(href).toMatch(/\/en\/projects\/[a-z0-9-]+-en/);

    await firstCard.click();
    await expect(page).toHaveURL(/\/en\/projects\/[a-z0-9-]+-en/);

    await expect(page.getByText('Role', { exact: true }).first()).toBeVisible();
  });
});
