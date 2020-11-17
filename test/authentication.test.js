/**
 * NOTE: To run specifically, ENV=<environment> npm run test -- --<reporter> ./test/<testFileName>
**/

testStore = require('../pages/testStore.page');
loginData = require('../data/loginData');

describe('Authentication Test Cases', function() {

    it('should not login and show both required error messages', () => {
        browser.url(`${browser.options.baseUrl}`)
        testStore.clickMenuButton(2)
        testStore.clickLoginButton()
        browser.pause(2000)
        assert.equal("Email address is required", testStore.getEmailErrorMessage())
        assert.equal("Password is required", testStore.getPasswordErrorMessage())
    });

    it('should not login and show sign in error message (invalid email)', () => {
        browser.url(`${browser.options.baseUrl}`)
        testStore.clickMenuButton(2)
        testStore.enterEmail(loginData.invalidEmail)
        testStore.enterPassword(loginData.password)
        testStore.clickLoginButton()
        browser.pause(2000)
        assert.equal("Please check your login details and try again.", testStore.getDiscreteError())
    });

    it('should not login and show password required error message', () => {
        browser.url(`${browser.options.baseUrl}`)
        testStore.clickMenuButton(2)
        testStore.enterEmail(loginData.email)
        testStore.clickLoginButton()
        browser.pause(2000)
        assert.equal("Password is required", testStore.getPasswordErrorMessage())
    });

    it('should not login and show sign in error message (invalid password)', () => {
        browser.url(`${browser.options.baseUrl}`)
        testStore.clickMenuButton(2)
        testStore.enterEmail(loginData.email)
        testStore.enterPassword(loginData.invalidPassword)
        testStore.clickLoginButton()
        browser.pause(2000)
        assert.equal("Please check your login details and try again.", testStore.getDiscreteError())
    });

    it('should login and redirect to recent orders page', () => {
        browser.url(`${browser.options.baseUrl}`)
        testStore.clickMenuButton(2)
        testStore.enterEmail(loginData.email)
        testStore.enterPassword(loginData.password)
        testStore.clickLoginButton()
        browser.pause(3000)
        assert.equal(`${browser.options.baseUrl}/myaccount/`, browser.getUrl())
    });
});