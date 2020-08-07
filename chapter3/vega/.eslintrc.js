module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'script',
  },
  rules: {
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'comma-dangle': ['error', 'never'],
    'no-console': 'error',
    'no-cond-assign': 'off',
    'no-fallthrough': ['error', { commentPattern: 'break omitted' }],
    'semi': 'error',
    'quotes': ['error', 'single', { avoidEscape: true }],
    'sort-imports': ['error', {
      ignoreCase: false,
      ignoreDeclarationSort: true
    }]
  },
  globals: {
  },
};