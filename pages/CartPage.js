export class CartPage {
    constructor(page) {

        // Store Playwright page object
        this.page = page;

        // Product name displayed in cart
        this.cartProductName = page.locator(
            '[data-test="inventory-item-name"]'
        );

        // Cart icon used to navigate to Cart page
        this.cartIcon = page.locator(
            '[data-test="shopping-cart-link"]'
    );
        // Checkout button used to start checkout flow
        this.checkoutButton = page.locator('[data-test="checkout"]'
    );
}

    // Return cart product locator for assertions
    getCartProductName() {
        return this.cartProductName;
    }

    // Navigate to Checkout Information page
    async openCheckout() {

    // Click Checkout button
    await this.checkoutButton.click();
    }
}