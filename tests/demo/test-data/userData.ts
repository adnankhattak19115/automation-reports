// tests/demo/test-data/SignupUserData.ts
export const SignupUserData = {
  name: "Adnan Khattak",
  email: "adnanmalik@carecloud.com",
  password: "12345678",
  dob: { day: "15", month: "March", year: "2005" },
  firstName: "Adnan",
  lastName: "Khattak",
  company: "abc",
  country: "India",
  state: "abc",
  city: "abc",
  zipcode: "12345",
  mobileNumber: "12345678"
};

// tests/demo/test-data/userLoginData.ts
export const LoginUserData = {
  email: "adnanmalik@carecloud.com",
  password: "12345678", // typo assumed intentional
  username: "Adnan Khattak"
};

// tests/demo/test-data/userLoginData.ts
export const InCorrectLoginUserData = {
  email: "afnan@carecloud.com",
  password: "145678", // typo assumed intentional
  Error: "Your email or password is incorrect!"
};