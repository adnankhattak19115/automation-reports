// import { Page, Locator } from '@playwright/test';

// export class HomePage {
//   readonly page: Page;
//   readonly menTshirtCategory: Locator;
//   readonly firstProduct: Locator;

//   constructor(page: Page) {
//     this.page = page;
//     this.menTshirtCategory = page.locator('a[href="#Men"]');
//     this.firstProduct = page.locator('a[href="/category_products/3"]');
//   }

//   async goto() {
//   await this.page.goto('https://automationexercise.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });
//     }


//   async selectMenTshirtCategory() {
//     await this.menTshirtCategory.click();
//   }

//   async openFirstProduct() {
//     await this.firstProduct.click();
//   }
// }


import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://automationexercise.com');
  }

  async selectBrand(brandName: string) {
    await this.page.locator(`//a[@href='/brand_products/${brandName}']`).click();
  }

  async selectProductByXPath(xpath: string) {
    await this.page.locator(xpath).click();
  }
}
