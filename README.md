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

**proptractor-react-selector** needs a special resq script to be loaded beforehand. There are two ways to load the react selector script -

1. If you are testing a SPA (single page application), where you do not encounter any in-between page reload/ server refresh, you can load the script in the **onPageLoad()** section in your protractor configuration. You can also load the script after you log in the app. It just have to be a one time setup for SPA.

```ts
import {loadReactSelector} from 'protractor-react-selector';

exports.config = {
  // ... the rest of your config
  plugins: [
    {
      // The module name
      package: "protractor-react-selector"
    }
  ]
  // ... rest things

  onPageLoad: async()=>{
    await loadReactSelector();
  }
};
```

2. If you are testing a legacy application, where in-between page reload/ full reload navigation happens, you need to load the react selector script after each page reload.

```ts
import { loadReactSelector } from "protractor-react-selector";

const testDemo = async () => {
  await element(by.css("button")).click();
  // assume full page reload happens here...
  await loadReactSelector(); // you need to again load the script
};
```

### Using React Selector

Once you are set with the configuration, you can use the react selector just like any other native locatos.

> Format: **by.ReactSelector('react component','props','state','react root element')**

- component name - mandatory
- props - optional
- state - optional
- root element - optional

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

## Dont Forget:

1. React selector script (loadReactSelector()) should be loaded first before you use by.ReactSelector

2. Target Element should be visible before your script try to find the element by reactSelector. Page should be testable. Otherwise it will throw react instance not found.

## Tell me your issues

you can raise any issue [here](https://github.com/abhinaba1080/protractor-react-selector/issues)

## Contribution

Any pull request is welcome keeping proper code structure.

_- Copyright &copy; 2019- [Abhinaba Ghosh](https://www.linkedin.com/in/abhinaba-ghosh-9a2ab8a0/)_
