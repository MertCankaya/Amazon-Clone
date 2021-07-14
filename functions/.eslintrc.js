module.exports = {
  root: true,
  env: {
    es7: true,            //Need to convert es6 to es7
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    quotes: ["error", "double"],
  },
};
