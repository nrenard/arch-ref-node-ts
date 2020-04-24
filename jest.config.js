// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  // clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  // collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['src/app/**'],

  // The directory where Jest should output its coverage files
  coverageDirectory: '__tests__/coverage',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['/src/app/models'],

  testTimeout: 10000,

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.test.ts', '**/__tests__/**/*.steps.ts'],

  moduleNameMapper: { '^~\\/(.*)$': '<rootDir>/src/$1' },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
