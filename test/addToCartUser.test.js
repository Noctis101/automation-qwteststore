/**
 * NOTE: To run specifically, ENV=<environment> npm run test -- --<reporter> ./test/<testFileName>
**/

testStore = require('../pages/testStore.page');
loginData = require('../data/loginData');

describe('Add To Cart - User Test Cases', function() {

    it('should add one (1) item to Cart', () => {
        browser.url(`${browser.options.baseUrl}`)
        testStore.clickMenuButton(2)
        testStore.enterEmail(loginData.email)
        testStore.enterPassword(loginData.password)
        testStore.clickLoginButton()
        testStore.clickHomeButton()
        testStore.clickProduct(1)
        testStore.addItem()
    });

    it('should multiple items to Cart', () => {
        browser.url(`${browser.options.baseUrl}`)
        testStore.clickProduct(2)
        testStore.addItem()
        testStore.clickHomeButton()
        testStore.clickProduct(3)
        testStore.addItem()
    });

    it('should add one (1) item to Cart multiple times', () => {
        browser.url(`${browser.options.baseUrl}`)
        testStore.clickProduct(4)
        testStore.addItem()
        testStore.clickHomeButton()
        testStore.clickProduct(4)
        testStore.addItem()
    });

    it('should go to product link from cart', () => {
        browser.url(`${browser.options.baseUrl}`)
        testStore.clickMenuButton(3)
        testStore.clickProductFromCart(1)
    });

    it('should have a consistent description for product', () => {
        browser.url(`${browser.options.baseUrl}`)
        testStore.clickMenuButton(3)

        testStore.clickProductFromCart(1)
    });

    it('should have a consistent price for product', () => {
        browser.url(`${browser.options.baseUrl}`)
        testStore.clickMenuButton(3)

        testStore.clickProductFromCart(1)
    });

    it('should logout, sign in and see same items in cart', () => {
        browser.url(`${browser.options.baseUrl}`)
        testStore.clickMenuButton(3)
        testStore.clickProductFromCart(1)
    });

    it('should remove one (1) item from Cart', () => {
        testStore.clickMenuButton(3)
        testStore.removeItem()
    });

    it('should remove all items from Cart', () => {
        testStore.clickMenuButton(3)
        testStore.removeAllItems()
    });
});