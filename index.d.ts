import { Locator } from 'protractor'

declare module 'protractor' {
  export interface ProtractorBy {
    /**
     *
     * @param component : required
     * @param props : optional
     * @param state : optional
     *
     * react helps to identify web elements by react properties such as props and states
     *
     * @example
     * element(by.react('MyComponent', {someBooleanProp:true}, {someBooleanState: true}))
     */
    react(
      component: string,
      props?: {},
      state?: {},
      rootElement?: string
    ): Locator
  }

  export interface ProtractorBrowser {
    /**
     *
     *const App = () => (
     *<div id='mount'>
     * <MyComponent />
     *<MyComponent someBooleanProp={true} />
     *</div>
     *)
     * @example
     * await browser.waitForReact(10000, '#mount')
     *
     * If the root is set to #root, then it is not necessary to pass the rootElement
     * For more visit: https://github.com/abhinaba-ghosh/protractor-react-selector#how-to-use-react-selector
     */
    waitForReact(timeOut?: number, reactRoot?: string): Promise<void>
  }
}
