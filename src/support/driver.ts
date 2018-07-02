import { WebDriver, Capabilities, Builder, until, By } from "selenium-webdriver";
import { ServiceBuilder, setDefaultService } from 'selenium-webdriver/chrome';
import { path } from 'chromedriver';

setDefaultService(new ServiceBuilder(path).build());

export var driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

export enum TIPO_BUSCA {
    CSS,
    CLASS,
    NAME,
    LINK_TEXT,
    ID,
    PARTIAL_LINK_TEXT,
    XPATH,
    TAG
}

export function waitForElementVisible(selector: string, t: TIPO_BUSCA) {
    switch (t) {
        case TIPO_BUSCA.CLASS:
            return driver.wait(until.elementLocated(By.className(selector)));
        case TIPO_BUSCA.CSS:
            return driver.wait(until.elementLocated(By.css(selector)));
        case TIPO_BUSCA.NAME:
            return driver.wait(until.elementLocated(By.name(selector)));
        case TIPO_BUSCA.LINK_TEXT:
            return driver.wait(until.elementLocated(By.linkText(selector)));
        case TIPO_BUSCA.PARTIAL_LINK_TEXT:
            return driver.wait(until.elementLocated(By.partialLinkText(selector)));
        case TIPO_BUSCA.ID:
            return driver.wait(until.elementLocated(By.id(selector)));
        case TIPO_BUSCA.XPATH:
            return driver.wait(until.elementLocated(By.xpath(selector)));
        case TIPO_BUSCA.TAG:
            return driver.wait(until.elementLocated(By.tagName(selector)));
    }
};

export function getText(selector: string, t: TIPO_BUSCA) {
    waitForElementVisible(selector, t);
    switch (t) {
        case TIPO_BUSCA.CLASS:
            return driver.findElement(By.className(selector)).getText();
        case TIPO_BUSCA.CSS:
            return driver.findElement(By.css(selector)).getText();
        case TIPO_BUSCA.NAME:
            return driver.findElement(By.name(selector)).getText();
        case TIPO_BUSCA.LINK_TEXT:
            return driver.findElement(By.linkText(selector)).getText();
        case TIPO_BUSCA.PARTIAL_LINK_TEXT:
            return driver.findElement(By.partialLinkText(selector)).getText();
        case TIPO_BUSCA.ID:
            return driver.findElement(By.id(selector)).getText();
        case TIPO_BUSCA.XPATH:
            return driver.findElement(By.xpath(selector)).getText();
        case TIPO_BUSCA.TAG:
            return driver.findElement(By.tagName(selector)).getText();
    }
};

export function getValue(selector: string, t: TIPO_BUSCA) {
    waitForElementVisible(selector, t);
    switch (t) {
        case TIPO_BUSCA.CLASS:
            return driver.findElement(By.className(selector)).getAttribute('value');
        case TIPO_BUSCA.CSS:
            return driver.findElement(By.css(selector)).getAttribute('value');
        case TIPO_BUSCA.NAME:
            return driver.findElement(By.name(selector)).getAttribute('value');
        case TIPO_BUSCA.LINK_TEXT:
            return driver.findElement(By.linkText(selector)).getAttribute('value');
        case TIPO_BUSCA.PARTIAL_LINK_TEXT:
            return driver.findElement(By.partialLinkText(selector)).getAttribute('value');
        case TIPO_BUSCA.ID:
            return driver.findElement(By.id(selector)).getAttribute('value');
        case TIPO_BUSCA.XPATH:
            return driver.findElement(By.xpath(selector)).getAttribute('value');
        case TIPO_BUSCA.TAG:
            return driver.findElement(By.tagName(selector)).getAttribute('value');
    }
};

export function setValue(selector: string, value: string, t: TIPO_BUSCA) {
    waitForElementVisible(selector, t);
    switch (t) {
        case TIPO_BUSCA.CLASS:
            return driver.findElement(By.className(selector)).sendKeys(value);
        case TIPO_BUSCA.CSS:
            return driver.findElement(By.css(selector)).sendKeys(value);
        case TIPO_BUSCA.NAME:
            return driver.findElement(By.name(selector)).sendKeys(value);
        case TIPO_BUSCA.LINK_TEXT:
            return driver.findElement(By.linkText(selector)).sendKeys(value);
        case TIPO_BUSCA.PARTIAL_LINK_TEXT:
            return driver.findElement(By.partialLinkText(selector)).sendKeys(value);
        case TIPO_BUSCA.ID:
            return driver.findElement(By.id(selector)).sendKeys(value);
        case TIPO_BUSCA.XPATH:
            return driver.findElement(By.xpath(selector)).sendKeys(value);
        case TIPO_BUSCA.TAG:
            return driver.findElement(By.tagName(selector)).sendKeys(value);
    }
};

export function click(selector: string, t: TIPO_BUSCA) {
    waitForElementVisible(selector, t);
    switch (t) {
        case TIPO_BUSCA.CLASS:
            return driver.findElement(By.className(selector)).click();
        case TIPO_BUSCA.CSS:
            return driver.findElement(By.css(selector)).click();
        case TIPO_BUSCA.NAME:
            return driver.findElement(By.name(selector)).click();
        case TIPO_BUSCA.LINK_TEXT:
            return driver.findElement(By.linkText(selector)).click();
        case TIPO_BUSCA.PARTIAL_LINK_TEXT:
            return driver.findElement(By.partialLinkText(selector)).click();
        case TIPO_BUSCA.ID:
            return driver.findElement(By.id(selector)).click();
        case TIPO_BUSCA.XPATH:
            return driver.findElement(By.xpath(selector)).click();
        case TIPO_BUSCA.TAG:
            return driver.findElement(By.tagName(selector)).click();
    }
};