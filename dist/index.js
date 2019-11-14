Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
exports.onPrepare = function() {
  protractor_1.protractor.by.addLocator("ReactSelector", function(
    component,
    props,
    state,
    rootElement
  ) {
    var __spreadArrays =
      (this && this.__spreadArrays) ||
      function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
    var s = function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    };

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(source, true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          );
        } else {
          ownKeys(source).forEach(function(key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
        }
      }
      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    function _typeof2(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof2 = function _typeof2(obj) {
          return typeof obj;
        };
      } else {
        _typeof2 = function _typeof2(obj) {
          return obj &&
            typeof Symbol === "function" &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
            ? "symbol"
            : typeof obj;
        };
      }
      return _typeof2(obj);
    }

    function _instanceof2(left, right) {
      if (
        right != null &&
        typeof Symbol !== "undefined" &&
        right[Symbol.hasInstance]
      ) {
        return !!right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }

    function _classCallCheck(instance, Constructor) {
      if (!_instanceof(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      }

      return self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : undefined;

      _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;

        if (typeof Class !== "function") {
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        }

        if (typeof _cache !== "undefined") {
          if (_cache.has(Class)) return _cache.get(Class);

          _cache.set(Class, Wrapper);
        }

        function Wrapper() {
          return _construct(
            Class,
            arguments,
            _getPrototypeOf(this).constructor
          );
        }

        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class);
      };

      return _wrapNativeSuper(Class);
    }

    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;

      try {
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function() {})
        );
        return true;
      } catch (e) {
        return false;
      }
    }

    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct(Parent, args, Class) {
          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) _setPrototypeOf(instance, Class.prototype);
          return instance;
        };
      }

      return _construct.apply(null, arguments);
    }

    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf =
        Object.setPrototypeOf ||
        function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };

      return _setPrototypeOf(o, p);
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
      return _getPrototypeOf(o);
    }

    function _toConsumableArray(arr) {
      return (
        _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
      );
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function _iterableToArray(iter) {
      if (
        Symbol.iterator in Object(iter) ||
        Object.prototype.toString.call(iter) === "[object Arguments]"
      )
        return Array.from(iter);
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      }
    }

    function _instanceof(left, right) {
      if (
        right != null &&
        typeof Symbol !== "undefined" &&
        right[Symbol.hasInstance]
      ) {
        return !!right[Symbol.hasInstance](left);
      } else {
        return _instanceof2(left, right);
      }
    }

    function _typeof(obj) {
      if (
        typeof Symbol === "function" &&
        _typeof2(Symbol.iterator) === "symbol"
      ) {
        _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj &&
            typeof Symbol === "function" &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
            ? "symbol"
            : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    !(function(t, e) {
      "object" ==
        (typeof exports === "undefined" ? "undefined" : _typeof(exports)) &&
      "object" ==
        (typeof module === "undefined" ? "undefined" : _typeof(module))
        ? (module.exports = e())
        : "function" == typeof define && define.amd
        ? define([], e)
        : "object" ==
          (typeof exports === "undefined" ? "undefined" : _typeof(exports))
        ? (exports.resq = e())
        : ((t.window = t.window || {}), (t.window.resq = e()));
    })(window, function() {
      return (function(t) {
        var e = {};

        function n(r) {
          if (e[r]) return e[r].exports;
          var o = (e[r] = {
            i: r,
            l: !1,
            exports: {}
          });
          return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }

        return (
          (n.m = t),
          (n.c = e),
          (n.d = function(t, e, r) {
            n.o(t, e) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
              });
          }),
          (n.r = function(t) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
              }),
              Object.defineProperty(t, "__esModule", {
                value: !0
              });
          }),
          (n.t = function(t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
            var r = Object.create(null);
            if (
              (n.r(r),
              Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
              }),
              2 & e && "string" != typeof t)
            )
              for (var o in t) {
                n.d(
                  r,
                  o,
                  function(e) {
                    return t[e];
                  }.bind(null, o)
                );
              }
            return r;
          }),
          (n.n = function(t) {
            var e =
              t && t.__esModule
                ? function() {
                    return t["default"];
                  }
                : function() {
                    return t;
                  };
            return n.d(e, "a", e), e;
          }),
          (n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }),
          (n.p = ""),
          n((n.s = 5))
        );
      })([
        function(t, e, n) {
          "use strict";

          n.d(e, "a", function() {
            return d;
          }),
            n.d(e, "d", function() {
              return h;
            }),
            n.d(e, "b", function() {
              return y;
            }),
            n.d(e, "c", function() {
              return b;
            });
          var r = n(4),
            o = n.n(r);
          var i = Array.isArray,
            c = Object.keys;

          function u(t) {
            return "function" == typeof t;
          }

          function s(t) {
            return _instanceof(t, HTMLElement) || _instanceof(t, Text);
          }

          function a(t) {
            return "object" == _typeof(t) && !i(t);
          }

          function f(t, e) {
            var n =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : !1;
            return (
              !(!i(t) || !i(e)) &&
              (n
                ? t.length === e.length &&
                  !t.find(function(t) {
                    return !e.includes(t);
                  })
                : t.some(function(t) {
                    return e.includes(t);
                  }))
            );
          }

          function d(t) {
            var e = {
              children: []
            };
            if (!t) return e;
            var n;
            (e.name = u((n = t.type)) ? n.name : n),
              (e.props = (function(t) {
                if (!t || "string" == typeof t) return t;

                var e = _objectSpread({}, t);

                return delete e.children, e;
              })(t.memoizedProps)),
              (e.state = (function(t) {
                if (!t) return;
                var e = t.baseState;
                return e || t;
              })(t.memoizedState));
            var r = t.child;
            if (r)
              for (e.children.push(r); r.sibling; ) {
                e.children.push(r.sibling), (r = r.sibling);
              }
            return (
              (e.children = e.children.map(function(t) {
                return d(t);
              })),
              u(t.type) &&
              (function(t) {
                return t.children.length > 1;
              })(e)
                ? ((e.node = (function(t) {
                    return t.children
                      .map(function(t) {
                        return t.node;
                      })
                      .filter(function(t) {
                        return !!t;
                      });
                  })(e)),
                  (e.isFragment = !0))
                : (e.node = (function(t) {
                    return s(t.stateNode)
                      ? t.stateNode
                      : t.child && s(t.child.stateNode)
                      ? t.child.stateNode
                      : null;
                  })(t)),
              e
            );
          }

          function l(t) {
            for (; t.length; ) {
              var _e = t.shift();

              if (_e.node) return _e.node;
              _e.children &&
                Array.isArray(_e.children) &&
                t.push.apply(t, _toConsumableArray(_e.children));
            }
          }

          function p(t, e) {
            return new RegExp(
              "^" +
                t
                  .split("*")
                  .map(function(t) {
                    return t.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
                  })
                  .join(".+") +
                "$"
            ).test(e);
          }

          function h(t, e) {
            var n =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : !1;
            var r = arguments.length > 3 ? arguments[3] : undefined;
            return t.reduce(
              function(t, e) {
                return t.concat(
                  (function(t, e) {
                    var n = [];

                    for (; t.length; ) {
                      var _t$shift = t.shift(),
                        _r = _t$shift.children;

                      _r &&
                        Array.isArray(_r) &&
                        _r.forEach(function(r) {
                          e(r) &&
                            (!r.node &&
                              Array.isArray(r.children) &&
                              (r.node = l(r.children.concat([]))),
                            n.push(r)),
                            t.push(r);
                        });
                    }

                    return n;
                  })(
                    t,
                    r && "function" == typeof r
                      ? r
                      : function(t) {
                          return "string" == typeof t.name
                            ? p(e, t.name)
                            : null !== t.name &&
                                "object" == _typeof(t.name) &&
                                p(e, t.name.displayName);
                        }
                  )
                );
              },
              [e]
            );
          }

          function y(t, e, n) {
            var r =
              arguments.length > 3 && arguments[3] !== undefined
                ? arguments[3]
                : !1;
            return u(n)
              ? (console.warn("Functions are not supported as filter matchers"),
                [])
              : t.filter(function(t) {
                  return (
                    (a(n) &&
                      (function t() {
                        var e =
                          arguments.length > 0 && arguments[0] !== undefined
                            ? arguments[0]
                            : {};
                        var n =
                          arguments.length > 1 && arguments[1] !== undefined
                            ? arguments[1]
                            : {};
                        var r =
                          arguments.length > 2 && arguments[2] !== undefined
                            ? arguments[2]
                            : !1;
                        var i = [];
                        return (
                          !c(e).length ||
                          (r
                            ? o()(e, n)
                            : (c(e).forEach(function(r) {
                                n.hasOwnProperty(r) &&
                                  (a(e[r]) &&
                                    a(n[r]) &&
                                    (i = i.concat(t(e[r], n[r]))),
                                  (e[r] === n[r] || f(e[r], n[r])) &&
                                    i.push(n));
                              }),
                              !!i.filter(function(t) {
                                return t;
                              }).length))
                        );
                      })(n, t[e], r)) ||
                    (i(n) && f(n, t[e], r)) ||
                    t[e] === n
                  );
                });
          }

          function b(t) {
            if (t.hasOwnProperty("_reactRootContainer"))
              return t._reactRootContainer._internalRoot.current;
            var e = Object.keys(t).find(function(t) {
              return t.startsWith("__reactInternalInstance");
            });
            return e ? t[e] : void 0;
          }
        },
        function(t, e) {
          var n;

          n = (function() {
            return this;
          })();

          try {
            n = n || new Function("return this")();
          } catch (t) {
            "object" ==
              (typeof window === "undefined" ? "undefined" : _typeof(window)) &&
              (n = window);
          }

          t.exports = n;
        },
        function(t, e, n) {
          "use strict";

          (function(t) {
            n.d(e, "a", function() {
              return o;
            });
            var r = n(0);

            function o() {
              var e =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : 5e3;
              var n = arguments.length > 1 ? arguments[1] : undefined;
              if (t.isReactLoaded)
                return Promise.resolve("React already loaded");
              return new Promise(function(o, i) {
                var c = !1;

                var u = function u() {
                  var e = (function() {
                    var t = document.createTreeWalker(document);
                    if (n) return document.querySelector(n);

                    for (; t.nextNode(); ) {
                      if (t.currentNode.hasOwnProperty("_reactRootContainer"))
                        return t.currentNode;
                    }
                  })();

                  if (e)
                    return (
                      (t.isReactLoaded = !0),
                      (t.rootReactElement = Object(r.c)(e)),
                      o()
                    );
                  c || setTimeout(u, 200);
                };

                u(),
                  setTimeout(function() {
                    (c = !0), i("Timed out");
                  }, e);
              });
            }
          }.call(this, n(1)));
        },
        function(t, e, n) {
          "use strict";

          n.d(e, "a", function() {
            return c;
          });
          var r = n(0);

          var o =
            /*#__PURE__*/
            (function(_Array) {
              _inherits(o, _Array);

              function o(t) {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, o);

                t || (t = []),
                  (_this = _possibleConstructorReturn(
                    this,
                    (_getPrototypeOf2 = _getPrototypeOf(o)).call.apply(
                      _getPrototypeOf2,
                      [this].concat(_toConsumableArray(t))
                    )
                  ));
                return _this;
              }

              _createClass(o, [
                {
                  key: "byProps",
                  value: function byProps(t) {
                    var _ref =
                        arguments.length > 1 && arguments[1] !== undefined
                          ? arguments[1]
                          : {
                              exact: !1
                            },
                      e = _ref.exact;

                    var n = Object(r.b)(this, "props", t, e);
                    return new o(n);
                  }
                },
                {
                  key: "byState",
                  value: function byState(t) {
                    var _ref2 =
                        arguments.length > 1 && arguments[1] !== undefined
                          ? arguments[1]
                          : {
                              exact: !1
                            },
                      e = _ref2.exact;

                    var n = Object(r.b)(this, "state", t, e);
                    return new o(n);
                  }
                }
              ]);

              return o;
            })(_wrapNativeSuper(Array));

          var i =
            /*#__PURE__*/
            (function(_Object) {
              _inherits(i, _Object);

              function i(t, e) {
                var _this2;

                _classCallCheck(this, i);

                (_this2 = _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(i).call(this, t)
                )),
                  (_this2._nodes = e);

                for (var e in t) {
                  _this2[e] = t[e];
                }

                return _this2;
              }

              _createClass(i, [
                {
                  key: "byProps",
                  value: function byProps(t) {
                    var _ref3 =
                        arguments.length > 1 && arguments[1] !== undefined
                          ? arguments[1]
                          : {
                              exact: !1
                            },
                      e = _ref3.exact;

                    var n = Object(r.b)(this._nodes, "props", t, e)[0];
                    return new i(n, this._nodes);
                  }
                },
                {
                  key: "byState",
                  value: function byState(t) {
                    var _ref4 =
                        arguments.length > 1 && arguments[1] !== undefined
                          ? arguments[1]
                          : {
                              exact: !1
                            },
                      e = _ref4.exact;

                    var n = Object(r.b)(this._nodes, "state", t, e)[0];
                    return new i(n, this._nodes);
                  }
                }
              ]);

              return i;
            })(_wrapNativeSuper(Object));

          var c =
            /*#__PURE__*/
            (function() {
              function c(t, e) {
                _classCallCheck(this, c);

                (this.selectors = t
                  .split(" ")
                  .filter(function(t) {
                    return !!t;
                  })
                  .map(function(t) {
                    return t.trim();
                  })),
                  (this.rootComponent = e),
                  (this.tree = Object(r.a)(this.rootComponent));
              }

              _createClass(c, [
                {
                  key: "find",
                  value: function find() {
                    return (
                      (this.nodes = new o(
                        Object(r.d)(this.selectors, this.tree, !0)
                      )),
                      new i(this.nodes[0], this.nodes)
                    );
                  }
                },
                {
                  key: "findAll",
                  value: function findAll() {
                    return new o(Object(r.d)(this.selectors, this.tree));
                  }
                }
              ]);

              return c;
            })();
        },
        function(t, e, n) {
          "use strict";

          var r = Array.isArray,
            o = Object.keys,
            i = Object.prototype.hasOwnProperty;

          t.exports = function t(e, n) {
            if (e === n) return !0;

            if (e && n && "object" == _typeof(e) && "object" == _typeof(n)) {
              var c,
                u,
                s,
                a = r(e),
                f = r(n);

              if (a && f) {
                if ((u = e.length) != n.length) return !1;

                for (c = u; 0 != c--; ) {
                  if (!t(e[c], n[c])) return !1;
                }

                return !0;
              }

              if (a != f) return !1;

              var d = _instanceof(e, Date),
                l = _instanceof(n, Date);

              if (d != l) return !1;
              if (d && l) return e.getTime() == n.getTime();

              var p = _instanceof(e, RegExp),
                h = _instanceof(n, RegExp);

              if (p != h) return !1;
              if (p && h) return e.toString() == n.toString();
              var y = o(e);
              if ((u = y.length) !== o(n).length) return !1;

              for (c = u; 0 != c--; ) {
                if (!i.call(n, y[c])) return !1;
              }

              for (c = u; 0 != c--; ) {
                if (!t(e[(s = y[c])], n[s])) return !1;
              }

              return !0;
            }

            return e != e && n != n;
          };
        },
        function(t, e, n) {
          "use strict";

          n.r(e),
            function(t) {
              n.d(e, "resq$", function() {
                return u;
              }),
                n.d(e, "resq$$", function() {
                  return s;
                });
              var r = n(3),
                o = n(2);
              n.d(e, "waitToLoadReact", function() {
                return o.a;
              });
              var i = n(0);

              function c(e, n, o) {
                if (!o && !t.isReactLoaded)
                  throw new Error(
                    "Could not find the root element of your application"
                  );
                var c = t.rootReactElement;
                if ((_instanceof(o, HTMLElement) && (c = Object(i.c)(o)), !c))
                  throw new Error(
                    "Could not find instance of React in given element"
                  );
                return new r.a(e, c)[n]();
              }

              function u(t, e) {
                return c(t, "find", e);
              }

              function s(t, e) {
                return c(t, "findAll", e);
              }
            }.call(this, n(1));
        }
      ]);
    });
    eval(s.toString());
    var resq = "resq";
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
    Array.prototype.filter.call(elements, function(elm) {
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
};
//# sourceMappingURL=index.js.map
