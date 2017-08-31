import { Angular4demoPage } from './app.po';

describe('angular4demo App', () => {
  let page: Angular4demoPage;

  beforeEach(() => {
    page = new Angular4demoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
