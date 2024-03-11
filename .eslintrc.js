module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:i18next/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier", "import", "i18next"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "linebreak-style": ["error", "unix"],
    "prettier/prettier": "error",
    "import/order": ["error", { "newlines-between": "always" }],
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-undef": "off",
    "i18next/no-literal-string": ["error", { markupOnly: true }],
    // indent: ["error", 4], // Indent with 4 spaces
    // "react/jsx-indent": ["error", 4], // Indent JSX with 4 spaces
    // "react/jsx-indent-props": ["error", 4], // Indent props with 4 spaces
  },
};
