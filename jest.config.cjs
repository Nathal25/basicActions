module.exports = {
  testEnvironment: "node",
  testMatch: ["<rootDir>/students/**/tests/**/*.test.js"],
  collectCoverageFrom: [
    "students/**/src/**/*.js",
    "!**/node_modules/**"
  ],
  collectCoverage: false, // Se activa con --coverage flag
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html", "json-summary"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};