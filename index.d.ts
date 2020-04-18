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
		 * react helps to identify web elements by react properties such as props and states
		 *
		 * @example
		 * element(by.react('MyComponent', {someBooleanProp:true}, {someBooleanState: true}, '#root'))
		 */
		react(
			component: string,
			props?: {},
			state?: {},
			rootElement?: string
		): Locator;
	}
}
