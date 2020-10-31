/** @jsx h */

"use strict";

import 'skatejs-web-components';
import { Component, h, prop } from 'skatejs';
import styles from './styles';

class SKTags extends Component {
  static props = {
    delimiter: prop.string({attribute: true, default: ' '})
  }

  renderCallback() {
    return <div>
      <style>{styles}</style>
      <div class="wrapper">
        <span class="tags"></span>
        <input type="text" autofocus="true" class="input"/>
      </div>
    </div>
  }
}

customElements.define('sk-tags', SKTags);
