import { protractor, browser } from "protractor";
import * as fs from "fs";

// Read resq module minified script as buffered string. Due to window handle intermittent issue, we can not directly import the resq module
const resqScript = fs.readFileSync(require.resolve("resq"));

/**
 * This function helps to load Resq script in the browser.
 * If your application is SPA, this function should be called in the onPageLoad() section in protractor.conf.ts as one time setup.
 * If your application needs page refresh or full page navigation or server re-loading, then you need to explicitly call 'loadReactSelector' after each page reload
 */
export const loadReactSelector = async () => {
  await browser.executeScript(resqScript.toString());
};

/**
 * onPrepare will be hooked to protractor configuration file and make the ReactSelector component ready before test starts
 */
export const onPrepare = () => {
  protractor.by.addLocator(
    "ReactSelector",
    (component: string, props: {}, state: {}, rootElement?: string) => {
      const resq: string = "resq";
      rootElement = rootElement || "#root";

      document.execCommand(window[resq].waitToLoadReact(rootElement));

      let elements = window[resq].resq$$(
        component,
        document.querySelector(rootElement)
      );

      if (props) {
        elements = elements.byProps(props);
      }

      if (state) {
        elements = elements.byState(state);
      }

      if (!elements.length) {
        return [];
      }

      let nodes = [];

      elements.forEach(element => {
        const { node, isFragment } = element;

        if (isFragment) {
          nodes = nodes.concat(node);
        } else {
          nodes.push(node);
        }
      });

      return [...nodes];
    }
  );
};
