import { test, expect } from '@playwright/test';
import {AllActions} from '../../PagesAndActions/AllActions';



test('Giving Web Inputs', async({page}) => {
    await page.goto('https://practice.expandtesting.com/inputs');
    let allaction = new AllActions(page);
    // await allaction.clickMenuLink('Web inputs');

    await page.getByLabel('Input: Number').fill('12345');
    await page.getByLabel('Input: Text').fill('Shankar');
    await page.getByLabel('Input: Password').fill('Sh@nkar006');
    await page.getByLabel('Input: Date').fill('2026-09-13');

    await allaction.clickButton('Display Inputs');
    await allaction.clickButton('Clear Inputs');
});