"use strict";

module.exports = {
  root: true,
  extends: [],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },

  ignorePatterns: [
    "!.*",

    "node_modules/",
    "docs/",
    "vendor/",
    "tmp/",

  ],

  rules: {},
  overrides: [],
};
