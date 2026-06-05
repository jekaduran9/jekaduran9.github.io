import { test, expect } from '@playwright/test';

test.describe('Header navigation', () => {
  test('ES: navigates to About and Contact', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'Sobre mí' }).click();
    await expect(page).toHaveURL(/\/about\/?$/);

    await page.getByRole('link', { name: 'Contacto' }).click();
    await expect(page).toHaveURL(/\/contact\/?$/);
  });

  test('EN: navigates to About and Contact', async ({ page }) => {
    await page.goto('/en/');

    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/\/en\/about\/?$/);

    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/\/en\/contact\/?$/);
  });
});
