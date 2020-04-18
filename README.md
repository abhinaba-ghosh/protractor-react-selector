## What can it do?

ReactJS is one of the most widely use Front-End libraries in the web. Along side React, many developers use styling tools that will minify or re-write the class attribute values attached to the HTML elements via className props in JSX. These modifications and overwrites make it difficult to select the generated HTML using the WebDriver's query commands like findElement or findElements since it's not guaranteed that the class name will remain the same.

Worry Not! Here We Introduce **Protractor-React-Selector** :hatching_chick:

_protractor-react-selector_ is lightweight plugin to help you to locate web elements in your REACT app using props and states.

Read complete setup Blog [here](https://medium.com/@abhinabaghosh.1994/test-your-react-app-efficiently-with-protractor-b8406db9148f)

## Installation

Install this module locally with the following command to be used as a (dev-)dependency:

```shell
npm install --save protractor-react-selector
```

## Alert

- protractor-react-selector supports NodeJS 8 or higher
- Support added for IE, Chrome, Firefox, Safari (IE can break for some complex components)
- From version 2.2.0, (by.ReactSelector(...)) is changed to (by.react(....))

## Configuration

_protractor-react-selector_ can be used as a plugin in your protractor configuration file with the following code:

```typescript
exports.config = {
	// ... the rest of your config
	plugins: [
		{
			// The module name
			package: 'protractor-react-selector',
		},
	],
};
```

## How to use React Selector?

Lets take this example REACT APP:

```jsx
// imports

const MyComponent = ({ someBooleanProp }) => (
	<div>My Component {someBooleanProp ? 'show this' : ''} </div>
);

const App = () => (
	<div>
		<MyComponent />
		<MyComponent someBooleanProp={true} />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

Once you are set with the configuration, you can use the react selector just like any other native locator.

> Format: **by.react(componentName,props,state,reactRootElement)**

- componentName : string - required
- props : JSON OBJ (optional)
- state : JSON OBJ (optional)
- reactRootElement : string (optional)

```ts
// with only component. If you don't provide any root element, it assume that root is set to '#root'
const myElement = element(by.react('MyComponent'));

// to fetch all elements matched with component, props and state, you can use protractor native 'all' method
const myElement = element.all(by.react('MyComponent'));
```

#### Identify Element with different React root

It is always true that the root of React app is set to 'root', may be your root element is 'mount'. There is some application which displays react components asynchronously. The protractor-react-selector by-default assumes the react root element is set to 'root', if you have different root element, you need to pass that information to the react selector.

```ts
// if your react root is set to 'root', then you don't need to pass root element information
const myElement = element(by.react('MyComponent'));

// if your react root is set to different selector other than 'root'
// then you don't need to pass root element information
const myElement = element(by.react('MyComponent', {}, {}, '#mount'));
```

#### Element filtration by Props and States

You can filter the REACT components by its props and states like below:

```ts
const myElement = element(
	by.react('MyComponent', { someBooleanProp: true }, { someBooleanState: true })
);
```

#### Wildcard selection

You can select your components by partial name use a wildcard selectors:

```ts
// Partial Match
const myElement = element(by.react('My*', { someBooleanProp: true }));

// Entire Match
const myElement = element(by.react('*', { someBooleanProp: true })); // return all components matched with the prop
```

## Sample Tests

Checkout sample tests [here](./test/)

## Tool You Need

[React-Dev-Tool](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) — You can inspect the DOM element by simply pressing the f12. But, to inspect REACT components and props, you need to install the chrome plugin.

## Tell me your issues

you can raise any issue [here](https://github.com/abhinaba1080/protractor-react-selector/issues)

## Contribution

Any pull request is welcome.

If it works for you , give a [Star](https://github.com/abhinaba1080/protractor-react-selector)! :star2: :star: :star2:

_- Copyright &copy; 2019- [Abhinaba Ghosh](https://www.linkedin.com/in/abhinaba-ghosh-9a2ab8a0/)_
