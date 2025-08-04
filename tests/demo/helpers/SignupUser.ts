// helpers/signupUser.ts
import { SignupUserData } from '../test-data/userData';
import { locators } from '../locators/signupPageLocators';
import { Page, expect } from '@playwright/test';

export async function signupUser(page: Page) {
  await page.goto('http://automationexercise.com');
  await expect(page.locator(locators.homePageLogo)).toBeVisible();

  await page.click("(//a[normalize-space()='Signup / Login'])[1]");
  await expect(page.locator(locators.newUserSignupText)).toBeVisible();

  await page.locator(locators.nameInput).fill(SignupUserData.name);
  await page.locator(locators.emailInput).fill(SignupUserData.email);
  await page.locator(locators.signupBtn).click();

  await expect(page.locator(locators.enterAccountInfo)).toBeVisible();
  await page.locator(locators.titleCheckbox).check();
  await page.locator('#password').fill(SignupUserData.password);
  await page.selectOption(locators.dobDay, SignupUserData.dob.day);
  await page.selectOption(locators.dobMonth, SignupUserData.dob.month);
  await page.selectOption(locators.dobYear, SignupUserData.dob.year);

  await page.locator(locators.newsletterCheckbox).check();
  await page.locator(locators.firstNameInput).fill(SignupUserData.firstName);
  await page.locator(locators.lastNameInput).fill(SignupUserData.lastName);
  await page.locator(locators.addressInput).fill(SignupUserData.company);
  await page.selectOption(locators.countrySelect, SignupUserData.country);
  await page.locator(locators.stateInput).fill(SignupUserData.state);
  await page.locator(locators.cityInput).fill(SignupUserData.city);
  await page.locator(locators.zipcodeInput).fill(SignupUserData.zipcode);
  await page.locator(locators.mobileNumberInput).fill(SignupUserData.mobileNumber);

  await page.locator(locators.createAccountBtn).click();
}
