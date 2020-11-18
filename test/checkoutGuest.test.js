/**
 * NOTE: To run specifically, ENV=<environment> npm run test -- --<reporter> ./test/<testFileName>
**/

testStore = require('../pages/testStore.page');
loginData = require('../data/loginData');

describe('Guest Checkout Test Case', function() {

    it('should add items to Cart and checkout', () => {
        browser.url(`${browser.options.baseUrl}`)
        testStore.clickProduct(1)
        testStore.addItem()
        testStore.clickHomeButton()
        testStore.clickProduct(2)
        testStore.addItem()
        testStore.clickHomeButton()
        testStore.clickProduct(3)
        testStore.addItem()
        testStore.clickMenuButton(3)
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