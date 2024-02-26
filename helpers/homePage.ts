import { Page } from "@playwright/test";
import { LOGIN, PASS } from "../login.config";

export class HomePage {
    readonly loginBtn = '[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]';
    readonly username = '[id="username"]';
    readonly submitLoginBtn = '[id="login-submit"]';
    readonly password = '[type="password"]';
    
    constructor(readonly page: Page) {}

    async login() {            
      await this.page.click(this.loginBtn);
      await this.page.fill(this.username, LOGIN);
      await this.page.click(this.submitLoginBtn);
      await this.page.fill(this.password, PASS);
      await this.page.click(this.submitLoginBtn);
    }
}
 
