'use strict';

const { recommended } = require('@eslint/js').configs;
const globals = require('globals');
const configPrettier = require('eslint-config-prettier');
const pluginPrettier = require('eslint-plugin-prettier');
const rules = require('./rules');

/** @type {import('eslint').Linter.Config} */
const config = {
  languageOptions: {
    sourceType: 'commonjs',
    globals: globals.node,
  },
  plugins: {
    prettier: pluginPrettier,
  },
  ignores: ['node_modules/'],
  rules: {},
};

Object.assign(config.rules, recommended.rules);
Object.assign(config.rules, configPrettier.rules);

const rulesConfigs = rules();

for (const rulesConfig of rulesConfigs) {
  Object.assign(config.rules, rulesConfig);
}

module.exports = [config];
