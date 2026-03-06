import {test} from '@playwright/test';

test("Test-2",async({page,browserName})=>{
    await page.goto('https://www.icc-cricket.com/rankings');
    await page.locator('//button[contains(@id,"accept-btn")]').click();
    await page.locator('//a[@href="/rankings/batting/mens/odi"]//child::span').click();
    let rank = await page.locator('//span[text()="Virat"]/ancestor::tr/descendant::span[contains(@class," text-xs")]').textContent();
    console.log(rank);

    await page.screenshot({path:`Screenshot/task2${browserName}.png`})
    
})