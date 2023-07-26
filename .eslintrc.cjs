/* eslint-env node */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ["tsconfig.json"],
  plugins: ["react-refresh", "sort-keys"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/jsx-sort-props": [
      1,
      {
        noSortAlphabetically: false,
      },
    ],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};
