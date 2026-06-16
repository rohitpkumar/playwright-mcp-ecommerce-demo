export class InventoryPage {
    constructor(page) {

        // Store Playwright page object
    this.page = page;

    // Inventory page title displayed after successful login
    this.productsTitle = page.locator('.title');

    // Add To Cart button for Sauce Labs Bike Light
    this.bikeLightAddToCartButton = page.locator(
        '[data-test="add-to-cart-sauce-labs-bike-light"]'
    );

    // Cart badge showing number of items added to cart
    this.cartBadge = page.locator(
        '[data-test="shopping-cart-badge"]'
    );

    // Cart icon used to navigate to Cart page
    this.cartIcon = page.locator(
        '[data-test="shopping-cart-link"]'
    );

    // Checkout button used to start checkout flow
    this.checkoutButton = page.locator(
    '[data-test="checkout"]'
    );
    }

    // Return Products page title locator for assertions
    getProductsTitle() {
        return this.productsTitle;
    }
    // Add Sauce Labs Bike Light product to cart
    async addBikeLightToCart() {

    // Click Add To Cart button for Bike Light product
    await this.bikeLightAddToCartButton.click();
    }

    // Return cart badge locator for assertions
    getCartBadge() {
        return this.cartBadge;
    }

    // Navigate to Cart page
        async openCart() {

        // Click cart icon
        await this.cartIcon.click();
        }
}