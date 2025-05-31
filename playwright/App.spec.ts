import { test, expect } from '@playwright/test';

test.describe('Investment Calculator App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3001');
  });

  test('renders the Investment Calculator heading and form', async ({ page }) => {
    await expect(page.getByText('Investment Calculator')).toBeVisible();
    await expect(page.getByLabel('Initial Amount:')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Calculate' })).toBeVisible();
  });

  test('submits the form and displays results', async ({ page }) => {
    await page.getByLabel('Initial Amount:').fill('1000');
    await page.getByLabel('Annual Contribution:').fill('500');
    await page.getByLabel('Expected Return (%):').fill('5');
    await page.getByLabel('Duration (Years):').fill('10');
    await page.getByRole('button', { name: 'Calculate' }).click();

    // Wait for results to appear
    await expect(page.getByText('Investment Results')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Year 1', exact: true })).toBeVisible();
    await expect(page.getByText('$1000.00')).toBeVisible();
  });
});