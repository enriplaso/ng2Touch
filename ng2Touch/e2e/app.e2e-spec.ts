import { Ng2TouchPage } from './app.po';

describe('ng2-touch App', function() {
  let page: Ng2TouchPage;

  beforeEach(() => {
    page = new Ng2TouchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
