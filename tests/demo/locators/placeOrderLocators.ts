export const placeOrderLocators = {
  homePageLogo: "img[src='/static/images/home/logo.png']",
  addToCartBtn: "//div[@class='features_items']//div[2]//div[1]//div[1]//div[2]//div[1]//a[1]",
  viewCartBtn: "//u[normalize-space()='View Cart']",
  cartPageHeader: "//section[@id='cart_items']",
  proceedToCheckoutBtn: "//a[normalize-space()='Proceed To Checkout']",
  registerLoginBtn: "//u[normalize-space()='Register / Login']",
  accountCreatedText: "//b[normalize-space()='Account Created!']",
  continueBtn: "//a[normalize-space()='Continue']",
  loggedInAsText: "//li[10]//a[1]",
  cartNavBtn: "//li[3]/a", // header cart icon
  addressDetailsHeader: "//h2[normalize-space()='Address Details']",
  reviewOrderHeader: "//h2[normalize-space()='Review Your Order']",
  messageTextarea: "textarea[name='message']",
  placeOrderBtn: "//a[normalize-space()='Place Order']",
  nameOnCardInput: "//input[@name='name_on_card']",
  cardNumberInput: "//input[@name='card_number']",
  cvcInput: "//input[@placeholder='ex. 311']",
  expiryMonthInput: "//input[@placeholder='MM']",
  expiryYearInput: "//input[@placeholder='YYYY']",
  payAndConfirmBtn: "#submit",
  successMessage: "p:has-text('Your order has been placed successfully!')"
};
