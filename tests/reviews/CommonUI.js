export class CommonUI {

    static async login(page){
        const encoded_credential = Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");

        await page.setExtraHTTPHeaders( {'Authorization': `Basic ${encoded_credential}`} );

        await page.goto(`${process.env.SEP_QA_URL}`);
        await page.waitForLoadState("networkidle");
       
    }

}