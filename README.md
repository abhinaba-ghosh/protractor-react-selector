## What can it do?

_protractor-react-selector_ is lightweight plugin to help you to locate web elements in your REACT app using props and states.

## Installation

Install this module locally with the following command to be used as a (dev-)dependency:

```shell
npm install --save protractor-react-selector
npm install --save-dev protractor-react-selector
```

## Usage

> **_protractor-react-selector_ supports NodeJS 8 or higher**

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

**proptractor-react-selector** needs a special resq script to be loaded beforehand.

```ts
import { loadReactSelector } from "protractor-react-selector";

await loadReactSelector(); // you need to again load the script
```

**Note:**

1. If you are testing modern SPA, where full page reload happens only once, you can call loadReactSelector() only once in your configuration file (onPrepare/ onPageLoad).

2. If you are testing an application where intermitten full page load (window refresh) happens, you need to call loadReactSelector() after each page load.

### Using React Selector

Once you are set with the configuration, you can use the react selector just like any other native locatos.

> Format: **by.ReactSelector('react component','props','state','react root element')**

- component name - mandatory
- props - optional
- state - optional
- root element - optional

```ts
import { loadReactSelector } from "protractor-react-selector";

// load the react selector before using ReactSelecrtor locator. For SPA , it will be one time activity.
await loadReactSelector();

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

## Dont Forget:

1. React selector script (loadReactSelector()) should be loaded first before you use by.ReactSelector

2. Target Element should be visible before your script try to find the element by reactSelector. Page should be testable. Otherwise it will throw react instance not found.

## Tell me your issues

you can raise any issue [here](https://github.com/abhinaba1080/protractor-react-selector/issues)

## Contribution

Any pull request is welcome keeping proper code structure.

_- Copyright &copy; 2019- [Abhinaba Ghosh](https://www.linkedin.com/in/abhinaba-ghosh-9a2ab8a0/)_
