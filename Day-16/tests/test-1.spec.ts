import {test,expect} from '@playwright/test'

test('Test-1', async({page,browserName})=>{
    await page.goto('https://www.automationtesting.co.uk/dropdown.html');
    const dropdown = page.locator("#cars");
    await expect(dropdown).toBeVisible();

    const options = await page.locator("#cars option").allTextContents();

    console.log("Actual dropdown options:", options);

    const expectedOptions = [
        "Audi",
        "BMW",
        "Ford",
        "Honda",
        "Jeep",
        "Mercedes",
        "Suzuki",
        "Volkswagen"
    ];

    expect(options.length).toBe(expectedOptions.length);

    expect(options).toEqual(expectedOptions);

    for (let i = 0; i < options.length; i++) {
    for (let j = i + 1; j < options.length; j++) {
        expect(options[i]).not.toBe(options[j]);
    }
}

    await dropdown.selectOption({ label: "Audi" });
    await expect(dropdown).toHaveValue("audi");

    await page.screenshot({path:`Screenshot/test1${browserName}.png`});
})