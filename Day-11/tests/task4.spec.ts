import {test} from '@playwright/test';

test("Task4",async({page,browserName})=>{
    await page.goto('https://www.olympics.com/en/olympic-games/tokyo-2020');
    await page.locator('//button[@id="onetrust-accept-btn-handler"]').click();
    await page.locator('//a[@data-cy="link-button"]').click();
    let silver_medal = await page.locator('//div[@data-medal-id="silver-medals-row-2"]/span/span').textContent();
    console.log(silver_medal);
    
    await page.screenshot({path:`screenshot/task4${browserName}.png`});
})
