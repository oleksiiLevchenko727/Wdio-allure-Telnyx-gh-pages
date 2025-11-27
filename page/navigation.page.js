class navigationPage {

        get productsBtn() {return $('#radix-_R_4b9eivb_')}
        get productsVoiceAiLink() {return $$('a[href="/products/voice-ai"]')}
        get productsRcsLink() {return $$('a[href="/products/rcs"]')}
        get solutionsBtn() {return $('#radix-_R_4j9eivb_')}
        get healthcareLink() {return $$('a[href="/solutions/healthcare"]')}
        get logisticsAndTransportationLink() {return $$('a[href="/solutions/logistics-and-transportation"]')}
        get pricingBtn() {return $('#radix-_R_4r9eivb_')}
        get conversetionalAiBtn() {return $('(//a[@href="/pricing/conversational-ai"])[2]')}
        get pricingMessagingBtn() {return $('(//a[@href="/pricing/messaging"])[3]')}
        get whyTelnyxBtn() {return $('#radix-_R_539eivb_')}
        get ourNetworkBtn() {return $('(//a[@href="/our-network"])[2]')}
        get globalCoverageBtn() {return $('(//a[@href="/global-coverage"])[2]')}
        get resourcesBtn() {return $('#radix-_R_5b9eivb_')} 
        get eventsBtn() {return $$('//a[@href="/events"]')}
        get aiTemplatesBtn() {return $$('//a[@href="/templates"]')}
        get developersBtn() {return $('#radix-_R_5j9eivb_')}
        get devDocsBtn() {return $$('//a[@href="https://developers.telnyx.com"]')}
        get integrationsBtn() {return $$('//a[@href="https://telnyx.com/resources"]')}
        get contactUsBtn() {return $('a[href="https://telnyx.com/contact-us"][class="max-header-md:hidden"]')}
        get logInBtn() {return $('a[href="https://portal.telnyx.com"][class="max-header-md:hidden"]')}
        get signUp() {return $('header a[href="/sign-up"] ')}
        
        
             async clickOnProductsButton () {
             await this.productsBtn.click()
             }
             async clickOnProductsVoiceAiButton () {
             await this.productsVoiceAiLink[1].click()
             }
             async clickOnProductsRcsButton () {
             await this.productsRcsLink[1].click()
             }
             async clickOnSolutionsButton() {
             await this.solutionsBtn.click();
             }
             async clickOnHealthcareLinkButton() {
             await this.healthcareLink[1].click();
             }
             async clickOnLogisticsAndTransportationButton() {
             await this.logisticsAndTransportationLink[1].click();
             }
             async clickOnPricingButton() {
             await this.pricingBtn.click();   
             }
             async clickOnConversetionalAiButton() { 
             await this.conversetionalAiBtn.click();
             }
             async clickOnPricingMessagingButton() {
             await this.pricingMessagingBtn.click();
             }
             async clickOnWhyTelnyxButton() {
             await this.whyTelnyxBtn.click();   
             } 
             async clickOnOurNetworkButton() {
             await this.ourNetworkBtn.click();
             }
             async clickOnGlobalCoverageButton() {
             await this.globalCoverageBtn.click();
             }
             async clickOnResourcesButton() {
            //  await this.resourcesBtn.waitForClickable({ timeout: 5000 });  
             await this.resourcesBtn.click();   
             }
             async clickOnEventsButton() {   
             await this.eventsBtn[1].click();
             }
             async clickOnAiTemplatesButton() {
             await this.aiTemplatesBtn[1].click();
             }
             async clickOnDevelopersButton() {
             await this.developersBtn.click();
             }
             async clickOnDevDocsButton() {
             await this.devDocsBtn[1].click();
             }
             async clickOnIntegrationsButton() {
             await this.integrationsBtn[1].click();
             }
             async clickOnContactUsButton() {
             await this.contactUsBtn.click();
             } 
             async clickOnLogInButton() {
             await this.logInBtn.click();
             } 
             async clickOnSignUpButton() {
             await this.signUp.click();   
             }

    }


export default new navigationPage()