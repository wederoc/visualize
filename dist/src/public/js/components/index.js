/** @jsx h */
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("skatejs-web-components");
const skatejs_1 = require("skatejs");
const styles_1 = __importDefault(require("./styles"));
class SKTags extends skatejs_1.Component {
    renderCallback() {
        return <div>
      <style>{styles_1.default}</style>
      <div class="wrapper">
        <span class="tags"></span>
        <input type="text" autofocus="true" class="input"/>
      </div>
    </div>;
    }
}
SKTags.props = {
    delimiter: skatejs_1.prop.string({ attribute: true, default: ' ' })
};
customElements.define('sk-tags', SKTags);
//# sourceMappingURL=index.js.map