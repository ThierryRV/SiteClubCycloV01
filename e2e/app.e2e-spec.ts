import { SiteClubCycloPage } from './app.po';

describe('site-club-cyclo App', () => {
  let page: SiteClubCycloPage;

  beforeEach(() => {
    page = new SiteClubCycloPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
