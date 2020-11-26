"use strict";
const {By} = require('selenium-webdriver');


class BasePage{
    constructor(
        webdriver,
        driver,
        targetUrl,
        waitTimeout = 10000,
      ) {
        this.webdriver = webdriver;
        this.driver = driver;
        this.targetUrl = targetUrl;
        this.waitTimeout = waitTimeout;
      }

      async idSetValue(locatorValue,objectValue){
        await this.driver.findElement(By.id(locatorValue)).sendKeys(objectValue);
      }

      async nameSetValue(locatorValue,objectValue){
        await this.driver.findElement(By.name(locatorValue)).sendKeys(objectValue);
      }

      async xpathSetValue(locatorValue,objectValue){
        await this.driver.findElement(By.xpath(locatorValue)).sendKeys(objectValue);
      }

      async idClick(locatorValue){
        await this.driver.findElement(By.id(locatorValue)).click();
      }

      async nameClick(locatorValue){
        await this.driver.findElement(By.name(locatorValue)).click();
      }

      async xpathClick(locatorValue){
        await this.driver.findElement(By.xpath(locatorValue)).click();
      }
      
      async xpathGetText(locatorValue){
        const email=await this.driver.findElement(By.xpath(locatorValue)).getText();
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