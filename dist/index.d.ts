import { Locator } from 'protractor';

/**
 *
 * This function helps to load Resq script in the browser.
 * If your application is SPA, this function should be called in the onPageLoad() section in protractor.conf.ts as one time setup.
 * If your application needs page refresh or full page navigation or server re-loading, then you need to explicitly call 'loadReactSelector' after each page reload
 *
 * @example
 * await loadReactSelector();
 */
export declare const loadReactSelector: () => Promise<void>;
export declare const onPrepare: () => void;

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
