# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: FullPractice.spec.js >> Login with Registration
- Location: tests\FullPractice.spec.js:2:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('text=August')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - paragraph [ref=e3]:
    - link "PMP Practice" [ref=e4] [cursor=pointer]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
    - link "Software Testing courses" [ref=e5] [cursor=pointer]
  - banner [ref=e10]:
    - navigation "Main navigation" [ref=e11]:
      - link "SUT" [ref=e12] [cursor=pointer]:
        - /url: /
        - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman." [ref=e13]'
        - text: Practice
      - generic [ref=e14]:
        - list [ref=e15]:
          - listitem [ref=e16]:
            - button "Demos" [ref=e17] [cursor=pointer]
          - listitem [ref=e18]:
            - link "Tools" [ref=e19] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e20]:
            - link "Tips" [ref=e21] [cursor=pointer]:
              - /url: /tips
          - listitem [ref=e22]:
            - link "Test Cases" [ref=e23] [cursor=pointer]:
              - /url: /test-cases
          - listitem [ref=e24]:
            - link "API Testing" [ref=e25] [cursor=pointer]:
              - /url: /notes/api/api-docs/
          - listitem [ref=e26]:
            - link "About" [ref=e27] [cursor=pointer]:
              - /url: /about
        - list
        - link "Free ISTQB Mock Exams" [ref=e28] [cursor=pointer]:
          - /url: https://istqb.expandtesting.com/
  - main [ref=e29]:
    - paragraph [ref=e34]:
      - text: Do you enjoy this platform? ❤️
      - link "Buy us a coffee" [ref=e35] [cursor=pointer]:
        - /url: https://www.buymeacoffee.com/expandtesting
    - generic [ref=e36]:
      - insertion [ref=e38]:
        - generic [ref=e41]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e43]: Discover more
          - link "Factory Automation" [ref=e44] [cursor=pointer]
          - link "Development Tools" [ref=e49] [cursor=pointer]
          - link "Computer Science" [ref=e54] [cursor=pointer]
          - link "Data Management" [ref=e59] [cursor=pointer]
          - link "Software" [ref=e64] [cursor=pointer]
          - link "Technical Reference" [ref=e69] [cursor=pointer]
          - link "data" [ref=e74] [cursor=pointer]
          - link "Web Design & Development" [ref=e79] [cursor=pointer]
      - generic [ref=e84]:
        - generic [ref=e86]:
          - navigation "breadcrumb mb-2" [ref=e87]:
            - list [ref=e88]:
              - listitem [ref=e89]:
                - link "Home" [ref=e90] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e91]: / Inputs
          - heading "Web inputs page for Automation Testing Practice" [level=1] [ref=e92]
          - generic [ref=e93]:
            - paragraph [ref=e94]:
              - text: Web inputs refer to the
              - link "data" [ref=e95] [cursor=pointer]:
                - /url: "#"
              - text: or information provided by users through various
              - link "input" [ref=e98] [cursor=pointer]:
                - /url: "#"
              - text: mechanisms on a website. Web inputs allow users to interact with web pages, submit forms, and provide data for processing.
              - link "Internet & Telecom" [ref=e101] [cursor=pointer]
            - generic [ref=e105]:
              - button "Display Inputs" [ref=e106] [cursor=pointer]
              - button "Clear Inputs" [ref=e107] [cursor=pointer]
          - generic [ref=e108]:
            - generic [ref=e109]:
              - generic [ref=e111]:
                - generic [ref=e112]: "Input: Number"
                - 'spinbutton "Input: Number" [ref=e113]'
              - generic [ref=e115]:
                - generic [ref=e116]: "Input: Text"
                - 'textbox "Input: Text" [ref=e117]'
              - generic [ref=e119]:
                - generic [ref=e120]: "Input: Password"
                - 'textbox "Input: Password" [ref=e121]'
              - generic [ref=e123]:
                - generic [ref=e124]: "Input: Date"
                - 'textbox "Input: Date" [active] [ref=e125]'
            - insertion [ref=e128]:
              - iframe [ref=e130]:
                - generic [ref=f10e1]:
                  - generic [ref=f10e3]:
                    - link:
                      - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CCmqCx56OasKPEfCPpt8PuP_KmA-h54iaiQGC0-rnwhW1kB8QASCVlJmjAWDlgoCAvA6gAZzwh8VByAECqAMByAPJBKoEhwJP0Nl10N0FIsTwZpnA0aMCmt772CCL7b1aIbrqMa4bJMTeKEfinbTZjL7PbELIyaciPb_k3TYh41H0RU7yR-fSDApxDUXRGeYTrNd4SuygwdGuO4W5ILywYKVSCo_urShhjRDZEtAbPgf2XKeeuKNOtrbFAHSD0P6qDpBqVe8f-9F9uATP29TFm0aLOeKcR4K3FM6X6RneSG5oIgyOqTzyLexwkuI5q551Z-TwsSDnrwxDusaFMuEFQRpPoeZJdOMaLRENnFIwz8NAfYSEUOZwJcE9sWEuwm98e51Yo6V6ZYKa6-gePRKc5ird9HK1PW-vo_tchYtoJpSEWbdQzS66uTrFodJ_z8AEmtS1s-oFiAWntqT7WaAGAoAHnKjYpByoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDIIgGEQARgfMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYhc2Psuu9lgNgAbEJvomwbqL83ieACgGYCwHICwGiDAOQAQGqDQJJTsgNAeoNEwj6kpGy672WAxXwh-kFHbi_EvPwDQKIDgnYEwPQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRICwlwYAiIBANAYAcIZAggB&ae=1&gclid=EAIaIQobChMIgo-Rsuu9lgMV8IfpBR24vxLzEAEYASAAEgLLb_D_BwE&num=1&cid=CAQS9QEAQM4h3O2Pu2ghRPENAfsoc-OKKTwiqLbk-nbJ4MmM5IXahM88pFUZJMbkVcWBZpu4FfoXrsz0vXiSylnbS-TpBLypIJde8Q3gPUfoqK_vP9I-nIL2eo1lfeWf9niZFCsVPxInwjRAwiVaNapfonMhmCFcJ-s2vQkVsS1DgDOuuTw0gTbgoWitXFPRgeFNgfNQdygLn50ZQI6v5Xc93e4LCBhJzHMLF0XFxlIWXdrJG9ZFG3wHygyaEfi1w7VV8qEzEBZ_HGxPwWQNX9V8aSealOTPwplwsb_SGHGAIc6Uc3iXD4NV_Vutie0cCcSgpTKO5ZFLThgB&sig=AOD64_0bFxZPvyxmwj2BecGopon-SE-naA&client=ca-pub-1056034821646296&rf=2&nb=2&adurl=https://www.flipkart.com/pova-8-pro-5g/p/itmdbdaacf8daef1%3Fpid%3DMOBHQFDZCEQNFCG3%26ocmpid%3DBrandAd_POVA_08pro_Google_DR_BNR%26gad_source%3D5%26gad_campaignid%3D24149302055%26gclid%3DEAIaIQobChMIgo-Rsuu9lgMV8IfpBR24vxLzEAEYASAAEgLLb_D_BwE
                    - generic [ref=f10e4] [cursor=pointer]
                    - button [ref=f10e9] [cursor=pointer]
                  - iframe
        - insertion [ref=e132]:
          - generic [ref=e135]:
            - heading "These are topics related to the article that might interest you" [level=2] [ref=e137]: Discover more
            - link "Input" [ref=e138] [cursor=pointer]
            - link "input" [ref=e143] [cursor=pointer]
            - link "Programming" [ref=e148] [cursor=pointer]
            - link "Input Devices" [ref=e153] [cursor=pointer]
            - link "Internet & Telecom" [ref=e158] [cursor=pointer]
            - link "Dictionaries & Encyclopedias" [ref=e163] [cursor=pointer]
            - link "WebdriverIO automation platform" [ref=e168] [cursor=pointer]
            - link "QA certification preparation" [ref=e173] [cursor=pointer]
  - contentinfo [ref=e178]:
    - generic [ref=e183]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=e184]
      - paragraph [ref=e185]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=e186] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - generic [ref=e187] [cursor=pointer]
