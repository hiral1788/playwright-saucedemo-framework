import { test, expect } from '@playwright/test';

test('verify lowest price is first', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');

  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');

  const prices = await page.locator('.inventory_item_price').allTextContents();

  const numericPrices = prices.map(p =>
    parseFloat(p.replace('$', '').trim())
  );

  const minPrice = Math.min(...numericPrices);

  // Check first item is lowest
  expect(numericPrices[0]).toBe(minPrice);
});