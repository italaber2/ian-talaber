import { test, expect } from "@playwright/test";

test("correct url", async ({ page }) => {
  await page.goto("https://not-xkcd.vercel.app/");

  await expect(page).toHaveURL("https://not-xkcd.vercel.app/");
});

// test("get started link", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Click the get started link.
//   await page.getByRole("link", { name: "Get started" }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(
//     page.getByRole("heading", { name: "Installation" })
//   ).toBeVisible();
// });
