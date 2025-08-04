// import { test, expect } from '@playwright/test';
// import { HomePage } from './pages/HomePage';
// import { ProductPage } from './pages/Product';

// test('Navigate to Home Page', async ({ page }) => {
//   const homePage = new HomePage(page);
//   await homePage.goto();
//   // Optional: Assert home page loaded
// });

// test('Select Men Tshirt category', async ({ page }) => {
//   const homePage = new HomePage(page);
//   await homePage.goto();
//   await homePage.selectMenTshirtCategory();
//   // Optional: Assert Men Tshirt category page loaded
// });

// test('Open first product in Men Tshirt category', async ({ page }) => {
//   const homePage = new HomePage(page);
//   await homePage.goto();
//   await homePage.selectMenTshirtCategory();
//   await homePage.openFirstProduct();
//   // Optional: Assert product page loaded
// });

// test('Add product to cart', async ({ page }) => {
//   const homePage = new HomePage(page);
//   const productPage = new ProductPage(page);

//   await homePage.goto();
//   await homePage.selectMenTshirtCategory();
//   await homePage.openFirstProduct();
//   await productPage.addToCart();
//   // Optional: Assert product added to cart
// });


import { test } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/Product';
import { CartPage } from './pages/Cart';

test.describe('Mast & Harbour purchase flow', () => {
  test('Navigate to home page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    // Add optional assertion to verify home page
  });

  test('Select Mast & Harbour brand', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.selectBrand('Mast & Harbour');
    // Optional: Assert brand page loaded
  });

  test('Select first product of brand', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.selectBrand('Mast & Harbour');
    await homePage.selectProductByXPath("//div//div//div//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]");
    // Optional: Assert product page loaded
  });

  test('Set quantity to 5', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    await homePage.goto();
    await homePage.selectBrand('Mast & Harbour');
    await homePage.selectProductByXPath("//div//div//div//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]");
    await productPage.setQuantity(5);
    // Optional: Assert quantity set correctly
  });

  test('Add product to cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    await homePage.goto();
    await homePage.selectBrand('Mast & Harbour');
    await homePage.selectProductByXPath("//div//div//div//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]");
    await productPage.setQuantity(5);
    await productPage.addToCart();
    // Optional: Assert item added to cart confirmation
  });

  test('View cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await homePage.goto();
    await homePage.selectBrand('Mast & Harbour');
    await homePage.selectProductByXPath("//div//div//div//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]");
    await productPage.setQuantity(5);
    await productPage.addToCart();

    await cartPage.viewCart();
    // Optional: Assert cart page loaded
  });

  test('Proceed to checkout', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await homePage.goto();
    await homePage.selectBrand('Mast & Harbour');
    await homePage.selectProductByXPath("//div//div//div//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]");
    await productPage.setQuantity(5);
    await productPage.addToCart();
    await cartPage.viewCart();
  });
});
