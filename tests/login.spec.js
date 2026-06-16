import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Login with valid credentials', async ({ page }) => {

    // Create Page Object instance and pass Playwright page object
    const loginPage = new LoginPage(page);

    // Create Inventory Page Object
    const inventoryPage = new InventoryPage(page);

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

    console.log('TEST PASSED');
});