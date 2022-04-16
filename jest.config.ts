/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  modulePathIgnorePatterns: [
    '<rootDir>/.tmp',
    '<rootDir>/examples',
    '<rootDir>/templates',
    '<rootDir>/packages/.+/compiled',
    '<rootDir>/packages/.+/fixtures',
  ],
  testMatch: ['**/*.test.(t|j)s(x)?'],
  transform: {
    '^.+\\.tsx?$': require.resolve('esbuild-jest'),
  },
  testTimeout: 30000,
};

export default config;
