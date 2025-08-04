//         import { Page, Locator } from '@playwright/test';

// export class CartPage {
//   readonly page: Page;
//   readonly proceedToCheckoutBtn: Locator;
//   readonly continueOnCartBtn: Locator;

//   constructor(page: Page) {
//     this.page = page;
//     this.proceedToCheckoutBtn = page.getByText('Proceed To Checkout');
//     this.continueOnCartBtn = page.getByRole('button', { name: 'Continue On Cart' });
//   }

//   async proceedToCheckout() {
//     await this.proceedToCheckoutBtn.click();
//   }

//   async continueOnCart() {
//     await this.continueOnCartBtn.click();
//   }
// }


import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async viewCart() {
    await this.page.locator("//u[normalize-space()='View Cart']").click();
  }
}
