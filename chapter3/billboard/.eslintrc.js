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
  },
  globals: {
  },
};