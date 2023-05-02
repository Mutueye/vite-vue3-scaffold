module.exports = {
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-standard-scss', // configure for SCSS
    // 'stylelint-config-recommended-vue', // add overrides for .Vue files
    'stylelint-config-recommended-vue/scss', // add overrides for .Vue files
    'stylelint-config-recess-order', // use the recess order for properties
    'stylelint-config-css-modules', // configure for CSS Modules methodology
    // stylelint v15 nolonger need stylelint-config-prettier
    // 'stylelint-config-prettier', // turn off any rules that conflict with Prettier
  ],
  rules: {
    'rule-empty-line-before': null,
    'comment-empty-line-before': null,
    'color-hex-length': null,
    'custom-property-empty-line-before': null,
    'selector-class-pattern': null,
    'value-keyword-case': null,
    // 'at-rule-no-unknown': [true, { ignoreAtRules: ['apply'] }],
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    // 'function-no-unknown': [true, { ignoreFunctions: ['theme'] }],
    'function-no-unknown': null,
    'scss/function-no-unknown': true,
    'scss/dollar-variable-pattern': null,
    'scss/dollar-variable-empty-line-before': null,
    'scss/selector-no-redundant-nesting-selector': true,
    'declaration-empty-line-before': null,
  },
  ignoreFiles: ['dist/**/*', 'docs/**/*'],
};
