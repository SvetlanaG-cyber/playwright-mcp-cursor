# Test info

- Name: Playwright website >> TC_004 should fail for test summary
- Location: /home/runner/work/playwright-mcp-cursor/playwright-mcp-cursor/tests/example.spec.js:35:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 5
Received: 4
    at /home/runner/work/playwright-mcp-cursor/playwright-mcp-cursor/tests/example.spec.js:36:19
```

# Test source

```ts
   1 | // @ts-check
   2 | import { test, expect } from '@playwright/test';
   3 | import { HomePage } from '../pages/HomePage';
   4 | import { GetStartedPage } from '../pages/GetStartedPage';
   5 |
   6 | test.describe('Playwright website', () => {
   7 |   let homePage;
   8 |   let getStartedPage;
   9 |
  10 |   test.beforeEach(async ({ page }) => {
  11 |     homePage = new HomePage(page);
  12 |     getStartedPage = new GetStartedPage(page);
  13 |   });
  14 |
  15 |   test('TC_001 has title', async () => {
  16 |     await homePage.goto();
  17 |     const hasCorrectTitle = await homePage.hasTitle(/Playwright/);
  18 |     expect(hasCorrectTitle).toBeTruthy();
  19 |   });
  20 |
  21 |   test('TC_002 get started link', async () => {
  22 |     await homePage.goto();
  23 |     await homePage.clickGetStarted();
  24 |     // Add a small wait to ensure page transition is complete
  25 |     await getStartedPage.page.waitForLoadState('networkidle');
  26 |     const isVisible = await getStartedPage.isInstallationHeadingVisible();
  27 |     expect(isVisible).toBeTruthy();
  28 |   });
  29 |
  30 |   test.skip('TC_003 should be skipped for test summary', async ({ page }) => {
  31 |
  32 |     expect(2 + 2).toBe(44);
  33 |   });
  34 |
  35 |   test('TC_004 should fail for test summary', async ({ page }) => {
> 36 |     expect(2 + 2).toBe(5);
     |                   ^ Error: expect(received).toBe(expected) // Object.is equality
  37 |   });
  38 |
  39 | });
  40 |
```