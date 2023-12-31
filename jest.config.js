module.exports = {
  clearMocks: false,
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
  moduleNameMapper: { "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy" },
  resetMocks: true,
  resetModules: false,
  restoreMocks: false,
  setupFiles: ["./jest.polyfills.ts"],
  setupFilesAfterEnv: ["./src/setupTests.ts"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$":
      "react-scripts/config/jest/babelTransform.js",
    "^.+\\.css$": "react-scripts/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":
      "react-scripts/config/jest/fileTransform.js",
  },
  transformIgnorePatterns: ["node_modules/(?!@bundled-es-modules)/"],
};
