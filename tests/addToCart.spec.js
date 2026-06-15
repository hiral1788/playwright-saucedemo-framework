import { test } from '@playwright/test';

import {LoginPage} from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js'
import { user } from '../data/user.js';



test('Test user can add product to cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    const { username, password } =
        user.standard;

    await loginPage.navigate();

    await loginPage.login(
        username,
        password
    );

    await inventoryPage.verifyInventoryPage();
    await inventoryPage.sortLowToHigh();
    await inventoryPage.addProducts();
    await inventoryPage.openCart();
    await cartPage.verifyProducts();

});