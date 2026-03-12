import { test, expect } from "@playwright/test";

test("Amazon New Tab Handling", async ({ browser,browserName }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.amazon.in/");

    await page.locator('#twotabsearchtextbox').fill("Samsung Mobile");
    await page.locator('#nav-search-submit-button').click();

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('//img[@class="s-image"]').first().click()
    ]);

    console.log("New tab URL:", await newPage.url());

    const title = await newPage.locator('//span[@id="productTitle"]').textContent();
    console.log("Product Title:", title);

    await expect(newPage.locator('//span[@id="productTitle"]')).toBeVisible();

    await newPage.screenshot({path:`Screenshot/task1page2${browserName}.png`});
    
    console.log("Back to original tab:", await page.url());

    

    await page.screenshot({path:`Screenshot/task1page1${browserName}.png`});

});