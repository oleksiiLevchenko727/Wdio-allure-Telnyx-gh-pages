import navigationPage from '../../page/navigation.page.js';
import signUpPage from '../../page/signUp.page.js';
import contactUsPage from '../../page/contactUs.page.js';
import shopPage from '../../page/shop.page.js';
import searchOnSupportCenterPage from '../../page/searchFieldOnSupportPage.page.js';
import loginPage from '../../page/login.page.js';
import landingPage from '../../page/landing.page.js';

describe("Telnyx's headers", () => {
  before('Go to github website', async () => {
    await browser.url('https://telnyx.com/');
  });

  it('TC-001 Should check telnyxs Products Voice Ai Agents page from navigation memu', async () => {
    await navigationPage.clickOnProductsButton();
    await navigationPage.clickOnProductsVoiceAiButton();
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain('/products/voice-ai-agents');
    await browser.back();
  });
  it('TC-002 Should check telnyxs Products RSC page from navigation memu', async () => {
    await navigationPage.clickOnProductsButton();
    await navigationPage.clickOnProductsRcsButton();
    const currentUrlRcs = await browser.getUrl();
    expect(currentUrlRcs).toContain('/products/rcs');
    await browser.back();
  });

  it('TC-003 Should check telnyxs Solutions Healthcare page from navigation memu', async () => {
    await navigationPage.clickOnSolutionsButton();
    await navigationPage.clickOnHealthcareLinkButton();
    const currentUrlHealthcare = await browser.getUrl();
    expect(currentUrlHealthcare).toContain('/solutions/healthcare');
    await browser.back();
  });

  it('TC-004 Should check telnyxs Solutions Logistics And Transportation page from navigation memu', async () => {
    await navigationPage.clickOnSolutionsButton();
    await navigationPage.clickOnLogisticsAndTransportationButton();
    const currentUrlLogistics = await browser.getUrl();
    expect(currentUrlLogistics).toContain(
      '/solutions/logistics-and-transportation',
    );
    await browser.back();
  });

  it('TC-005 Should check telnyxs Pricing Conversational Ai page from navigation memu', async () => {
    await navigationPage.clickOnPricingButton();
    await navigationPage.clickOnConversetionalAiButton();
    const currentUrlConversetionalAi = await browser.getUrl();
    expect(currentUrlConversetionalAi).toContain('/pricing/conversational-ai');
    await browser.back();
  });
  it('TC-006 Should check telnyxs Pricing Messaging page from navigation memu', async () => {
    await navigationPage.clickOnPricingButton();
    await navigationPage.clickOnPricingMessagingButton();
    const currentUrlPricingMessaging = await browser.getUrl();
    expect(currentUrlPricingMessaging).toContain('/pricing/messaging');
    await browser.back();
  });

  it('TC-007 Should check telnyxs Resources Events page from navigation memu', async () => {
    await navigationPage.clickOnWhyTelnyxButton();
    await navigationPage.clickOnOurNetworkButton();
    const currentUrlOurNetwork = await browser.getUrl();
    expect(currentUrlOurNetwork).toContain('/our-network');
    await browser.back();
  });

  it('TC-008 Should check telnyxs Resources Events page from navigation memu', async () => {
    await navigationPage.clickOnWhyTelnyxButton();
    await navigationPage.clickOnGlobalCoverageButton();
    const currentUrlGlobalCoverage = await browser.getUrl();
    expect(currentUrlGlobalCoverage).toContain('/global-coverage');
    await browser.back();
  });

  it('TC-009 Should check telnyxs Resources Templates page from navigation memu', async () => {
    await navigationPage.clickOnResourcesButton();
    await navigationPage.clickOnAiTemplatesButton();
    const currentUrlAiTemplates = await browser.getUrl();
    expect(currentUrlAiTemplates).toContain('/templates');
    await browser.back();
  });

  it('TC-010 Should check telnyxs Developers Developers Docs page from navigation memu', async () => {
    await navigationPage.clickOnDevelopersButton();
    await navigationPage.clickOnDevDocsButton();
    const currentUrlDevDocs = await browser.getUrl();
    expect(currentUrlDevDocs).toContain('developers.telnyx.com');
    await browser.back();
  });

  it('TC-011 Should check telnyxs Developers Integrations page from navigation memu', async () => {
    await navigationPage.clickOnDevelopersButton();
    await navigationPage.clickOnIntegrationsButton();
    const currentUrlIntegrations = await browser.getUrl();
    expect(currentUrlIntegrations).toContain('telnyx.com/resources');
    await browser.back();
  });

  it('TC-012 Should check telnyxs Sing Up field with valid credentials', async () => {
    await signUpPage.clickOnSignUpButton();
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain('/sign-up');
    await signUpPage.setEmailInput();
    await signUpPage.firstName();
    await signUpPage.setLastName();
    await signUpPage.setPasswordInput();
    await signUpPage.clickOnTermsAndConditionsCheckbox();
    await signUpPage.clickOnSubscriptionCheckbox();
    await signUpPage.clickOnSubmitButton();
    const mainUrl = await browser.getUrl();
    const errorMessageText = await signUpPage.getErrorMessageText();
    expect(mainUrl).toContain('https://telnyx.com/') ||
      expect(errorMessageText).toContain(
        'That email and password combination is not valid, or your browser could not be authenticated. Please try again.',
      );
    await browser.back();
  });

  it('TC-013 Should check telnyxs Log In field from Contact Us page with valid credentials', async () => {
    await contactUsPage.clickOnContactUsBtn();
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain('/contact-us');
    await contactUsPage.selectRequestType();
    await contactUsPage.setFirstNameInput();
    await contactUsPage.setLastNameInput();
    await contactUsPage.setEmailInput();
    await contactUsPage.selectCountryNumber();
    await contactUsPage.clickOnUkraineNumber();
    await contactUsPage.fillPhoneNumber();
    await contactUsPage.fillWebsite();
    await contactUsPage.fillText();
    await contactUsPage.fillAdditonalText();
    await contactUsPage.checkBoxClick();
    await contactUsPage.continue();
    const successMessageText = await contactUsPage.getsuccessfullMessageText();
    expect(successMessageText).toHaveText('Thank you.');
    await browser.back();
  });

  it('TC-014 Should buy the Telnyx Classic Hat', async () => {
    await browser.navigateTo('https://shop.telnyx.com/');
    const currenShopUrl = await browser.getUrl();
    expect(currenShopUrl).toContain('shop.telnyx.com');
    await shopPage.clickOnAddToCartBtn();
    await shopPage.clickOnCheckoutBtn();
    await shopPage.fillEmailField();
    await shopPage.fillFirstNameField();
    await shopPage.fillLastNameField();
    await shopPage.fillAddressField();
    await shopPage.fillApartmentField();
    await shopPage.fillCityField();
    await shopPage.fillPostalCodeField();
    await shopPage.fillPhoneNumberField();
    await shopPage.clickOnShopPayMethod();
    await shopPage.clickOnPayNowBtn();
    await browser.pause(6000);
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain('shop.app/checkout/');
    const totalAmountText = await shopPage.getTotalAmountText();
    expect(totalAmountText).toHaveText('Total');
  });

  it('TC-015 Should check search field on Support Center', async () => {
    await browser.navigateTo('https://support.telnyx.com/en/');
    const currenShopUrl = await browser.getUrl();
    expect(currenShopUrl).toContain('/support.telnyx.com/en/');
    await searchOnSupportCenterPage.setText();
    await searchOnSupportCenterPage.clickOnFirstResult();
    const assertionText = await searchOnSupportCenterPage.getAssertionText();
    expect(assertionText).toHaveText('HD Voice - Number Feature');
  });

  it('TC-016 Should Log In on Telnyxs portal', async () => {
    await browser.navigateTo('https://portal.telnyx.com/#/login/sign-in');
    await loginPage.setEmailInput();
    await loginPage.setPasswordInput();
  });

  it('TC-017 Should try to reset own passwornd by email', async () => {
    await browser.navigateTo('https://portal.telnyx.com/#/login/sign-in');
    await loginPage.clickOnForgotPassword();
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain('/login/password-reset');
    await loginPage.setResetPasswordByEmail();
    await loginPage.clickOnResetPasswordSubmitBtn();
    const resetConfirmationMessageText =
      await loginPage.getResetConfirmationMessageText();
    expect(resetConfirmationMessageText).toContain(
      'We have accepted your password reset request.',
    );
  });

  it('TC-018 Should Log In by invalid company Email', async () => {
    await browser.navigateTo('https://portal.telnyx.com/#/login/sign-in');
    await loginPage.clickOnSingleSignOnBtn();
    await loginPage.setEmailInput();
    await loginPage.clickOnResetPasswordSubmitBtn();
    const loginErrorMessageText = await loginPage.getLoginErrorMessageText();
    expect(loginErrorMessageText).toContain(
      'The requested resource or URL could not be found.',
    );
    await browser.back();
  });

  it('TC-019 Should Log In by company name', async () => {
    await browser.navigateTo('https://portal.telnyx.com/#/login/sign-in');
    await loginPage.clickOnSingleSignOnBtn();
    await loginPage.clickOnCompanyName();
    await loginPage.setCompanyName();
    await loginPage.clickOnResetPasswordSubmitBtn();
    const loginErrorMessageText = await loginPage.getLoginErrorMessageText();
    expect(loginErrorMessageText).toContain(
      'The requested resource or URL could not be found.',
    );
  });

  it('TC-020 Should fill random credentials into Stop by booth C32 field', async () => {
    await browser.navigateTo(
      'https://telnyx.com/landing/telnyx-ucx-london-2025',
    );
    await landingPage.fillFirstNameField();
    await landingPage.fillLastNameField();
    await landingPage.fillEmailField();
    await landingPage.fillPhoneNumberField();
    await landingPage.fillUseCaseField();
    await landingPage.clickOnIWantToBookcheckBox();
    await landingPage.clickOnSubmitBtn();
    await browser.pause(2000);
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain('/telnyx.com/thank-you');
  });
});

