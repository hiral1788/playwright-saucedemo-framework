import {test} from'@playwright/test';

import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';
import { CartPage } from './pages/CartPage';
import {user} from './data/user';


test('Test user can add pordouct to Cart',async ({page})=>{
    const loginPage= new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage= new CartPage(page);
    await loginPage.navigate();
    //await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.login(user.standard.username,user.standard.password);
    await inventoryPage.verifyInventoryPage();
    await inventoryPage.sortLowToHigh();
    await inventoryPage.addProducts();
    await inventoryPage.openCart();
    await cartPage.verifyProducts();




});