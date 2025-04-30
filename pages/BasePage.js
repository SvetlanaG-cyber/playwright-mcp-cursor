// @ts-check

/**
 * Base page object that all other page objects will inherit from
 */
export class BasePage {
    /**
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page) {
        this.page = page;
    }

    /**
     * Navigate to a specific URL
     * @param {string} url 
     */
    async navigate(url) {
        await this.page.goto(url);
    }

    /**
     * Get page title
     * @returns {Promise<string>}
     */
    async getTitle() {
        return await this.page.title();
    }

    /**
     * Wait for element to be visible
     * @param {string} selector 
     */
    async waitForElement(selector) {
        await this.page.waitForSelector(selector);
    }
} 