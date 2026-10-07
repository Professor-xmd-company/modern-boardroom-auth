import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8080/#login');
  });

  test('should navigate between login and signup', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Welcome back' })).toBeVisible();

    await page.click('text=Create account');
    await expect(page).toHaveURL(/#signup/);
    await expect(page.getByRole('heading', { name: 'Create account' })).toBeVisible();

    await page.getByRole('link', { name: 'Sign in' }).click();
    await expect(page).toHaveURL(/#login/);
    await expect(page.getByRole('heading', { name: 'Welcome back' })).toBeVisible();
  });

  test('should verify touch targets are at least 44px', async ({ page }) => {
    const emailInput = page.locator('#login-email');
    const box = await emailInput.boundingBox();
    expect(box.height).toBeGreaterThanOrEqual(44);

    const signInButton = page.getByRole('button', { name: 'Sign in' });
    const btnBox = await signInButton.boundingBox();
    expect(btnBox.height).toBeGreaterThanOrEqual(44);
  });

  test('should show validation errors on empty submit', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page.locator('text=Email is required')).toBeVisible();
    await expect(page.locator('text=Password is required')).toBeVisible();
  });

  test('should verify focus visibility', async ({ page }) => {
    const emailInput = page.locator('#login-email');
    await emailInput.focus();
    const outline = await page.evaluate((el) => {
      const style = window.getComputedStyle(el, ':focus-visible');
      return style.outline || window.getComputedStyle(el).outline;
    }, await emailInput.elementHandle());

    expect(outline).not.toBe('none');
  });
});
