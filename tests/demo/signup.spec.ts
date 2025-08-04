// tests/demo/signup.spec.ts
import { test, expect } from '@playwright/test';
import { launchBrowser } from './steps/launchBrowser';
import { locators } from './locators/signupPageLocators';
import { loginLocators } from './locators/loginPageLocators';
import { Contactlocators} from './locators/contactUsPageLocators';
import { SignupUserData } from './test-data/userData';
import { LoginUserData } from './test-data/userData';
import { InCorrectLoginUserData } from './test-data/userData';
import { productLocators } from './locators/productLocators';
import { searchLocators } from './locators/searchLocators';
import { subscriptionLocators } from './locators/subscriptionLocators';
import { addToCartLocators } from './locators/addToCartLocators';
import { productQuantityLocators } from './locators/productQuantityLocators';
import { placeOrderLocators } from './locators/placeOrderLocators';
import { signupUser } from './helpers/SignupUser';
import { categoryLocators } from './locators/categoryLocators';

test('Signup User', async () => {
  const { browser, page } = await launchBrowser();

  await signupUser(page); 

  await page.locator('#logout').click(); 
  await browser.close();
});

test('Login User with correct credentials', async () => {
  const { browser, page } = await launchBrowser();

  await page.goto('http://automationexercise.com', { timeout: 60000 }); // wait up to 60 seconds
  await expect(page.locator(loginLocators.homePageLogo)).toBeVisible();

  await page.locator(loginLocators.signupLoginBtn).click();
  await expect(page.locator(loginLocators.loginHeader)).toBeVisible();

  await page.locator(loginLocators.emailInput).fill(LoginUserData.email);
  await page.locator(loginLocators.passwordInput).fill(LoginUserData.password);
  await page.locator(loginLocators.loginBtn).click();

//   await page.locator(loginLocators.logOutBtn).click();
//   await expect(page.locator(loginLocators.accountLogoutText)).toBeVisible();

//   await page.locator(loginLocators.continueBtn).click();

  await browser.close();
});

test('Login User with Incorrect credentials', async () => {
  const { browser, page } = await launchBrowser();

  await page.goto('http://automationexercise.com');
  await expect(page.locator(loginLocators.homePageLogo)).toBeVisible();

  await page.locator(loginLocators.signupLoginBtn).click();
  await expect(page.locator(loginLocators.loginHeader)).toBeVisible();

  await page.locator(loginLocators.emailInput).fill(InCorrectLoginUserData.email);
  await page.locator(loginLocators.passwordInput).fill(InCorrectLoginUserData.password);
  await page.locator(loginLocators.loginBtn).click();

  await expect(page.locator(loginLocators.loggedInAsText)).toContainText(InCorrectLoginUserData.Error);

  await browser.close();
});


test('Register User with existing email', async () => {
  const { browser, page } = await launchBrowser();

  await page.goto('http://automationexercise.com');
  await expect(page.locator(locators.homePageLogo)).toBeVisible();

  await page.locator(locators.signupLoginBtn).click();
  await expect(page.locator(locators.newUserSignupText)).toBeVisible();

  await page.locator(locators.nameInput).fill(SignupUserData.name);
  await page.locator(locators.emailInput).fill(SignupUserData.email);
  await page.locator(locators.signupBtn).click();

//   await expect(page.locator(locators.emailAlreadyExistsError)).toBeVisible();

  await browser.close();
});

test('Contact Us Form', async () => {
  const { browser, page } = await launchBrowser();

  await page.goto('http://automationexercise.com');
  await expect(page.locator(locators.homePageLogo)).toBeVisible();

  await page.locator(Contactlocators.contactUsBtn).click();
  await expect(page.locator(Contactlocators.getInTouchHeader)).toBeVisible();

  await page.locator(Contactlocators.nameInput).fill('Abc');
  await page.locator(Contactlocators.emailInput).fill('test@gmail.com');
  await page.locator(Contactlocators.subjectInput).fill('Abc');
  await page.locator(Contactlocators.messageTextarea).fill('Abc');

//   await page.setInputFiles(Contactlocators.uploadFileInput, 'tests/demo/test-file.txt'); // Ensure this file exists

  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('Press OK to proceed!');
    await dialog.accept();
  });
  await page.locator(Contactlocators.submitBtn).click();

