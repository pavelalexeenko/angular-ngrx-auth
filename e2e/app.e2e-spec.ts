import { BlitzToolPage } from './app.po';

describe('Blitz-tool App', () => {
  let page: BlitzToolPage;

  beforeEach(() => {
    page = new BlitzToolPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
