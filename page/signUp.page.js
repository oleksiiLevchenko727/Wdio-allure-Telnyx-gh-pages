import { faker } from '@faker-js/faker';


class signUpPage {

        get signUpBtn() {return $$('a[href="/sign-up"]')}
        get emailField() {return $('#email')}
        get firstNameField() {return $('#first_name')}
        get lastNameField() {return $('#last_name')}
        get passwordField() {return $('#password')} 
        get termsAndConditionsCheckbox() {return $('#terms_and_conditions')}
        get subscriptionCheckbox() {return $('#subscription_opt_in')}
        get submitBtn() {return $('[aria-label="signup-form"] [type="submit"]')}
        get errorMessage() {return $('[class="c-UUKrH c-UUKrH-kDyeyw-type-error"]')}
        
        
        
             async clickOnSignUpButton () {
                await this.signUpBtn[0].click()
             }
             async setEmailInput() {
                await this.emailField.setValue(faker.internet.email());
             }
             async firstName() {
                await this.firstNameField.setValue(faker.person.firstName());   
             }
              async setLastName() {
                await this.lastNameField.setValue(faker.person.lastName());   
             }
             async setPasswordInput() {
                await this.passwordField.setValue(`${'AseG$%390DFsdf'}`+ faker.internet.password({ length: 10, memorable: true }));   
             }
             async clickOnTermsAndConditionsCheckbox() {
                await this.termsAndConditionsCheckbox.click();   
             }
             async clickOnSubscriptionCheckbox() {  
                await this.subscriptionCheckbox.click();
             }
             async clickOnSubmitButton() {
                await this.submitBtn.scrollIntoView();
                await this.submitBtn.click();
             }
            async getErrorMessageText() {
                return await this.errorMessage.getText();   
             }

    }


export default new signUpPage()