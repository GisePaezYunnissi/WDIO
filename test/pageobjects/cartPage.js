const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get titleFirstModelAdd(){
        return $("//tr[@class='success']/td[2]")
    };
    get priceFirstModelAdd(){
        return $("//tr[@class='success']/td[3]")
    };
    get buttonPlaceOrder(){
        return $("//button[text()='Place Order']")
    };

    async getModelCart() {
        return (await this.getTextFromWebElement(this.titleFirstModelAdd));
    }
    async getPriceCart() {
        return (await this.getTextFromWebElement(this.priceFirstModelAdd));
    }

    async clickButtonPlaceOrder() {
        await this.clickOnWebElement(this.buttonPlaceOrder);
    }
}

module.exports = new CartPage();