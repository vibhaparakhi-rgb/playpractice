const{test,expect}=require("@playwright/test")
test("login",async({page})=>{
    await page.goto("https://demoqa.com/")
    await expect(page).toHaveURL("https://demoqa.com");
    await page.getByText("Forms").click()
    await page.locator("#item-0").nth(0).click()
})