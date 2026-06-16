import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

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
    console.log('STEP 1: Opening SauceDemo');
    await loginPage.goto();

    console.log('STEP 2: Logging in');
    await loginPage.login(
        'standard_user',
        'secret_sauce'
);

    console.log('STEP 3: Verifying Products page');
    await expect(inventoryPage.getProductsTitle()).toBeVisible();

    console.log('STEP 4: Adding Bike Light to cart');
    await inventoryPage.addBikeLightToCart();

    console.log('STEP 5: Verifying cart badge');
    await expect(inventoryPage.getCartBadge()).toHaveText('1');

    console.log('STEP 6: Opening Cart page');
    await inventoryPage.openCart();

    console.log('STEP 7: Verifying product in cart');

    await expect(
    cartPage.getCartProductName()
        ).toHaveText('Sauce Labs Bike Light');

    console.log('STEP 8: Opening Checkout page');
    await cartPage.openCheckout();

    console.log('STEP 9: Verifying Checkout page');
    await expect(
    checkoutPage.getCheckoutTitle()).toHaveText('Checkout: Your Information');

    console.log('STEP 10: Filling checkout information');

    await checkoutPage.fillCheckoutInformation(
    'Rohit',
    'Kumar',
    '400001'
);

    console.log('STEP 11: Continuing checkout');
    await checkoutPage.continueCheckout();

    console.log('STEP 12: Verifying Checkout Overview page');

    await expect(
        checkoutPage.getCheckoutOverviewTitle()).toHaveText('Checkout: Overview');

    console.log('STEP 13: Finishing checkout');
    await checkoutPage.finishCheckout();

    console.log('STEP 14: Verifying order confirmation');

    await expect(
    checkoutPage.getOrderConfirmationMessage()).toHaveText('Thank you for your order!');

    console.log('TEST PASSED');
});