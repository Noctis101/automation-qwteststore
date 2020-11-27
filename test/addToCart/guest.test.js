/**
 * NOTE: To run specifically, ENV=<environment> npm run test -- --<reporter> ./test/<testFileName>
**/

let homePage = require('../../pages/home.page');
let cart = require('../../pages/cart.page');

describe('Add To Cart - Guest Test Cases', function() {

    it('should add one (1) item to Cart', () => {
        browser.url(`${browser.options.baseUrl}`)
        homePage.clickProduct(1)
        homePage.addItem()
    });

    it('should multiple items to Cart', () => {
        browser.url(`${browser.options.baseUrl}`)
        homePage.clickProduct(2)
        homePage.addItem()
        homePage.clickHomeButton()
        homePage.clickProduct(3)
        homePage.addItem()
    });

    it('should add one (1) item to Cart multiple times', () => {
        browser.url(`${browser.options.baseUrl}`)
        homePage.clickProduct(4)
        homePage.addItem()
        homePage.clickHomeButton()
        homePage.clickProduct(4)
        homePage.addItem()
    });

    it('should remove one (1) item from Cart', () => {

        /**
         * browser.url(`${browser.options.baseUrl}`)
         * uncomment when running this only
        */

        homePage.clickMenuButton(3)
        cart.removeItem()
    });

    it('should remove all items from Cart', () => {

        /**
         * browser.url(`${browser.options.baseUrl}`)
         * uncomment when running this only
        */

        homePage.clickMenuButton(3)
        cart.removeAllItems()
    });
});