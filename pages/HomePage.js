// @ts-check
import { BasePage } from './BasePage';

/**
 * Page object for the Playwright homepage
 */
export class HomePage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page) {
        super(page);
        this.url = 'https://playwright.dev/';

        // Selectors
        this.getStartedLink = this.page.getByRole('link', { name: 'Get started' });
    }

    /**
     * Navigate to the home page
     */
    async goto() {
        await this.navigate(this.url);
    }

    /**
     * Click the "Get Started" link
     */
    async clickGetStarted() {
        await this.getStartedLink.click();
    }

    /**
     * Check if page title contains expected text
     * @param {RegExp} titleRegex 
     */
    async hasTitle(titleRegex) {
        // Wait for the title to be available and then check it
        await this.page.waitForFunction((expected) => {
            return expected.test(document.title);
        }, titleRegex);
        const title = await this.page.title();
        return titleRegex.test(title);
    }
} 