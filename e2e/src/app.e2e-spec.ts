import { HomePage } from './home.po';

describe('workspace-project HomePage', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
    page.navigateTo();
  });

  it('should find logo', () => {
    expect(page.getLogoElem().isPresent()).toEqual(true);
  });

  it('check home page integrity', () => {
    expect(page.getElem('app-header').isPresent()).toEqual(true);
    expect(page.getElem('app-main-container').isPresent()).toEqual(true);
    expect(page.getElem('router-outlet').isPresent()).toEqual(true);
    expect(page.getElem('app-home').isPresent()).toEqual(true);
  });
});
