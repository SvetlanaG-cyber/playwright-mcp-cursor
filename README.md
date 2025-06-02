# Playwright Test Automation Project

This project contains automated tests using Playwright with Page Object Model pattern.

## Prerequisites

- Node.js (latest LTS version recommended)
- npm (comes with Node.js)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Available Commands

### Running Tests

1. Run all tests in headless mode:
```bash
npx playwright test
```

2. Run tests in UI mode (with visual interface):
```bash
npx playwright test --ui
```

3. Run tests with HTML report:
```bash
npx playwright test --reporter=html
```

4. Show the HTML report after test run:
```bash
npx playwright show-report
```

### Running Tests in Specific Browsers

1. Run tests only in Chromium:
```bash
npx playwright test --project=chromium
```

2. Run tests only in Firefox:
```bash
npx playwright test --project=firefox
```

3. Run tests only in WebKit:
```bash
npx playwright test --project=webkit
```

### Debugging

1. Run tests in debug mode:
```bash
npx playwright test --debug
```

2. Run a specific test file:
```bash
npx playwright test example.spec.js
```

3. Run tests with headed browsers (visible browser windows):
```bash
npx playwright test --headed
```

### Test Generation

Generate tests by recording your actions:
```bash
npx playwright codegen playwright.dev
```

### Other Useful Commands

1. Update Playwright:
```bash
npm install -D @playwright/test@latest
```

2. Run tests with retry on failure:
```bash
npx playwright test --retries=3
```

3. Run tests in parallel:
```bash
npx playwright test --workers=4
```

## Project Structure

```
playwright-mcp-cursor/
├── pages/              # Page Object Model classes
│   ├── BasePage.js     # Base page with common functionality
│   ├── HomePage.js     # Home page specific actions
│   └── GetStartedPage.js  # Getting Started page actions
├── tests/              # Test files
│   └── example.spec.js # Example test suite
└── playwright.config.js # Playwright configuration
```

## Running Tests in Different Environments

To run tests against different environments, you can use the `--project` flag with different configurations:

```bash
# Run tests against staging
npx playwright test --project=staging

# Run tests against production
npx playwright test --project=production
```

## Generating and Viewing Test Reports

1. Run tests with all reporters:
```bash
npx playwright test --reporter=list,html,junit
```

2. View the last HTML report:
```bash
npx playwright show-report
```

## Troubleshooting

If you encounter any issues:

1. Clear Playwright browser cache:
```bash
npx playwright clear-browser-cache
```

2. Install/reinstall browsers:
```bash
npx playwright install --with-deps
```

3. Check Playwright version:
```bash
npx playwright --version
```

## Contributing

1. Create a new branch for your changes
2. Write or update tests
3. Run all tests to ensure nothing is broken
4. Submit a pull request

## Best Practices

- Keep page objects focused and maintainable
- Use meaningful test and function names
- Add proper comments and documentation
- Follow the Page Object Model pattern
- Use appropriate assertions
- Handle timeouts and waits properly

## Test summary

-https://github.com/daun/playwright-report-summary/blob/main/README.md