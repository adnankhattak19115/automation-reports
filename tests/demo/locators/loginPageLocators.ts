// tests/demo/locators/loginPageLocators.ts
export const loginLocators = {
  homePageLogo: "//img[@alt='Website for automation practice']",
  signupLoginBtn: "//a[normalize-space()='Signup / Login']",
  loginHeader: "//h2[normalize-space()='Login to your account']",
  emailInput: "//input[@data-qa='login-email']",
  passwordInput: "//input[@placeholder='Password']",
  loginBtn: "//button[normalize-space()='Login']",
  loggedInAsText: "//p[normalize-space()='Your email or password is incorrect!']",
};
