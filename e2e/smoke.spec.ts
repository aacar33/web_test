import { expect, test } from "@playwright/test";

test.describe("smoke", () => {
  test("home page loads with title and heading", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/web_test/);
    await expect(page.getByTestId("app-title")).toHaveText("web_test");
  });
});
