import { FundCrowderPage } from './app.po';

describe('fund-crowder App', () => {
  let page: FundCrowderPage;

  beforeEach(() => {
    page = new FundCrowderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
