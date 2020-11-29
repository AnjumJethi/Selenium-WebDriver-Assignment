"use strict";
const BasePage = require('./basePage');


class UserAccountPage extends BasePage{
    constructor ( 
        webdriver,	
		driver, 
		targetUrl,
		waitTimeout = 20000
		) {     
            super(driver, targetUrl, waitTimeout);
            this.driver=driver;
            this.targetUrl=targetUrl;
            this.waitTimeout =waitTimeout;
            this.id_title="id_gender1";
            this.id_firstName="customer_firstname";
            this.id_lastName="customer_lastname";
            this.id_email="email";
            this.id_password="passwd";
            this.id_date="days";
            this.id_month="months";
            this.id_year="years";
            this.id_address="address1";
            this.id_city="city";
            this.xpath_state="//select[@id='id_state']";
            this.id_zipCode="postcode";
            this.id_country="id_country";
            this.id_mobilePhone="phone_mobile";
            this.id_addressAlias="alias";	
            this.id_registration="submitAccount";
            this.xpath_confirmMsg="//p[@class='info-account']";
            this.xpath_SignOut="//a[@title='Log me out']";
            this.confirmMsg="Welcome to your account. Here you can manage all of your personal information and orders.";	    
    }

    async createUserAccount(){
        
        // fill out user details
        this.driver.sleep(this.waitTimeout);
        this.basePage = new BasePage(this.webdriver,this.driver,this.targetUrl);
        await this.basePage.nameSetValue(this.id_country,"United States");
        await this.basePage.idSetValue(this.id_title,1);
        await this.basePage.idSetValue(this.id_firstName,"TestAJ");
        await this.basePage.idSetValue(this.id_lastName,"AJ");
        await this.basePage.idSelectSetValue(this.id_date,12); 
        await this.basePage.idSelectSetValue(this.id_month,"June");     
        await this.basePage.idSelectSetValue(this.id_year,1984);    
        await this.basePage.nameSetValue(this.id_password,"test@123");
        await this.basePage.idSetValue(this.id_mobilePhone,98987474123);
        await this.basePage.idSetValue(this.id_addressAlias,"Add1");
        await this.basePage.idSetValue(this.id_address,"F12 New Town Hights");
        await this.basePage.nameSetValue(this.id_city,"SanDego");
        await this.basePage.nameSetValue(this.id_zipCode,10203);
        await this.basePage.xpathSetValue(this.xpath_state,"Arizona");
        
        await this.basePage.nameClick(this.id_registration);
        const confirmation = await this.basePage.xpathGetText(this.xpath_confirmMsg);
        expect(confirmation).toBe(this.confirmMsg);
        await this.basePage.xpathClick(this.xpath_SignOut);
    }
}

module.exports = UserAccountPage;