module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  // extends: 'eslint:recommended',
  extends: ['eslint:recommended','standard', 'react-app', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      useJSXTextNode: true
    },
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'no-console': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    '@typescript-eslint/explicit-function-return-type': 'warn', // Consider using explicit annotations for object literals and function return types even when they can be inferred.
    'no-empty': 'warn',
    'no-underscore-dangle': 0,
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'semi': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'no-var': 2,
    'array-callback-return': ['off', { checkForEach: true }],
    'eqeqeq': ['error', 'always']
  },
}