import {test,expect} from "@playwright/test"

test("Task-1",async({page,browserName})=>{
    await page.setDefaultTimeout(20000);
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");

    expect(page.locator('//h1')).toHaveText("Register");
    await page.getByLabel("Name").fill("Uday");

    await expect(page.getByText("Email Id")).toBeVisible();

    await page.getByLabel("Email Id").fill("example@gmail.com");
    
    await page.getByLabel("Password").fill("123456");

    await page.getByRole("button").nth(1).click();

    expect(page.locator('//h1')).toHaveText("Login");

    await page.getByLabel("Email Id").fill("example@gmail.com");
    await page.getByLabel("Password").fill("123456");

    await page.screenshot({path:`Screenshot/task1${browserName}.png`})
})