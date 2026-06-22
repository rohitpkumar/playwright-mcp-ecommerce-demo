# Playwright MCP Ecommerce Demo

A Playwright automation framework built using Page Object Model (POM), GitHub Actions CI/CD, test data separation, and Playwright MCP integration experiments.

## Project Overview

This project automates an end-to-end ecommerce purchase flow on SauceDemo using Playwright.

The goal of this project is to:

* Learn Playwright automation from scratch
* Build a reusable automation framework
* Implement industry-standard automation practices
* Explore Playwright MCP (Model Context Protocol) integration for AI-assisted testing

---

## Tech Stack

* Playwright
* JavaScript
* GitHub Actions
* Page Object Model (POM)
* Playwright MCP
* Claude Desktop

---

## Framework Structure

```text
playwright-mcp-ecommerce-demo
│
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── tests/
│   ├── login.spec.js
│   └── seed.spec.ts
│
├── test-data/
│   └── checkoutData.js
│
├── .github/workflows/
│   └── playwright.yml
│
├── .claude/
├── specs/
├── .mcp.json
└── playwright.config.js
```

---

## Automated Scenario

### Complete Purchase Flow

* Open SauceDemo
* Login with valid credentials
* Verify Products page
* Add Sauce Labs Bike Light to cart
* Verify cart badge
* Open cart
* Verify selected product
* Open checkout page
* Fill checkout information
* Continue checkout
* Verify checkout overview
* Complete order
* Verify order confirmation

---

## Implemented Features

### Framework Design

* Page Object Model (POM)
* Reusable page classes
* Locator centralization
* Reusable page methods

### Playwright Best Practices

* test.step() implementation
* Explicit assertions
* Clean test structure
* Modular framework design

### Test Data Management

* Test data moved to dedicated files
* Reduced hardcoded values
* Improved maintainability

### CI/CD

* GitHub Actions workflow
* Automated test execution on push
* Playwright HTML report artifacts

### MCP Integration

* Playwright MCP server setup
* Claude Desktop integration
* MCP agent generation
* Initial MCP troubleshooting

---

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run specific test:

```bash
npx playwright test tests/login.spec.js --project=chromium
```

Run headed mode:

```bash
npx playwright test tests/login.spec.js --project=chromium --headed
```

Open Playwright report:

```bash
npx playwright show-report
```

---

## CI/CD

Tests run automatically using GitHub Actions.

Workflow file:

```text
.github/workflows/playwright.yml
```

---

### Upcoming Enhancements

* Negative Login Tests
* Data Driven Testing
* API Interception
* Multi Browser Execution
* MCP Test Generation
* MCP Test Healing
* Advanced Reporting

---

## Author

Rohit Kumar

QA Automation Engineer | AI QA Engineer Aspirant

GitHub:
https://github.com/rohitpkumar
