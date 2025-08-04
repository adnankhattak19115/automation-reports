import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // ✅ Disable parallel test files
  fullyParallel: false,

  // ✅ Fail build if test.only is committed accidentally
  forbidOnly: !!process.env.CI,

  // ✅ Set retries (optional)
  retries: process.env.CI ? 2 : 0,

  // ✅ Force sequential test runs
  workers: 1,

  // ✅ Use HTML reporter
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright'],
  ],

  // ✅ Global timeout per test
  timeout: 120_000,

  use: {
    trace: 'retain-on-failure',
    headless: false,
    browserName: 'firefox', // optional: fixed browser
    screenshot: 'only-on-failure', // For Allure
  },

  // ✅ Disable multi-browser projects unless you need them
  // Comment out all but one (to reduce test runs per file)
  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  // Optional: Start local server
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
