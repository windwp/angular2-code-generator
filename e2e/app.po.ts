export class Angular2CodeGeneratorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-code-generator-app h1')).getText();
  }
}
