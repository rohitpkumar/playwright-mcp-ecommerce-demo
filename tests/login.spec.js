import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { checkoutData } from '../test-data/checkoutData';

test('Complete purchase flow', async ({ page }) => {

    // Create Page Object instance and pass Playwright page object
    const loginPage = new LoginPage(page);

    // Create Inventory Page Object
    const inventoryPage = new InventoryPage(page);

    // Create Cart Page Object
    const cartPage = new CartPage(page);

    // Create Checkout Page Object
    const checkoutPage = new CheckoutPage(page);

    // Open SauceDemo login page
    await test.step('Open SauceDemo', async () => {
    await loginPage.goto();
});

    await test.step('Login with valid credentials', async () => {
    await loginPage.login(
        checkoutData.username,
        checkoutData.password
    );
});

    await test.step('Verify Products page', async () => {
    await expect(
        inventoryPage.getProductsTitle()
    ).toBeVisible();
});

    await test.step('Add Bike Light to cart', async () => {
    await inventoryPage.addBikeLightToCart();
});

    await test.step('Verify cart badge', async () => {
    await expect(
        inventoryPage.getCartBadge()
    ).toHaveText('1');
});

    await test.step('Open Cart page', async () => {
    await inventoryPage.openCart();
});

    await test.step('Verify product in cart', async () => {
    await expect(
        cartPage.getCartProductName()
    ).toHaveText('Sauce Labs Bike Light');
});

    await test.step('Open Checkout page', async () => {
    await cartPage.openCheckout();
});

    await test.step('Verify Checkout page', async () => {
    await expect(
        checkoutPage.getCheckoutTitle()
    ).toHaveText('Checkout: Your Information');
});

    await test.step('Fill checkout information', async () => {
    await checkoutPage.fillCheckoutInformation(
        checkoutData.firstName,
        checkoutData.lastName,
        checkoutData.postalCode
    );
});

await test.step('Continue checkout', async () => {
    await checkoutPage.continueCheckout();
});

    await test.step('Verify Checkout Overview page', async () => {
    await expect(
        checkoutPage.getCheckoutOverviewTitle()
    ).toHaveText('Checkout: Overview');
});

    await test.step('Finish checkout', async () => {
    await checkoutPage.finishCheckout();
});

    await test.step('Verify order confirmation', async () => {
    await expect(
        checkoutPage.getOrderConfirmationMessage()
    ).toHaveText('Thank you for your order!');
});
    
//console.log('TEST PASSED');
});