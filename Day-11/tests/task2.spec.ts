import {test} from '@playwright/test'

test("test2",async({page,browserName})=>{
    await page.goto("https://www.flipkart.com/");
    await page.locator('//span[@class="b3wTlE"]').click();
    await page.locator('//input[@class="nw1UBF v1zwn25"]').first().fill("Phones");
    await page.locator('(//button[@class="XFwMiH"])').first().click();
    await page.locator('(//div[@class="ybaCDx"])').first().click();
    let price = await page.locator('(//div[@class="hZ3P6w DeU9vF"])').nth(3).textContent();
    console.log(price);
    await page.screenshot({path:`screenshot/task2${browserName}.png`})
    
})