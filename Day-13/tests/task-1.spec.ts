import {test} from '@playwright/test';

test("Test-1",async({page,browserName})=>{
    await page.goto('https://www.icc-cricket.com/rankings');
    await page.locator('//button[contains(@id,"accept-btn")]').click();
    await page.locator('//a[contains(@href,"batting/womens/odi")]/child::span').click();
    let rank = await page.locator('//span[text()="Harmanpreet"]/ancestor::tr/descendant::span[contains(@class," text-xs")]').textContent();
    console.log(rank);

    await page.screenshot({path:`Screenshot/task1${browserName}.png`})
    
})