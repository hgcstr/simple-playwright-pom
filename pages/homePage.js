export default class HomePage {
  constructor(page) {
    this.page = page;
  }
  async clickOnSpecialHotMenu() {
    // await this.page.click("(//span[contains(text(),'Special')])[2]");
    await this.page
      .getByRole("link", { name: "Special Hot", exact: true })
      .click();
  }
}
