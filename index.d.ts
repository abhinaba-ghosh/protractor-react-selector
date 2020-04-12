import { Locator } from 'protractor';

declare module 'protractor' {
  export interface ProtractorBy {

    /**
     *
     * @param component : required
     * @param props : optional
     * @param state : optional
     * @param rootElement : optional
     *
     * ReactSelector helps to identify web elements by react properties such as props and states
     *
     * @example
     * element(by.ReactSelector('button', {value:'ok'}, {}, '#root'))
     */
    ReactSelector(component: string, props?: {}, state?: {}, rootElement?: string): Locator;
  }
}