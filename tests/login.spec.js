//npx playwright codegen
//npx playwright test --project=chromium --headed
//npx playwright show-report
import { test, expect } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import SpecialPage from "../pages/specialPage";

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

test.describe("Login Tests", () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(`${baseURL}?route=account/login`);
  });
  test("Succesful login", async ({ page, baseURL }) => {
    const login = new LoginPage(page);
    await login.enterEmail(email);
    await login.enterLoginPassword(password);
    await login.clickLoginBtn();
    expect(await page.title()).toBe("My Account");
  });

  test("Login and selecting from cart", async ({ page, baseURL }) => {
    const login = new LoginPage(page);
    const homePage = new HomePage(page);
    const special = new SpecialPage(page);
    await login.login(email, password);
    await homePage.clickOnSpecialHotMenu();
    await special.selectFirstCategoryOnSideMenu();
    await special.addFirstProductToTheCart();
    const isCartVisible = await special.isToastVisible();
    expect(isCartVisible).toBeVisible();
  });
});
