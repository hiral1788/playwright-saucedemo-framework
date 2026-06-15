import {test,expect} from '@playwright/test';

/*test('test of test3',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page.getByText('Products')).toBeVisible();
    
    const itemTitle = await page.locator('.inventory_item_name')
    const count= await itemTitle.count();
    
    await expect(count).toBe(6);

   
        const allTexts = await itemTitle.allTextContents();
        console.log(allTexts);
        expect(allTexts).toContain('Sauce Labs Backpack');

    


test('handling dropdown', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('a[href="/dropdown"]').click();

    const dropdown = page.locator('#dropdown');

    // Select option with value "2"
    await dropdown.selectOption('2');

    // Assertion
    await expect(dropdown).toHaveValue('2');
});