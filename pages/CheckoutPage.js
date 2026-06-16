export class CheckoutPage {
    constructor(page) {

        // Store Playwright page object
        this.page = page;

        // Checkout Information page title
        this.checkoutTitle = page.locator(
            '[data-test="title"]'
        );

        // First Name field
        this.firstNameInput = page.locator(
            '[data-test="firstName"]'
        );

        // Last Name field
        this.lastNameInput = page.locator(
            '[data-test="lastName"]'
        );

        // Postal Code field
        this.postalCodeInput = page.locator(
            '[data-test="postalCode"]'
        );

        // Continue button used to proceed to checkout overview
        this.continueButton = page.locator(
            '[data-test="continue"]'
        );

        // Checkout Overview page title
        this.checkoutOverviewTitle = page.locator(
            '[data-test="title"]'
        );

        // Finish button used to complete the purchase
        this.finishButton = page.locator(
            '[data-test="finish"]'
        );

        // Order confirmation message displayed after successful purchase
        this.orderConfirmationMessage = page.locator(
            '[data-test="complete-header"]'
        );
    }

    // Return Checkout page title locator for assertions
    getCheckoutTitle() {
        return this.checkoutTitle;
    }

    // Return Checkout Overview title locator
    getCheckoutOverviewTitle() {
        return this.checkoutOverviewTitle;
    }

    // Fill checkout customer information
    async fillCheckoutInformation(
        firstName,
        lastName,
        postalCode
    ) {

        // Enter first name
        await this.firstNameInput.fill(firstName);

        // Enter last name
        await this.lastNameInput.fill(lastName);

        // Enter postal code
        await this.postalCodeInput.fill(postalCode);
    }

    // Submit checkout information and continue
    async continueCheckout() {

        // Click Continue button
        await this.continueButton.click();
    }

    // Complete the order
    async finishCheckout() {

        // Click Finish button
        await this.finishButton.click();
    }

    // Return order confirmation message locator
    getOrderConfirmationMessage() {
        return this.orderConfirmationMessage;
    }
}