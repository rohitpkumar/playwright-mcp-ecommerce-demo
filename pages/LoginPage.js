export class LoginPage {
    constructor (page){ //It centralizes element management and reduces maintenance effort when UI elements change//
    
        // Store Playwright page object so it can be used across all methods
        this.page = page;

        // Login page locators
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password'); 
        this.loginButton = page.locator('#login-button');
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/');  
    }

    // Perform login action
    async login(username, password) {

        // Enter username into username field
        await this.usernameInput.fill(username);

        // Enter password into password field
        await this.passwordInput.fill(password);

        // Click Login button
        await this.loginButton.click();
    }
}