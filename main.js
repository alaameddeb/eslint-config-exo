module.exports = {
  env: {
    "browser": true,
    "es6": true,
    "jest": true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:jest/recommended"
  ],
  globals: {
    "eXo": true,
    "exoi18n": true
  },
  parserOptions: {
    "sourceType": "module",
    "ecmaVersion": 2018
  },
  rules: {
    "block-scoped-var": ["error"],
    "curly": ["error", "all"],
    "eqeqeq": ["error", "always", { "null": "ignore" }],
    "indent": ["error", 2],
    "new-cap": ["error"],
    "new-parens": ["error"],
    "no-alert": ["warn"],
    "no-await-in-loop": ["error"],
    "no-caller": ["error"],
    "no-confusing-arrow": ["error"],
    "no-console": ["warn"],
    "no-empty-function": ["error"],
    "no-eval": ["error"],
    "no-extra-label": ["error"],
    "no-extend-native": ["error"],
    "no-extra-parens": ["error"],
    "no-floating-decimal": ["error"],
    "no-implied-eval": ["error"],
    "no-iterator": ["error"],
    "no-labels": ["error"],
    "no-label-var": ["error"],
    "no-lone-blocks": ["error"],
    "no-loop-func": ["error"],
    "no-magic-numbers": ["error", { "ignore": [-1,0,1], "enforceConst": true }],
    "no-new-require": ["error"],
    "no-path-concat": ["error"],
    "no-process-env": ["error"],
    "no-process-exit": ["error"],
    "no-proto": ["error"],
    "no-self-compare": ["error"],
    "no-sequences": ["error"],
    "no-shadow-restricted-names": ["error"],
    "no-sync": ["error"],
    "no-template-curly-in-string": ["error"],
    "no-throw-literal": ["error"],
    "no-undefined": ["error"],
    "no-unmodified-loop-condition": ["error"],
    "no-unused-expressions": ["error"],
    "no-useless-computed-key": ["error"],
    "no-useless-concat": ["error"],
    "no-var": ["error"],
    "no-with": ["error"],
    "prefer-const": ["error"],
    "prefer-promise-reject-errors": ["error"],
    "prefer-rest-params": ["error"],
    "prefer-spread": ["error"],
    "prefer-template": ["error"],
    "quotes": ["error", "single"],
    "require-await": ["error"],
    "semi": ["error", "always"],
    "valid-jsdoc": ["error"],
    "yoda": ["error", "never", { "exceptRange": true }],
    "vue/html-self-closing": "off",
    "vue/max-attributes-per-line": "off"
  },
  overrides: [
    {
      files: [ "src/test/**/*" ],
      rules: {
        "no-empty-function": "off",
        "no-magic-numbers": "off"
      }
    }
  ]
};
