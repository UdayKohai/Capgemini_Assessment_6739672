class task1{
    chooseFileBtn:any;
    uploadBtn:any;
    uploadedFile:any;

    constructor(page){
        this.chooseFileBtn = page.locator('//input[@id="file-upload"]');
        this.uploadBtn = page.locator('//input[@id="file-submit"]');
        this.uploadedFile = page.locator('//div[@id="uploaded-files"]');
    }

    async uploadfile(p){
        await this.chooseFileBtn.setInputFiles(p);
        await this.uploadBtn.click();
    }

    async cleckfile(f,expect){
        await expect(this.uploadedFile).toHaveText(f);
    }
}

export default task1;