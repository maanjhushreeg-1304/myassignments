import test  from "@playwright/test";

//page fixture
test (`To Load Salesforce URL`, async ({page}) => {

    await page.goto ("https://login.salesforce.com/") // to visit the URL

    //Enter Username
    await page.locator('#username').fill(`maanjhushreegovindan1304@salesforcesandbox.com`); // enter unsername
    //Enter Password
    await page.locator('#password').fill(`Hope@1304#`); // enter password
    //Click Login
    await page.locator('#Login').click(); // click login

    await page.waitForTimeout(10000); // wait for 10 sec

    const URL=page.url(); // get page URL

    console.log(`The URL of the page is ${URL}`); // print URL

    const TITLE = await page.title(); // get page title

    console.log(`The Title of the page is ${TITLE}`); // print title

    await page.close();  // close the page
    
});