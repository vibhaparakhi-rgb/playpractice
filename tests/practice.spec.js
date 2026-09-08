const{test,expect}=require("@playwright/test")
test("new login", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page).toHaveTitle("OrangeHRM")
    await page.locator('input[name="username"]').fill("Admin")
    await page.locator('input[type="password"]').fill("admin123")
    await page.getByText("Login").nth(2).click()
    //await page.getByText("Admin")

})