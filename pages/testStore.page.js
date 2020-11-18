/**
 * This will go to the landing page of the QW Test Store
 */

class Home {

    menuButton(index) { return $(`.right.menu a:nth-child(${index})`) }
    get email() { return $('#email') }
    get password() { return $('#password') }
    get loginButton() { return $('.ui.segment button')}
    get emailRequired() { return $('//p[text()="Email address is required"]') }
    get passwordRequired() { return $('//p[text()="Password is required"]') }
    get discreteError() { return $('//p[text()="Please check your login details and try again."]') }
    get homeButton() { return $('//a[text()="QW Test Store"]') }
    product(index) { return $(`.ui.stackable.two.cards a:nth-child(${index})`) }
    get addToCart() { return $('.ui.action.input button')}
    get removeOne() { return $('.item .content button')}
    get removeAll() { return $$('.item .content button') }

    productFromCart(index) { return $(`.item .content .header a:nth-child(${index})`)}
    get descriptionInCart() { return $('.item .content .description') }
    get priceInCart() { return $('.item .content .meta')}
    
    get checkoutButton() { return $('.ui.large.clearing.segment button') }
    get checkoutEmail() { return $('//input [@ placeholder="Email"]') }
    get checkoutName() { return $('//input [@ placeholder="Name"]') }
    get street() { return $('//input [@ placeholder="Street"]') }
    get city() { return $('//input [@ placeholder="City"]')}
    get submit() { return $('//button[@ type="submit"]')}
    get cardNumber() { return $('//input[@ placeholder="Card number"]') }
    get expiry() { return $('//input[@ placeholder="MM / YY"]') }
    get cvc() { return $('//input[@ placeholder="CVC"]') }
    get successMessage() { return $('.ui.success.message p')}

    /**
     * Clicks on one of the right menu buttons based on the index provided
     * @param {Number} index the index of the element 
     */
    clickMenuButton(index) {
        this.menuButton(index).waitForDisplayed();
        this.menuButton(index).click();
    }

    /**
     * Enters the text passed into the email field
     * @param {String} text username to be entered
     */
    enterEmail(text) {
        this.email.waitForDisplayed();
        this.email.setValue(text);
    }

    /**
     * Enters the text passed into the password field
     * @param {String} text password to be entered 
     */
    enterPassword(text) {
        this.password.waitForDisplayed();
        this.password.setValue(text);
    }

    /**
     * Clicks the login button
     */
    clickLoginButton() {
        this.loginButton.waitForDisplayed();
        this.loginButton.click();
    }

    /**
     * Returns the text of the email required
     * error message
     */
    getEmailErrorMessage() {
        this.emailRequired.waitForDisplayed();
        return this.emailRequired.getText();
    }

    /**
     * Returns the text of the password required
     * erro message
     */
    getPasswordErrorMessage() {
        this.passwordRequired.waitForDisplayed();
        return this.passwordRequired.getText();
    }

    /**
     * Get the discrete login error message
     */
    getDiscreteError() {
        this.discreteError.waitForDisplayed();
        return this.discreteError.getText();
    }

    /**
     * Click the home button
     */
    clickHomeButton() {
        this.homeButton.waitForDisplayed();
        this.homeButton.click();
    }

    /**
     * Goes to product page based on the index given
     * @param {Number} index the index of the element 
     */
    clickProduct(index) {
        this.product(index).waitForDisplayed();
        this.product(index).click();
    }

    /**
     * Adds item to Cart
     */
    addItem() {
        this.addToCart.waitForDisplayed();
        this.addToCart.click();
    }

    /**
     * Checkout with items
     */
    checkout() {
        this.checkoutButton.waitForDisplayed();
        this.checkoutButton.click();
    }

    /**
     * Enters email in checkout window
     * @param {String} text email to be entered 
     */
    enterCheckoutEmail(text) {
        this.checkoutEmail.waitForDisplayed();
        this.checkoutEmail.setValue(text);
    }

    /**
     * Enters name in checkout window
     * @param {String} text name to be entered 
     */
    enterCheckoutName(text) {
        this.checkoutName.waitForDisplayed();
        this.checkoutName.setValue(text);
    }

    /**
     * Enters street in checkout window
     * @param {String} text street to be entered 
     */
    enterStreet(text) {
        this.street.waitForDisplayed();
        this.street.setValue(text);
    }

    /**
     * Enters city in checkout window
     * @param {String} text city to be entered 
     */
    enterCity(text) {
        this.city.waitForDisplayed();
        this.city.setValue(text);
    }

    /**
     * Clicks submit button on checkout window
     */
    clickSubmit() {
        this.submit.waitForDisplayed();
        this.submit.click();
    }

    /**
     * Enters card number in checkout window
     * @param {String} text card number to be entered 
     */
    enterCardNumber(text) {
        this.cardNumber.waitForDisplayed();
        this.cardNumber.setValue(text);
    }

    /**
     * Enters expiry in checkout window
     * @param {String} text expiry to be entered 
     */
    enterExpiry(text) {
        this.expiry.waitForDisplayed();
        this.expiry.setValue(text);
    }

    /**
     * Enters CVC in checkout window
     * @param {String} text CVC to be entered 
     */
    enterCvc(text) {
        this.cvc.waitForDisplayed();
        this.cvc.setValue(text);
    }

    /**
     * Returns the text of the success message
     */
    getSuccessMessage() {
        this.successMessage.waitForDisplayed();
        return this.successMessage.getText();
    }

    /**
     * Goes to product page based on the index given
     * @param {Number} index the index of the element 
     */
    clickProductFromCart(index) {
        this.productFromCart(index).waitForDisplayed();
        this.productFromCart(index).click();
    }

    /**
     * Removes an item from Cart
     */
    removeItem() {
        this.removeOne.waitForDisplayed();
        this.removeOne.click();
    }

    /**
     * Removes all items from Cart
     */
    removeAllItems() {
        this.removeAll.waitForDisplayed();
        this.removeAll.forEach(element => {
            element.click()
        });
    }
}

module.exports = new Home();