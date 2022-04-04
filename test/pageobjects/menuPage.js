const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MenuPage extends Page {
    /**
     * define selectors using getter methods
     */
    get cart(){
        return $("//a[@id='cartur']")
    };

    async clickCart() {
        await this.clickOnWebElement(this.cart);
    }
}

module.exports = new MenuPage();