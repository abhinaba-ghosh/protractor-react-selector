describe('protractor react selector tests', () => {
  beforeAll(async function () {
    await browser.waitForAngularEnabled(false);
    await browser.get('https://ahfarmer.github.io/calculator/');
    await browser.waitForReact();
  });

  it('This should test react selector with component, props and react root element', async () => {
    // state is empty for the element
    const _element = element(by.react('t', { name: '5' }, {}, '#root'));
    expect(await _element.getText()).toMatch('5');
  });

  it('This should test react selector without react root element', async () => {
    // as the rootElement id is 'root', we can run the same test without mentioning the rootElement css selector.
    // if the rootElement is different than '#root', then rootElement should be mentioned
    const _element = element(by.react('t', { name: '5' }));
    expect(await _element.getText()).toMatch('5');
  });

  it('This should test react selector with wildcard', async () => {
    // sometimes you can find minified component names in production build
    // you can try wildcard selection of component with "*"
    // it will return a;ll elements matched with the filters (props/states) passed
    const _element = element(by.react('*', { name: '5' }));
    expect(await _element.getText()).toMatch('5');
  });
});
