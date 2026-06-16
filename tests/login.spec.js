import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Login with valid credentials', async ({ page }) => {

    // Create Page Object instance and pass Playwright page object
    const loginPage = new LoginPage(page);

    // Create Inventory Page Object
    const inventoryPage = new InventoryPage(page);

    // Open SauceDemo login page
    await loginPage.goto();

    // Login using valid test credentials
    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    // Verify successful login by checking inventory page URL
    await expect(page).toHaveURL(/inventory/);

    // Verify Products title is visible after successful login
    await expect(inventoryPage.getProductsTitle()).toBeVisible();
});