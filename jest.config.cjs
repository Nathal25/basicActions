module.exports = {
  testEnvironment: "node",
  testMatch: ["**/students/**/tests/**/*.test.js"],
  collectCoverageFrom: [
    "students/**/src/**/*.js",
    "!**/node_modules/**",
    "!**/coverage/**"
  ],
  collectCoverage: false,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html", "json-summary"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  verbose: true,
  testTimeout: 10000
};