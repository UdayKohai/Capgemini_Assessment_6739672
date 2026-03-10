import {test} from '@playwright/test'

test("test2", async({page,browserName})=>{
    await page.goto('https://mail.google.com/');
    await page.locator('//div[@jscontroller="eIu7Db"]').click();
    // await page.locator('//input[@id=":v5"]').hover();
    // await page.mouse.click();
    await page.keyboard.type('yagikshrimal.cse26@jecrc.ac.in');
    await page.keyboard.press('Tab');
    // await page.keyboard.type('yagikshrimal.cse26@jecrc.ac.in');
    // await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.type('Uday Mathur Sends his regards.');
    await page.keyboard.press('Tab');
    await page.keyboard.insertText('Hope you are well brother.');
    await page.keyboard.press('Enter');
    await page.keyboard.insertText('Thanking you,');
    await page.keyboard.press('Enter');
    await page.keyboard.insertText('yours truly,');
    await page.keyboard.press('Enter');
    await page.keyboard.insertText('Uday Mathur');
    await page.keyboard.press('Enter');

    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    await page.screenshot({path:`ScreenShot/task-2${browserName}.png`});
})