//   await expect(page.locator(Contactlocators.successAlert)).toHaveText(
//   'Success! Your details have been submitted successfully.',
//   { timeout: 15000 } // increased timeout for reliability
// );

  await page.locator(Contactlocators.homeBtn).click();
  await expect(page.locator(Contactlocators.homePageLogo)).toBeVisible();

  await browser.close();
});

test('Verify Test Cases Page', async ({ page }) => {
  await page.goto('http://automationexercise.com');

  await expect(page.locator("//img[@alt='Website for automation practice']")).toBeVisible();

  await page.locator("//div[@class='item active']//button[normalize-space()='Test Cases']").click();
  
  await expect(page.locator("//b[normalize-space()='Test Cases']")).toBeVisible();
});

test('Verify All Products and product detail page', async ({ page }) => {
  await page.goto('http://automationexercise.com');

  await expect(page.locator(productLocators.homePageLogo)).toBeVisible();

  await page.locator(productLocators.productsBtn).click();

  await expect(page.locator(productLocators.allProductsHeader)).toBeVisible();

  await expect(page.locator(productLocators.productsList)).toBeVisible();

  await page.locator(productLocators.firstViewProductBtn).click();

  await expect(page.locator(productLocators.productDetailsContainer)).toBeVisible();

  await expect(page.locator(productLocators.productName)).toBeVisible();
  await expect(page.locator(productLocators.productCategory)).toBeVisible();
  await expect(page.locator(productLocators.productPrice)).toBeVisible();
  await expect(page.locator(productLocators.productAvailability)).toBeVisible();
  await expect(page.locator(productLocators.productCondition)).toBeVisible();
  await expect(page.locator(productLocators.productBrand)).toBeVisible();
});

test('Search Product', async ({ page }) => {
  await page.goto('http://automationexercise.com');

  await expect(page.locator(searchLocators.homePageLogo)).toBeVisible();

  await page.locator(searchLocators.productsBtn).click();
  await expect(page.locator(searchLocators.allProductsHeader)).toBeVisible();

  await page.locator(searchLocators.searchInput).fill('Tshirts');
  await page.locator(searchLocators.searchBtn).click();

  await expect(page.locator(searchLocators.searchedProductsHeader)).toBeVisible();
});

test('Verify Subscription in Home Page', async ({ page }) => {
  await page.goto('http://automationexercise.com');

  await expect(page.locator(subscriptionLocators.homePageLogo)).toBeVisible();

  await page.locator(subscriptionLocators.subscriptionHeader).scrollIntoViewIfNeeded();
  await expect(page.locator(subscriptionLocators.subscriptionHeader)).toBeVisible();

  await page.locator(subscriptionLocators.emailInput).fill('test@gmail.com');
  await page.locator(subscriptionLocators.submitBtn).click();

  await expect(page.locator(subscriptionLocators.successMessage)).toBeVisible();
});

test('Verify Subscription in Cart Page', async ({ page }) => {
  await page.goto('http://automationexercise.com');

  await expect(page.locator(subscriptionLocators.homePageLogo)).toBeVisible();

  await page.locator(subscriptionLocators.cartBtn).click();

  await page.locator(subscriptionLocators.subscriptionHeader).scrollIntoViewIfNeeded();
  await expect(page.locator(subscriptionLocators.subscriptionHeader)).toBeVisible();

  await page.locator(subscriptionLocators.emailInput).fill('test@gmail.com');
  await page.locator(subscriptionLocators.submitBtn).click();

  await expect(page.locator(subscriptionLocators.successMessage)).toBeVisible();
});

