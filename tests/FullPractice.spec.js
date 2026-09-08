const{test,expect}=require("@playwright/test");
test("Login with Registration", async({page})=>{
    //Registration
//   await page.goto("https://practice.expandtesting.com/register");
//   await page.locator("#username").fill("vibhap");
//   await page.locator("#password").fill("password12");
//   await page.locator("#confirmPassword").fill("password12");
//   await page.getByRole('button',{name:'register'}).click();
//   await expect(page.locator("#flash")).toHaveText("Successfully registered, you can log in now.");
  //Login  
//   await page.goto("https://practice.expandtesting.com/login")
//   await page.locator("#username").fill("vibhap");
//   await page.locator("#password").fill("password12");
//   await page.getByRole('button',{name:'Login'}).click();
//   await expect(page.locator("#flash")).toHaveText("You logged into a secure area!");
//   await expect(page.locator(".icon-signout")).toBeVisible();
  //Logout
//   await page.locator(".icon-signout").click();
//   await expect(page.locator("#flash")).toHaveText("You logged out of the secure area!")
  //Radio Buttons
  // await page.goto("https://practice.expandtesting.com/radio-buttons");
  //negative testing..already checked and we verify its not checked
//   await expect(page.locator("#blue")).not.toBeChecked()
  //check radio button
  // await page.locator("#red").check();
  //Drag and drop
  // await page.goto("https://practice.expandtesting.com/drag-and-drop");
  // const source= await page.locator("#column-a")
  // const target = await page.locator("#column-b");
  // await source.dragTo(target);
  // await expect(page.locator("#column-a")).toHaveText("B");
  // await expect(page.locator("#column-b")).toHaveText("A");

  // drag and dropcircle
  // await page.goto("https://practice.expandtesting.com/drag-and-drop-circles");
  // const source1= await page.locator(".red")
  // const target1 = await page.locator("#target");
  // await source1.dragTo(target1);
  //File Upload
  // await page.goto("https://practice.expandtesting.com/upload");
  // await page.setInputFiles("#fileInput",'F:/New folder/New Microsoft Word Document (2).docx');
  // await page.getByRole('button',{name:'Upload'}).click()
  // await expect(page.locator('#uploaded-files')).toContainText('New Microsoft Word Document (2).docx');
//File Download  will see later
// await page.goto("https://practice.expandtesting.com/download")
// const [ download ] = await Promise.all([
//     page.waitForEvent('download'),
//     page.locator('a[href*="DNDAgentFile"]').click()
//   ]);
// const filePath = 'Downloads/1787616365647_DNDAgentFile.txt'  
// await download.saveAs(filePath)

// expect (fs.existsSync(filePath)).toBeTruthy();

//alert
// await page.goto("https://practice.expandtesting.com/js-dialogs");
// // Ok Alert
// await page.on('dialog', async dialog => {
//     console.log(dialog.message()); // prints the alert text
//     await dialog.accept();         // closes the alert
//   });

//   // Trigger the alert
//   await page.click('#js-alert');
// // cancel alert
// await page.on('dialog',async dialog=>{
//   console.log(dialog.message());
//   dialog.dismiss();
// })
// await page.click("#js-confirm")
//  expect (page.locator("#dialog-response")).toHaveText("Cancel")
// //Prompt Alert
// await page.on('dialog',async dialog=>{
//   console.log(dialog.message())
//   await dialog.accept("Welcome")
  
// })
// await page.click("#js-prompt")
// expect (page.locator("#dialog-response")).toHaveText("Welcome")

//CheckBox
// await page.goto("https://practice.expandtesting.com/checkboxes");
// const checkbox2= await page.getByText("Checkbox 2")
// if(!checkbox2.isChecked){
// await page.getByText("Checkbox 2").check()
// }

//DropDown
// await page.goto("https://practice.expandtesting.com/dropdown")
// await page.locator("#dropdown").selectOption("Option 1")
// await page.locator("#elementsPerPageSelect").selectOption("10")
// await page.locator("#country").selectOption("India")

//Web Input
await page.goto("https://practice.expandtesting.com/inputss")
//negative testing it should take number only
//await page.locator("#input-number").fill("mgsl;gm");
//positive testing
// await page.locator("#input-number").fill("325");
// await page.locator("#input-text").fill("vibha");
// await page.locator("#input-password").fill("sfd@435");
// await page.locator("#input-date").fill("2025-02-24");
// const inputNumber = await page.locator("#input-number").inputValue()
// const inputText = await page.locator("#input-text").inputValue()
// const inputDate = await page.locator("#input-date").inputValue()
// await page.getByRole('button',{name:'Display Inputs'}).click()
// await expect(page.locator("#output-number")).toHaveText(inputNumber)
// await expect(page.locator("#output-text")).toHaveText(inputText)
// await expect(page.locator("#output-date")).toHaveText(inputDate)
// console.log(inputNumber)
// console.log(inputText)


})
