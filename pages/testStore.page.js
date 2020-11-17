/**
 * This will go to the landing page of the QW Test Store
 */

class Home {

    menuButton(index) { return $(`div.right.menu a:nth-child(${index})`) }
    get email() { return $('#email') }
    get password() { return $('#password') }
    get loginButton() { return $('.ui.segment button')}
    get emailRequired() { return $('//p[text()="Email address is required"]') }
    get passwordRequired() { return $('//p[text()="Password is required"]') }
    get discreteError() { return $('//p[text()="Please check your login details and try again."]') }

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
}

module.exports = new Home();