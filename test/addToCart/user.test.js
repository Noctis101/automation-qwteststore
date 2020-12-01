/**
 * NOTE: To run specifically, ENV=<environment> npm run test -- --<reporter> ./test/<appropriate path to file>
**/

let homePage = require('../../pages/home.page');
let loginPage = require('../../pages/login.page');
let loginData = require('../../data/loginData');
let cart = require('../../pages/cart.page');

describe('Add To Cart - User Test Cases', function() {

    it.only('should add one (1) item to Cart', () => {
        browser.url(`${browser.options.baseUrl}`)
        homePage.clickMenuButton(2)
        loginPage.enterEmail(loginData.email)
        loginPage.enterPassword(loginData.password)
        loginPage.clickLoginButton()
        homePage.clickHomeButton()
        homePage.clickProduct(1)
        homePage.addItem()
        homePage.clickMenuButton(3)
        console.log(cart.getProductName(1))
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

    it('should go to product link from cart', () => {
        browser.url(`${browser.options.baseUrl}`)
        homePage.clickMenuButton(3)
        cart.getProductName(1)
        let productName = cart.clickProductFromCart(1)
        cart.clickProductFromCart(1)
    });

    it('should have a consistent description for product', () => {
        browser.url(`${browser.options.baseUrl}`)
        homePage.clickMenuButton(3)

        cart.clickProductFromCart(1)
    });

    it('should have a consistent price for product', () => {
        browser.url(`${browser.options.baseUrl}`)
        homePage.clickMenuButton(3)

        cart.clickProductFromCart(1)
    });

    it('should logout, sign in and see same items in cart', () => {
        browser.url(`${browser.options.baseUrl}`)
        homePage.clickMenuButton(3)
        
        homePage.clickMenuButton(2)
        loginPage.enterEmail(loginData.email)
        loginPage.enterPassword(loginData.password)
        loginPage.clickLoginButton()
        homePage.clickMenuButton(3)

    });

    it('should remove one (1) item from Cart', () => {
        homePage.clickMenuButton(3)
        cart.removeItem()
    });

    it('should remove all items from Cart', () => {
        homePage.clickMenuButton(3)
        cart.removeAllItems()
    });
});