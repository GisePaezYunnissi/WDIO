const BasePage = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ConfirmPage extends BasePage {
    
    get messageConfirm() { 
        return $("//h2[text()='Thank you for your purchase!']"); 
    }
    get validateData() { 
        return $("//p[@class='lead text-muted ']"); 
    }
    get buttonOk() { 
        return $("//button[text()='OK']"); 
    }
    
    async clickButtonOk() {
        await this.clickOnWebElement(this.buttonOk);
    }

    async getMessage() {
        return (await this.getTextFromWebElement(this.messageConfirm));
    }

    async getValidate() {
        return (await this.getTextFromWebElement(this.validateData));
    }
}

module.exports = new ConfirmPage();
