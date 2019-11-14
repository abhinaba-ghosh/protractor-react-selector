## What can it do?

ReactJS is one of the most widely use Front-End libraries in the web. Along side React, many developers use styling tools that will minify or re-write the class attribute values attached to the HTML elements via className props in JSX. These minifications and overwrites make it difficult to select the generated HTML using the WebDriver's query commands like findElement or findElements since it's not guaranteed that the class name will remain the same.

Worry Not! Here We Intoduce **Protractor-React-Selector** :hatching_chick:

_protractor-react-selector_ is lightweight plugin to help you to locate web elements in your REACT app using props and states.

Read The complete Blog [here](https://medium.com/@abhinabaghosh.1994/test-your-react-app-efficiently-with-protractor-b8406db9148f)

## Installation

Install this module locally with the following command to be used as a (dev-)dependency:

```shell
npm install --save protractor-react-selector
```

## Usage

> **_protractor-react-selector_ supports NodeJS 8 or higher** > **_Support added for IE, Chrome, Firefox, Safari_**

### Configuration

_protractor-react-selector_ can be used as a plugin in your protractor configuration file with the following code:

```typescript
exports.config = {
  // ... the rest of your config
  plugins: [
    {
      // The module name
      package: "protractor-react-selector"
    }
  ]
};
```

### Using React Selector

Once you are set with the configuration, you can use the react selector just like any other native locatos.

> Format: **by.ReactSelector(react_component_name,props,state,react_root_element)**

- component_name : string - required
- props : JSON OBJ - optional
- state : JSON OBJ - optional
- react_root_element : string - optional

```ts
// with only component. If you dont provide any root, it assume that root is set to '#root'
const loginButton = element(by.ReactSelector("button"));

// with props
const loginButton = element(by.ReactSelector("button", { value: "OK" }));

// with react root element
const loginButton = element(
  by.ReactSelector("button", { value: "OK" }, {}, "#root")
);

// array finder
const loginButton = element.all(by.ReactSelector("button"));
```

## Tool You Need

[React-Dev-Tool](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) — You can inspect the DOM element by simply pressing the f12. But, to inspect REACT components and props, you need to install the chrome plugin.

## Dont Forget:

Target Element should be visible before your script try to find the element by reactSelector. You need to wait for the page to load completely before you start calling the react slector. Otherwise it will throw react instance not found.

## Tell me your issues

you can raise any issue [here](https://github.com/abhinaba1080/protractor-react-selector/issues)

## Contribution

Any pull request is welcome.

If it works for you , give a [Star](https://github.com/abhinaba1080/protractor-react-selector)! :star2: :star: :star2:

_- Copyright &copy; 2019- [Abhinaba Ghosh](https://www.linkedin.com/in/abhinaba-ghosh-9a2ab8a0/)_
