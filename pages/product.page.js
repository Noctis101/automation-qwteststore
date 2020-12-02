/**
 * This references elements found on the Product Pages of the QW Test Store
 */

class Product {
    
    get name() { return $('.item .content .header') }
    get price() { return $(`.ui.text.container div:nth-child(2) p:nth-child(1)`)}
    get description() { return $(`.ui.text.container div:nth-child(2) p:nth-child(2)`) }

    /**
     * Retrieves the name of the product
     */
    getProductName() {
        this.name().waitForDisplayed();
        this.name().getText();
    }

    /**
     * Retrieves the price of the product
     */
    getProductPrice() {
        this.price().waitForDisplayed();
        this.price().getText();
    }

    /**
     * Retrieves the description of the product
     */
    getProductDescription() {
        this.description().waitForDisplayed();
        this.description().getText();
    }
}

module.exports = new Product();