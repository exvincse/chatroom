module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "max-len": [
      "error",
        {
          "code": 300
        }
      ],
    "no-tabs": "off",
    "no-alert": "off",
    "no-plusplus": ['error', { "allowForLoopAfterthoughts": true }],
    "space-unary-ops": [
      2, {
        "words": true,
        "nonwords": false,
        "overrides": {
          "new": false,
          "++": true
        }
    }],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "arrow-body-style": ["error", "as-needed", { "requireReturnForObjectLiteral": true }],
    "prefer-destructuring": ["error", {"object": false, "array": false}]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
