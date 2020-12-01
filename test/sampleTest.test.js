/**
 * NOTE: To run specifically, ENV=<environment> npm run test -- --<reporter> ./test/<appropriate path to file>
**/

let homePage = require('../pages/home.page')
let loginPage = require('../pages/home.page')

describe('Sample Test - Add one (1) item to cart', function() {
    it('should add one item to cart', () => {
        browser.url(`${browser.options.baseUrl}`)
        homePage.clickMenuButton(2)
        loginPage.enterEmail(loginData.email)
        loginPage.enterPassword(loginData.password)
        loginPage.clickLoginButton()
        homePage.clickHomeButton()
        homePage.clickProduct(1)
        homePage.addItem()
    });
});