import { test, firefox } from "@playwright/test";

test("Context Fixture Example @context-fixture", async ({ context }) => {
  let page1 = await context.newPage();
  await page1.goto("https://practice.cydeo.com/");

  let page2 = await context.newPage();
  const encoded_credential = Buffer.from(
    `${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`,
  ).toString("base64");

  await page2.setExtraHTTPHeaders({
    Authorization: `Basic ${encoded_credential}`,
  });

  await page2.goto(`${process.env.SEP_QA_URL}`);

  let page3 = await context.newPage();
  await page3.goto("https://cydeo.com/");

  await page1.bringToFront();
  await page1.waitForTimeout(3000);

  await page2.bringToFront();
  await page2.waitForTimeout(3000);

  await page3.bringToFront();
  await page3.waitForTimeout(3000);
});

test("Browser Fixture Example @browser-fixture", async ({ browser }) => {
  let context1 = await browser.newContext();

  let page1 = await context1.newPage();
  await page1.goto("https://practice.cydeo.com/");

  let page2 = await context1.newPage();
  const encoded_credential = Buffer.from(
    `${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`,
  ).toString("base64");
  await page2.setExtraHTTPHeaders({
    Authorization: `Basic ${encoded_credential}`,
  });
  await page2.goto(`${process.env.SEP_QA_URL}`);

  let context2 = await browser.newContext();

  let page3 = await context2.newPage();
  await page3.goto("https://cydeo.com/");

  await page3.waitForTimeout(3000);
});

test("Custom Configurations @custom-fixture", async () => {
  let browser = await firefox.launch();

  let context = await browser.newContext();

  let page = await context.newPage();

  await page.goto("https://cydeo.com/");

  await page.waitForTimeout(3000);
  
});
