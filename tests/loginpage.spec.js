import { test, expect } from '@playwright/test';

// Global locators
const locators = {
  usernameField: (page) => page.getByRole('textbox', { name: 'Username:' }),
  passwordField: (page) => page.getByRole('textbox', { name: 'Password:' }),
  termsCheckbox: (page) => page.getByRole('checkbox', { name: 'I Agree to the terms and' }),
  signInButton: (page) => page.getByRole('button', { name: 'Sign In' }),
  iPhoneLink: (page) => page.getByRole('link', { name: 'iphone X' }),
  submitButton: (page) => page.getByRole('button', { name: 'Submit' })
};

test('Login and Purchase iPhone', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  
  // Wait for page to load
  await page.waitForLoadState('networkidle');
  
  // Fill username
  await locators.usernameField(page).fill('rahulshettyacademy');
  
  // Fill password
  await locators.passwordField(page).fill('Learning@830$3mK2');
  
  // Check terms and conditions
  await locators.termsCheckbox(page).check();
  
  // Click Sign In button
  await locators.signInButton(page).click();
  
  // Wait for navigation
  await page.waitForLoadState('networkidle');
  
  // Click on iPhone X product
  await locators.iPhoneLink(page).click();
  
  // Wait and click Submit button
  await page.waitForLoadState('networkidle');
  await locators.submitButton(page).click();
});