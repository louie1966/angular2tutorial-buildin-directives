import { Angular2tutorialBuildinDirectivesPage } from './app.po';

describe('angular2tutorial-buildin-directives App', () => {
  let page: Angular2tutorialBuildinDirectivesPage;

  beforeEach(() => {
    page = new Angular2tutorialBuildinDirectivesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
