/**
 * This will go to the landing page of the QW Test Store
 */

class Home {
    menuButton(index) { return $(`div.right.menu a:nth-child(${index})`) }

    /**
     * Clicks on one of the right menu buttons based on the index provided
     * @param {Number} index the index of the element 
     */
    clickMenuButton(index) {
        this.menuButton(index).waitForDisplayed();
        this.menuButton(index).click();
    }
}

module.exports = new Home();