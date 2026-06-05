import { test, expect } from '@playwright/test';

test.describe('Language switcher', () => {
  test('switches from ES to EN and back via header', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'Ver proyectos' })).toBeVisible();

    await page.getByRole('link', { name: 'EN', exact: true }).click();
    await expect(page).toHaveURL(/\/en\/?$/);
    await expect(page.getByRole('link', { name: 'View projects' })).toBeVisible();

    await page.getByRole('link', { name: 'ES', exact: true }).click();
    await expect(page).toHaveURL(/\/?$/);
    await expect(page.getByRole('link', { name: 'Ver proyectos' })).toBeVisible();
  });

  test('preserves the current page when switching languages on /about', async ({ page }) => {
    await page.goto('/about');

    await page.getByRole('link', { name: 'EN', exact: true }).click();
    await expect(page).toHaveURL(/\/en\/about\/?$/);

    await page.getByRole('link', { name: 'ES', exact: true }).click();
    await expect(page).toHaveURL(/\/about\/?$/);
  });
});
