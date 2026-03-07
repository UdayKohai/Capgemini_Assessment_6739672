import {test} from '@playwright/test'

test("Task-3",async({page,browserName})=>{
    await page.goto('https://www.cricbuzz.com/');
    await page.locator('//a[@title="Live Cricket Score"]').click();
    await page.locator('//a[contains(@class,"p-3 gap-1")]').first().click();
    await page.locator('//a[@title="Scorecard"]').click();
    let score = await page.locator('//a[text()="Muhammad Haziq Aiman (wk)"]/../../child::div[@class="flex justify-center items-center font-bold text-sm  wb:text-sm"]').first().textContent();
    console.log("Score = ",score);
    
    await page.screenshot({path:`Screenshot/task3${browserName}.png`})
})