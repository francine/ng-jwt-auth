import { ProcessaAuthPage } from './app.po';

describe('processa-auth App', function() {
  let page: ProcessaAuthPage;

  beforeEach(() => {
    page = new ProcessaAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
