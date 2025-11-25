import { faker } from '@faker-js/faker';


class landingPage {
        get firstNameField() {return $('[placeholder="* First"]')}   
        get lastNameField() {return $('[placeholder="* Last"]')}
        get emailField() {return $('[placeholder="* Email"]')}
        get phoneNumberField() {return $('input[name="Phone_Number_Base__c"]')}
        get useCaseField() {return $('textarea[name="tempFormOpenText"]')}
        get iWantToBookcheckBox() {return $('input[type="checkbox"]')}
        get submitBtn() {return $('button[type="submit"]')}
        get successMessage() {return $('[class="c-PJLV"]')}
        
        
             
                async fillFirstNameField() {
                await this.firstNameField.setValue(faker.person.firstName());   
             }  
                async fillLastNameField() { 
                await this.lastNameField.setValue(faker.person.lastName()); 
              }
                async fillEmailField() {
                await this.emailField.setValue(faker.internet.email());   
              }
                async fillPhoneNumberField() {
                await this.phoneNumberField.setValue(faker.number.int({ min: 380960000000, max: 380969999999 }));   
              }
                async fillUseCaseField() {
                await this.useCaseField.setValue(faker.lorem.sentences(2));   
              }
                async clickOnIWantToBookcheckBox() {
                await this.iWantToBookcheckBox.click();   
              }
                async clickOnSubmitBtn() {  
                await this.submitBtn.click();
              }
                async getCurrentUrl() {
                return await browser.getUrl();  
              }
                async getSuccessMessageText() {
                await this.successMessage.getText();
              }

              
             

    }


export default new landingPage()