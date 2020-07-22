/*! protractor-react-selector
 *  Copyright (c) 2019 Abhinaba Ghosh
 *  Licensed MIT */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory();
    });
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    factory();
  }
})(this, function () {
  /* global browser */
  // 'use strict';

  var fs = require('fs');
  var resqScript = fs.readFileSync(require.resolve('resq'));

  return (module.exports = {
    //initialize the resq script
    name: 'protractor-react-selector',

    // initialize the reactSelector custom locator
    onPrepare: function () {
      by.addLocator('react', function (component, props, state) {
        var __spreadArrays =
          (this && this.__spreadArrays) ||
          function () {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++)
              s += arguments[i].length;
            for (var r = Array(s), k = 0, i = 0; i < il; i++)
              for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
            return r;
          };

        var elements = window.resq.resq$$(component);
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
        Array.prototype.filter.call(elements, function (elm) {
          var node = elm.node,
            isFragment = elm.isFragment;
          if (isFragment) {
            nodes = nodes.concat(node);
          } else {
            nodes.push(node);
          }
        });
        return __spreadArrays(nodes);
      });

      global.browser.waitForReact = (timeout = 10000, reactRoot) => {
        return browser.executeScript(resqScript.toString()).then(() => {
          return browser.executeScript(
            ([timeout, reactRoot]) => {
              return Promise.resolve(
                window.resq.waitToLoadReact(timeout, reactRoot)
              )
                .then(() => {
                  console.log('react loaded');
                })
                .catch((err) => {
                  throw err;
                });
            },
            [timeout, reactRoot]
          );
        });
      };
    },
  });
});
