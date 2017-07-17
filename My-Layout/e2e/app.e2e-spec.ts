import { MyLayoutPage } from './app.po';

describe('my-layout App', () => {
  let page: MyLayoutPage;

  beforeEach(() => {
    page = new MyLayoutPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
