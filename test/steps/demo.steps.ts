import { Given, When, Then } from 'cucumber'
import { HomePage } from '../../src/page-objects/home.po';
import { DialogPage } from '../../src/page-objects/dialog.po';
import { expect } from 'chai'


let homePage = HomePage.page();
let dialogPage = DialogPage.page();

Given(/^I went to menu (.*), submenu (.*)$/, async (menu: string, subMenu: string) => {
    await homePage.clickMenu(menu);
    await homePage.clickSubMenu(subMenu);
});

When(/^I fill the input field with (.*)$/, async (text: string) => {
    await dialogPage.setInputValue(text);
});

When(/^select the Pick one option$/, async () => {
    return await dialogPage.selectPickOne();
});

Then(/^should display a modal with the message (.*)$/, async (text: string) => {
    await dialogPage.getModalMessage().then(title => {
        expect(title).to.be.contain(text);
    })
});
