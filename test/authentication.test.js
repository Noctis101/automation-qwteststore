/**
 * NOTE: To run specifically, ENV=<environment> npm run test -- --<reporter> ./test/<appropriate path to file>
**/

let homePage = require('../pages/home.page');
let loginPage = require('../pages/login.page');
let loginData = require('../data/loginData');

describe('Authentication Test Cases', function() {

    it('should not login and show both required error messages', () => {
        browser.url(`${browser.options.baseUrl}`)
        homePage.clickMenuButton(2)
        loginPage.clickLoginButton()
        assert.equal("Email address is required", loginPage.getEmailErrorMessage())
        assert.equal("Password is required", loginPage.getPasswordErrorMessage())
    });

    it('should not login and show sign in error message (invalid email)', () => {
        browser.url(`${browser.options.baseUrl}`)
        homePage.clickMenuButton(2)
        loginPage.enterEmail(loginData.invalidEmail)
        loginPage.enterPassword(loginData.password)
        loginPage.clickLoginButton()
        assert.equal("Please check your login details and try again.", loginPage.getDiscreteError())
    });

    it('should not login and show password required error message', () => {
        browser.url(`${browser.options.baseUrl}`)
        homePage.clickMenuButton(2)
        loginPage.enterEmail(loginData.email)
        loginPage.clickLoginButton()
        assert.equal("Password is required", loginPage.getPasswordErrorMessage())
    });

    it('should not login and show sign in error message (invalid password)', () => {
        browser.url(`${browser.options.baseUrl}`)
        homePage.clickMenuButton(2)
        loginPage.enterEmail(loginData.email)
        loginPage.enterPassword(loginData.invalidPassword)
        loginPage.clickLoginButton()
        assert.equal("Please check your login details and try again.", loginPage.getDiscreteError())
    });

    it('should login and redirect to recent orders page', () => {
        browser.url(`${browser.options.baseUrl}`)
        homePage.clickMenuButton(2)
        loginPage.enterEmail(loginData.email)
        loginPage.enterPassword(loginData.password)
        loginPage.clickLoginButton()
        assert.equal(`${browser.options.baseUrl}/myaccount/`, browser.getUrl())
    });
});