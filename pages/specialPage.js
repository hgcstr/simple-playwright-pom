export default class SpecialPage {
  constructor(page) {
    this.page = page;
  }
  async addFirstProductToTheCart() {
    await this.page.hover("(//div[@class='image']/a)[1]", {
      strict: false,
    });
    await this.page.waitForTimeout(1000);
    await this.page.locator("(//i[@class='fas fa-shopping-cart'])[1]").click();
  }
  async selectFirstCategoryOnSideMenu() {
    await this.page.getByRole("link", { name: "Desktops (75)" }).click();
    //is recommended to use data-testid to avoid flakiness, specially in naming changes
  }

  async isToastVisible() {
    const toast = await this.page.getByRole("link", { name: "View Cart " });
    await toast.waitFor({ state: "visible" });
    return toast;
  }
}
