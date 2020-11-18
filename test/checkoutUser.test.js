/**
 * NOTE: To run specifically, ENV=<environment> npm run test -- --<reporter> ./test/<testFileName>
**/

testStore = require('../pages/testStore.page');
loginData = require('../data/loginData');
paymentInfo = require('../data/paymentInfo');

describe('User Checkout Test Case', function() {

    it('should login, add items to Cart and checkout', () => {
        browser.url(`${browser.options.baseUrl}`)
        testStore.clickMenuButton(2)
        testStore.enterEmail(loginData.email)
        testStore.enterPassword(loginData.password)
        testStore.clickLoginButton()
        testStore.clickHomeButton()
        testStore.clickProduct(1)
        testStore.addItem()
        testStore.clickHomeButton()
        testStore.clickProduct(2)
        testStore.addItem()
        testStore.clickHomeButton()
        testStore.clickProduct(3)
        testStore.addItem()
        testStore.checkout()
        testStore.enterCheckoutEmail(paymentInfo.email)
        testStore.enterCheckoutName(paymentInfo.name)
        testStore.enterStreet(paymentInfo.street)
        testStore.enterCity(paymentInfo.city)
        testStore.clickSubmit()
        testStore.enterCardNumber(paymentInfo.cardNumber)
        testStore.enterExpiry(paymentInfo.expiry)
        testStore.enterCvc(paymentInfo.cvc)
        testStore.clickSubmit()
        assert.equal("Congratulations. Your order and payment has been accepted.", testStore.getSuccessMessage())
    });
});