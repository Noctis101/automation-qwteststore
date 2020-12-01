/**
 * NOTE: To run specifically, ENV=<environment> npm run test -- --<reporter> ./test/<appropriate path to file>
**/

let loginPage = require('../../pages/login.page');
let homePage = require('../../pages/home.page');
let cart = require('../../pages/cart.page');
let loginData = require('../../data/loginData');
let paymentInfo = require('../../data/paymentInfo');

describe('User Checkout Test Case', function() {

    it('should login, add items to Cart and checkout', () => {
        browser.url(`${browser.options.baseUrl}`)
        homePage.clickMenuButton(2)
        loginPage.enterEmail(loginData.email)
        loginPage.enterPassword(loginData.password)
        loginPage.clickLoginButton()
        homePage.clickHomeButton()
        homePage.clickProduct(1)
        homePage.addItem()
        homePage.clickHomeButton()
        homePage.clickProduct(2)
        homePage.addItem()
        homePage.clickHomeButton()
        homePage.clickProduct(3)
        homePage.addItem()
        cart.checkout()
        cart.checkoutModal.waitForDisplayed()
        browser.switchToFrame(cart.checkoutModal)
        cart.enterCheckoutEmail(paymentInfo.email)
        cart.enterCheckoutName(paymentInfo.name)
        cart.enterStreet(paymentInfo.street)
        cart.enterCity(paymentInfo.city)
        cart.clickSubmit()
        cart.enterCardNumber(paymentInfo.cardNumber)
        cart.enterExpiry(paymentInfo.expiry)
        cart.enterCvc(paymentInfo.cvc)
        cart.clickSubmit()
        assert.equal("Congratulations. Your order and payment has been accepted.", cart.getSuccessMessage())
    });
});