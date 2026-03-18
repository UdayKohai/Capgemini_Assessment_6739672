import {test,expect} from '@playwright/test'
import task1 from "../ProjectObjectModel/task-1.page.ts";
import fs from 'fs';
import path from 'path';

let datafile = fs.readFileSync(path.join(__dirname,'../testdata/data.json')); 
let data = JSON.parse(datafile);


test("Task-1",async({page,browserName})=>{
    let url = data.url;
    let path = data.filepath;
    let filename = data.filename;

    let task = new task1(page);

    await page.goto(url);
    await task.uploadfile(path);
    await task.cleckfile(filename,expect);

    await page.screenshot({path:`Screenshot/task1${browserName}.png`});

})