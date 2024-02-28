import { test, expect, Page } from '@playwright/test';
import { URL } from "../login.config";
import { HomePage } from '../helpers/HomePage';
import { Dashboard } from '../helpers/dashboard';

test.describe("tests on Trello dashboard", () => {
  let homePage: HomePage;
  let dashboard: Dashboard;
  let page: Page;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    dashboard = new Dashboard(page);
    await page.goto(URL);
  });

  test('create new Workspace', async ({ page }) => {
    let wsName = "testWS";
    await homePage.login();
    await dashboard.createNewWorkspace(wsName);
    await dashboard.openWorkspaceSwitcher();
    await expect(page.locator('.ncT2qWVj6a9duL').nth(1)).toHaveText(`${wsName}`);
  });

});
