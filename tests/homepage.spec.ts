import { expect, test } from '@playwright/test';

test('homepage loads optimized showcase images and creator credit', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'High-Converting Websites Built for Kenyan Businesses' })).toBeVisible();
  await expect(page.locator('#showcase .showcase-card:not([data-slider-clone="true"])')).toHaveCount(4);
  await expect(page.locator('#showcase picture source[type="image/avif"]').first()).toHaveAttribute('srcset', /\.avif/);
  await expect(page.getByRole('link', { name: /@fredie\.websolution/ })).toHaveAttribute(
    'href',
    'https://www.tiktok.com/@fredie.websolutions',
  );
});

test('mobile navigation opens and closes after choosing a section', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  const menu = page.locator('.mobile-menu');
  await menu.locator('summary').click();
  await expect(menu).toHaveAttribute('open', '');
  await expect(menu.locator('summary')).toHaveAttribute('aria-label', 'Close site navigation');
  await menu.getByRole('link', { name: 'Showcase' }).click();
  await expect(menu).not.toHaveAttribute('open', '');
  await expect(menu.locator('summary')).toHaveAttribute('aria-label', 'Open site navigation');
  await expect(page).toHaveURL(/#showcase$/);
});

test('showcase wraps from its first project to the last project', async ({ page }) => {
  await page.goto('/');

  const dots = page.locator('#dots-container .dot');
  await dots.nth(0).click();
  await expect(dots.nth(0)).toHaveAttribute('aria-pressed', 'true');
  await page.getByRole('button', { name: 'Previous project' }).click();
  await expect(dots.nth(3)).toHaveAttribute('aria-pressed', 'true');
});

test('showcase auto-advances after seven seconds and pauses on hover', async ({ page }) => {
  await page.clock.install();
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');

  const dots = page.locator('#dots-container .dot');
  await expect(dots.nth(1)).toHaveAttribute('aria-pressed', 'true');
  await page.clock.fastForward(7000);
  await expect(dots.nth(2)).toHaveAttribute('aria-pressed', 'true');

  await page.locator('#showcase').hover();
  await page.clock.fastForward(14000);
  await expect(dots.nth(2)).toHaveAttribute('aria-pressed', 'true');

  await page.mouse.move(0, 0);
  await page.clock.fastForward(7000);
  await expect(dots.nth(3)).toHaveAttribute('aria-pressed', 'true');
});
