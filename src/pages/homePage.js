"use strict";

const BasePage = require('./basePage');


class HomePage  extends BasePage{
    
    constructor ( 
        webdriver,
		driver, 
		targetUrl,
		waitTimeout = 20000
		) {     
            const homePageTitle = 'home';     
            super(driver, targetUrl, waitTimeout);
            this.waitTimeout = waitTimeout;  
            this.driver=driver;
            this.targetUrl=targetUrl;
            this.SignIn="//a[normalize-space()='Sign in']";
            this.EmailLebel="//label[@for='email_create']";
            this.EmailId="email_create";
            this.CreateAnAccount="SubmitCreate";
            this.emailLebelName = "Email address";
            this.EmailAlreadyExist="//li[contains(text(),'An account using this email address has already be')]";
            this.EmailAlreadyExistLebel=  "An account using this email address has already been registered. Please enter a valid password or request a new one.";  
    }
    
    async signIn(){
        const consumerEmailID = (new Date%9e6).toString(36) +  "@gmail.com";
        await this.driver.get(this.targetUrl);
        this.basePage = new BasePage(this.webdriver,this.driver,this.targetUrl);
        await this.basePage.xpathClick(this.SignIn);
        const email = await this.basePage.xpathGetText(this.EmailLebel);
        await this.basePage.idSetValue(this.EmailId,consumerEmailID);
        await this.basePage.nameClick(this.CreateAnAccount);
        expect(email).toBe(this.emailLebelName);
    }

    async duplicateEmailID(){
        await this.driver.get(this.targetUrl);
        this.basePage = new BasePage(this.webdriver,this.driver,this.targetUrl);
        await this.basePage.xpathClick(this.SignIn);
        await this.basePage.idSetValue(this.EmailId,"t112ajethi@ggm.com");
        await this.basePage.nameClick(this.CreateAnAccount);
        const emailExist = await this.basePage.xpathGetText(this.EmailAlreadyExist);        
        expect(emailExist).toBe(this.EmailAlreadyExistLebel);
    }
}

module.exports = HomePage;