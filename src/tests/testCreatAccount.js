const chromeDriver = require("../drivers/chrome");
const HomePage = require('../pages/homePage');
const CreateAccount = require('../pages/userAccountPage');
const webdriver = require('selenium-webdriver');
const UserAccountPage = require("../pages/userAccountPage");

describe("Aura Code Challenge - Create User Account Tests", () => {
    let driver;
    beforeAll(() => {
      const headless = process.argv;     
      driver = chromeDriver(headless);
      this.homePage = new HomePage(webdriver,driver,"http://automationpractice.com/");
    });
    
    afterAll(async () => {
      await driver.quit();
    });
  
    test("it loads authentication page", async () => {
        await this.homePage.signIn();
        this.userAccountPage = new UserAccountPage(webdriver,driver,"http://automationpractice.com/");  
        await this.userAccountPage.createUserAccount();
    });

    test("Email already registered", async () => {
      await this.homePage.duplicateEmailID();
    });
})