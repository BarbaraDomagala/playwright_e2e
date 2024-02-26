import { test, expect, Page, BrowserContext } from '@playwright/test';
import { LOGIN, PASS, URL } from "../login.config";
import { HomePage } from '../helpers/HomePage';

test.describe("ddd", () => {
  let page: Page;
  let homePage: HomePage;

  //test.beforeAll(async ({ page }) => {
  //  homePage = new HomePage(page);
 // });


  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto(URL);
  });

  test('has title Trello', async ({ page }) => {
    await expect(page).toHaveTitle(/Trello/);
  });

  test('login', async ({ page }) => {
    //homePage = new HomePage(page);
    await homePage.login();
    await expect(page).toHaveTitle('Boards | Trello');
  });

});
