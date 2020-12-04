module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:@typescript-eslint/recommended"
  ],
  plugins: ["babel", "prettier"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
    jsx: true
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "@typescript-eslint/interface-name-prefix": [
      "error",
      { prefixWithI: "always", allowUnderscorePrefix: true }
    ]
  }
};
