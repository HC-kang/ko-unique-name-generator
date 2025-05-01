/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.ts$': ['ts-jest', { useESM: true }]
  },
  testMatch: ['**/*.spec.ts'],
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: { // This is needed to handle the .js imports in the test files
    '^\\./adjectives\\.js$': '<rootDir>/src/adjectives.ts',
    '^\\./animals\\.js$': '<rootDir>/src/animals.ts',
  },
};
