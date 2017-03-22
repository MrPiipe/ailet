import { AiletPage } from './app.po';

describe('ailet App', () => {
  let page: AiletPage;

  beforeEach(() => {
    page = new AiletPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
