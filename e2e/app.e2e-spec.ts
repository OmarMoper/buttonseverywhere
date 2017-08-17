import { ButtonseverywherePage } from './app.po';

describe('buttonseverywhere App', () => {
  let page: ButtonseverywherePage;

  beforeEach(() => {
    page = new ButtonseverywherePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
