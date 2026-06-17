import { expect } from "@playwright/test";

export class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = '[data-test="username"]';
        this.password = '[data-test="password"]';
        this.loginBtn = '[data-test="login-button"]';
    }

    async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
    }


  

async verifyLockedUserError(){

    await expect(
        this.page.locator('[data-test="error"]')
    ).toContainText(
        'Sorry, this user has been locked out.'
    );
}

    async login(user, pass) {

        await this.page
            .locator(this.username)
            .fill(user);

        await this.page
            .locator(this.password)
            .fill(pass);

        await this.page
            .locator(this.loginBtn)
            .click();
    }
}