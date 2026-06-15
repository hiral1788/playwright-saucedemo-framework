/*import { expect } from "@playwright/test";
export class InventoryPage{
    constructor(page){
        this.page= page;
        this.sortDropdown='[data-test="product-sort-container"]';
        this.cartLink='[data-test="shopping-cart-link"]';
    }

    async verifyInventoryPage(){
        await expect(this.page).toHaveURL(/inventory/);
    }
    async sortLowToHigh(){
        await this.page.locator('[data-test="product-sort-container"]').selectOption('lohi');
    }

    async addProduct(){
        const products = [
            'add-to-cart-sauce-labs-onesie',
            'add-to-cart-sauce-labs-backpack',
            'add-to-cart-sauce-labs-fleece-jacket'
        ];
        for (const product of products){
            await this.page.locator(`[data-test="${products}"]`).click();
        }
    }
    
    async openCart(){
        await this.page.page.locator(this.cartLink).click();
    }
}*/

import { expect } from '@playwright/test';

export class InventoryPage {

    constructor(page) {
        this.page = page;

        this.sortDropdown =
            '[data-test="product-sort-container"]';

        this.cartLink =
            '[data-test="shopping-cart-link"]';
    }

    async verifyInventoryPage() {
        await expect(this.page)
            .toHaveURL(/inventory/);
    }

    async sortLowToHigh() {
        await this.page
            .locator(this.sortDropdown)
            .selectOption('lohi');
    }

    async addProducts() {

        const products = [
            'add-to-cart-sauce-labs-onesie',
            'add-to-cart-sauce-labs-backpack',
            'add-to-cart-sauce-labs-fleece-jacket'
        ];

        for (const product of products) {

            await this.page
                .locator(`[data-test="${product}"]`)
                .click();
        }
    }

    async openCart() {
        await this.page
            .locator(this.cartLink)
            .click();
    }
}