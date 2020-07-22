# Protractor-React-Selector

[![Build Status](https://circleci.com/gh/abhinaba-ghosh/protractor-react-selector.svg?style=shield&branch-=master)](https://app.circleci.com/pipelines/github/abhinaba-ghosh/protractor-react-selector)
[![NPM release](https://img.shields.io/npm/v/protractor-react-selector.svg 'NPM release')](https://www.npmjs.com/package/protractor-react-selector)

ReactJS is one of the most widely use Front-End libraries in the web. Along side React, many developers use styling tools that will minify or re-write the class attribute values attached to the HTML elements via className props in JSX. These modifications and overwrites make it difficult to select the generated HTML using the WebDriver's query commands like findElement or findElements since it's not guaranteed that the class name will remain the same.

Worry Not! Here We Introduce **Protractor-React-Selector** :hatching_chick:

_protractor-react-selector_ is lightweight plugin to help you to locate web elements in your REACT app using props and states.Internally, protractor-react-selector uses a library called [resq](https://github.com/baruchvlz/resq) to query React's VirtualDOM in order to retrieve the nodes.

Read complete setup Blog [here](https://medium.com/@abhinabaghosh.1994/test-your-react-app-efficiently-with-protractor-b8406db9148f)

## Installation

Install this module locally with the following command to be used as a (dev-)dependency:

```shell
npm install --save protractor-react-selector
```

## TSConfig settings for type definition

```js
{
  "compilerOptions": {
    "sourceType": "module",
    "types": ["node", "protractor-react-selector"]
  }
}
```

## Alert

- protractor-react-selector supports NodeJS 8 or higher
- cypress-react-selector supports NodeJS 8 or higher

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

#### Wait for application to be ready to run tests

To wait until the React's component tree is loaded, add the `waitForReact` method to fixture's `before` hook.

```ts
await browser.waitForReact(timeOut?:number=10000, reactRoot?:string='#root')
```

```js
beforeAll(() => {
   await browser.get('http://localhost:3000/myApp')
   await browser.waitForReact()
})
```

this will wait to load react inside your app. waitForReact automatically find out the react root of your application.

The default timeout for waitForReact is `10000` ms. You can specify a custom timeout value:

```js
await browser.waitForReact(30000);
```

#### Wait to Load React for different react roots

It may even possible that you have different REACT roots (different REACT instances in same application). In this case, you can specify the `CSS Selector` of the target root.

```js
const App = () => (
  <div id="mount">
    <MyComponent />
    <MyComponent someBooleanProp={true} />
  </div>
);
```

There is some application which displays react components asynchronously. You need to pass root selector information to the react selector.

```ts
// if your react root is set to different selector other than 'root'
// then you don't need to pass root element information
await browser.waitForReact(10000, '#mount');
```

#### Find Element by React Component

You should have [React Develop Tool](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) installed to spy and find out the component name as sometimes components can go though modifications. Once the React gets loaded, you can easily identify an web element by react component name:

```ts
// with only component. If you don't provide any root element, it assume that root is set to '#root'
const myElement = element(by.react('MyComponent'));

// to fetch all elements matched with component, props and state, you can use protractor native 'all' method
const myElement = element.all(by.react('MyComponent'));
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
