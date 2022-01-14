module.exports = {
  rootDir: __dirname,
  automock: false,
  unmockedModulePathPatterns: ["<rootDir>/node_modules/*"],
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["js", "node"],
  testMatch: ["<rootDir>/tests/**/*.test.js"],
  testEnvironment: "jsdom",
  collectCoverage: false,
};
