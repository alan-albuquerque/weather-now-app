import { browser, by, element } from 'protractor';

browser.waitForAngularEnabled(false);

export class HomePage {
  navigateTo() {
    return browser.get('/home');
  }

  getLogoElem() {
    return this.getElem('.logo');
  }

  getElem(cls: string) {
    return element(by.css(cls));
  }
}
