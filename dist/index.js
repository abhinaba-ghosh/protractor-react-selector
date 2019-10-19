"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const fs = require("fs");
const resqScript = fs.readFileSync(require.resolve("resq"));
exports.loadReactSelector = () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.executeScript(resqScript.toString());
});
exports.onPrepare = () => {
    protractor_1.protractor.by.addLocator("ReactSelector", (component, props, state, rootElement) => {
        const resq = "resq";
        rootElement = rootElement || "#root";
        document.execCommand(window[resq].waitToLoadReact(rootElement));
        let elements = window[resq].resq$$(component, document.querySelector(rootElement));
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
            }
            else {
                nodes.push(node);
            }
        });
        return [...nodes];
    });
};
//# sourceMappingURL=index.js.map