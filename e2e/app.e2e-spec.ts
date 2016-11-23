import { TrelloAngularAppPage } from './app.po';

describe('trello-angular-app App', function() {
  let page: TrelloAngularAppPage;

  beforeEach(() => {
    page = new TrelloAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
