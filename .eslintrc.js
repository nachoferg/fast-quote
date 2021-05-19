module.exports = {
  settings: {},
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb-typescript",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: "./tsconfig.eslint.json",
  },
  plugins: [],
  rules: {
    "react/jsx-props-no-spreading": "off",
  },
};
