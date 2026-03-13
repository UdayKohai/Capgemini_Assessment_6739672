import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

test("Task-2 Upload Download", async({page,browserName}) => {

    await page.goto("https://demoqa.com/upload-download");

    const [download] = await Promise.all([
        page.waitForEvent("download"),
        page.locator("#downloadButton").click()
    ]);

    let downloadfolder = 'C:/Users/udaim/OneDrive/Desktop/PlayWright/webpage/assignment/Day-11/Day-18/Download';
    const filePath = path.join(downloadfolder, download.suggestedFilename());
    await download.saveAs(filePath);

    console.log("Downloaded file:", filePath);


    await page.locator("#uploadFile").setInputFiles(filePath);


    await expect(page.locator("#uploadedFilePath"))
        .toContainText(download.suggestedFilename());

    await page.screenshot({path:`Screenshot/task2${browserName}.png`})

});