import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

let datafile = fs.readFileSync(path.join(__dirname,'../testdata/data4.json')); 
let data = JSON.parse(datafile);

test("Book store JSON automation", async ({ page , browserName}) => {

    for (let user of data) {
        let url = user.url;
        let fname = user.firstname;
        let lname = user.lastname;
        let username = user.username;
        let password = user.password;
        let book = user.book;

        await page.goto(url);
        await page.getByRole("button",{name:"Login"}).click();


        await page.getByText("New User").click();

        await page.getByPlaceholder("First Name").fill(fname);
        await page.getByPlaceholder("Last Name").fill(lname);
        await page.getByPlaceholder("UserName").fill(username);
        await page.getByPlaceholder("Password").fill(password);
        await page.getByRole('button',{name:'Register'}).click();

        await page.getByRole('button',{name:'Back to Login'}).click();

        page.once("dialog", async dialog => {
            await dialog.accept();
        });

        await page.getByPlaceholder("UserName").fill(username);
        await page.getByPlaceholder("Password").fill(password);

        await page.getByRole("button",{name:"Login"}).click();

        await page.getByText("Go To Book Store").click();

        await page.getByPlaceholder("Type to search").fill(book);

        await page.locator(`//a[text()="${book}"]`).click();

        await page.getByRole("button",{name:"Add To Your Collection"}).click();

        await page.getByText("Profile").click();

        await expect(page.getByText(book)).toBeVisible();
        await page.getByRole("button",{name:"Logout"}).click();

        await expect(page.getByRole("button",{name:"Login"})).toBeVisible();
        
        await page.screenshot({path:`Screenshot/task4${fname}${browserName}.png`});
        await page.waitForTimeout(2000);
    }

});