export default class LoginPage {
  constructor(page) {
    this.page = page;
  }
  async login(email, password) {
    await this.enterEmail(email);
    await this.enterLoginPassword(password);
    await this.clickLoginBtn();
  }

  async enterEmail(email) {
    await this.page.locator("#input-email").fill(email);
  }
  async enterLoginPassword(password) {
    await this.page.locator("#input-password").fill(password);
  }

  async clickLoginBtn() {
    await this.page
      .getByRole("button", { name: "Login" })
      .click({ waitForNavigation: "load" });
  }
}
