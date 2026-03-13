import { test, expect } from "@playwright/test";
import path from "node:path";

test("Task -3 File Upload Test", async({page,browserName}) => {

    await page.goto("https://the-internet.herokuapp.com/upload");

    const filePath = path.join(__dirname, "upload/sample.txt");

    await page.locator('//input[@id="file-upload"]').setInputFiles(filePath);
    await page.locator('//input[@id="file-submit"]').click();

    await expect(page.locator("//h3")).toContainText("File Uploaded");
    await expect(page.locator('//div[@id="uploaded-files"]')).toContainText("sample.txt");

    await page.screenshot({path:`Screenshot/task3${browserName}.png`})

});