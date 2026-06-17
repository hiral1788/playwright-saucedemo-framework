import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';

import { users } from '../data/users.js';

for(const user of users){

    test(
        `Login using ${user.username}`,
        async ({ page }) => {

            const loginPage =
                new LoginPage(page);

            const inventoryPage =
                new InventoryPage(page);

            const cartPage =
                new CartPage(page);

            await loginPage.navigate();

            await loginPage.login(
                user.username,
                user.password
            );

            if(user.canLogin){

                await inventoryPage.verifyInventoryPage();

                await inventoryPage.sortLowToHigh();

                await inventoryPage.addProducts();

                await inventoryPage.openCart();

                await cartPage.verifyProducts();

            }
            else{

                await loginPage
                    .verifyLockedUserError();

            }
        }
    );
}