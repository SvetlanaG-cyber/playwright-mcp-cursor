# playwright-mcp-cursor
Here's how to install and set up Playwright for testing:

1. **Create a new Node.js project** (if you don't have one):
```bash
mkdir playwright-project
cd playwright-project
npm init -y
```

2. **Install Playwright** using npm:
```bash
npm init playwright@latest
```

During the installation, you'll be prompted with several questions:
- Choose between TypeScript/JavaScript
- Name of your tests folder
- Whether to add GitHub Actions workflow
- Whether to install Playwright browsers (Chrome, Firefox, WebKit)

3. **The installation will create**:
- `playwright.config.ts` (or `.js`) - configuration file
- `tests` directory with example test
- `.github/workflows` (if selected) - GitHub Actions setup
- Add necessary dependencies to package.json

4. **Verify installation** by running the example test:
```bash
npx playwright test
```

5. **Show test report** (after running tests):
```bash
npx playwright show-report
```

**Key files created**:
````typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Add other browsers as needed
  ],
});
````

**Additional Tips**:
- Use `npx playwright codegen` to record and generate tests
- Use `npx playwright test --debug` for debugging tests
- Install VS Code Playwright extension for better testing experience

Would you like to create a sample test or need help with any specific testing scenario?

Similar code found with 1 license type