test('Add Products in Cart', async ({ page }) => {
  await page.goto('http://automationexercise.com');
  await expect(page.locator(addToCartLocators.homePageLogo)).toBeVisible();

  await page.locator(addToCartLocators.productsBtn).click();

// Add first product
const firstProduct = page.locator(addToCartLocators.firstProduct);
await firstProduct.hover();
await firstProduct.locator(addToCartLocators.addToCartBtn).click();
await page.locator(addToCartLocators.continueShoppingBtn).click();

  // Add second product
  const secondProduct = page.locator(addToCartLocators.secondProduct);
  await secondProduct.hover();
  await secondProduct.locator(addToCartLocators.addToCartBtn).click();

  // Go to cart
  await page.locator(addToCartLocators.viewCartBtn).click();

  // Verify product prices
  await expect(page.locator(addToCartLocators.price500)).toBeVisible();
  await expect(page.locator(addToCartLocators.price400)).toBeVisible();

  // Verify quantities
  await expect(page.locator(addToCartLocators.firstProductQty)).toHaveText('1');
  await expect(page.locator(addToCartLocators.secondProductQty)).toHaveText('1');

  // Verify total prices
  await expect(page.locator(addToCartLocators.totalPrice500)).toHaveText('Rs. 500');
  await expect(page.locator(addToCartLocators.totalPrice400)).toHaveText('Rs. 400');
});

test('Verify Product quantity in Cart', async ({ page }) => {
  await page.goto('http://automationexercise.com');

  await expect(page.locator(productQuantityLocators.homePageLogo)).toBeVisible();

  await page.locator(productQuantityLocators.viewProductBtn).click();

  await expect(page.locator(productQuantityLocators.quantityInput)).toBeVisible();

  const quantityInput = page.locator(productQuantityLocators.quantityInput);
  await quantityInput.fill('4');

  await page.locator(productQuantityLocators.addToCartBtn).click();

  await page.locator(productQuantityLocators.viewCartBtn).click();

  const quantityInCart = page.locator(productQuantityLocators.cartQuantityDisplay);
  await expect(quantityInCart).toHaveText('4');
});

test('Place Order: Register while Checkout', async ({ page }) => {
  await page.goto('http://automationexercise.com');

  await expect(page.locator(placeOrderLocators.homePageLogo)).toBeVisible();

  await page.locator(placeOrderLocators.addToCartBtn).click();

  await page.locator(placeOrderLocators.viewCartBtn).click();

  await expect(page.locator(placeOrderLocators.cartPageHeader)).toBeVisible();

  await page.locator(placeOrderLocators.proceedToCheckoutBtn).click();

  await page.locator(placeOrderLocators.registerLoginBtn).click();

  await signupUser(page); 

  await expect(page.locator(placeOrderLocators.accountCreatedText)).toBeVisible();
  await page.locator(placeOrderLocators.continueBtn).click();

  await expect(page.locator(placeOrderLocators.loggedInAsText)).toContainText(SignupUserData.name);

  await page.locator(placeOrderLocators.cartNavBtn).click();

  await page.locator(placeOrderLocators.proceedToCheckoutBtn).click();

  await expect(page.locator(placeOrderLocators.addressDetailsHeader)).toBeVisible();
  await expect(page.locator(placeOrderLocators.reviewOrderHeader)).toBeVisible();

  await page.locator(placeOrderLocators.messageTextarea).fill("Testing");
  await page.locator(placeOrderLocators.placeOrderBtn).click();

  await page.locator(placeOrderLocators.nameOnCardInput).fill("Adnan");
  await page.locator(placeOrderLocators.cardNumberInput).fill("12312312");
  await page.locator(placeOrderLocators.cvcInput).fill("311");
  await page.locator(placeOrderLocators.expiryMonthInput).fill("12");
  await page.locator(placeOrderLocators.expiryYearInput).fill("2028");

  await page.locator(placeOrderLocators.payAndConfirmBtn).click();

  await expect(page.locator(placeOrderLocators.successMessage)).toBeVisible();
});

test('View Category Products', async ({ page }) => {
  await page.goto('http://automationexercise.com');

  await expect(page.locator(categoryLocators.categorySidebarHeader)).toBeVisible();

  await page.locator(categoryLocators.womenCategory).click();

  await page.locator(categoryLocators.womenDressSubcategory).click();

  await expect(page.locator(categoryLocators.womenCategoryHeader)).toBeVisible();

  await page.locator(categoryLocators.menCategory).click();
  await page.locator(categoryLocators.menTshirtsSubcategory).click();

  await expect(page.locator(categoryLocators.menCategoryHeader)).toBeVisible();
});