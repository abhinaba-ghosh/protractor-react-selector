describe("protractor react selector tests", () => {
  beforeAll(async function() {
    await browser.waitForAngularEnabled(false);
    await browser.get("https://ahfarmer.github.io/calculator/");
  });

  it("This should test react selector with component, props and react root element", async () => {
    // state is empty for the elememnt
    const _element = element(by.ReactSelector('t',{name:'5'},{},'#root'));
    expect(await _element.getText()).toMatch('5');
  });
  
  it("This should test react selector without react root element", async () => {
    // as the rootElement id is 'root', we can run the same test without mentioning the rootElement css selector. 
    // if the rootElement is different than '#root', then rootElement should be mentioned
    const _element = element(by.ReactSelector('t',{name:"5"}));
    expect(await _element.getText()).toMatch("5");
  });

});
