import { test, expect } from "@playwright/test";

test("Handle JS Alerts", async ({page,browserName})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.once("dialog", async(d)=>{
        console.log(d.message());
        await d.accept();
    });

    await page.getByText("Click for JS Alert").click();

    await expect(page.locator('//p[@id="result"]')).toHaveText("You successfully clicked an alert");

    page.once("dialog", async(d)=>{
        console.log(d.message());
        await d.dismiss();
    });

    await page.getByText("Click for JS Confirm").click();

    await expect(page.locator('//p[@id="result"]')).toHaveText("You clicked: Cancel");

    page.once("dialog", async(d)=> {
        console.log(d.message());
        await d.accept("Playwright Testing");
    });

    await page.getByText("Click for JS Prompt").click();

    await expect(page.locator('//p[@id="result"]')).toHaveText("You entered: Playwright Testing");
    
    await page.screenshot({path:`Screenshot/task3${browserName}.png`});
});