import { TestDesktopPage } from './app.po';

describe('test-desktop App', () => {
  let page: TestDesktopPage;

  beforeEach(() => {
    page = new TestDesktopPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
