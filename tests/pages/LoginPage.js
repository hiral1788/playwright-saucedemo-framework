export class LoginPage{
    constructor(page){
        this.page=page;
         this.username ='[data-test="username"]';
        this.password ='[data-test="password"]';
        this.LoginBtn ='[data-test="login-button"]';
    }

    async navigate(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(user,pass){
        await this.page.locator('[data-test="username"]').fill(user);
        await this.page.locator('[data-test="password"]').fill(pass);
        await this.page.locator('[data-test="login-button"]').click();

    }
}