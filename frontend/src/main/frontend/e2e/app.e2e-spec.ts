import { FerryPage } from './app.po';

describe('ferry App', () => {
  let page: FerryPage;

  beforeEach(() => {
    page = new FerryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
