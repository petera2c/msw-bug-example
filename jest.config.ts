// jest.config.js
module.exports = {
  setupFiles: ["./jest.polyfills.js"],
  transformIgnorePatterns: ["node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"],
};
