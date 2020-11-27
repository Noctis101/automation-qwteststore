/**
 * This references elements found on the Landing Page of the QW Test Store
 */

class Home {

    menuButton(index) { return $(`.right.menu a:nth-child(${index})`) }
    get homeButton() { return $('//a[text()="QW Test Store"]') }
    product(index) { return $(`.ui.stackable.two.cards a:nth-child(${index})`) }
    get addToCart() { return $('.ui.action.input button')}

    /**
     * Clicks on one of the right menu buttons based on the index provided
     * @param {Number} index the index of the element 
     */
    clickMenuButton(index) {
        this.menuButton(index).waitForDisplayed();
        this.menuButton(index).click();
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
}

module.exports = new Home();