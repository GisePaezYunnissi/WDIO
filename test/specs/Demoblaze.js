const StoreHomePage = require('../pageobjects/storeHomePage');
const ProductsPage = require('../pageobjects/productsPage');
const ProductDetailPage = require('../pageobjects/productDetailPage');
const MenuPage = require('../pageobjects/menuPage');
const CartPage = require('../pageobjects/cartPage');
const FormPage = require('../pageobjects/formPage');
const ConfirmPage = require('../pageobjects/confirmPage');

describe('Mi primer proyecto con WDIO', () => {
    it('Prueba Store Demoblaze', async () => {
        await StoreHomePage.open();

        //Hago click en la categoría laptops
        await StoreHomePage.clickLaptopCategory();

        //Hacer click en el primer producto
        await ProductsPage.clickFirstLaptop();

        //Obtengo modelo y precio del producto
        const modelDetail = await ProductDetailPage.getModel();
        const priceDetail = await ProductDetailPage.getPrice();
        await expect(modelDetail).toEqual("Sony vaio i5");
        await expect(priceDetail).toEqual("790");
        //Agrego al cart
        await ProductDetailPage.clickAddToCart();

        // Capturo el msj de la alerta, comparo msj, acepto alerta
        await browser.pause(2000);
        const alertmessage = await browser.getAlertText();
        await browser.acceptAlert();
        await expect(alertmessage).toEqual("Product added");
      
        //Hago click en la opcion Cart del menu
        await MenuPage.clickCart();

        //Declaro las variable
        const modelCart = await CartPage.getModelCart();
        const priceCart = await CartPage.getPriceCart();
        //Valido que el titulo de la columna y precio es el mismo
        await expect(modelDetail).toEqual(modelCart);
        await expect(priceDetail).toEqual(priceCart);
        //Hacer click en el boton de ordenar
        await CartPage.clickButtonPlaceOrder();

        //Relleno Formulario y hago click en "Purchase"
        await FormPage.formComplete("NOMBRE", "PAIS", "CIUDAD", "TARJETA CREDITO", "MES", "AÑO");
        await FormPage.clickPurchaseButton();

        //Traigo titulo del msj de confirmacion y comparon con Thank you for your purchase!
        const tituloMsg = await ConfirmPage.getMessage();
        await expect(tituloMsg).toEqual("Thank you for your purchase!");

        //Traigo cuerpo del msj de confirmacion y comparon que este el nombre, tarjeta de credito anteriormente ingresados y precio del cart
        const message = await ConfirmPage.getValidate();
        await expect(message.includes("NOMBRE")).toBe(true);
        await expect(message.includes("TARJETA CREDITO")).toBe(true);
        await expect(message.includes(priceDetail)).toBe(true);

        //Hago click en Boton "OK" del msj de confirmacion.
        browser.pause(2000);
        await ConfirmPage.clickButtonOk();

        //Cierro browser
        await StoreHomePage.closeUrl();
    });
});


