import { faker } from '@faker-js/faker';

class shopPage {

        get shopBtn() {return $('a[href="https://shop.telnyx.com/"]')}
        get productsList() {return $('.collection__description')}
        get addToCartHatBtn() {return $('#quick-add-template--14828910772302__featured-collection-06960027533390-submit')}
        get checkoutBtn() {return $('#CartDrawer-Checkout')}
        get emailField() {return $('[placeholder="Email"]')}
        get selectCountry() {return $('select[name="countryCode"]')}
        get firstNameField() {return $('[placeholder="First name"]')}
        get lastNameField() {return $('[placeholder="Last name"]')}
        get address() {return $('[placeholder="Address"]')}
        get apartment() {return $('[placeholder="Apartment, suite, etc. (optional)"]')}
        get city() {return $('[placeholder="City"]')}
        get postalCode() {return $('[placeholder="Postal code"]')}
        get phoneNumberField() {return $('[placeholder="Phone"]')} 
        get shopPayMethod() {return $('#basic-SHOPIFY_INSTALLMENTS')}
        get payNowBtn() {return $('#checkout-pay-button')}
        get totalAmount() {return $('div[role="rowheader"][class="_1x41w3p7"]')}
        
        
             async clickOnshopLink () {
               await this.shopBtn.scrollIntoView();
               await this.shopBtn.click()
             }
             async scrollToProductsList() {
               await this.productsList.isDisplayed();
             }  

             async clickOnAddToCartBtn() {   
               await this.addToCartHatBtn.click();
             }
             async clickOnCheckoutBtn() {
               await this.checkoutBtn.click();   
             }
             async fillEmailField() {
               await this.emailField.setValue(faker.internet.email());   
             }
             async selectUsaCountry() {
               await this.selectCountry.selectByAttribute('value', 'UA');   
             }
             async fillFirstNameField() {
               await this.firstNameField.setValue(faker.person.firstName());   
             }
              async fillLastNameField() { 
                await this.lastNameField.setValue(faker.person.lastName()); 
              }
              async fillAddressField() {
                await this.address.setValue(faker.location.streetAddress());   
              }
              async fillApartmentField() {
                await this.apartment.setValue(faker.location.secondaryAddress());   
              }
              async fillCityField() {
                await this.city.setValue(faker.location.city());   
              }
              async fillPostalCodeField() {
                await this.postalCode.setValue(faker.number.int({ min: 50000, max: 59999 }));   
              }
                async fillPhoneNumberField() {
                await this.phoneNumberField.setValue(faker.number.int({ min: 380960000000, max: 380969999999 }));   ///
              }
                async clickOnShopPayMethod() {
                await this.shopPayMethod.click();   
              }
              async clickOnPayNowBtn() {
                await this.payNowBtn.click();   
              }

              async getTotalAmountText() {
                await this.totalAmount.waitForDisplayed();
                await this.totalAmount.getText();   
              } 
    }


export default new shopPage()