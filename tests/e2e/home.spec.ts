import { test, expect } from '@playwright/test';

test.describe('Home page (ES)', () => {
  test('renders the hero, marquee title, and projects section', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Jessica Duran/);

    await expect(page.getByRole('heading', { name: /Hola, soy Jessica Durán/ }).first()).toBeVisible();

    await expect(page.getByRole('link', { name: 'Ver proyectos' })).toBeVisible();

    await expect(page.getByRole('heading', { name: 'Proyectos', level: 2 })).toBeVisible();

    await expect(page.getByRole('button', { name: 'Todos' })).toBeVisible();
  });

  test('renders at least one project card linking to a project detail page', async ({ page }) => {
    await page.goto('/');
    const firstCard = page.locator('a.project-card').first();
    await expect(firstCard).toHaveAttribute('href', /\/projects\/[a-z0-9-]+/);
  });
});

test.describe('Home page (EN)', () => {
  test('renders the EN hero copy', async ({ page }) => {
    await page.goto('/en/');

    await expect(page.getByRole('heading', { name: /Hello, I'm Jessica Durán/ }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'View projects' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Featured', level: 2 })).toBeVisible();
  });
});
