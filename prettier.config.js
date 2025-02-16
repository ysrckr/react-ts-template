// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */

const config = {
  trailingComma: "es5",
  semi: true,
  singleQuote: false,
  printWidth: 120,
  tabWidth: 2,
  jsxSingleQuote: false,
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "lf",
  quoteProps: "as-needed",
  htmlWhitespaceSensitivity: "css",
};

export default config;
