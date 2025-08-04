// import { Page, Locator } from '@playwright/test';

// export class ProductPage {
//   readonly page: Page;
//   readonly addToCartButton: Locator;

//   constructor(page: Page) {
//     this.page = page;
//     this.addToCartButton = page.locator('a[data-product-id="2"].add-to-cart').first(); // adjust selector
//   }

//   async addToCart() {
//     await this.addToCartButton.click();
//   }
// }


import { Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async setQuantity(quantity: number) {
    await this.page.locator("//input[@id='quantity']").fill(quantity.toString());
  }

  async addToCart() {
    await this.page.locator("//button[normalize-space()='Add to cart']").click();
  }
}
