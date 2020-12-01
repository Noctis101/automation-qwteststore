/**
 * This references elements found on the Cart Page of the QW Test Store
 */

class Cart {

    productFromCart(index) { return $(`.item .content .header a:nth-child(${index})`)}
    get checkoutButton() { return $('.ui.large.clearing.segment button') }
    get descriptionInCart() { return $('.item .content .description') }
    get priceInCart() { return $('.item .content .meta')}
    get removeOne() { return $('.item .content button') }
    get removeAll() { return $$('.item .content button') }
    get checkoutModal() { return $('iframe.stripe_checkout_app') }
    get checkoutEmail() { return $('//input [@ placeholder="Email"]') }
    get checkoutName() { return $('//input [@ placeholder="Name"]') }
    get street() { return $('//input [@ placeholder="Street"]') }
    get city() { return $('//input [@ placeholder="City"]') }
    get cardNumber() { return $('//input[@ placeholder="Card number"]') }
    get expiry() { return $('//input[@ placeholder="MM / YY"]') }
    get cvc() { return $('//input[@ placeholder="CVC"]') }
    get submit() { return $('//button[@ type="submit"]') }
    get successMessage() { return $('.ui.success.message p') }

    /**
     * Goes to product page based on the index given
     * @param {Number} index the index of the element 
     */
    clickProductFromCart(index) {
        this.productFromCart(index).waitForDisplayed();
        this.productFromCart(index).click();
    }

    /**
     * Retrieves the name of the product at the index given
     * @param {Number} index the index of the element 
     */
    getProductName(index) {
        this.productFromCart(index).waitForDisplayed();
        this.productFromCart(index).getText();
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
        //this.removeAll.waitForDisplayed();
        this.removeAll.forEach(element => {
            element.click()
        });
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
     * Clicks submit button on checkout window
     */
    clickSubmit() {
        this.submit.waitForDisplayed();
        this.submit.click();
    }

    /**
     * Returns the text of the success message
     */
    getSuccessMessage() {
        this.successMessage.waitForDisplayed();
        return this.successMessage.getText();
    }
}

module.exports = new Cart();