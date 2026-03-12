import { test, expect } from "@playwright/test";

test("Task-2", async({browser, browserName}) => {
    const context = await browser.newContext({
        permissions: ["notifications"]
    });

    const page = await context.newPage();

    await page.goto("https://www.justdial.com");

    let result = await page.evaluate(()=>{
        return Notification.requestPermission();
    });

    console.log(result);

    const searchBox = page.getByRole('combobox').nth(1);

    await expect(searchBox).toBeVisible();

    await searchBox.fill("Restaurants");

    await page.keyboard.press("Enter");

    await expect(page).toHaveURL(/Restaurants/);

    console.log("Restaurant search results page displayed");

    await page.screenshot({path:`Screenshot/task2${browserName}.png`});
});