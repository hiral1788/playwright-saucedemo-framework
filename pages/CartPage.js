import { expect } from "@playwright/test";

export class CartPage {

    constructor(page) {
        this.page = page;
        this.cartItems = '[data-test="inventory-item-name"]';
    }

    async verifyProducts() {

        await expect(
            this.page.locator(this.cartItems)
        ).toHaveText([
            'Sauce Labs Onesie',
            'Sauce Labs Backpack',
            'Sauce Labs Fleece Jacket'
        ]);
    }
}