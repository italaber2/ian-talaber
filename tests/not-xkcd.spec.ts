import { test, expect } from "@playwright/test";

test("correct url", async ({ page }) => {
  await page.goto("https://iantalaber.com/");

  await expect(page).toHaveURL("https://iantalaber.com/");
});
