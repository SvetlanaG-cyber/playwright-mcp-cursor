// @ts-check
import { BasePage } from './BasePage';

/**
 * Page object for the Getting Started page
 */
export class GetStartedPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page) {
        super(page);

        // Selectors
        this.installationHeading = this.page.getByRole('heading', { name: 'Installation' });
    }

    /**
     * Check if Installation heading is visible
     * @returns {Promise<boolean>}
     */
    async isInstallationHeadingVisible() {
        return await this.installationHeading.isVisible();
    }
} 