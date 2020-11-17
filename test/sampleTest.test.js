/**
 * NOTE: To run specifically, ENV=<environment> npm run test -- --<reporter> ./test/<testFileName>
**/

homePage = require('../pages/home.page')

describe('Sample Test - Go To Sign Up Page', function() {
    it('should take you to the sign up page', () => {
        browser.url(`${browser.options.baseUrl}`)
        homePage.clickMenuButton(1)
        browser.pause(3000)
    });
});