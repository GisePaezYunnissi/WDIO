const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class StoreHomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get laptopsCategory(){
        return $("(//a[normalize-space()='Laptops'])")
    }
    //Click en categoría laptop
    async clickLaptopCategory () {
        await this.clickOnWebElement(this.laptopsCategory);
    }

    async closeUrl(){
        await browser.closeWindow();
    }
}

module.exports = new StoreHomePage();