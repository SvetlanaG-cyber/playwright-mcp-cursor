// @ts-check
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { GetStartedPage } from '../pages/GetStartedPage';

test.describe('Playwright website', () => {
  let homePage;
  let getStartedPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    getStartedPage = new GetStartedPage(page);
  });

  test('has title', async () => {
    await homePage.goto();
    const hasCorrectTitle = await homePage.hasTitle(/Playwright/);
    expect(hasCorrectTitle).toBeTruthy();
  });

  test('get started link', async () => {
    await homePage.goto();
    await homePage.clickGetStarted();
    // Add a small wait to ensure page transition is complete
    await getStartedPage.page.waitForLoadState('networkidle');
    const isVisible = await getStartedPage.isInstallationHeadingVisible();
    expect(isVisible).toBeTruthy();
  });
});
