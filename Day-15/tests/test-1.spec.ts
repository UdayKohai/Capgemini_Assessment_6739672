import {test} from '@playwright/test'

test("test1", async({page,browserName})=>{
    await page.goto('https://www.lenskart.com/');
    await page.locator('//a[@id="lrd9"]').hover();
    await page.locator('//img[contains(@src,"bengalore")]').hover();
    await page.mouse.down();
    await page.mouse.up();

    await page.waitForTimeout(6000);
    await page.screenshot({path:`ScreenShot/task-1${browserName}.png`})
})