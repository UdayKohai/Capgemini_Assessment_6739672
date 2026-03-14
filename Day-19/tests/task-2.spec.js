import { test, expect } from "@playwright/test";
import fs from 'fs';
import path from "path";

let datafile = fs.readFileSync(path.join(__dirname,'../testdata/data2.json')); 
let data = JSON.parse(datafile);


test('task-2 form filling', async({page,browserName})=>{

    

    for(let student of data){
        let url = student.url;
        let name = student.firstName;
        let lname = student.lastName;
        let email = student.email;
        let gender = student.gender;
        let mobile = student.mobile
        let DOB = student.dob;
        let hobbie = student.hobbie;
        let picture = student.picture;
        let address = student.address;
        let state = student.state;
        let city = student.city;


        await page.goto(url);

        await page.getByPlaceholder('First Name').fill(name);
        await page.getByPlaceholder('Last Name').fill(lname);
        await page.getByPlaceholder('name@example.com').fill(email);

        if(gender == 'Male'){
            await page.locator('#gender-radio-1').click();
        }
        if(gender == 'Female'){
            await page.locator('#gender-radio-2').click();
        }
        if(gender == 'Others'){
            await page.locator('#gender-radio-3').click();
        }

        await page.getByPlaceholder('Mobile Number').fill(mobile);

        await page.locator('#dateOfBirthInput').fill(DOB);
        await page.keyboard.press("Tab");

        for(let h in hobbie){
            if(h == 'Sports'){
            await page.getByLabel('Sports').click();
            }
            if(h == 'Reading'){
                await page.getByLabel('Reading').click();
            }
            if(h == 'Music'){
                await page.getByLabel('Music').click();
            }
        }

        await page.locator('#uploadPicture').setInputFiles(picture);

        await page.getByPlaceholder('Current Address').fill(address);

        await page.locator('#state').click();
        await page.getByText(state).click();

        await page.locator('#city').click();
        await page.getByText(city).click();

        await page.getByRole('button',{name:'Submit'}).scrollIntoViewIfNeeded();
        await page.getByRole('button',{name:'Submit'}).click();

        await page.screenshot({path:`Screenshot/task2${name}${browserName}.png`});
        await page.waitForTimeout(2000);

    }
})

