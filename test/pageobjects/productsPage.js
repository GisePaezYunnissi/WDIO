const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get laptop(){
        return $("//a[text()='Sony vaio i5']")
    }
    //Click en la primera laptop
    async clickFirstLaptop() {
        await this.clickOnWebElement(this.laptop);
    }
}

module.exports = new ProductsPage();