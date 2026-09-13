import {Page} from '@playwright/test';

export class AllActions{
    private page: Page;
    constructor(page:Page){
        this.page = page;
    }
    async clickMenuLink(linkName: string): Promise<void> {
        await this.page.getByRole('link', { name: linkName, exact: true }).click();
    }
    async clickButton(buttonName: string): Promise<void>{
        await this.page.getByRole('button', {name: buttonName, exact: true}).click();
    }
}