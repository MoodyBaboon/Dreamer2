import { DreamerPage } from './app.po';

describe('dreamer App', () => {
  let page: DreamerPage;

  beforeEach(() => {
    page = new DreamerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
