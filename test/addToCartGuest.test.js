/**
 * NOTE: To run specifically, ENV=<environment> npm run test -- --<reporter> ./test/<testFileName>
**/

testStore = require('../pages/testStore.page');
loginData = require('../data/loginData');

describe('Add To Cart - Guest Test Cases', function() {

    it('should add one (1) item to Cart', () => {
        browser.url(`${browser.options.baseUrl}`)
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

    it('should remove one (1) item from Cart', () => {

        /**
         * browser.url(`${browser.options.baseUrl}`)
         * uncomment when running this only
        */

        testStore.clickMenuButton(3)
        testStore.removeItem()
    });

    it('should remove all items from Cart', () => {

        /**
         * browser.url(`${browser.options.baseUrl}`)
         * uncomment when running this only
        */

        testStore.clickMenuButton(3)
        testStore.removeAllItems()
    });
});