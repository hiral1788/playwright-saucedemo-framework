import { test, expect } from '@playwright/test';

test('verify price sorting low to high', async ({ page }) => {

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');

  // Select Low to High sorting
  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');

  // Get all prices
  const priceLocator = page.locator('.inventory_item_price');
  const priceText = await priceLocator.allTextContents();

  const prices = priceText.map(p =>
    parseFloat(p.replace('$', '').trim())
  );
 
  console.log('Prices from UI:', prices);

  expect(prices.length).toBeGreaterThan(0);

  // Smarter check: compare with sorted copy
  const sortedPrices = [...prices].sort((a, b) => a-b);

  expect(prices).toEqual(sortedPrices);
});