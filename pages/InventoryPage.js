export class InventoryPage {
    constructor(page) {

        // Store Playwright page object
        this.page = page;

        // Inventory page title displayed after successful login
        this.productsTitle = page.locator('.title');
    }

    // Return Products page title locator for assertions
    getProductsTitle() {
        return this.productsTitle;
    }
}