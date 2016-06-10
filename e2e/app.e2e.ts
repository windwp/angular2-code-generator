import { Angular2CodeGeneratorPage } from './app.po';

describe('angular2-code-generator App', function() {
  let page: Angular2CodeGeneratorPage;

  beforeEach(() => {
    page = new Angular2CodeGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-code-generator works!');
  });
});
