import {test} from '@playwright/test'



   test.beforeEach (async({page}) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();

   })

    test('the first ', async ({page}) => {
        await page.getByText('Form Layouts').click();

    })

    test('Navigate to datepicker page ', async ({page}) => {
        await page.getByText('DatePicker').click();

    })
   
