import {test} from '@playwright/test';

test("Task-2",async({page,browserName})=>{
    // await page.goto('https://www.google.com/');
    // await page.locator('//textarea[@class="gLFyf"]').fill('tokyo olympics');
    // await page.locator('(//input[@class="gNO89b"])').first().click();
    // await page.locator('//span[text()="Tokyo 2020 Summer Olympics - Athletes, Medals & Results"]').click();
    await page.goto('https://www.olympics.com/en/olympic-games/tokyo-2020');
    await page.locator('//button[@id="onetrust-accept-btn-handler"]').click();
    await page.locator('//a[text()="All Athletes"]/child::button').click();
    let medal = await page.locator('//h3[contains(text(),"ZHANG")]/ancestor::li/descendant::div[@title="Silver"]/descendant::span[@data-cy="ocs-text-module"]').textContent();
    console.log("Silver Medal = ",medal);

    await page.screenshot({path:`Screenshot/task2${browserName}.png`})
    

})