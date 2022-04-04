const BasePage = require('./page');

class FormPage extends BasePage {

    get inputName() { return $("//input[@id='name']"); }
    get inputCountry() { return $("//input[@id='country']"); }
    get inputCity() { return $("//input[@id='city']"); }
    get inputCard() { return $("#card"); }
    get inputMonth() { return $("//input[@id='month']"); }
    get inputYear() { return $("//input[@id='year']"); }
    get buttonPurchase() { return $("//button[text()='Purchase']"); }

    async setName(name) {
        this.sendKeysToWebElement(this.inputName, name);
    }

    async setCountry(country) {
        this.sendKeysToWebElement(this.inputCountry, country);
    }

    async setCity(city) {
        this.sendKeysToWebElement(this.inputCity, city);
    }

    async setCreditCard(card) {
        this.sendKeysToWebElement(this.inputCard, card);
    }

    async setMonth(month) {
        this.sendKeysToWebElement(this.inputMonth, month);
    }

    async setYear(year) {
        this.sendKeysToWebElement(this.inputYear, year);
    }

    async formComplete(name, country, city, card, month, year) {
        await this.setName(name);
        await this.setCountry(country);
        await this.setCity(city);
        await this.setCreditCard(card);
        await this.setMonth(month);
        await this.setYear(year);
    }

    async clickPurchaseButton() {
        await this.clickOnWebElement(this.buttonPurchase);
    }
}

module.exports = new FormPage();