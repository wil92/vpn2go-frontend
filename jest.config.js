module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html', 'lcov'],
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ['./test-setup.ts']
};
