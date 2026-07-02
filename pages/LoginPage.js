import { expect } from '@playwright/test';
import { env } from '../config/env.js';

export class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginBtn = page.locator('[data-test="login-button"]');
    }

    async navigate() {
        await this.page.goto(env.baseUrl);
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }

    async verifyLockedUserError() {
        await expect(
            this.page.locator('[data-test="error"]')
        ).toContainText(
            'Sorry, this user has been locked out.'
        );
    }
}