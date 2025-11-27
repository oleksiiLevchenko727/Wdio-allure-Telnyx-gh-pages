import { faker } from '@faker-js/faker';

class contactUsPage {

        get contactUsBtn() {return $('a[href="https://telnyx.com/contact-us"][class="max-header-md:hidden"]')}
        get selectRequestTypeBtn() {return $('#Reason_for_Contact__c')}
        get valueSupport() {return $('[value="Support"]')}
        get firstNameField() {return $('#FirstName')}
        get lastNameField() {return $('#LastName')}
        get emailField() {return $('#Email')}
        get selectCountry() {return $('#Phone_Number_Extension__c')}
        get ukraineNumber() {return $('[value="+380"]')}
        get phoneNumberField() {return $('#Phone_Number_Base__c')} 
        get websiteField() {return $('#Website')}
        get requestField() {return $('#Form_Additional_Information__c')}
        get additionalText() {return $('#How_did_you_hear_about_Telnyx_Open__c')}
        get ckeckBox() {return $('#mktoCheckbox_16411_0')}
        get submitButton() {return $('button[type="submit"]')}
        get succesfullText() {return $('[class="c-PJLV"]')}
        
        
            async clickOnContactUsBtn () {
               await this .contactUsBtn.waitForClickable();
               await this.contactUsBtn.click()
             }
               async selectRequestType() {   
                  await this.selectRequestTypeBtn.click();
                  await this.valueSupport.click();
             }

            async setFirstNameInput() {
               await this.firstNameField.setValue(faker.person.firstName()); 
             }
             async setLastNameInput() {
                await this.lastNameField.setValue(faker.person.lastName());   
             }
             async setEmailInput() {
                await this.emailField.setValue(faker.internet.email());
             }
             async selectCountryNumber() {
                await this.selectCountry.click();   
             }

             async clickOnUkraineNumber() {
                await this.ukraineNumber.click();   
             }

             async fillPhoneNumber() {
                await this.phoneNumberField.setValue(faker.number.int({ min: 380960000000, max: 380969999999 }));   
             } 
             
             async fillWebsite() {
               await this.websiteField.scrollIntoView();
               await this.websiteField.setValue(faker.internet.domainName());   
             }

             async fillText() {
                await this.requestField.setValue(faker.lorem.sentence(5));
             }

             async fillAdditonalText() {
                await this.additionalText.setValue(faker.lorem.sentence({ min: 3, max: 5 }));
            } 
            
             async checkBoxClick() {
                await this.ckeckBox.click();
            } 

             async continue() {
                await this.submitButton.scrollIntoView();
                await this.submitButton.click();   
            }
            async getsuccessfullMessageText() {
              await this.succesfullText.waitForDisplayed();
              await  this.succesfullText.getText();   
            }

    }


export default new contactUsPage()