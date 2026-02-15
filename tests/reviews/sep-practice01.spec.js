import { test, expect } from "@playwright/test";

test.describe("Start Application Page @sep01", () => {

  test.beforeEach(async ({ page }) => {
    
    const encoded_credential = Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");

    await page.setExtraHTTPHeaders( {'Authorization': `Basic ${encoded_credential}`} );

    await page.goto(`${process.env.SEP_QA_URL}`);

  });

  test("Verify that clicking the Terms & Conditions link opens a new Terms & Conditions tab", async ({
    page,
  }) => {


  });

  test("Verify that the first stepper is blue initially and changes to green once Step 1 is completed.", async ({
    page,
  }) => {


  });

  test("Verify that personal input fields are enabled and accept user input", async ({
    page,
  }) => {


  });



});
