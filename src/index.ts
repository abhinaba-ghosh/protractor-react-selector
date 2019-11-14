import { protractor } from "protractor";

/* onPrepare will be hooked to protractor configuration file and make the ReactSelector component ready before test starts
 */
export const onPrepare = () => {
  protractor.by.addLocator(
    "ReactSelector",
    (component, props, state, rootElement) => {
      var s = "";
      eval(s.toString());
      const resq = "resq";
      rootElement = rootElement || "#root";
      document.execCommand(window[resq].waitToLoadReact(rootElement));
      var elements = window[resq].resq$$(
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
      var nodes = [];
      Array.prototype.filter.call(elements, elm => {
        const { node, isFragment } = elm;
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
