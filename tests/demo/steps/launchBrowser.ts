// tests/demo/steps/launchBrowser.ts
import { firefox, Browser, Page } from '@playwright/test';

export const launchBrowser = async (): Promise<{ browser: Browser; page: Page }> => {
  const browser = await firefox.launch({ headless: false }); // Launch Firefox
  const context = await browser.newContext();
  const page = await context.newPage();
  return { browser, page };
};
