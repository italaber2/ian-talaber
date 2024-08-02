import { test, expect } from "@playwright/test";

test("correct url", async ({ page }) => {
  await page.goto("https://iantalaber.com/");
  await expect(page).toHaveURL("https://iantalaber.com/");
});

test("skills page button", async ({ page }) => {
  await page.goto("https://iantalaber.com/");
  await page.getByTestId("dynamic-link").click();
  await expect(page.getByTestId("line-graph")).toBeVisible();
  await page.getByTestId("dynamic-link").click();
  await expect(page.getByTestId("header-banner")).toBeVisible();
});

test("skills page banner", async ({ page }) => {
  await page.goto("https://iantalaber.com/");
  await page.getByTestId("dynamic-link").click();
  await expect(page.getByTestId("line-graph")).toBeVisible();
  await page.getByTestId("header-banner").click();
  await expect(page.getByTestId("github-link")).toBeVisible();
});

test.describe("Test link behavior when it opens in a new tab", () => {
  test("should open link in a new tab and verify the URL", async ({
    browser,
  }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://iantalaber.com/");

    const [newPage] = await Promise.all([
      context.waitForEvent("page"),
      page.click('[data-testid="github-link"]'),
    ]);

    await newPage.waitForLoadState();

    expect(newPage.url()).toBe("https://github.com/italaber2");
  });
});
