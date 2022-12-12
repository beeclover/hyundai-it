module.exports = {
  arrowParens: "avoid",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  printWidth: 80,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  plugins: [
    require("prettier-plugin-twin.macro")
  ]
}