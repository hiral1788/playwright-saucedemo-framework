import { test } from '../fixtures/baseTest.js';
import { users } from '../data/users.js';

test.beforeEach(async ({ loginPage }) => {

    console.log("Before Test");

    await loginPage.navigate();

});

for (const user of users) {

    test(
        `Login using ${user.username}`,
        async ({
            loginPage,
            inventoryPage,
            cartPage
        }) => {

            await loginPage.login(
                user.username,
                user.password
            );

            if (user.canLogin) {

                await inventoryPage.verifyInventoryPage();

                await inventoryPage.sortLowToHigh();

                await inventoryPage.addProducts();

                await inventoryPage.openCart();

                await cartPage.verifyProducts();

            } else {

                await loginPage.verifyLockedUserError();

            }

        }
    );
}