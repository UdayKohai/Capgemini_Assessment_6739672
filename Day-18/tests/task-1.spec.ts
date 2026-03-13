import {test} from '@playwright/test'
import excel from 'exceljs'
import path from 'node:path';

test('exel form', async({page,browserName})=>{
    let book = new excel.Workbook(); 
        await book.xlsx.readFile(path.join(__dirname,'../testdata/task-1.xlsx'));
        let sheet = await book.getWorksheet("Sheet1");
        let row = sheet?.actualRowCount;
        let col = sheet?.actualColumnCount;
        let url = 'https://demoqa.com/automation-practice-form';

        console.log(await sheet?.getRow(2).getCell(2).toString());
        

        for(let i=2; i<=row; i++){
            let name = await sheet?.getRow(i).getCell(1).toString();
            let lname = await sheet?.getRow(i).getCell(2).toString();
            let email = await sheet?.getRow(i).getCell(3).toString();
            let gender = await sheet?.getRow(i).getCell(4).toString();
            let mobile = await sheet?.getRow(i).getCell(5).toString();
            let DOB = await sheet?.getRow(i).getCell(6).toString();
            let Subject = await sheet?.getRow(i).getCell(7).toString();
            let hobbie = await sheet?.getRow(i).getCell(8).toString();
            let Pick = await sheet?.getRow(i).getCell(9).toString();
            let currad = await sheet?.getRow(i).getCell(10).toString();
            let state = await sheet?.getRow(i).getCell(11).toString();
            let city = await sheet?.getRow(i).getCell(12).toString();
            // let name = await sheet?.getRow(i).getCell(13).toString();

            await page.goto(url);
            await page.getByPlaceholder('First Name').fill(name);
            await page.getByPlaceholder('Last Name').fill(lname);
            await page.getByPlaceholder('name@example.com').fill(email);

            if(gender == 'Male'){
                await page.locator('#gender-radio-1').click();
            }
            if(gender == 'Feale'){
                await page.locator('gender-radio-2').click();
            }
            if(gender == 'Other'){
                await page.getByLabel('Other').click();
            }

            await page.getByPlaceholder('Mobile Number').fill(mobile);
            await page.locator('#dateOfBirthInput').fill(DOB);
            await page.keyboard.press("Tab");

            await page.keyboard.insertText(Subject);
            await page.keyboard.press("Tab");


            if(hobbie == 'Sports'){
                await page.getByLabel('Sports').click();
            }
            if(hobbie == 'Reading'){
                await page.getByLabel('Reading').click();
            }
            if(hobbie == 'Music'){
                await page.getByLabel('Music').click();
            }

            // await page.getByPlaceholder('Select picture').fill(Pick);
            await page.getByPlaceholder('Current Address').fill(currad);
            await page.locator('#state').click();
            await page.getByText(state).click();

            await page.locator('#city').click();
            await page.getByText(city).click();
            await page.getByRole('button',{name:'Submit'}).scrollIntoViewIfNeeded();
            await page.getByRole('button',{name:'Submit'}).click();


            await page.screenshot({
                path:`Screenshot/task1data${i}${browserName}.png`
            });
        }
})