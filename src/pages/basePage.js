"use strict";
const {By,until} = require('selenium-webdriver');


class BasePage{
    constructor(
        webdriver,
        driver,
        targetUrl,
        waitTimeout = 50000,
      ) {
        this.webdriver = webdriver;
        this.driver = driver;
        this.targetUrl = targetUrl;
        this.waitTimeout = waitTimeout;
      }

      async idSetValue(locatorValue,objectValue){
        const element = await this.driver.wait(until.elementLocated(By.id(locatorValue)), this.waitTimeout);
        const objelement = await this.driver.wait(until.elementIsVisible(element), this.waitTimeout);
        await objelement.sendKeys(objectValue);
      }

      async idSelectSetValue(locatorValue,objectValue){
        const objelement = await this.driver.findElement(By.id(locatorValue));
        await objelement.sendKeys(objectValue);
      }

      async nameSetValue(locatorValue,objectValue){
        const element = await this.driver.wait(until.elementLocated(By.name(locatorValue)), this.waitTimeout);
        const objelement = await this.driver.wait(until.elementIsVisible(element), this.waitTimeout);
        await objelement.sendKeys(objectValue);
      }

      async xpathSetValue(locatorValue,objectValue){
        const element = await this.driver.wait(until.elementLocated(By.xpath(locatorValue)), this.waitTimeout);
        await element.sendKeys(objectValue);
      }

      async idClick(locatorValue){
        const element = await this.driver.wait(until.elementLocated(By.id(locatorValue)), this.waitTimeout);
        const objelement = await this.driver.wait(until.elementIsVisible(element), this.waitTimeout);
        await objelement.click();
      }

      async nameClick(locatorValue){
        const element = await this.driver.wait(until.elementLocated(By.name(locatorValue)), this.waitTimeout);
        const objelement = await this.driver.wait(until.elementIsVisible(element), this.waitTimeout);
        await objelement.click();
      }

      async xpathClick(locatorValue){
        const element = await this.driver.wait(until.elementLocated(By.xpath(locatorValue)), this.waitTimeout);
        const objelement = await this.driver.wait(until.elementIsVisible(element), this.waitTimeout);
        await objelement.click();
      }
      
      async xpathGetText(locatorValue){
        const element = await this.driver.wait(until.elementLocated(By.xpath(locatorValue)), this.waitTimeout);
        const objelement = await this.driver.wait(until.elementIsVisible(element), this.waitTimeout);
        const email = await objelement.getText();
        return email;
      }

      async navigate() {
        await this.driver.navigate().to(this.targetUrl);
        await this.waitForTitle();
      }
    
      // returns from a navigation destination - like pressing browser back button
    async returnFromDestination() {
        return this.driver.navigate().back();
    }

    async refreshPage() {
        return this.driver.navigate().refresh();
    }
}

module.exports = BasePage;