import { test, expect } from '@playwright/test'

test('Test-2', async ({ page, browserName }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.keyboard.press('Tab');
    await page.keyboard.insertText('secret_sauce');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    await page.getByTestId('product-sort-container').selectOption({ label: 'Price (low to high)' });

    let prices = await page.getByTestId('inventory-item-price').all();
    let prevPrice = Number((await prices[0].textContent()).slice(1));

    for (let i = 1; i < prices.length; i++) {
        let currentPrice = Number((await prices[i].textContent()).slice(1));
        expect(currentPrice).toBeGreaterThanOrEqual(prevPrice);
        prevPrice = currentPrice;
    }

    await page.getByTestId('add-to-cart-sauce-labs-onesie').first().click();
    await expect(page.getByTestId('remove-sauce-labs-onesie')).toBeVisible();

    await expect(page.getByTestId('shopping-cart-badge')).toHaveText('1');

    await page.screenshot({path:`Screenshot/test2${browserName}.png`});

    await page.waitForTimeout(4000);
    
})