```

# Test source

```ts
  15  | //   await expect(page.locator("#flash")).toHaveText("You logged into a secure area!");
  16  | //   await expect(page.locator(".icon-signout")).toBeVisible();
  17  |   //Logout
  18  | //   await page.locator(".icon-signout").click();
  19  | //   await expect(page.locator("#flash")).toHaveText("You logged out of the secure area!")
  20  |   //Radio Buttons
  21  |   // await page.goto("https://practice.expandtesting.com/radio-buttons");
  22  |   //negative testing..already checked and we verify its not checked
  23  | //   await expect(page.locator("#blue")).not.toBeChecked()
  24  |   //check radio button
  25  |   // await page.locator("#red").check();
  26  |   //Drag and drop
  27  |   // await page.goto("https://practice.expandtesting.com/drag-and-drop");
  28  |   // const source= await page.locator("#column-a")
  29  |   // const target = await page.locator("#column-b");
  30  |   // await source.dragTo(target);
  31  |   // await expect(page.locator("#column-a")).toHaveText("B");
  32  |   // await expect(page.locator("#column-b")).toHaveText("A");
  33  | 
  34  |   // drag and dropcircle
  35  |   // await page.goto("https://practice.expandtesting.com/drag-and-drop-circles");
  36  |   // const source1= await page.locator(".red")
  37  |   // const target1 = await page.locator("#target");
  38  |   // await source1.dragTo(target1);
  39  |   //File Upload
  40  |   // await page.goto("https://practice.expandtesting.com/upload");
  41  |   // await page.setInputFiles("#fileInput",'F:/New folder/New Microsoft Word Document (2).docx');
  42  |   // await page.getByRole('button',{name:'Upload'}).click()
  43  |   // await expect(page.locator('#uploaded-files')).toContainText('New Microsoft Word Document (2).docx');
  44  | //File Download  will see later
  45  | // await page.goto("https://practice.expandtesting.com/download")
  46  | // const [ download ] = await Promise.all([
  47  | //     page.waitForEvent('download'),
  48  | //     page.locator('a[href*="DNDAgentFile"]').click()
  49  | //   ]);
  50  | // const filePath = 'Downloads/1787616365647_DNDAgentFile.txt'  
  51  | // await download.saveAs(filePath)
  52  | 
  53  | // expect (fs.existsSync(filePath)).toBeTruthy();
  54  | 
  55  | //alert
  56  | // await page.goto("https://practice.expandtesting.com/js-dialogs");
  57  | // // Ok Alert
  58  | // await page.on('dialog', async dialog => {
  59  | //     console.log(dialog.message()); // prints the alert text
  60  | //     await dialog.accept();         // closes the alert
  61  | //   });
  62  | 
  63  | //   // Trigger the alert
  64  | //   await page.click('#js-alert');
  65  | // // cancel alert
  66  | // await page.on('dialog',async dialog=>{
  67  | //   console.log(dialog.message());
  68  | //   dialog.dismiss();
  69  | // })
  70  | // await page.click("#js-confirm")
  71  | //  expect (page.locator("#dialog-response")).toHaveText("Cancel")
  72  | // //Prompt Alert
  73  | // await page.on('dialog',async dialog=>{
  74  | //   console.log(dialog.message())
  75  | //   await dialog.accept("Welcome")
  76  |   
  77  | // })
  78  | // await page.click("#js-prompt")
  79  | // expect (page.locator("#dialog-response")).toHaveText("Welcome")
  80  | 
  81  | //CheckBox
  82  | // await page.goto("https://practice.expandtesting.com/checkboxes");
  83  | // const checkbox2= await page.getByText("Checkbox 2")
  84  | // if(!checkbox2.isChecked){
  85  | // await page.getByText("Checkbox 2").check()
  86  | // }
  87  | 
  88  | //DropDown
  89  | // await page.goto("https://practice.expandtesting.com/dropdown")
  90  | // await page.locator("#dropdown").selectOption("Option 1")
  91  | // await page.locator("#elementsPerPageSelect").selectOption("10")
  92  | // await page.locator("#country").selectOption("India")
  93  | 
  94  | //Web Input
  95  | await page.goto("https://practice.expandtesting.com/inputs")
  96  | //negative testing it should take number only
  97  | //await page.locator("#input-number").fill("mgsl;gm");
  98  | //positive testing
  99  | // await page.locator("#input-number").fill("325");
  100 | // await page.locator("#input-text").fill("vibha");
  101 | // await page.locator("#input-password").fill("sfd@435");
  102 | // await page.locator("#input-date").fill("2025-02-24");
  103 | // const inputNumber = await page.locator("#input-number").inputValue()
  104 | // const inputText = await page.locator("#input-text").inputValue()
  105 | // const inputDate = await page.locator("#input-date").inputValue()
  106 | // await page.getByRole('button',{name:'Display Inputs'}).click()
  107 | // await expect(page.locator("#output-number")).toHaveText(inputNumber)
  108 | // await expect(page.locator("#output-text")).toHaveText(inputText)
  109 | // await expect(page.locator("#output-date")).toHaveText(inputDate)
  110 | // console.log(inputNumber)
  111 | // console.log(inputText)
  112 | //for date picker
  113 | await page.locator("#input-date").click();
  114 | // Select month/year
> 115 | await page.locator('text=August').click();
      |                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  116 | await page.locator('text=2026').click();
  117 | 
  118 | // Select the day
  119 | await page.locator('text=26').click();
  120 | })
  121 | 
```