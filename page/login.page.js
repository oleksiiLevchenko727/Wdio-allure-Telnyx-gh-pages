import { faker } from '@faker-js/faker';


class loginPage {

        get emailField() {return $('input[name="email"]')}
        get passwordField() {return $('input[name="password"]')}
        get submitBtn() {return $('[aria-label="loginForm"] [type="submit"]')}
        get forgotPasswordLink() {return $('a[href="https://portal.telnyx.com/#/login/password-reset"]')}
        get resetPasswordByEmailField() {return $('input[placeholder="Enter email"]')}
        get resetPasswordSubmitBtn() {return $('button[type="submit"]')}
        get resetConfirmationMessage() {return $('[class="MuiBox-root frontend-customer-portal-1qm1lh"]')}
        get singleSignOnBtn() {return $('button[role="tab"][aria-selected="false"]')}  
        get loginErrorMessage() {return $('[role="alert"]')}
        get companyNameBtn() {return $('[role="button"][target="_self"]')}
        get companyNameField() {return $('input[name="short_name"]')}
        get emailErrorMessage() {return $('[data-testid="login.signin.message"]')}
        
             async setEmailInput () {
                await this.emailField.setValue(faker.internet.email())
             }
             async setPasswordInput() {
                await this.passwordField.setValue(`${'AseG$%390DFsdf'}`+ faker.internet.password({ length: 10, memorable: true }));   
             }
             async clickOnLoginButton() {
                await this.submitBtn.setValue(faker.person.firstName());   
             }
             async clickOnForgotPassword() {
                await this.forgotPasswordLink.click();
             }
             async getResetPasswordUrl() {
                await browser.getUrl();
             }
             async setResetPasswordByEmail() {
                await this.resetPasswordByEmailField.setValue(faker.internet.email());
             }
             async clickOnResetPasswordSubmitBtn() {     
                await this.resetPasswordSubmitBtn.click();
            }
            async getResetConfirmationMessageText() {
                return await this.resetConfirmationMessage.getText();   
            }
            async clickOnSingleSignOnBtn() {    
                await this.singleSignOnBtn.click();   
            }
            async clickOnCompanyName() {
                await this.companyNameBtn.click();
            }
            async setCompanyName () {
                await this.companyNameField.setValue(faker.company.name())
             }
            async getLoginErrorMessageText() {   
                return await this.emailErrorMessage.getText();
            }

              
             

    }


export default new loginPage()